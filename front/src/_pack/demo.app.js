webpackJsonp([4],{

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var DemoView = __webpack_require__(25);


	var $navbar = $('#navbar');
	module.exports = function(){
		var view = new DemoView();
		view.render();
		console.log('index');
		$navbar.find('.navbar-nav li').removeClass('active');
		$navbar.find('.navbar-nav .index').addClass('active');
	}


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);
	var DemoModel = __webpack_require__(26);
	var DemoTemplate = __webpack_require__(27);

	var DemoView = Backbone.View.extend({
		events: {
			'click h1': 'editHandler'			
		},
		initialize: function(){
			this.$el = $('#content');
			this.model = new DemoModel();
			this.listenTo(this.model,"change",this.render);
			this.template = _.template(DemoTemplate);
			this.$el.html(this.template(this.model.toJSON()));		
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));		
		},
		editHandler: function(){
		}
	});

	module.exports = DemoView;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	var Backbone = __webpack_require__(1);

	var DemoModel = Backbone.Model.extend({
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
				url: '/notes/list?cate_id=5',
				dataType: 'json',
				success: function(ret){
					if(ret.status){
						_this.set('notes',ret.data);	
					}	
				}
			});	
		}
	});
	module.exports = DemoModel;


/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "<%_.each(notes,function(val){%>\n\t<div class=\"panel panel-danger\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\"><%=val.title%></h3>\t\n\t\t</div>\t\n\t\t<div class=\"panel-body\">\n\t\t\t<%=val.html%>\t\n\t\t</div>\n\t</div>\t\n<%})%>\n";

/***/ }

});