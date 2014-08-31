var browserSync = require('browser-sync');

module.exports = function (config) {
    return {
        dependencies: ['server'],
        task: function () {
            browserSync({
                proxy: 'localhost:8080',
                files: [
                    // Watch everything in build
                    config.targets.client + "/**",
                    // Exclude sourcemap files
                    "!" + config.targets.client + "/**.map"
                ]
            });
        }
    };
};
