var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');
var transform = require('gulp-transform-js-ast');


gulp.task('inline-resources', function(){
    gulp.src('./dist/build/demo/**/*.js')
        .pipe(inlineNg2Template({base: './dist/build/', target: 'es5'}))
        .pipe(gulp.dest('./dist/build/demo/'));
});