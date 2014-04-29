var config = require('../config/brisk'),
	brisk = require('brisk');

// initialization
var Site = function(){

}

Site.prototype = {

	init : function( modules ){

		// setup conditions
		if( !modules.app || !modules.server) return;
		//
		// FIX for express 4.x
		modules.app.configure = function( a, b ){
			var env = process.env.NODE_ENV || 'development';

			if( typeof a == "function" && !b ) {
				type = env;
				callback = a;
			} else {
				type = a;
				callback = b;
			}
			if (type == env) {
				// condition if it's a function
				callback();
			}
		}

		// setup (additional) options
		var options = {
				server : modules.server,
				app : modules.app,
			}

		// start the site
		brisk.init( options );

	}

}

var site = new Site();

//Exports
module.exports = site;