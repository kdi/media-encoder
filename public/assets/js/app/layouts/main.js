define([
	'backbone.app',
	'app/views/main',
	'app/views/status',
	'app/views/toolbar'
], function( APP, Main, Status, Toolbar ){

	// Routers
	APP.Layouts.Main = APP.Layout.extend({

		initialize: function( options ) {

			this.set({
				main: new Main(),
				status: new Status(),
				toolbar: new Toolbar()
			});
			// hack
			this.get("main").preRender();

			return APP.Layout.prototype.initialize.call(this, options);
		}

	});

	return APP.Layouts.Main;

});