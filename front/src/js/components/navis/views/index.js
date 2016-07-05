var $ = require('jquery');
var Backbone = require('Backbone');
var NavisModel = require('../../../common/models/cates.js');
var NavisTemplate = require('../templates/index.html');
require('../style/scss/index.scss');

var NavisView = Backbone.View.extend({
	events: {
	
	},
	initialize: function(){
		this.$el = $('#navbar .navbar-nav');
		this.template = _.template(NavisTemplate);
		this.model = new NavisModel();
		this.listenTo(this.model,"change",this.render);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
	}
});

module.exports = NavisView;
