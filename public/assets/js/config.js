
var config = {
	baseUrl: "/assets/js/",
	callback: function(){
		window.init();
	},
	"paths": {
		"common": [
			"//cdn.kdi.co/js/common/0.4.0/common-min"
		],
		"jquery": [
			"//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"
		],
		"json3": [
			"//cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min"
		],
		"underscore": [
			"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min"
		],
		"handlebars": [
			"//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min"
		],
		"backbone": [
			"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
		],
		"backbone": [
			"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
		],
		"three-js": [
			"//cdnjs.cloudflare.com/ajax/libs/three.js/r61/three"
		],
		"backbone.app": [
			//"//cdn.kdi.co/js/backbone.app/0.9.5/backbone.app-min"
			"libs/backbone.app"
		],
		"backbone.input.mouse": [
			"libs/backbone.input.mouse"
		]
	},
	"shim": {
		"backbone": {
			"deps": [
				"underscore",
				"jquery"
			],
			"exports": "Backbone"
		},
		"underscore": {
			"exports": "_"
		},
		"backbone.app": {
			"deps": [
				"backbone"
			],
			"exports": "APP"
		},
		"backbone.input.mouse": {
			"deps": [
				"backbone.app"
			]
		},
		"helpers/underscore": {
			"deps": [
				"underscore"
			]
		},
		"helpers/handlebars": {
			"deps": [
				"handlebars"
			]
		}
	},
	"deps": [
		"common",
		"jquery",
		"underscore",
		"backbone",
		"json3",
		"handlebars",
		"backbone.app",
		"backbone.input.mouse",
		"helpers/underscore",
		"helpers/handlebars"
	]
};
