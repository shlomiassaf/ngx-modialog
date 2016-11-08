/* global process */
// This file contains all release related tasks.

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');
const git = require('gulp-git');
const config = require('./config');


gulp.task('copyReleaseAssets', () =>
  gulp.src(config.PATHS.releaseAssets)
    .pipe(gulp.dest(config.PATHS.dist.base))
);

gulp.task('changelog', () =>
  gulp.src('CHANGELOG.md', {
    buffer: false,
  })
    .pipe(conventionalChangelog({
      preset: 'angular',
    }))
    .pipe(gulp.dest('.'))
);

gulp.task('createPackageJson', () => {
  const basePkgJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const releasePkgJson = JSON.parse(fs.readFileSync('./package.release.json', 'utf8'));

  Object.keys(releasePkgJson).forEach( key => {
    basePkgJson[key] = releasePkgJson[key];
  });

  const filepath = path.join(config.PATHS.dist.base, 'package.json');
  fs.writeFileSync(filepath, JSON.stringify(basePkgJson, null, 2), 'utf-8');
});

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