import * as Path from 'path';
import * as voca from 'voca';
import * as jsonfile from 'jsonfile';

const deepcopy = require('deepcopy');

import { PackageMetadata, LibraryExtension } from './types';
import { root, FS_REF } from './fs';
import { PKG_METADATA_CACHE, libConfig } from './state';
import { tryRunHook } from './hooks';
import { getLocalPackageJSON, getPackageName, getModuleName } from './util';

export function buildPackageMetadata(dirName: string): PackageMetadata {
  if (PKG_METADATA_CACHE[dirName]) {
    return PKG_METADATA_CACHE[dirName];
  }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';
  const pkgJson = getLocalPackageJSON(dirName);

  const externals = getExternalsRaw(pkgJson);

  const meta: PackageMetadata = {
    name: titleCamelCase(dirName),
    dirName,
    dir: scope + dirName,
    umd: dirName,
    externals,
    entry: pkgJson.libConfig && pkgJson.libConfig.entry || 'index',
    inlineResources: (pkgJson.libConfig && pkgJson.libConfig.inlineResources) || false,
    externalsWebpack: [/^\@angular\//].concat(getExternalsWebpack(getPackageName(dirName), ...getExternalsRaw(pkgJson))),
    tsConfig: `./${FS_REF.TS_CONFIG_TMP}`,
    tsConfigObj: undefined,
    moduleName: getModuleName(dirName)
  };

  if (pkgJson.libConfig && Array.isArray(pkgJson.libConfig.libExtensions)) {
    meta.libExtensions = pkgJson.libConfig.libExtensions;
  }

  const tsConfig = tsConfigUpdate(jsonfile.readFileSync(root(FS_REF.TS_CONFIG_TEMPLATE)), meta);
  tryRunHook(meta.dir, 'tsconfig', tsConfig);
  meta.tsConfigObj = tsConfig;

  normalizeTsConfig(meta);

  return PKG_METADATA_CACHE[dirName] = meta;
}

export function buildExtensionMetadata(pkg: PackageMetadata): Array<PackageMetadata> {
  return pkg.libExtensions.map( ext => {
    normalizeLibExtension(ext);

    const meta: PackageMetadata = deepcopy(pkg);

    meta.parent = pkg;
    meta.extension = ext;

    meta.name = meta.name + titleCamelCase(ext.name);
    meta.umd = meta.umd + '-' + ext.name;
    meta.dirName = ext.name;
    meta.dir = meta.dir + '/' + ext.dir;
    meta.moduleName = meta.moduleName + '.' + voca.camelCase(ext.name);

    meta.externals.push(meta.parent.dir);
    meta.externalsWebpack.push(getExternalsWebpack(meta.dir)[0]);


    // TODO: remove object 'ext', only string... move everything to local package.json of extension
    meta.entry = ext.entry;
    if (meta.entry.indexOf('.') > -1) {
      meta.entry = meta.entry.substr(0, meta.entry.lastIndexOf('.'));
    }

    tsConfigUpdate(meta.tsConfigObj, meta);
    tryRunHook(meta.dir, 'tsconfig', meta.tsConfigObj);

    normalizeTsConfig(meta);

    meta.libExtensions = undefined;

    return meta;
  });
}

/**
 * Normalize settings after hooks, based on config
 * @param meta
 */
function normalizeTsConfig(meta: PackageMetadata): void {
  if (meta.inlineResources) {
    meta.tsConfigObj.angularCompilerOptions.skipTemplateCodegen = false;
    meta.tsConfigObj.angularCompilerOptions.genDir = `${FS_REF.TEMP_DIR}/.compiled`;
  } else {
    meta.tsConfigObj.angularCompilerOptions.skipTemplateCodegen = true;
  }
}

/**
 * Returns an array of external dependencies based on package.json dependencies and peerDependencies
 * @param packageJson
 * @return {string[]}
 */
function getExternalsRaw(packageJson): string[] {
  const deps = Object.assign({}, packageJson.dependencies || {}, packageJson.peerDependencies || {});
  return Object.keys(deps)
}

/**
 * Returns a regex array of externals (for use with webpack externals
 * @param packageJson
 * @return {any}
 */
function getExternalsWebpack(...packageNames: string[]): RegExp[] {
  return packageNames
    .reduce( (arr, name) => {
      arr.push(new RegExp('^' + name.replace(`\\`, '\/')));
      return arr;
    }, []);
}

function titleCamelCase(value) {
  return value[0].toUpperCase() + voca.camelCase(value).substr(1);
}

export function tsConfigUpdate<T extends any>(config: T, meta: PackageMetadata): T {

  if (!meta.parent) { // we leave as is for extensions...
    if (!config.compilerOptions.outDir.endsWith('/')) {
      config.compilerOptions.outDir +=  '/';
    }

    config.compilerOptions.outDir += FS_REF.TEMP_DIR;

    if (libConfig.scope) {
      config.compilerOptions.outDir += `/${libConfig.scope}`;
    }

  }

  const scope = libConfig.scope ? `/${libConfig.scope}` : '';
  config.compilerOptions.rootDir = './src' + scope;

  // TODO: check why this go outside of folder
  config.files = [`./src/${meta.dir}/${FS_REF.SRC_CONTAINER}/${meta.entry}.ts`];

  config.angularCompilerOptions = {
    annotateForClosureCompiler: true,
    strictMetadataEmit: true,
    skipTemplateCodegen: true, // redundant, this value is controlled by "inlineResources"
    flatModuleOutFile: `${meta.umd}${FS_REF.NG_FLAT_MODULE_EXT}.js`,
    flatModuleId: meta.dir // needs to be the dir name, if has scope add it as well.
  };

  config.compilerOptions.baseUrl = `./${FS_REF.SRC_CONTAINER}`;
  config.compilerOptions.paths = tsConfigPaths();

  return config;
}

/**
 * Returns the name (without extension) of the output file.
 * This will be the (umd + flat module suffix) or 'index' if none set.
 * @param meta
 * @return {string}
 */
export function getMainOutputFileName(meta: PackageMetadata): string {
  return meta.tsConfigObj.angularCompilerOptions.flatModuleOutFile
    ? `${meta.umd}${FS_REF.NG_FLAT_MODULE_EXT}`
    : meta.entry
    ;
}

/**
 * Giving the output directory from a tsconfig, returns the source and destination to move the output (from/to)
 * @param outDir
 * @param meta
 * @return {{from: string, to: string}}
 */
export function getCopyInstruction(meta: PackageMetadata): { from: string; to: string, toSrc: string, toBundle: string } {
  const from = getOutDir(meta, true);
  const to = root(FS_REF.PKG_DIST, meta.dir);
  const toSrc = root(FS_REF.PKG_DIST, meta.dir, FS_REF.SRC_CONTAINER);

  // const toBundle = meta.parent
  //   ? Path.join(getCopyInstruction(meta.parent).to, FS_REF.BUNDLE_DIR)
  //   : Path.join(to, FS_REF.BUNDLE_DIR)
  // ;

  const toBundle = Path.join(to, FS_REF.BUNDLE_DIR);

  return { from, to, toSrc, toBundle };
}

/**
 * Returns an alias list for tsConfig's configuration path property based on a packages list.
 * If no list supplied the whole list from package.json is used.
 * @param packages
 */
export function tsConfigPaths(...packages: string[]): { [id: string]: string } {
  if (packages.length === 0) {
    packages = libConfig.packages;
  }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';

  return packages.reduce((curr, pkg) => {
    const pkgJson = getLocalPackageJSON(pkg);
    const entry = pkgJson.libConfig && pkgJson.libConfig.entry || 'index';

    curr[scope + pkg] = [`${scope + pkg}/src/${entry}.ts`];      // main package export

    if (pkgJson.libConfig && Array.isArray(pkgJson.libConfig.libExtensions)) {
      pkgJson.libConfig.libExtensions.forEach( ext => {
        normalizeLibExtension(ext);
        // TODO: remove object 'ext', only string... move everything to local package.json of extension
        curr[`${scope + pkg}/${ext.dir}`] = [`${scope + pkg}/${ext.dir}/src/${ext.entry}`];
        curr[`${scope + pkg}/${ext.dir}/src/*`] = [`${scope + pkg}/${ext.dir}/src/*`];
      });
    }

    curr[`${scope + pkg}/src/*`] = [`${scope + pkg}/src/*`];  // for internal use

    return curr;
  }, {});
}

/**
 * Returns an alias list for tsConfig's configuration path property based on a packages list.
 * If no list supplied the whole list from package.json is used.
 * @param packages
 */
export function tsConfigPathsForSimulation(...packages: string[]): { [id: string]: string[] } {
  if (packages.length === 0) {
    packages = libConfig.packages;
  }

  const scope = libConfig.scope ? `${libConfig.scope}/` : '';

  return packages.reduce((curr, pkg) => {
    const pkgJson = getLocalPackageJSON(pkg);
    const entry = pkgJson.libConfig && pkgJson.libConfig.entry || 'index';

    // "paths" are relative to baseUrl so we ..
    curr[scope + pkg] = [`../${FS_REF.PKG_DIST}/${scope + pkg}`];

    if (pkgJson.libConfig && Array.isArray(pkgJson.libConfig.libExtensions)) {
      pkgJson.libConfig.libExtensions.forEach( ext => {
        normalizeLibExtension(ext);
        // TODO: remove object 'ext', only string... move everything to local package.json of extension
        curr[`${scope + pkg}/${ext.dir}`] = [`../${FS_REF.PKG_DIST}/${scope + pkg}/${ext.dir}`];
      });
    }

    return curr;
  }, {});
}


/**
 * Returns the output directory path TS will emit to.
 * @param meta
 * @param srcContainer when true return the 'src' directory inside the output directory, otherwise the root output directory
 * @param args additional directories / file to add to the path.
 * @return {string}
 */
export function getOutDir(meta: PackageMetadata, srcContainer: boolean, ...args: string[]): string {
  /*
   On flat structured projects:
   - The dirname is part of the output path set in tsconfig
   - The src container is the root output

   */
  if (meta.parent) {
    const parentPath = getOutDir(meta.parent, false);
    return Path.join(parentPath, meta.extension.dir, srcContainer ? FS_REF.SRC_CONTAINER : '', ...args);
  } else {
    return root(meta.tsConfigObj.compilerOptions.outDir, meta.dirName, srcContainer ? FS_REF.SRC_CONTAINER : '', ...args);
  }
}


export function normalizeLibExtension(ext: LibraryExtension): void {
  if (!ext.dir) {
    ext.dir = ext.name;
  }

  if (!ext.entry) {
    ext.entry = 'index.ts';
  }

  ext.dir = ext.dir.replace(/\/+$/, '').replace(/^\/+/, '');
}