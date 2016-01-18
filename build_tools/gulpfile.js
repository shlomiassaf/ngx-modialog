var path = require("path");
var gulp = require("gulp");
var del = require("del");
var shell = require('gulp-shell');

var projectRoot = path.join(__dirname, "..");

gulp.task("publish", ['clean:dist'], function() {
    shell.task('npm publish')();
});

gulp.task("clean", ['clean:dist']);

gulp.task("clean:dist", function() {
    del.sync( path.join(projectRoot, "dist"));
});


