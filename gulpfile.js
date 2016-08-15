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

gulp.task('replace-core-relative-imports', function(){
    var CORE_PACKAGE_NAME = 'angular2-modal';
    var CORE_IMPORT_REGEX = /^(.*\.\.?\/components\/angular2-modal)(.*)$/;

    function isRequireMethod (path) {
        var node = path.value;
        return node.type === 'CallExpression' &&
            node.callee &&
            node.callee.type === 'Identifier' &&
            node.callee.name === 'require';
    }

    function isLiteral(path) {
        var args = path.value.arguments;
        return args &&
            args.length === 1 &&
            args[0].type === 'Literal';
    }

    function isCandidate(path) {
        return isRequireMethod(path) && isLiteral(path);
    }

    function visitCallExpression(path) {
        if (isCandidate(path)) {
            var match,
                arg = path.value.arguments["0"];
            if ((match = CORE_IMPORT_REGEX.exec(arg.value)) !== null) {
                arg.value = arg.value.replace(CORE_IMPORT_REGEX, `${CORE_PACKAGE_NAME}$2`);
            }
        }
        return path.value;
    }
    
    gulp.src(['./dist/build/bootstrap.js'])
        .pipe(transform( { visitCallExpression: visitCallExpression } ))
        .pipe(gulp.dest('./dist/build'));

    gulp.src(['./dist/build/demo/**/*.js'])
        .pipe(transform( { visitCallExpression: visitCallExpression } ))
        .pipe(gulp.dest('./dist/build/demo'));

    gulp.src(['./dist/build/components/angular2-modal/plugins/**/*.js'])
      .pipe(transform( { visitCallExpression: visitCallExpression } ))
      .pipe(gulp.dest('./dist/build/components/angular2-modal/plugins'));
});
