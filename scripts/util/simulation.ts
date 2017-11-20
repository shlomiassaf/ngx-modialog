import * as Path from 'path';
import * as tsConfigLoader from 'tsconfig';
import { CompilerOptions, MapLike } from 'typescript';
import { Configuration, NewModule, NewResolve, Rule, Plugin } from 'webpack';
import { NgcWebpackPlugin } from 'ngc-webpack';

import { root, FS_REF, jsonPatch, cleanOnNext } from './fs';
import { tsConfigPaths, tsConfigPathsForSimulation } from './config';
import { webpackAlias } from './util';

function findPluginIndex<T>(plugins: Plugin[], type: new(...args: any[]) => T): number {
  return <any>plugins.findIndex( p => p instanceof type);
}

function assignNonLibPaths(oldPaths: MapLike<string[]>, paths: MapLike<string[]>): void {
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
  Object.keys(webpackAlias()).forEach( k => {
    delete webpackConfig.resolve.alias[k];
  });

  /*
     Now we need to make sure the type-checker will load types from the compiled package (d.ts)
     and not the source directory.

     We create a 'paths' property referencing the package dist folder and set these paths to the
     paths property of "awesome-typescript-loader", this will override any paths in the loaded tsconfig.

   */
  const paths = tsConfigPathsForSimulation();


  const ngcWebpackPluginIdx = findPluginIndex(webpackConfig.plugins, NgcWebpackPlugin);
  const ngcWebpackPlugin: NgcWebpackPlugin = <any> webpackConfig.plugins[ngcWebpackPluginIdx];
  const compilerOptions = tsConfigLoader.loadSync(ngcWebpackPlugin.tsConfigPath).config.compilerOptions;
  const simulatorTsConfigPath = Path.join(Path.dirname(ngcWebpackPlugin.tsConfigPath), '.tsconfig.webpack.sim.json');

  /*
   The only issue is that the old paths might contain some custom user defined paths that we need to
   include, these are paths set via build_hooks scripts and are not related to a library.
   We need to filter out these custom paths, and only them.
   We find the plugin, extract the tsconfig location and
   and filter the relevant paths and assign them.

   Once done we set the new "paths" and create a new plugin instance, they will override
   any existing "paths" property.
*/
  assignNonLibPaths(compilerOptions.paths, paths);

  /*
    Create a new "tsconfig" json file, extending the original one used by ATL but with
    different paths, we use the same paths we created in the first phase.
 */
  jsonPatch<{ extends: string, compilerOptions: CompilerOptions }>(ngcWebpackPlugin.tsConfigPath)
    .update( tsConfig => {
      tsConfig.extends = `./${Path.basename(ngcWebpackPlugin.tsConfigPath, '.json')}`;
      tsConfig.compilerOptions.paths = paths;
    })
    .save(simulatorTsConfigPath);

  const plugin = NgcWebpackPlugin.clone(ngcWebpackPlugin, {
    options: {
      tsConfigPath: simulatorTsConfigPath
    }
  });
  webpackConfig.plugins.splice(ngcWebpackPluginIdx, 1, plugin);

  cleanOnNext(simulatorTsConfigPath);

}
