var app;

require.config( config );

// wrap everything in an init method
function init(){
	// when logic dependencies are loaded
	Backbone.ready(function(){

		// initialize APP
		new APP({
			require: "app/controllers/default"
		}, function( app ){

			window.app = app;
			// start backbone history
			Backbone.history.start();
		}

		);


	});
}
