var gulp = require('gulp');
var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (config) {
    return {
        dependencies: ['jshint'],
        task: function () {
            return gulp.src(config.sources.server + '/**/*.js')
                .pipe(sourcemaps.init())
                .pipe(traceur())
                .pipe(jshint())
                .pipe(jshint.reporter('default'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(config.targets.server));
        }
    };
};
