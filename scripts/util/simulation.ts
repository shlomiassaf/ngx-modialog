import * as Path from 'path';
import * as del from 'del';
import * as tsConfigLoader from 'tsconfig';
import { CompilerOptions, MapLike } from 'typescript';
import { Configuration, NewModule, NewResolve, Rule, Plugin } from 'webpack';
import { NgcWebpackPlugin } from 'ngc-webpack';

import { root, FS_REF, jsonPatch } from './fs';
import { tsConfigPaths, tsConfigPathsForSimulation } from './config';

function findLoader(rule: any, name: string): any {
  if (!rule || rule.loader === name) {
    return rule;
  }

  let result: Rule;

  if (Array.isArray(rule)) {
    for (let i = 0, len = rule.length; i < len; i++) {
      result = findLoader(rule[i], name);
      if (result) {
        break;
      }
    }
  } else {
    if (rule.loaders || rule.use) {
      result = findLoader(rule.loaders || rule.use, name);
    }

    if (!result && rule.rules) {
      result = findLoader(rule.rules, name);
    }
  }

  return result;
}

function findPlugin<T>(plugins: Plugin[], type: new(...args: any[]) => T): T | undefined {
  return <any>plugins.find( p => p instanceof NgcWebpackPlugin);
}

function assignNonLibPaths(tsConfigPath: string, paths: MapLike<string[]>): void {
  const oldPaths = tsConfigLoader.loadSync(tsConfigPath).config.compilerOptions.paths;
  const automatedPaths = tsConfigPaths();
  Object.keys(oldPaths)
    .filter( k => !automatedPaths.hasOwnProperty(k) )
    .forEach( k => paths[k] = oldPaths[k] );
}

/**
 * Alter webpack and typescript configurations (tsconfig) so the compilation process will reference
 * the built (compiled) libraries and not the source code of them.
 * @param webpackConfig
 * @param isProd
 */
export function applySimulation(webpackConfig: Configuration, isProd: boolean): void {
  /*
    First, lets teach webpack to resolve the libraries from the package dist folder.
    we also delete the aliases.
    This should fix webpack dev mode.
   */
  (webpackConfig.resolve as NewResolve).modules.unshift(root(FS_REF.PKG_DIST));
  webpackConfig.resolve.alias = { };

  /*
     Now we need to make sure the type-checker will load types from the compiled package (d.ts)
     and not the source directory.

     We create a 'paths' property referencing the package dist folder and set these paths to the
     paths property of "awesome-typescript-loader", this will override any paths in the loaded tsconfig.

   */
  const paths = tsConfigPathsForSimulation();

  /*
     The only issue is that the old paths might contain some custom user defined paths that we need to
     include, these are paths set via build_hooks scripts and are not related to a library.
     We need to filter out these custom paths, and only them.
     We find the awesome-typescript-loader configuration object, extract the tsconfig location and
     and filter the relevant paths and assign them.

     Once done we set the new "paths" awesome-typescript-loader configuration, they will override
     any existing "paths" property.
  */
  const atlLoader = findLoader((webpackConfig.module as NewModule).rules, 'awesome-typescript-loader');
  const tsConfigPath = root(atlLoader.options.configFileName || 'tsconfig.json');
  assignNonLibPaths(tsConfigPath, paths);
  atlLoader.options.paths = paths;



  if (isProd) {
    /*
        For production builds there is an additional factor, we need to deal with the AOT compiler.
        Since AOT compilation runs in different process BEFORE webpack starts bundling we need to
        make sure that the AOT compiler uses the right "tsconfig" settings, which is the right "paths".

        Since it's a different process we need to create a temporary "tsconfig" file based on the original
        file used by ATL. We need a temp file since unlike ATL, ngc-webpack does not accept CompilerOptions
        properties that override those in the file so we need to create an actual file.
     */

    // CODE ASSUMES SAME "tsconfig" file for ATL and NgcWebpackPlugin config.
    const ngcWebpackPluginInstance = findPlugin(webpackConfig.plugins, NgcWebpackPlugin);
    const simulatorTsConfigPath = Path.join(Path.dirname(tsConfigPath), '.tsconfig.webpack.sim.json');

    /*
        Create a new "tsconfig" json file, extending the original one used by ATL but with
        different paths, we use the same paths we created in the first phase.
     */
    jsonPatch<{ extends: string, compilerOptions: CompilerOptions }>(tsConfigPath)
      .update( tsConfig => {
        tsConfig.extends = `./${Path.basename(tsConfigPath, '.json')}`;
        tsConfig.compilerOptions.paths = paths;
      })
      .save(simulatorTsConfigPath);


    /*
        Replacing the original NgcWebpackPlugin instance with a new instance pointing at our
        temporary "tsconfig".
        The new configuration will also delete the temporary "tsconfig" once AOT compiler is done.
     */
    webpackConfig.plugins
      .splice(
        webpackConfig.plugins.indexOf(ngcWebpackPluginInstance),
        1,
        new NgcWebpackPlugin(Object.assign({}, ngcWebpackPluginInstance.options, {
          tsConfig: simulatorTsConfigPath,
          onCompilationSuccess: () => del.sync(simulatorTsConfigPath),
          onCompilationError: () => del.sync(simulatorTsConfigPath)
        }))
      );
  }
}