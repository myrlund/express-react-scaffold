var gulp = require('gulp');

module.exports = function(config, tasks) {
    tasks.forEach(function(name) {
        var exportedTask = require('./tasks/' + name)(config);

        if (typeof(exportedTask) === 'function') {
            gulp.task(name, exportedTask);
        } else {
            var dependencies = exportedTask.dependencies || [];
            gulp.task(name, dependencies, exportedTask.task);
        }
    });

    return gulp;
};
