define([
	'backbone.app'
], function( APP ){

	// Routers
	APP.Views.Status = APP.View.extend({
		el: ".status",

		options: {
			autoRender: false,
			url: "/assets/html/status.html"
		}
	});

	return APP.Views.Status;

});