var gulp = require('gulp');
var jshint = require('gulp-jshint');
var react = require('gulp-react');

module.exports = function (config) {
    return function () {
        gulp.src([config.sources.server + '/**/*.js',
                  config.sources.client + '/**/*.{js,jsx}',
                  'gulpfile.js',
                  'gulp/**/*.js'])
            .pipe(react())
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    };
};
