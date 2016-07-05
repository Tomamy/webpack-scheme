var $ = require('jquery');
var Backbone = require('Backbone');

var PainModel = Backbone.Model.extend({
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
			url: '/notes/list?cate_id=2',
			dataType: 'json',
			success: function(ret){
				if(ret.status){
					_this.set('notes',ret.data);	
				}	
			}
		});	
	}
});
module.exports = PainModel;
