var config = require('./config.json');
var gulp = require('./gulp')(config, [
    'jshint',
    'browserify',
    'sass',
    'images',
    'staticFiles',
    'browserSync',
    'watch',
    'server',
    'reserver'
]);

gulp.task('build', ['reserver', 'browserify', 'sass', 'images', 'staticFiles']);
gulp.task('default', ['build', 'server', 'watch']);
