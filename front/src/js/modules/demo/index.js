var $ = require('jquery');
var DemoView = require('./views/index.js');


var $navbar = $('#navbar');
module.exports = function(){
	var view = new DemoView();
	view.render();
	console.log('index');
	$navbar.find('.navbar-nav li').removeClass('active');
	$navbar.find('.navbar-nav .index').addClass('active');
}
