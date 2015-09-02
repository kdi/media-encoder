var Main = require("brisk").getBaseController("main"),
	Busboy = require('busboy'),
	Artycles = require('artycles'),
	path = require('path'),
	fs = require('fs'),
	os = require('os');

var controller = Main.extend({
	/*
	index: function(req, res){

		res.view = (authenticated)  ? "home" : "index";

		// render the page
		this.render( req, res );

	},
	*/

	process: function(req, res){

		if (req.method === 'POST') {
			var busboy = new Busboy({ headers: req.headers });
			busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
				var saveTo = path.join(os.tmpDir(), path.basename(filename));
				file.pipe(fs.createWriteStream(saveTo));
				file.on('end', function() {
					console.log('File [' + filename + '] Finished', saveTo);
					encode( saveTo, req.site.config.root);
				});
			});
			busboy.on('finish', function() {
				res.writeHead(200, { 'Connection': 'close' });
				res.end("That's all folks!");
			});
			return req.pipe(busboy);
		}
		res.writeHead(404);
		res.end();

	}

});


function encode( file, root ){
	var artycles = new Artycles({
		path: root +"store/",
		source: {
			remove: true// remove downloaded file
		}
	});
	artycles.video( file );
}


module.exports = controller;
