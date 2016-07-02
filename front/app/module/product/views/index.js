var $ = require('jquery');
var Backbone = require('Backbone');
var ProductModel = require('../models/index.js');
var ProductTemplate = require('../templates/index.html');
require('../css/index.css') 

var ProductView = Backbone.View.extend({
	events: {
	
	},
	initialize: function(){
		this.$el = $('#container');
		//this.modle = new IndexModel();
		//this.listenTo(this.model,"change",this.render);
		this.template = _.template(ProductTemplate);
	},
	render: function(){
		this.$el.html(this.template());		
	}
});

module.exports = ProductView;
