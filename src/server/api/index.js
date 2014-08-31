var express = require('express');
var router = express.Router();

var config = require('../config').config;

router.get('/test', function (req, res) {
    res.send(config);
});

module.exports = {
    router: router
};
