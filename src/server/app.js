
var express = require('express');
var app = express();

var config = require('./config').loadConfig(__dirname + '/../../config.json');

// Serve the client code
var serveStatic = require('serve-static');
app.use(serveStatic(config.targets.client));

// Configure the API
var apiRouter = require('./api').router;
app.use(config.api.pathPrefix, apiRouter);

// Start the server
var server = app.listen(config.server.port, function () {
    console.log('Listening on port ' + server.address().port + ".");
});
