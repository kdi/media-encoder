define([
	'backbone.app',
	'app/views/status'
], function( APP, Status ){

// variables

	//
	var Parent = APP.View;

	APP.Views.Main = Parent.extend({

		el: ".main",

		options: {
			monitor: ["mouse"],
			acceptedTypes: {
				'image/png': false,
				'image/jpeg': false,
				'image/gif': false,
				'video/mp4': true
			},
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

			var data = new APP.Collection();
			var formData = new FormData();

			for (var i = 0; i < files.length; i++) {
				// add only accepted formats
				if( this.options.acceptedTypes[files[i].type] ) {
					data.add(files[i]);
					formData.append('file', files[i]);
				} else {
					alert("Not accepted file type");
				}
			}

			// exit now if no valid files
			if(!data.length) return;

			// new status
			this.status = new Status({
				data: {
					files: data,
					progress: 0
				}
			});

			// barebones xhr from: http://html5demos.com/dnd-upload
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/process');
			// assume only one file (for now...)
			//xhr.setRequestHeader("Content-type", data.at(0).get("type") );
			xhr.setRequestHeader("X_FILE_NAME", data.at(0).get("name") );

			xhr.onload = function() {
				console.log("Data Uploaded: ");
			};

			xhr.upload.onprogress = _.bind(this.progress, this);

			xhr.send(formData);

		},

		progress: function (e){
			if(e.lengthComputable){
				//this.trigger("upload-progress", e);
				this.status.trigger("progress", e);
			}
		}

	});

	return APP.Views.Main;

});
