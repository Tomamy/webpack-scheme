webpackJsonp([2],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var AboutView = __webpack_require__(15);

	module.exports = function(){
		var view = new AboutView();
		view.render();
	}


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var WebpackModel = __webpack_require__(16);
	var WebpackTemplate = __webpack_require__(17);

	var WebpackView = Backbone.View.extend({
		events: {
		
		},
		initialize: function(){
			this.$el = $('#content');
			this.model = new WebpackModel();
			this.listenTo(this.model,"change",this.render);
			this.template = _.template(WebpackTemplate);
			this.$el.html(this.template(this.model.toJSON()));		
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));		
		}
	});

	module.exports = WebpackView;


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var WebpackModel = Backbone.Model.extend({
		defaults: {
			notes: []		
		},
		initialize: function(){
			this.getNotes();	
		},
		getNotes: function(){
			var _this = this;
			$.ajax({
				type: 'get',
				url: '/notes/list?cate_id=3',
				dataType: 'json',
				success: function(ret){
					if(ret.status){
						_this.set('notes',ret.data);	
					}	
				}
			});	
		}

	});
	module.exports = WebpackModel; 
	;


/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "<%_.each(notes,function(val){%>\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\"><%=val.title%></h3>\t\n\t\t</div>\t\n\t\t<div class=\"panel-body\">\n\t\t\t<%=val.html%>\t\n\t\t</div>\n\t</div>\t\n<%})%>\n";

/***/ }

});