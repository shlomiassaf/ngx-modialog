import {
  root,
  FS_REF
} from './fs';

export type HOOKS = 'rollupUMD' | 'rollupFESM' | 'packageJSON' | 'tsconfig' | 'jestConfig' | 'done';
const constraints: { [hook: string]: 'global' | 'local'} = {
  'jestConfig': 'global'
};

export function tryRunHook(pkgDir: string,
                           hookName: HOOKS,
                           ...args: any[]): void {

  if (!constraints[hookName] || constraints[hookName] === 'global') {
    try {
      const moduleId = require.resolve(root('build_hooks'));
      const module = require(moduleId);
      if (typeof module[hookName] === 'function') {
        module[hookName](...args);
      }
    } catch (err) { }
  }


  if (!constraints[hookName] || constraints[hookName] === 'local') {
    try {
      const moduleId = require.resolve(root(FS_REF.SRC_CONTAINER, pkgDir, 'build_hooks'));
      const module = require(moduleId);
      if (typeof module[hookName] === 'function') {
        module[hookName](...args);
      }
    } catch (err) { }

  }
}
