var gulp = require('gulp');
var browserify = require('browserify');
var es6ify = require('es6ify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var handleErrors = require('../util/handleErrors');

module.exports = function (config) {
    return {
        dependencies: ['jshint'],
        task: function () {
            var bundler = browserify({
                // Required watchify args
                cache: {}, packageCache: {}, fullPaths: true,
                // Specify the entry point of your app
                entries: [config.sources.client + '/js/main.js'],
                // Add file extentions to make optional in your requires
                extensions: ['.jsx'],
                // Enable source maps!
                debug: true
            })
            .transform(reactify)
            .transform(es6ify.configure(/.jsx?/));

            var bundle = function () {
                // Log when bundling starts
                return bundler
                    .bundle()
                    // Report compile errors
                    .on('error', handleErrors)
                    // Use vinyl-source-stream to make the
                    // stream gulp compatible. Specifiy the
                    // desired output filename here.
                    .pipe(source('bundle.js'))
                    // Specify the output destination
                    .pipe(gulp.dest(config.targets.client + '/js'));
            };

            return bundle();
        }
    };
};
