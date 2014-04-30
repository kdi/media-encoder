define([
	'backbone.app'
], function( APP ){

	// Routers
	APP.Views.Toolbar = APP.View.extend({
		el: "nav.toolbar"
	});

	return APP.Views.Toolbar;

});