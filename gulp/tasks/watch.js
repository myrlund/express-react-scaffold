var gulp = require('gulp');
var reload = require('browser-sync').reload;

module.exports = function (config) {
    return {
        dependencies: ['browserSync'],
        task: function () {
            gulp.watch(config.sources.client + '/css/**', ['sass', reload]);
            gulp.watch(config.sources.client + '/js/**', ['browserify', reload]);
            gulp.watch(config.sources.client + '/images/**', ['images', reload]);
            gulp.watch([config.sources.client + '/**/*.html', config.sources.client + '/static/**'],
                ['staticFiles', reload]);

            gulp.watch(config.sources.server + '/**', ['server', reload]);

            gulp.watch(['gulpfile.js', 'gulp/**/*.js'], ['jshint']);
        }
    };
};
