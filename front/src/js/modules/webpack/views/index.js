var $ = require('jquery');
var Backbone = require('Backbone');
var WebpackModel = require('../models/index.js');
var WebpackTemplate = require('../templates/index.html');

var WebpackView = Backbone.View.extend({
	events: {
	
	},
	initialize: function(){
		this.$el = $('#content');
		this.model = new WebpackModel();
		this.listenTo(this.model,"change",this.render);
		this.template = _.template(WebpackTemplate);
		this.$el.html(this.template(this.model.toJSON()));		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	}
});

module.exports = WebpackView;
