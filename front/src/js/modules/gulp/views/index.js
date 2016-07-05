var $ = require('jquery');
var Backbone = require('Backbone');
var GulpModel = require('../models/index.js');
var GulpTemplate = require('../templates/index.html');

var GulpView = Backbone.View.extend({
	events: {
		'click h1': 'editHandler'			
	},
	initialize: function(){
		this.$el = $('#content');
		this.model = new GulpModel();
		this.listenTo(this.model,"change",this.render);
		this.template = _.template(GulpTemplate);
		this.$el.html(this.template(this.model.toJSON()));		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	},
	editHandler: function(){

	}
});

module.exports = GulpView;
