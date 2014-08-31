var fs = require('fs');
var _ = require('underscore');

function readJSONFile(filename) {
    var data = fs.readFileSync(filename, { encoding: 'utf8' });
    return JSON.parse(data);
}

var defaultConfig = {};

module.exports = {
    config: {},
    loadConfig: function (filename) {
        var config = readJSONFile(filename);
        this.config = _.defaults(config, defaultConfig);
        return this.config;
    }
};

