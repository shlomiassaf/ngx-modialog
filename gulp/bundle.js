const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const $ = require('gulp-load-plugins')();

const ROLLUP_CONFIG = 'rollup.config.js';

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function prepareCommands(pluginName) {
  const filename = `angular2-modal${pluginName ? '.' + pluginName : ''}.umd.js`;
  const rollupRoot = pluginName ? path.join(config.PATHS.pluginDir, pluginName) : '';

  return {
    ts: `./node_modules/.bin/ngc -p tsconfig.json --out ${path.join(config.PATHS.dist.bundles, filename)} --target es5 --allowJs ${path.join(config.PATHS.tmp, filename)}`,
    rollup: `./node_modules/.bin/rollup -c ${path.join(rollupRoot, ROLLUP_CONFIG)}`
  }
}

function getPlugins() {
  const pluginDir = path.join(__dirname, '..', config.PATHS.pluginDir);
  return getDirectories(pluginDir)
    .filter( dir => fs.existsSync(path.join(pluginDir, dir, ROLLUP_CONFIG)) )
}

function getShellCommands() {

  return [''].concat(getPlugins())
    .map(prepareCommands)
    .reduce( (prev, curr) => {
      prev.ts.push(curr.ts);
      prev.rollup.push(curr.rollup);
      return prev;
    }, { ts: [], rollup: [] });

}

const commands = getShellCommands();

gulp.task('rollup:umd', ['scripts:esm'], $.shell.task(commands.rollup));

gulp.task('bundle:umd', ['rollup:umd'], $.shell.task(commands.ts, { ignoreErrors: true }));

gulp.task('bundle:umd:min', ['bundle:umd'], (done) => {
  done();
});

gulp.task('bundle', ['bundle:umd', 'bundle:umd:min']);

