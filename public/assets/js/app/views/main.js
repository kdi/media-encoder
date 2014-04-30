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
			e.stopPropagation();
			e.preventDefault();

			if(e.originalEvent.dataTransfer){
				if(e.originalEvent.dataTransfer.files.length) {
					//console.log("gggg", e.originalEvent.dataTransfer.files);
					this.upload(e.originalEvent.dataTransfer.files);
				}
			}

		},

		upload: function( files ){
			var self = this;

			var formData = new FormData();

			for (var i = 0; i < files.length; i++) {
				formData.append('file', files[i]);
			}

			// barebones xhr from: http://html5demos.com/dnd-upload
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/process');
			xhr.onload = function() {
				console.log("Data Uploaded: ");
			};

			xhr.upload.onprogress = _.bind(this.progress, this);

			xhr.send(formData);

		},

		progress: function (e){
			if(e.lengthComputable){
				console.log("e.loaded", e.loaded);
				//$('progress').attr({value:e.loaded,max:e.total});
				//var complete = (event.loaded / event.total * 100 | 0);
				//progress.value = progress.innerHTML = complete;
			}
		}

	});

	return APP.Views.Main;

});
