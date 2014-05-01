define([
	'backbone.app',
	'app/models/status'
], function( APP, Model ){

	//
	var Parent = APP.View;

	APP.Views.Status = Parent.extend({
		el: ".status",

		options: {
			url: "/assets/html/status.html"
		},

		initialize: function( options ){
			_.bindAll(this, "progress");
			// convert raw data to a model
			this.data = new Model( options.data );

			this.on("progress", this.progress);
			return Parent.prototype.initialize.call(this, options);
		},

		progress: function( e ){
			//console.log("progress", e);
			var progress = (e.loaded / e.total * 100 | 0);
			this.data.set({ progress: progress });
		}

	});

	return APP.Views.Status;

});