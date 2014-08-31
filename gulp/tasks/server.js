var browserSync = require('browser-sync');

module.exports = function (config) {
    var server = require('../util/server')(config);
    return {
        dependencies: ['reserver'],
        task: function () {
            return server.restart(function () {
                setTimeout(function () {
                    browserSync.reload({stream: false});
                }, 500);
            });
        }
    };
};
