const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')();
const ngc = require('@angular/compiler-cli');
const config = require('./config');
const sourcemaps = require('gulp-sourcemaps');
const relativeImports = require('./relative-imports');

function replaceSrcDir(path) {
  if (path.dirname.indexOf('dist/esm/plugins/') !== 0) {
    path.dirname = 'dist/esm/plugins/' + path.dirname;
  }
  // path.dirname = path.dirname.replace(/^src\/components\/angular2-modal/ig, ''); // eslint-disable-line no-param-reassign
}


gulp.task('scripts:esm-ngc', (cb) => {
  exec('./node_modules/.bin/ngc -p tsconfig.release.json', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (err) {
      cb(err);
    } else {
      // delete all *.ngfactory files.
      del.sync(config.PATHS.dist.esm + '**/*.ngfactory.*');
      cb();
    }
  });
});


gulp.task('scripts:esm-rename-js', () => {
  // todo: this emit errors right now because of duplicate ES6 declarations.
  // should be fixed when https://github.com/angular/angular/issues/4882 is included a new Angular2 version.

  return gulp.src(['dist/esm/plugins/**/*.js'])
    .pipe(relativeImports.es6ImportRename)
    .pipe($.header(config.banner, {
      pkg: config.pkg,
    }))
    .pipe($.rename(replaceSrcDir))
    .pipe(gulp.dest('.'));
});


gulp.task('scripts:esm-rename-dts', () => {
  return gulp.src(['dist/esm/plugins/**/*.d.ts'])
    .pipe(relativeImports.tsDefinitionImportRename)
    .pipe($.header(config.banner, {
      pkg: config.pkg,
    }))
    .pipe($.rename(replaceSrcDir))
    .pipe(gulp.dest('.'));
});

gulp.task('scripts:esm-rename-ngcMetadata', () => {
  return gulp.src(['dist/esm/plugins/**/*.metadata.json'])
    .pipe(relativeImports.ngcMetadataRename)
    .pipe($.rename(replaceSrcDir))
    .pipe(gulp.dest('.'));
});

gulp.task('scripts:esm', (done) => {
  runSequence(
    ['scripts:esm-ngc'],
    // plugins requires change to import literals, ../../components/angular2-modal -> angular2-modal
    ['scripts:esm-rename-js', 'scripts:esm-rename-dts', 'scripts:esm-rename-ngcMetadata'],
    done
  );
});

gulp.task('scripts', ['scripts:esm']);