var Main = require("brisk").getClass("main");

var helper = Main.extend({
	init: function( site ){

		var app = site.modules.app;
		// set local vars
		app.locals.root = site.config.root;

		// choose which helpers to automatically load
		//app.use( flash() );

		this.express = app;

	}

});


module.exports = helper;
