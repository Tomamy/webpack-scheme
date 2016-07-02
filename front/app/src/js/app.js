var Backbone = require('Backbone'); 
var Router = require('./router.js');
new Router();
Backbone.history.start();

window.addEventListener('orientationchange', function () {
    Backbone.history.fragment = null;
	Backbone.history.navigate(document.location.hash, true); 
}, false);
