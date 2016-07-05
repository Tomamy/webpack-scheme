var $ = require('jquery');
var Backbone = require('Backbone');

var NavisModel = Backbone.Model.extend({
	defaults: {
		navis: [],
		curpos: location.hash.replace('#','')
	},
	initialize: function(){
		this.getNavis();	
	},
	getNavis: function(){
		var _this = this;
		$.ajax({
			type: 'get',
			url: '/cates/list',
			dataType: 'json',
			success: function(ret){
				if(ret.status){
					_this.set('navis',ret.data);	
				}	
			}
		});	
	}
});
module.exports = NavisModel;

