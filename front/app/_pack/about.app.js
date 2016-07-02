webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var AboutView = __webpack_require__(14);

	module.exports = function(){
		var view = new AboutView();
		view.render();
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var AboutModel = __webpack_require__(15);
	var AboutTemplate = __webpack_require__(16);
	__webpack_require__(17) 

	var AboutView = Backbone.View.extend({
		events: {
		
		},
		initialize: function(){
			this.$el = $('#container');
			//this.modle = new IndexModel();
			//this.listenTo(this.model,"change",this.render);
			this.template = _.template(AboutTemplate);
		},
		render: function(){
			this.$el.html(this.template());		
		}
	});

	module.exports = AboutView;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var AboutModel = Backbone.Model.extend({
		defaults: {
				
		},
		initialize: function(){
				
		}
	});
	module.exports = AboutModel;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<h1 class=\"about\">Abount 模块</h1>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "h1.about {\n\tcolor: blue;\n\tbox-sizing: border-box;\n\t-webkit-transition: all 200ms ease-in;\n\ttransition: all 200ms ease-in;\n}\n", ""]);

	// exports


/***/ }
]);