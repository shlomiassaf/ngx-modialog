const path = require('path');
const fs = require('fs');
const del = require('del');
const gulp = require('gulp');
require('require-dir')('./gulp');
const runSequence = require('run-sequence');
const config = require('./gulp/config');

const ESM_PLUGINS_PATH = 'dist/plugins';
gulp.task('copyPluginsDummyPackageJson', (done) => {
  const absPath = path.join(__dirname, ESM_PLUGINS_PATH);
  const dirs = fs.readdirSync(absPath);
  dirs.forEach( dir => {
    const data = fs.readFileSync(path.join(config.PATHS.pluginDir, dir, 'package.json'));
    fs.writeFileSync(path.join(__dirname, ESM_PLUGINS_PATH, dir, 'package.json'), data);
  });
  done();
});

const distPluginPath = { from: 'dist/esm/plugins/**/*', to: 'dist/plugins' };
gulp.task('copyDistPlugins', () => {
  return gulp.src(distPluginPath.from)
    .pipe(gulp.dest(distPluginPath.to));
});

gulp.task('extractPlugins', ['copyDistPlugins'], (done) => {
  del.sync('dist/esm/plugins', {force: true});
  done();
});

gulp.task('release', (done) => {
  runSequence(
    ['clean:dist', 'clean:tmp'],
    ['copyReleaseAssets', 'bundle'],
    ['extractPlugins','createPackageJson'],
    ['copyPluginsDummyPackageJson'],
    done
  );
});