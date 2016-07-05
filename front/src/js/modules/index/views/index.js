var $ = require('jquery');
var Backbone = require('Backbone');
var IndexModel = require('../models/index.js');
var IndexTemplate = require('../templates/index.html');

var IndexView = Backbone.View.extend({
	events: {
		'click h1': 'editHandler'			
	},
	initialize: function(){
		this.$el = $('#content');
		this.model = new IndexModel();
		this.listenTo(this.model,"change",this.render);
		this.template = _.template(IndexTemplate);
		this.$el.html(this.template(this.model.toJSON()));		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	},
	editHandler: function(){
	}
});

module.exports = IndexView;
