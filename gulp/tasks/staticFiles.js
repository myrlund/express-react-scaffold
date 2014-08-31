var gulp = require('gulp');

module.exports = function (config) {
    return function () {
        return gulp.src([config.sources.client + '/**/*.html', config.sources.client + '/static/**'])
            .pipe(gulp.dest(config.targets.client));
    };
};
