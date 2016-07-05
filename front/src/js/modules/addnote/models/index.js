var $ = require('jquery');
var Backbone = require('Backbone');

var AddnoteModel = Backbone.Model.extend({
	defaults: {
		cates: []
	},
	initialize: function(){
		this.getCates();	
	},
	getCates: function(){
		var _this = this;
		$.ajax({
			type: 'get',
			url: '/cates/list',
			dataType: 'json',
			success: function(ret){
				if(ret.status){
					_this.set('cates',ret.data);	
				}	
			}
		});	
	},
	saveNote: function(){
		console.log('save note ');	
	}
});
module.exports = AddnoteModel;
