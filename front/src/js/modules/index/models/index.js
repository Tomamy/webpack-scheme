var $ = require('jquery');
var Backbone = require('Backbone');

var IndexModel = Backbone.Model.extend({
	defaults: {
		notes: []		
	},
	initialize: function(){
		this.getNotes();	
	},
	getNotes: function(){
		var _this = this;
		$.ajax({
			type: 'get',
			url: '/notes/list?cate_id=1',
			dataType: 'json',
			success: function(ret){
				if(ret.status){
					_this.set('notes',ret.data);	
				}	
			}
		});	
	}
});
module.exports = IndexModel;
