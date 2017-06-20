import * as fs from 'fs-extra';
import * as Path from 'path';
import * as gulp from 'gulp';
import * as jsonfile from 'jsonfile';

import * as util from '../util';

const INTERNAL_PKGJSON_KEYS = [
  'libConfig',
  'libExtensions'
];

const PKGJSON_KEYS_TO_DELETE = [
  'scripts',
  'devDependencies'
].concat(INTERNAL_PKGJSON_KEYS);

gulp.task('!manifest', function () {
  const meta = util.currentPackage();
  const copyInst = util.getCopyInstruction(meta);

  const pkgDest = Path.join(copyInst.to, 'package.json');
  const pkgJson = jsonfile.readFileSync(util.root('package.json'));

  const localPackageJsonPath = util.root(util.FS_REF.SRC_CONTAINER, meta.dir, 'package.json');
  if (fs.existsSync(localPackageJsonPath)) {
    Object.assign(
      pkgJson,
      jsonfile.readFileSync(localPackageJsonPath)
    )
  }

  PKGJSON_KEYS_TO_DELETE.forEach( k => { delete pkgJson[k] });

  pkgJson.name = meta.dir;
  pkgJson.main = `${util.FS_REF.BUNDLE_DIR}/${meta.umd}.rollup.umd.js`;
  pkgJson.module = `${util.FS_REF.BUNDLE_DIR}/${meta.umd}.es5.js`;
  pkgJson.es2015 = `${util.FS_REF.BUNDLE_DIR}/${meta.umd}.js`;
  pkgJson.typings = `${util.FS_REF.SRC_CONTAINER}/${util.getMainOutputFileName(meta)}.d.ts`;

  util.tryRunHook(meta.dir, 'packageJSON', pkgJson);

  jsonfile.writeFileSync(pkgDest, pkgJson, {spaces: 2});
});