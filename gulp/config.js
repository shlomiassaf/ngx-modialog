const path = require('path');
const ts = require('typescript');
const $ = require('gulp-load-plugins')();

// package.json as JS object
module.exports.pkg = require(path.join(__dirname, '../package.json'));

// note: for all paths, the base dir is ../
module.exports.PATHS = {
  srcDir: 'src/components/angular2-modal',
  pluginDir: 'src/components/angular2-modal/plugins',
  tsSrcFiles: 'src/components/angular2-modal/**/*.ts',
  tsTestFiles: [

  ],
  releaseAssets: ['LICENSE', 'README.md'],
  jsFiles: ['gulpfile.js', 'gulp/*.js'],
  tsConfig: path.join(__dirname, '../tsconfig.json'),
  tmp: '.tmp/',
  dist: {
    base: 'dist/',
    cjs: 'dist/',
    esm: 'dist/esm/',
    ts: 'dist/ts/',
    bundles: 'dist/bundles/',
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

// we create the the tsConfig outside the task for fast incremential compilations during a watch.
module.exports.tscConfigCjs = $.typescript.createProject(module.exports.PATHS.tsConfig, {
  target: 'ES5',
  module: 'commonjs',
  moduleResolution: 'node',
  declaration: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  allowJs: true,
  outDir: module.exports.PATHS.dist.cjs,
  rootDir: module.exports.PATHS.srcDir
});