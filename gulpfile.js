// try { require('gulplog').info = function() {}; } catch (err) {}
// try { require('fancy-log').apply = function() {}; } catch (err) {}

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');

require('ts-node/register');
require('require-dir')(path.join(__dirname, 'scripts', 'gulp'));


gulp.task('build', ['!compile']);




const conventionalChangelog = require('gulp-conventional-changelog');
const git = require('gulp-git');

gulp.task('changelog', () =>
  gulp.src('CHANGELOG.md', {
    buffer: false,
  })
    .pipe(conventionalChangelog({
      preset: 'angular',
    }))
    .pipe(gulp.dest('.'))
);

gulp.task('create-tag', (cb) => {
  function getPackageJsonVersion() {
    // We parse the json file instead of using require because require caches
    // multiple calls so the version number won't be updated
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  }

  const version = getPackageJsonVersion();
  return git.tag(version, `chore(version): ${version}`, (error) => {
    if (error) {
      return cb(error);
    }
    return cb();
  });
});