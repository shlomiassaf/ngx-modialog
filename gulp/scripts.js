const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('./config');
const sourcemaps = require('gulp-sourcemaps');

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



gulp.task('scripts:esm', (done) => {
  runSequence(
    ['scripts:esm-ngc'],
    done
  );
});

gulp.task('scripts', ['scripts:esm']);