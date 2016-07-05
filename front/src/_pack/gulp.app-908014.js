webpackJsonp([3],{

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var DemoView = __webpack_require__(20);


	var $navbar = $('#navbar');
	module.exports = function(){
		var view = new DemoView();
		view.render();
		console.log('index');
		$navbar.find('.navbar-nav li').removeClass('active');
		$navbar.find('.navbar-nav .index').addClass('active');
	}


/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var GulpModel = __webpack_require__(21);
	var GulpTemplate = __webpack_require__(22);

	var GulpView = Backbone.View.extend({
		events: {
			'click h1': 'editHandler'			
		},
		initialize: function(){
			this.$el = $('#content');
			this.model = new GulpModel();
			this.listenTo(this.model,"change",this.render);
			this.template = _.template(GulpTemplate);
			this.$el.html(this.template(this.model.toJSON()));		
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));		
		},
		editHandler: function(){

		}
	});

	module.exports = GulpView;


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var GulpModel = Backbone.Model.extend({
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
				url: '/notes/list?cate_id=4',
				dataType: 'json',
				success: function(ret){
					if(ret.status){
						_this.set('notes',ret.data);	
					}	
				}
			});	
		}
	});
	module.exports = GulpModel;


/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<%_.each(notes,function(val){%>\n\t<div class=\"panel panel-warning\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\"><%=val.title%></h3>\t\n\t\t</div>\t\n\t\t<div class=\"panel-body\">\n\t\t\t<%=val.html%>\t\n\t\t</div>\n\t</div>\t\n<%})%>\n";

/***/ }

});