const del = require('del');
const gulp = require('gulp');
const transform = require('gulp-transform-js-ast');
require('require-dir')('./gulp');
const config = require('./gulp/config');
const runSequence = require('run-sequence');

const distPluginPath = { from: 'dist/esm/plugins/**/*', to: 'dist/plugins' };
gulp.task('copyDistPlugins', () => {
  return gulp.src(distPluginPath.from)
    .pipe(gulp.dest(distPluginPath.to));
});

gulp.task('extractPlugins', ['copyDistPlugins'], (done) => {
  del.sync('dist/esm/plugins', {force: true});
  done();
});

gulp.task('build', (done) => {
  runSequence(
    ['clean:dist', 'clean:tmp'],
    ['copyReleaseAssets', 'bundle'],
    ['extractPlugins','createPackageJson'],
    done
  );
});