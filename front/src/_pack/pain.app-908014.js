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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var PainView = __webpack_require__(10);

	module.exports = function(){
		var view = new PainView();
		view.render();

	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var PainModel = __webpack_require__(11);
	var PainTemplate = __webpack_require__(12);

	var PainView = Backbone.View.extend({
		events: {
					
		},
		initialize: function(){
			this.$el = $('#content');
			this.model = new PainModel();
			this.listenTo(this.model,"change",this.render);
			this.template = _.template(PainTemplate);
			this.$el.html(this.template(this.model.toJSON()));		
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));		
		}
	});

	module.exports = PainView;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var PainModel = Backbone.Model.extend({
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
				url: '/notes/list?cate_id=2',
				dataType: 'json',
				success: function(ret){
					if(ret.status){
						_this.set('notes',ret.data);	
					}	
				}
			});	
		}
	});
	module.exports = PainModel;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<%_.each(notes,function(val){%>\n\t<div class=\"panel panel-info\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\"><%=val.title%></h3>\t\n\t\t</div>\t\n\t\t<div class=\"panel-body\">\n\t\t\t<%=val.html%>\t\n\t\t</div>\n\t</div>\t\n<%})%>\n";

/***/ }
]);