import * as fs from 'fs-extra';
import * as Path from 'path';
import { execSync as spawn } from 'child_process';
import * as webpack from 'webpack';
import * as jsonfile from 'jsonfile';
import { ScriptTarget, ModuleKind } from 'typescript';

import * as util from '../util';

const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const sorcery = require('sorcery');
const convert = require('convert-source-map');

@util.GulpClass.Gulpclass()
export class Gulpfile {

  @util.GulpClass.Task('!build:webpack')
  buildWebpack() {
    const config = util.resolveWebpackConfig(util.root(util.FS_REF.WEBPACK_CONFIG), util.currentPackage());

    /* There are 2 webpack processes running one after the other.
        - 1st webpack pass: es2015 output
        - 2nd webpack pass: es5 output.

        In theory we should use only 1 pass (es2015) and bundle it to an ES2015 bundle.
        We then take that bundle and use TS to down grade it to a ES5 bundle.

        This works great except for source maps.
        When trying to use 'sorcery' to map the code it throws due to memory allocation (probably some kind of recursion)

        If we remove set  'sourceMap: false' & 'inlineSources: false' when doing the down grade
        the output source map is miss aligned (it refers to the ES2015 map)

        see task "build:fesm:es5" (and the commented code) for more details.1
     */


    return new Promise( (resolve, reject) => webpack(config).run((err, stats) => err ? reject(err) : resolve(stats)) )
      .then( () => {
        const p = util.root(util.currentPackage().tsConfigObj.compilerOptions.outDir);
        spawn(`rm -rf ${p}`);

        const tsConfig = jsonfile.readFileSync(util.root(util.FS_REF.TS_CONFIG_TMP));
        tsConfig.compilerOptions.target = 'es5';
        jsonfile.writeFileSync(util.root(util.FS_REF.TS_CONFIG_TMP), tsConfig, {spaces: 2});

        return new Promise( (resolve, reject) => webpack(config).run((err, stats) => err ? reject(err) : resolve(stats)) );
      })
      .then( () => {
        const p = util.root(util.currentPackage().tsConfigObj.compilerOptions.outDir);
        const copyInst = util.getCopyInstruction(util.currentPackage());

        if (util.currentPackage().inlineResources) {
          util.inlinePackageMetadataFiles(copyInst.from);
          util.inlineResourcesForDirectory(copyInst.from, true);
        }


        spawn(`mv ${copyInst.from} ${copyInst.toSrc}`);
        spawn(`rm -rf ${p}`);


        /*
         Angular compiler with 'flatModuleOutFile' turned on creates an entry JS file with a matching d.ts
         file and an aggregated metadata.json file.

         This is done by creating a corresponding TS file (to the output JS file).
         The side-effect is a source map reference to the TS file.

         Since the TS is virtual and does not exists we need to remove the comment so the source maps
         will not break.
         */
        const flatModuleJsPath = Path.join(copyInst.toSrc, `${util.getMainOutputFileName(util.currentPackage())}.js`);
        const withoutComments = convert.removeComments(fs.readFileSync(flatModuleJsPath, 'utf-8'));
        fs.writeFileSync(flatModuleJsPath, withoutComments, 'utf-8');
      });
  }

  @util.GulpClass.Task('!build:rollup:fesm')
  buildRollupFesm() {
    const meta = util.currentPackage();
    const copyInst = util.getCopyInstruction(meta);

    const rollupConfig: any = {
      external: meta.externals,
      moduleName: meta.moduleName
    };

    util.tryRunHook(meta.dir, 'rollupFESM', rollupConfig);

    return util.createRollupBundle({
      moduleName: rollupConfig.moduleName,
      entry: `${copyInst.toSrc}/${util.getMainOutputFileName(meta)}.js`,
      dest: Path.join(copyInst.toBundle, `${meta.umd}.js`),
      format: 'es',
      external: rollupConfig.external,
      globals: rollupConfig.globals
    }).then( () => sorcery.load(Path.join(copyInst.toBundle, `${meta.umd}.js`)).then( chain => chain.write() ));
  }

  @util.GulpClass.Task('!build:fesm:es5')
  buildFesmEs5() {
    const meta = util.currentPackage();
    const copyInst = util.getCopyInstruction(meta);

    const rollupConfig: any = {
      external: meta.externals,
      moduleName: meta.moduleName
    };

    util.tryRunHook(meta.dir, 'rollupFESM', rollupConfig);

    return util.createRollupBundle({
      moduleName: rollupConfig.moduleName,
      entry: `${copyInst.toSrc}/${util.getMainOutputFileName(meta)}.js`,
      dest: Path.join(copyInst.toBundle, `${meta.umd}.es5.js`),
      format: 'es',
      external: rollupConfig.external,
      globals: rollupConfig.globals
    }).then( () => sorcery.load(Path.join(copyInst.toBundle, `${meta.umd}.es5.js`)).then( chain => chain.write() ));

    // const meta = util.currentPackage();
    // const copyInst = util.getCopyInstruction(meta);
    //
    // // Downlevel FESM-2015 file to ES5.
    // util.transpileFile(
    //   Path.join(copyInst.toBundle, `${meta.umd}.js`),
    //   Path.join(copyInst.toBundle, `${meta.umd}.es5.js`),
    //   {
    //     importHelpers: true,
    //     target: ScriptTarget.ES5,
    //     module: ModuleKind.ES2015,
    //     allowJs: true,
    //     sourceMap: true,
    //     inlineSources: true
    //   });
    //
    // return sorcery.load(Path.join(copyInst.toBundle, `${meta.umd}.es5.js`)).then( chain => chain.write() );
  }

  @util.GulpClass.Task('!build:rollup:umd') // or use provided callback instead
  buildRollupUmd() {
    const meta = util.currentPackage();

    const copyInst = util.getCopyInstruction(meta);

    const rollupConfig = {
      external: meta.externals,
      globals: {
        typescript: 'ts'
      },
      moduleName: meta.moduleName
    };

    util.tryRunHook(meta.dir, 'rollupUMD', rollupConfig);

    return util.createRollupBundle({
      moduleName: rollupConfig.moduleName,
      entry: Path.join(copyInst.toBundle, `${meta.umd}.es5.js`),
      dest: Path.join(copyInst.toBundle, `${meta.umd}.rollup.umd.js`),
      format: 'umd',
      external: rollupConfig.external,
      globals: rollupConfig.globals
    }).then( () => sorcery.load(Path.join(copyInst.toBundle, `${meta.umd}.rollup.umd.js`)).then( chain => chain.write() ));
  }

  @util.GulpClass.Task('!minifyAndGzip')
  minifyAndGzip(done) {
    try {
      const meta = util.currentPackage();
      const copyInst = util.getCopyInstruction(meta);

      util.minifyAndGzip(copyInst.toBundle, `${meta.umd}.webpack.umd`);
      util.minifyAndGzip(copyInst.toBundle, `${meta.umd}.rollup.umd`);
      done()
    } catch (err) {
      done(err);
    }
  }

  @util.GulpClass.Task(`!pureAnnotation`)
  pureAnnotation(done) {
    try {
      const meta = util.currentPackage();
      const copyInst = util.getCopyInstruction(meta);

      util.addPureAnnotationsToFile(Path.join(copyInst.toBundle, `${meta.umd}.es5.js`));

      done()
    } catch (err) {
      done(err);
    }
  }
}
