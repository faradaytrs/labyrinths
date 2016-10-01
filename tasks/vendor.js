var gulp = require('gulp');
var config = require('./config');

module.exports = function () {
    gulp.src(config.vendor.src).pipe(gulp.dest(config.vendor.dst));
}
