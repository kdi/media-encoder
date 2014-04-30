var Main = require("brisk").getBaseController("main"),
	Busboy = require('busboy'),
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
				var saveTo = path.join(os.tmpDir(), path.basename(fieldname));
				file.pipe(fs.createWriteStream(saveTo));
				file.on('end', function() {
					console.log('File [' + fieldname + '] Finished', saveTo);
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


module.exports = controller;
