var $ = require('jquery');
var AboutView = require('./views/index.js');

module.exports = function(){
	var view = new AboutView();
	view.render();
}
