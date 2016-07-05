var $ = require('jquery');
var Backbone = require('Backbone');
var DemoModel = require('../models/index.js');
var DemoTemplate = require('../templates/index.html');

var DemoView = Backbone.View.extend({
	events: {
		'click h1': 'editHandler'			
	},
	initialize: function(){
		this.$el = $('#content');
		this.model = new DemoModel();
		this.listenTo(this.model,"change",this.render);
		this.template = _.template(DemoTemplate);
		this.$el.html(this.template(this.model.toJSON()));		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	},
	editHandler: function(){
	}
});

module.exports = DemoView;
