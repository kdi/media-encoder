//var busboy = require('connect-busboy');

module.exports = function(site){
	var app = site.modules.app;

	return {
		"development": {
			"use" : {
				"logger" : { format: ':method :url' },
				"static" : [app.locals.root + "/public"],
				"errorHandler" : { dumpExceptions: true, showStack: true }
			}
		},
		'production': {
			"use" : {
				"static" : [app.locals.root + '/public', { maxAge: 31557600000 }],
				"errorHandler" : true
			}
		},
		"default": {

			"engine" : {
				"html" : require('hbs').__express
			},
			"set" : {
				"view engine" : "html",
				"views" : app.locals.root + "app/views"
			},
			"use" : {
				/*
				"busboy" : busboy({
					immediate: true,
					limits: {
						fileSize: 100 * 1024 * 1024
					}
				})
				*/
			}

		}

	}

}
