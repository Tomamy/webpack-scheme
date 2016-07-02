var $ = require('jquery');
var Backbone = require('Backbone');
var index = require('../../module/index/index.js'); 
var routesIndex = [];

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'index': 'index',
		'*allMissing': 'pathFinder'
	},
	index,
	pathFinder
});

function pathFinder(path){
	var handler;
	switch(path){
		case 'about': 
			handler = require('bundle?lazy&name=about!../../module/about/index.js');
			handler(function(app){
				app();	
			});
			break;
		case 'product':
			handler = require('bundle?lazy&name=product!../../module/product/index.js');
			handler(function(app){
				app();	
			});
			break;
		default:
			break;
	}	
}

