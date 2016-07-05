var Backbone = require('Backbone'); 
var Router = require('./router.js');
var NavisView = require('./components/navis/index.js');

new Router();
Backbone.history.start();

window.addEventListener('orientationchange', function () {
    Backbone.history.fragment = null;
	Backbone.history.navigate(document.location.hash, true); 
}, false);

NavisView();

//获取TOKEN
$.ajax({
	type: 'get',
	url: '/safe/token',
	async: false,
	success: function(ret){
		$('body').data('_token',ret);
	}
});
