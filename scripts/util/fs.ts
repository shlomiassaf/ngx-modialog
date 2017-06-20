import * as Path from 'path';
import * as del from 'del';
import * as jsonfile from 'jsonfile';

export const ROOT = Path.resolve(__dirname, '../..');

export function root(...args: string[]): string {
  return Path.join(ROOT, ...args);
}

export const FS_REF = {
  PKG_DIST: 'dist_package',
  BUNDLE_DIR: 'bundle',
  NG_COMPILE: 'compiled',
  WEBPACK_CONFIG: 'config/webpack.package.ts',
  TS_CONFIG_TEMPLATE: 'tsconfig.package.json',
  TS_CONFIG_TMP: '.tsconfig.tmp.json',
  SRC_CONTAINER: 'src',
  NG_FLAT_MODULE_EXT: '.ng-flat',
  TEMP_DIR: '.tmp',
  VERSION_CACHE: 'version_cache.json'
};

export function cleanup(): Promise<string[]> {
  return del([root(FS_REF.TEMP_DIR), root(FS_REF.TS_CONFIG_TMP)]);
}

/**
 * Loads a json, updates via handler, and saves.
 * A mix of fluent and curry API.
 *
 * The handler sent to 'update' must returns an object to be used to save.
 * If the returned value is undefined the original object is used, if its null save is aborted.
 * @param readPath
 * @return {any}
 */
export function jsonPatch<T>(readPath: string): { update: (handler: (data: T) => (T | null | void)) => { save: (savePath: string) => void } } {
  return {
    update(handler: (data: T) => T): any {
      const tsconfig = jsonfile.readFileSync(readPath);
      const data = handler(tsconfig);
      return {
        save(savePath: string): void {
          if (data !== null) {
            jsonfile.writeFileSync(savePath, data || tsconfig, {spaces: 2});
          }
        }
      };
    }
  };
}