const path = require('path');
const ts = require('typescript');

// package.json as JS object
module.exports.pkg = require(path.join(__dirname, '../package.json'));

// note: for all paths, the base dir is ../
module.exports.PATHS = {
  srcDir: 'src/lib',
  pluginDir: 'src/lib/plugins',
  tsSrcFiles: 'src/lib/**/*.ts',
  releaseAssets: ['LICENSE', 'README.md'],
  jsFiles: ['gulpfile.js', 'gulp/*.js'],
  tsConfig: path.join(__dirname, '../tsconfig.json'),
  tmp: '.tmp/',
  dist: {
    base: 'dist_package/',
    esm: 'dist_package/esm/',
    bundles: 'dist_package/bundles/',
  }
};

module.exports.removeDeps = [
  '@angular/forms',
  '@angular/router'
];

module.exports.banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');
