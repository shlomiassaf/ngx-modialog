// try { require('gulplog').info = function() {}; } catch (err) {}
// try { require('fancy-log').apply = function() {}; } catch (err) {}

const path = require('path');
const gulp = require('gulp');

require('ts-node/register');
require('require-dir')(path.join(__dirname, 'scripts', 'gulp'));


gulp.task('build', ['!compile']);