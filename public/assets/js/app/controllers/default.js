define([
	'backbone.app',
	'app/layouts/main'
], function( APP, Layout ){

	// Routers
	APP.Routers.Default = APP.Router.extend({
		data: {},
		initialize: function() {
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'index');
		},
		routes: {
			"": "index",
		},
		index: function(){
			console.log("I'm in index");
			// add data
			this.data = {
			}
			// load layout
			this.layout = new Layout({ data : this.data });

		}

	});

	return APP.Routers.Default;

});