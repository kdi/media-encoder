var Main = require("brisk").getBaseController("main");

var controller = Main.extend({
	/*
	index: function(req, res){

		res.view = (authenticated)  ? "home" : "index";

		// render the page
		this.render( req, res );

	},
	*/

	process: function(req, res){

		//
		console.log( "req.files", req.files );
	}

});


module.exports = controller;
