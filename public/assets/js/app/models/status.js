define([
	'backbone.app'
], function( APP ){

	//
	var Parent = APP.Model;

	APP.Models.Status = Parent.extend({

		defaults: {
			files: [],
			progress: 0
		},

		// add in Backbone.APP?
		toJSON: function(){
			var data = Parent.prototype.toJSON.call(this);
			//fix collections
			_.each( this.attributes, function( item, key ){
				if( item instanceof Backbone.Collection || item instanceof Backbone.Collection){
					data[key] = item.toJSON();
				}
			});
			return data;
		}

	});

	return APP.Models.Status;

});
