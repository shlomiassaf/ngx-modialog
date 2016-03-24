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
    //clearTarget,
    getSystemJsBundleConfig,
    buildSystemJs({mangle: false}),
    getSystemJsBundleConfig,
    buildSystemJs({minify: true, sourceMaps: true, mangle: false})
], function (err) {
    if (err) {
        throw err;
    }
});

function clearTarget(cb) {
    return del(TARGET_DIR, {force: true})
            .then( paths => console.log(`Deleted files and folders:\n${paths.join('\n')}`) )
            .then( _ => cb())
            .catch( err => cb(err));
}

function getSystemJsBundleConfig(cb) {
    try {
        let config = {
            baseURL: './dist/commonjs',
            transpiler: 'typescript',
            typescriptOptions: {
                module: 'cjs'
            },
            map: {
                typescript: 'node_modules/typescript/lib/typescript.js',
                angular2: 'node_modules/angular2',
                rxjs: 'node_modules/rxjs'
            },
            paths: {
                '*': '*.js'
            },
            meta: {
                'node_modules/angular2/*': { build: false },
                'node_modules/rxjs/*': { build: false }
            },
        };


        cb(null, config);
    }
    catch (ex) {
        cb(ex);
    }
}



function buildSystemJs(options) {
    return function (config, cb) {
        let fileName = `${name}-${pkg.version}` + (options && options.minify ? '.min' : '') + '.js';
        let dest = path.resolve(__dirname, TARGET_DIR, fileName);
        console.log('Bundling system.js file:', fileName, options);

        let builder = new Builder();
        builder.config(config);
        return builder
                .bundle([name].join('/'), dest, options)
                .then(()=>cb()).catch(cb);
    };
}
