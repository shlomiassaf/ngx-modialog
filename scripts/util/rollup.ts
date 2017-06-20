// mostly taken from https://github.com/angular/material2/blob/master/tools/gulp/packaging/rollup-helpers.ts
import * as rollup from 'rollup';
import * as resolve from 'rollup-plugin-node-resolve';

export type BundleConfig = {
  entry: string;
  dest: string;
  format: string;
  moduleName: string;
  external?: string[];
  globals?: { [key: string]: string };
};

/** Creates a rollup bundle of a specified JavaScript file.*/
export function createRollupBundle(config: BundleConfig): Promise<any> {
  const bundleOptions: any = {
    context: 'this',
    external: config.external,
    entry: config.entry,
  };

  const writeOptions = {
    // Keep the moduleId empty because we don't want to force developers to a specific moduleId.
    moduleId: '',
    moduleName: config.moduleName,
    // banner: buildConfig.licenseBanner,
    format: config.format,
    dest: config.dest,
    globals: config.globals,
    sourceMap: true
  };

  // When creating a UMD, we want to exclude tslib from the `external` bundle option so that it
  // is inlined into the bundle.
  if (config.format === 'umd') {
    bundleOptions.plugins = [resolve()];

    if (bundleOptions.external && bundleOptions.external.indexOf('tslib') > -1) {
      bundleOptions.external.splice(bundleOptions.external.indexOf('tslib'), 1);
    }
  }

  return rollup.rollup(bundleOptions).then((bundle: any) => bundle.write(writeOptions));
}