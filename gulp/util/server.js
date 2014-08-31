var gutil       = require('gulp-util'),
    fork        = require('child_process').fork,
    async       = require('async');

var server;
module.exports = function (config) {
    server = server || {
        instance: {},

        path: config.targets.server + '/' +config.server.mainFile,

        env: { NODE_ENV: config.server.environment, port: config.server.port },

        start: function (callback) {
            process.execArgv.push('--harmony');

            server.instance = fork(server.path, { silent: false, env: server.env });
            process.on('exit', function () {
                server.instance.kill();
            });

            gutil.log( gutil.colors.cyan('Starting'), 'express server ( PID:', server.instance.pid, ')');

            if (callback) {
                callback();
            }
        },

        stop: function (callback) {
            if (server.instance.connected) {
                server.instance.on( 'exit', function() {
                    gutil.log(gutil.colors.red('Stopping'), 'express server ( PID:', server.instance.pid, ')');

                    if (callback) {
                        callback();
                    }
                });
                return server.instance.kill('SIGINT');
            }

            if (callback) {
                callback();
            }
        },

        restart: function(callback) {
            async.series([
                server.stop,
                server.start,
                callback
            ]);
        }
    };
    return server;
};
