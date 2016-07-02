webpackJsonp([2],{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	var ProductView = __webpack_require__(21);

	module.exports = function(){
		var view = new ProductView();
		view.render();
	}


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var ProductModel = __webpack_require__(22);
	var ProductTemplate = __webpack_require__(23);
	__webpack_require__(24) 

	var ProductView = Backbone.View.extend({
		events: {
		
		},
		initialize: function(){
			this.$el = $('#container');
			//this.modle = new IndexModel();
			//this.listenTo(this.model,"change",this.render);
			this.template = _.template(ProductTemplate);
		},
		render: function(){
			this.$el.html(this.template());		
		}
	});

	module.exports = ProductView;


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var ProductModel = Backbone.Model.extend({
		defaults: {
				
		},
		initialize: function(){
				
		}
	});
	module.exports = ProductModel;


/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "<h1 class=\"product\">Product 模块</h1>\n";

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "h1.product {\n\tcolor: green;\n}\n", ""]);

	// exports


/***/ }

});