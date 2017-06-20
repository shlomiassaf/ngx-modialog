import * as Path from 'path';
import * as chalk from 'chalk';
const runSequence = require('run-sequence');

import * as util from '../util';

function filterPackageSelection(packages) {
  const idx = process.argv.indexOf('--select');

  if (idx > -1) {
    if (!process.argv[idx+1]) {
      throw new Error('Invalid library selection.')
    }
    const selected = process.argv[idx + 1].split(',').map( v => v.trim() );
    selected.forEach( s => {
      if (packages.indexOf(s) === -1) {
        throw new Error(`Could not apply selection, "${s}" is not a known package name.`);
      }
    });
    packages = selected;
  }

  return packages;
}



@util.GulpClass.Gulpclass()
export class Gulpfile {
  private packages: util.PackageMetadata[];
  private promiseContainer: util.Promisify<void>;
  private timeStart: [number, number];

  @util.GulpClass.Task({ name: '!compile', dependencies: ['!clean:dist'] })
  compile() {
    this.packages = filterPackageSelection(util.libConfig.packages.slice())
      .map( pkgName => util.buildPackageMetadata(pkgName) );

    if (this.packages.length === 0) {
      return Promise.reject(new Error('Invalid configuration, no packages found.'));
    }

    if (this.packages.length > 1) {
      util.log(`Compiling libraries:\n\t- ${this.packages.map( p => p.dirName ).join('\n\t- ')}`);
    }

    this.promiseContainer = util.promisify<void>();

    util.currentPackage(this.packages.shift());
    this.run();

    return this.promiseContainer.promise;
  }

  private run() {
    const curPkg = util.currentPackage();

    util.saveTempTsConfig(curPkg);

    if (curPkg.parent) {
      util.log(chalk.yellow(`\n\n=============================================
Compiling extension ${curPkg.dirName} for library ${curPkg.parent.dirName}
=============================================\n\n`));
    } else {
      util.log(chalk.yellow(`\n\n=============================================
Compiling library ${curPkg.dirName}
=============================================\n\n`));
    }


    this.timeStart = process.hrtime();

    runSequence(
      '!build:webpack',
      '!build:rollup:fesm',
      '!build:fesm:es5',
      '!build:rollup:umd',
      '!minifyAndGzip',
      '!pureAnnotation',
      '!manifest',
      err => this.handleRunEnd(err)
    );
  };

  private handleRunEnd(err?: any): void {
    if (err) {
      util.log(chalk.red(`ERROR: ${err.message}`));
      this.cleanup().then( () => this.promiseContainer.reject(err) );
    } else {

      util.log(chalk.green(
        `=============================================
Compile OK: ${this.getName()} (${this.getElapsed('ms')} ms)
=============================================`));

      if (util.currentPackage().libExtensions) {
        util.log(`Extensions found (${util.currentPackage().libExtensions.length}), compiling...`);
        util.buildExtensionMetadata(util.currentPackage())
          .forEach( ext => this.packages.unshift(ext) );
      }

      if (this.packages.length > 0) {
        util.currentPackage(this.packages.shift());
        this.run();
      } else {
        util.log('No more libraries to compile. Done!');
        this.cleanup().then( () => this.promiseContainer.resolve() );
      }
    }
  };

  private getElapsed(format: 'sec' | 'ms'): number {
    const timeEnd = process.hrtime(this.timeStart);
    const ms = Math.round((timeEnd[0] * 1000) + (timeEnd[1] / 1000000));

    switch (format) {
      case 'sec':
        return ms / 1000;
      default:
        return ms;
    }
  }

  private cleanup(): Promise<any> {
    return util.cleanup().catch( err => {});
  }

  private getName(): string {
    return util.currentPackage().parent
      ? util.currentPackage().parent.dirName
      : util.currentPackage().dirName
    ;
  }
}
