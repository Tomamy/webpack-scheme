webpackJsonp([6],{

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var IndexView = __webpack_require__(46);

	module.exports = function(){
		var view = new IndexView();
		view.render();

	}


/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var IndexModel = __webpack_require__(47);
	var IndexTemplate = __webpack_require__(48);
	__webpack_require__(49) 

	var IndexView = Backbone.View.extend({
		events: {
		
		},
		initialize: function(){
			this.$el = $('#container');
			//this.modle = new IndexModel();
			//this.listenTo(this.model,"change",this.render);
			this.template = _.template(IndexTemplate);
		},
		render: function(){
			this.$el.html(this.template());		
		}
	});

	module.exports = IndexView;


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var IndexModel = Backbone.Model.extend({
		defaults: {
				
		},
		initialize: function(){
				
		}
	});
	module.exports = IndexModel;


/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = "<h1 class=\"index\">Index 模块</h1>\n";

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, "h1.index {\n\tcolor: red;\n}\n", ""]);

	// exports


/***/ }

});