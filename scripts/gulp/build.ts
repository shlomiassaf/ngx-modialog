import * as Path from 'path';
import { ScriptTarget, ModuleKind } from 'typescript';
import * as del from 'del';
import * as glob from 'glob';
import { runCli } from 'ngc-webpack';
const mv = require('mv');
const sorcery = require('sorcery');

import { cleanOnNext } from '../util';
import * as util from '../util';

function remapSourceMap(sourceFile: string, options: any = {}): Promise<void> {
  return sorcery.load(sourceFile)
    .then( chain => {
      if (!chain) {
        throw new Error('Failed to load sourceMap chain for ' + sourceFile);
      }
      return chain.write(options);
    });
}

@util.GulpClass.Gulpclass()
export class Gulpfile {

  @util.GulpClass.Task('!build:webpack')
  buildWebpack() {
    const pkgMeta = util.currentPackage();
    const config = util.resolveWebpackConfig(util.root(util.FS_REF.WEBPACK_CONFIG), pkgMeta);

    return runCli(config, ['-p', pkgMeta.tsConfig], { p: pkgMeta.tsConfig, _: [] })
      .then( parsedDiagnostics => {
        if (parsedDiagnostics.error) {
          throw parsedDiagnostics.error;
        }

        const p = util.root(util.currentPackage().tsConfigObj.compilerOptions.outDir);
        const copyInst = util.getCopyInstruction(util.currentPackage());

        return new Promise( (resolve, reject) => {
          mv(copyInst.from, copyInst.toSrc, {mkdirp: true}, (err?) => {
            cleanOnNext(...glob.sync(`${copyInst.toSrc}/**/!(*.d.ts|*.metadata.json)`, {
              absolute: true,
              nodir: true
            }));

            if (err) {
              reject(err);
            } else {
              resolve(del(p));
            }
          });
        });
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

    const dest = Path.join(copyInst.toBundle, `${meta.umd}.js`);

    return util.createRollupBundle({
      moduleName: rollupConfig.moduleName,
      entry: `${copyInst.toSrc}/${util.getMainOutputFileName(meta)}.js`,
      dest,
      format: 'es',
      external: rollupConfig.external,
      globals: rollupConfig.globals
    }).then( () => remapSourceMap(dest, { inline: false, includeContent: true }) );
  }

  @util.GulpClass.Task('!build:fesm:es5')
  buildFesmEs5() {
    const meta = util.currentPackage();
    const copyInst = util.getCopyInstruction(meta);
    const dest = Path.join(copyInst.toBundle, `${meta.umd}.es5.js`);

    // Downlevel FESM-2015 file to ES5.
    util.transpileFile(
      Path.join(copyInst.toBundle, `${meta.umd}.js`),
      dest,
      {
        target: ScriptTarget.ES5,
        module: ModuleKind.ES2015,
        allowJs: true,
        sourceMap: true
      });

    return remapSourceMap(dest, { inline: false, includeContent: true });
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

    const dest = Path.join(copyInst.toBundle, `${meta.umd}.umd.js`);

    return util.createRollupBundle({
      moduleName: rollupConfig.moduleName,
      entry: Path.join(copyInst.toBundle, `${meta.umd}.es5.js`),
      dest,
      format: 'umd',
      external: rollupConfig.external,
      globals: rollupConfig.globals
    }).then( () => remapSourceMap(dest, { inline: false, includeContent: true }));
  }

  @util.GulpClass.Task('!minifyAndGzip')
  minifyAndGzip(done) {
    try {
      const meta = util.currentPackage();
      const copyInst = util.getCopyInstruction(meta);

      util.minifyAndGzip(copyInst.toBundle, `${meta.umd}.umd`);
      done()
    } catch (err) {
      done(err);
    }
  }
}
