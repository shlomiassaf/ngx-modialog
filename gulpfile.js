var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');
var transform = require('gulp-transform-js-ast');

var jsStringEscape = require('js-string-escape');
function doCss (ext, file) {
    return jsStringEscape(file);
}
gulp.task('inline-resources', function(){
    gulp.src('./dist/build/components/**/*.js')
        .pipe(inlineNg2Template({base: './dist/build/', target: 'es5', styleProcessor: doCss}))
        .pipe(gulp.dest('./dist/build/components/'));

    gulp.src('./dist/build/demo/**/*.js')
        .pipe(inlineNg2Template({base: './dist/build/', target: 'es5', styleProcessor: doCss}))
        .pipe(gulp.dest('./dist/build/demo/'));
});

