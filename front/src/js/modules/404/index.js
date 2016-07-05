var $ = require('jquery');
var IndexView = require('./views/index.js');

module.exports = function(){
	var view = new IndexView();
	view.render();

}
