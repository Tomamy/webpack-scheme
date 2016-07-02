var $ = require('jquery');
var Backbone = require('Backbone');
var AboutModel = require('../models/index.js');
var AboutTemplate = require('../templates/index.html');
require('../css/index.css') 

var AboutView = Backbone.View.extend({
	events: {
	
	},
	initialize: function(){
		this.$el = $('#container');
		//this.modle = new IndexModel();
		//this.listenTo(this.model,"change",this.render);
		this.template = _.template(AboutTemplate);
	},
	render: function(){
		this.$el.html(this.template());		
	}
});

module.exports = AboutView;
