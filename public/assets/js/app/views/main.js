define([
	'backbone.app'
], function( APP ){

// variables

	//
	var Parent = APP.View;

	APP.Views.Main = Parent.extend({

		el: ".main",

		options: {
			monitor: ["mouse"]
		},

		preRender: function(){

			var self = this;

			this.on("drop", _.bind(this.onDrag, this) );

		},

		postRender: function(){


		},

		onDrag: function( e ){
			if(e.originalEvent.dataTransfer){
				if(e.originalEvent.dataTransfer.files.length) {
					console.log("gggg", e.originalEvent.dataTransfer.files);
					//upload(e.originalEvent.dataTransfer.files);
				}
			}

		},

		// supporting only one file at a time
		upload: function( file ){
			var self = this;

			$.ajax({
				type: "POST",
				url: "/process",
				 xhr: function() {  // Custom XMLHttpRequest
					var xhr = $.ajaxSettings.xhr();
					if(xhr.upload){ // Check if upload property exists
						xhr.upload.addEventListener('progress', _.bind(self.progress, self), false); // For handling the progress of the upload
					}
					return xhr;
				},
				enctype: 'multipart/form-data',
				data: {
					file: file
				},
				success: function () {
					console.log("Data Uploaded: ");
				}
			});
		},

		progress: function (e){
			if(e.lengthComputable){
				//$('progress').attr({value:e.loaded,max:e.total});
			}
		}

	});

	return APP.Views.Main;

});
