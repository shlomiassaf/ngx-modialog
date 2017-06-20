import * as fs from 'fs-extra';
import { execSync as spawn } from 'child_process';

import { CommitVersion } from './types';
import { root, FS_REF } from './fs';
import { libConfig } from './state';

import { getPackageRoot } from './util';



export function getLastCommit(dirName: string): string {
  // we check the internal 'src' since other changes (e.g. test folder) does not effect version.
  return spawn(`git log -n 1 --pretty=format:%H ${getPackageRoot(dirName, FS_REF.SRC_CONTAINER)}`).toString();
}

export function createLibVersionMap(): { [pkgName: string]: CommitVersion } {
  return libConfig.packages
    .reduce( (versionCache, dirName) => {
      const version = fs.readJsonSync(getPackageRoot(dirName, 'package.json')).version;
      versionCache[dirName] = {
        commit: getLastCommit(dirName),
        version
      };
      return versionCache;
    }, {});
}

export function detectVersionBump(): { [pkgName: string]: CommitVersion } {
  const currState = createLibVersionMap();

  try {
    const lastKnownState = fs.readJsonSync(root(FS_REF.VERSION_CACHE));

    Object.keys(currState).forEach( pkg => {
      const last = lastKnownState[pkg];
      if (last) {
        const curr = currState[pkg];
        if (last.commit === curr.commit && last.version === curr.version) {
          delete currState[pkg];
        }
      }
    });

  } catch (err) { }


  return currState;
}

export function commitVersionBump(): void {
  fs.writeJsonSync(root(FS_REF.VERSION_CACHE), createLibVersionMap());
}
