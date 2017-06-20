import * as fs from 'fs-extra';
import * as Path from 'path';
import * as voca from 'voca';
import * as jsonfile from 'jsonfile';


const uglify = require('uglify-js');
const zlib = require('zlib');
const deepcopy = require('deepcopy');

import { root, FS_REF } from './fs';
import { PackageMetadata, LocalLibConfig } from './types';
import { libConfig, currentPackage } from './state';
import { normalizeLibExtension } from './config';

export function log(msg: string): void {
  process.stdout.write(msg + '\n');
}

/**
 * Returns the package name.
 * If scope exists, it will be added.
 *
 * This can also be used as a partial path from the src root.
 * @param name optional, if not set, the current dirName property from CURRENT_PACKAGE is taken
 * @return {string}
 */
export function getPackageName(name?: string) {
  if (!name) {
    if (!currentPackage()) {
      throw new Error('Invalid operation, name not supplied and CURRENT_PACKAGE is not set.');
    }
    name = currentPackage().dirName;
  }

  // if (libConfig.packages.indexOf(name) === -1) {
  //   throw new Error(`Invalid name: ${name} is not part of "libConfig.packages" in package.json`);
  // }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';
  return scope + name;
}

export function getPackageRoot(dirName: string, ...args: string[]): string {
  return root(FS_REF.SRC_CONTAINER, getPackageName(dirName), ...args);
}

/**
 * Returns the local (partial) package.json object of a package.
 * @param dirName
 * @return {any}
 */
export function getLocalPackageJSON(dirName: string): { [index: string]: any } & { libConfig: LocalLibConfig } {
  return jsonfile.readFileSync(root(FS_REF.SRC_CONTAINER, getPackageName(dirName), 'package.json'));
}



export function saveTempTsConfig(meta: PackageMetadata): void {
  jsonfile.writeFileSync(root(FS_REF.TS_CONFIG_TMP), meta.tsConfigObj, {spaces: 2});
}

export function resolveWebpackConfig(config: string | any, ...args: any[]): any {
  if(typeof config === 'string') {
    return resolveWebpackConfig(require(config), ...args);
  } else if (typeof config === 'function') {
    return config(...args);
  } else if (config.__esModule === true && !!config.default) {
    return resolveWebpackConfig(config.default, ...args);
  } else {
    return config;
  }
}



/**
 * Minify and gzip a umd bundle.
 *
 * The output files will sit along side the umd bundle.
 *
 * NOTE: this is a sync operation.
 *
 * @param destDir the destination directory
 * @param umd the umd name (from metadata, not the while filename) of the bundle
 */
export function minifyAndGzip(destDir: string, srcNameNoExt: string) {
  const unminified = fs.readFileSync(Path.join(destDir, `${srcNameNoExt}.js`)).toString();
  const minified = uglify.minify(unminified);
  const gzipBuffer = zlib.gzipSync(Buffer.from(minified.code));

  fs.writeFileSync(Path.join(destDir, `${srcNameNoExt}.min.js`), minified.code, 'utf-8');
  const zipStream = fs.createWriteStream(Path.join(destDir, `${srcNameNoExt}.js.gz`));
  zipStream.write(gzipBuffer);
  zipStream.end();

  const pct = num => 100 * Math.round(10000 * (1-num)) / 10000;

  console.log(`
          --------------------------------------
          UMD Bundle info: ${srcNameNoExt}
          --------------------------------------
          unminified: \t${unminified.length / 1000} KB
          minified: \t${minified.code.length / 1000} KB \t(${pct(minified.code.length / unminified.length)} %)
          gzipped: \t${gzipBuffer.length / 1000} KB \t(${pct(gzipBuffer.length / unminified.length)}) %, ${pct(gzipBuffer.length / minified.code.length)} %)
          --------------------------------------
        `);
}



export function getModuleName(dirName: string): string {
  const scope = libConfig.scope ? `${libConfig.scope}/` : '';
  return (scope ? scope.substr(1, scope.length - 2) + '.' : '') + voca.camelCase(dirName);
}



/**
 * Returns an alias list for webpack's configuration resolve property based on a packages list.
 * If no list supplied the whole list from package.json is used.
 * @param packages
 */
export function webpackAlias(...packages: string[]): { [id: string]: string } {
  if (packages.length === 0) {
    packages = libConfig.packages;
  }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';

  return packages.reduce((curr, pkg) => {
    const pkgJson = getLocalPackageJSON(pkg);
    const entry = pkgJson.libConfig && pkgJson.libConfig.entry || 'index';
    curr[scope + pkg + '$'] = `${scope + pkg}/src/${entry}.ts`;

    if (pkgJson.libConfig && Array.isArray(pkgJson.libConfig.libExtensions)) {
      pkgJson.libConfig.libExtensions.forEach( ext => {
        normalizeLibExtension(ext);
        // TODO: remove object 'ext', only string... move everything to local package.json of extension
        curr[`${scope + pkg}/${ext.dir}$`] = `${scope + pkg}/${ext.dir}/src/${ext.entry}`;
      });
    }

    return curr;
  }, {})
}


export function jestAlias(...packages: string[]): { [id: string]: string } {
  if (packages.length === 0) {
    packages = libConfig.packages;
  }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';

  return packages.reduce((curr, pkg) => {
    const pkgJson = getLocalPackageJSON(pkg);
    const entry = pkgJson.libConfig && pkgJson.libConfig.entry || 'index';
    curr[`^${scope + pkg}$`] = `<rootDir>/src/${scope + pkg}/src/${entry}.ts`;
    curr[`^${scope + pkg}/src/(.*)`] = `<rootDir>/src/${scope + pkg}/src/$1`;

    if (pkgJson.libConfig && Array.isArray(pkgJson.libConfig.libExtensions)) {
      pkgJson.libConfig.libExtensions.forEach( ext => {
        normalizeLibExtension(ext);
        // TODO: remove object 'ext', only string... move everything to local package.json of extension
        curr[`^${scope + pkg}/${ext.dir}$`] = `<rootDir>/src/${scope + pkg}/${ext.dir}/src/${ext.entry}`;
        curr[`^${scope + pkg}/${ext.dir}/src/(.*)`] = `<rootDir>/src/${scope + pkg}/${ext.dir}/src/$1`;
      });
    }

    return curr;
  }, {})
}

export type Promisify<T> = { promise: Promise<T>; resolve: (value?: T) => void; reject: (err: any) => void };

export function promisify<T>(): Promisify<T> {
  let resolve, reject;
  const promise = new Promise( (rs, rj) => { resolve = rs; reject = rj; });
  return <any>{ promise, resolve, reject };
}