'use strict';

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var Builder = require('systemjs-builder');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var runSequence = require('run-sequence');

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var openResource = require('open');


gulp.task('clean', function (done) {
   del(['demo/**/*.js','demo/**/*.js.map'], done);
});

gulp.task('build:angular2', function () {
    var builder = new Builder({
        paths: {
            'angular2/*': 'node_modules/angular2/es6/prod/*.es6',
            rx: 'node_modules/angular2/node_modules/rx/dist/rx.js'
        },
        meta: {
            rx: {
                format: 'cjs'
            }
        }
    });
    builder.build('angular2/router', './lib/router.js', {});
    return builder.build('angular2/angular2', './lib/angular2.js', {});
});

gulp.task('build:lib', ['build:angular2'], function () {
    gulp.src([
        './node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        './node_modules/angular2/node_modules/zone.js/dist/zone.js',
        './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
        './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/reflect-metadata/Reflect.js.map',
        './node_modules/systemjs/dist/system.js',
        './node_modules/systemjs/dist/system.js.map'
    ])
        .pipe(gulp.dest('./lib'));
});

gulp.task('build:componenet', [], function (cb) {
    var tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript')
    });

    var result = gulp.src('src/**/*.ts')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    merge([
        result.dts.pipe(gulp.dest('./demo')),
        result.js.pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: '/src'}))
            .pipe(gulp.dest('./demo'))
    ]).on('queueDrain', function() {
        cb();
    });
});

gulp.task('build:demo', [], function () {
    var tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript')
    });

    var result = gulp.src('demo/**/*.ts')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    result.js
        .pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: '/demo'}))
        .pipe(gulp.dest('./demo'));
});

gulp.task('build', ['clean', 'build:demo', 'build:lib', 'build:angular2']);

gulp.task('build:watch', [], function() {
    runSequence('build:componenet', 'build:demo');
});

gulp.task('watch', ['build:watch'], function() {
    gulp.watch(['demo/**/*.ts', '!demo/**/*.d.ts', 'src/**/*.ts'], ['build:watch']);
});

gulp.task('serve', function () {
    var port = 3005;
    var app;

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        openResource('http://localhost:' + port);
    });
});