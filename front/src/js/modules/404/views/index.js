var $ = require('jquery');
var Backbone = require('Backbone');
var IndexModel = require('../models/index.js');
var IndexTemplate = require('../templates/index.html');
require('../css/index.css') 

var IndexView = Backbone.View.extend({
	events: {
	
	},
	initialize: function(){
		this.$el = $('#container');
		//this.modle = new IndexModel();
		//this.listenTo(this.model,"change",this.render);
		this.template = _.template(IndexTemplate);
	},
	render: function(){
		this.$el.html(this.template());		
	}
});

module.exports = IndexView;
