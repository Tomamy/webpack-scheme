var $ = require('jquery');
var Backbone = require('Backbone');
var Editor = require('../../../components/simplemde/index.js');
var AddnoteModel = require('../models/index.js');
var AddnoteTemplate = require('../templates/index.html');
require('../style/scss/index.scss') 
var _this = null;
var AddnoteView = Backbone.View.extend({
	initialize: function(){
		_this = this;
		this.$el = $('#content');
		this.template = _.template(AddnoteTemplate);
		this.model = new AddnoteModel();
		this.listenTo(this.model,"change",this.render);
		this.$el.html(this.template(this.model.toJSON()));
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.editorHandler();

		this.$('#save').bind('click',this.saveHandler);
	},
	editorHandler: function(){
		this.editor = new Editor({
			id: "markdown",
			upload_url: "/upload/images"
		});
		this.editor.createEditor(function(simplemde){
		});
	},
	saveHandler: function(event){
		if($('#save').html() != '保存'){
			return;	
		}
		var data = {
			title: $('#note-title').val(),
			markdown: _this.editor.value(),
			html: _this.editor.getHtml(),
			cate_id: $('#note-cate option:selected').val(),
			_token: $('body').data('_token')
		};	
		$('#save').html('<img src="img/i_load.gif" style="width: 15px;height: 15px;">');
		$('#save-box font').remove();
		$.ajax({
			type: 'post',
			url: '/notes/add',
			data: data,
			dataType: 'json',
			success: function(ret){
				$('#save').html('保存');
				if(ret.status){
					$('<font color="green">保存成功</font>').insertBefore('#save');		
				}	
			}
		});
	}
});

module.exports = AddnoteView;
