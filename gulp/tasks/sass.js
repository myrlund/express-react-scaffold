var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');

module.exports = function (config) {
    return function () {
        return gulp.src(config.sources.client + '/css/main.scss')
            .pipe(sass({
                trace: true,
                compass: true,
                bundleExec: true,
                sourcemapPath: 'css/'
            }))
            .on('error', handleErrors)
            .pipe(gulp.dest(config.targets.client + '/css'));
    };
};
