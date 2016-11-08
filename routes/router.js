var path = require('path');
var express = require('express');
var router = express.Router();

var routes = {};

routes.home = function(req, res){
	res.sendFile('index.html', { root: path.join(__dirname, '../public') });
};

routes.courses = function(req, res) {
	res.sendFile('views/courses.html', {root: path.join(__dirname, '../public')});
}

module.exports = routes;