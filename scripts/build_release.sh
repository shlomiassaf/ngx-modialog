#!/usr/bin/env bash
set -exu

####################################################################################################
#                   Taken from https://github.com/angular/material2
####################################################################################################
# Prepare a release by putting everything that should be packaged into the ./dist folder.
#
# There are 3 directory artifacts in the ./dist folder:
#
# build:    The demo application and all components in a CommonJS format ready to be consumed
#           by a browser via SystemJS polyfil or packed by a module bundler (e.g webpack).
#           This is a non-minified version.
#
# cjs:  Contains CommonJS version of the components and the core module.
#       Each component in a single directory (component name = directory name)
#
# sjs:  Contains SystemJS version of the components and the core module.
#       Each component has 3 files:
#       - UnMinified version.
#       - Minified version.
#       - Minified version source maps.
#
#
# This script should be run from the root of the repo.
# Make sure you are not running `ng serve` or `ng build --watch` when running this.
####################################################################################################

# Clear dist/ and deploy/ so that we guarantee there are no stale artifacts.
rm -rf ./dist/build
rm -rf ./dist/commonjs
rm -rf ./dist/commonjs_all

# Perform a build with the modified tsconfig.json.
ng build --output-path dist/build/

# Remove the "index.html" version of webpack, set the SystemJS one.
rm ./dist/build/index.html
mv ./dist/build/index.SystemJS.html ./dist/build/index.html


# Inline the css and html into the component ts files.
./node_modules/gulp/bin/gulp.js inline-resources

./node_modules/gulp/bin/gulp.js replace-core-relative-imports

# ./dist/commonjs will hold ES5 compiled artifacts from the TypeScript compilation.
mkdir ./dist/commonjs

# Copy all components/ to ./dist/commonjs/
cp -R ./dist/build/components/angular2-modal/* ./dist/commonjs/

cp ./README.md ./dist/commonjs