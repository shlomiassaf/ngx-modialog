#!/usr/bin/env node
/*eslint no-console: 0, no-sync: 0*/
'use strict';


const fs = require('fs');
const del = require('del');
const path = require('path');
const async = require('async');
const Builder = require('systemjs-builder');

const pkg = require('./package.json');
const name = pkg.name;

const TARGET_DIR = path.resolve('./dist/systemjs');

async.waterfall([
    async.apply(getSystemJsBundleConfig, 'angular2-modal'),
    buildSystemJs({mangle: false}),
    async.apply(getSystemJsBundleConfig, 'angular2-modal'),
    buildSystemJs({minify: true, sourceMaps: true, mangle: false})
], function (err) {
    if (err) {
        throw err;
    }
});

function getSystemJsBundleConfig(name, cb) {
    try {
        let config = {
            baseURL: `./dist/commonjs_all`,
            transpiler: 'typescript',
            typescriptOptions: {
                module: 'cjs'
            },
            map: {
                typescript: 'node_modules/typescript/lib/typescript.js',
                '@angular': 'node_modules/@angular',
                rxjs: 'node_modules/rxjs'
            },
            paths: {
                '*': '*.js'
            },
            meta: {
                'node_modules/@angular/*': { build: false },
                'node_modules/rxjs/*': { build: false }
            }
        };


        cb(null, config, name);
    }
    catch (ex) {
        cb(ex);
    }
}

function buildSystemJs(options) {
    return function (config, name, cb) {
        let fileName = `${name}-${pkg.version}` + (options && options.minify ? '.min' : '') + '.js';
        let dest = path.resolve(__dirname, TARGET_DIR, fileName);
        console.log('Bundling system.js file:', fileName, options);

        let builder = new Builder();
        builder.config(config);

        // Promise.all([builder.trace('name'), builder.trace('plugins/bootstrap.js')])
        //     .then(function(trees) {
        //         return builder.bundle(builder.addTrees(trees[0], trees[1]), dest, options);
        //     })
        //     .catch(cb);

        return builder
            .bundle(name, dest, options)
            .then( () => cb())
            .catch(cb);
    };
}
