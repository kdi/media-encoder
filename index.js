/*
 * Media Encoder
 *
 * Author: K&D Interactive (http://kdi.co)
 */

// Setup main app/server
var http = require('http'),
	express = require('express'),
	app = express(),
	server = http.createServer(app);

// initialization is actually done here...
var site = require('./lib/main');

// initialize (with the created modules)
site.init({
	app: app,
	server : server
});

exports.server = server;

