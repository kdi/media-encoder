var hbs = require('hbs'),
	Parent = require("brisk").getHelper("class");

var helper = Parent.extend({
	init: function( site ){

		// configure handlebars
		this.setup();

		hbs.registerHelper('date', this.date);
		hbs.registerHelper("eq", this.eq);
		hbs.registerHelper("contains", this.contains);

		//return Parent.prototype.init.call(this, site );

	},

	setup: function(){

		var blocks = {};

		hbs.registerHelper('extend', function(name, context) {
			var block = blocks[name];
			if (!block) {
				block = blocks[name] = [];
			}
			block.push(context.fn(this));
		});

		hbs.registerHelper('block', function(name) {
			var val = (blocks[name] || []).join('\n');

			// clear the block
			blocks[name] = [];
			return val;
		});
	},

	date: function(str) {
		var d = new Date(str);
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var year = d.getFullYear();
		return month + "/" + day + "/" + year;
	},

	// check if two values are equal
	eq: function( a, b, options ){
		return (a == b) ? options.fn( this ) : options.inverse( this );
	},

	// check if a value is contained in an array
	contains: function( value, array, options ){
		// fallback...
		array = ( array instanceof Array ) ? array : [array];
		return (array.indexOf(value) > -1) ? options.fn( this ) : "";
	},

	self: function() {
		return this.hbs;
	}

});


module.exports = helper;
