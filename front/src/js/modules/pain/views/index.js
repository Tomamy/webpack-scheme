var $ = require('jquery');
var Backbone = require('Backbone');
var PainModel = require('../models/index.js');
var PainTemplate = require('../templates/index.html');

var PainView = Backbone.View.extend({
	events: {
				
	},
	initialize: function(){
		this.$el = $('#content');
		this.model = new PainModel();
		this.listenTo(this.model,"change",this.render);
		this.template = _.template(PainTemplate);
		this.$el.html(this.template(this.model.toJSON()));		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	}
});

module.exports = PainView;
