var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

module.exports = function (config) {
    var dest = config.targets.browser + '/images';

    return gulp.src(config.sources.browser + '/images/**')
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(dest));
};
