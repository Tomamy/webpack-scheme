var $ = require('jquery');
var Backbone = require('Backbone');
var index = require('./modules/index/index.js'); 
var routesIndex = [];

var $navbar = $('#navbar');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'index': 'index',
		'*allMissing': 'pathFinder'
	},
	index: index,
	pathFinder: pathFinder
});

function pathFinder(path){
	var handler;
	switch(path){
		case 'pain': 
			handler = require('bundle?lazy&name=pain!./modules/pain/index.js');
			handler(function(app){
				app();	
			});
			break;
		case 'webpack': 
			handler = require('bundle?lazy&name=webpack!./modules/webpack/index.js');
			handler(function(app){
				app();	
			});
			break;
		case 'gulp':
			handler = require('bundle?lazy&name=gulp!./modules/gulp/index.js');
			handler(function(app){
				app();	
			});
			break;
		case 'demo': 
			handler = require('bundle?lazy&name=demo!./modules/demo/index.js');
			handler(function(app){
				app();	
			});
			break;
		case 'addnote': 
			handler = require('bundle?lazy&name=addnote!./modules/addnote/index.js');
			handler(function(app){
				app();	
			});
			break;

		default:
			handler = require('bundle?lazy&name=404!./modules/404/index.js');
			handler(function(app){
				app();	
			});
			break;
	}
	//导航状态修改
	$navbar.find('.navbar-nav li').removeClass('active');
	var hashVal = location.hash.replace('#','');
	if(hashVal){
		$navbar.find('.navbar-nav .'+hashVal).addClass('active');
	}else {
		$navbar.find('.navbar-nav .index').addClass('active');
	}
}

