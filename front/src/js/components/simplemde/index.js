var $ = require('jquery');
var SimplemdeCss = require('./css/simplemde.min.css');
var UploadCss = require('./css/uploadi.css');
var SimpleMDE = require('./js/simplemde.min.js');
var Uploadi = require('./js/uploadi.js');

var simplemde = null,isSaving = false,_this;
var editorHolder = '<div class="editor-holder"><img src="img/i_load.gif"/>&nbsp;&nbsp;编辑器初始化中……</div>';

//define markdown html format
function redefineRender(){
	simplemde.renderer.image = function(href,title,text){
		var html = '<p class="markdown-img"><span class="img-box" data-src="'+href+'"><span class="img-holderplace">技术说</span></span></p>';    
		return html; 
	} 
}
function Editor(opt){
	_this = this;
	_this.options = opt || {};
	_this.options.upload_url = _this.options.upload_url?_this.options.upload_url:"/upload/images";	
	_this.options.loading_src = _this.options.loading_src?_this.options.loading_src:"img/i_load.gif";	
}
Editor.prototype.removeEditor = function(){
	$(".editor-toolbar").remove();
	$(".CodeMirror-wrap").remove();
	$(".editor-preview-side").remove();
	simplemde = null;					
}
Editor.prototype.createEditor = function(callback){
	var $textArea = $("#"+_this.options.id);
	//editor holder
	_this.$editorHolder = $(editorHolder);
	_this.$editorHolder.insertAfter($textArea);
	_this.$editorHolder.remove();
	simplemde = new SimpleMDE({ 
		element: $textArea[0],
		uploadi: Uploadi,
		upload_url: _this.options.upload_url,
		loading_src: _this.options.loading_src,
		status: false,
		spellChecker: false,
		insertTexts: {
			image: Uploadi?["![](",")"]:["![](http://", ")"]	
		}
	});
	simplemde.codemirror.on("change",function(){
		_this.changeHandler();	
	});	
	callback && callback();
	//redefineRender();
	return false;
}
Editor.prototype.changeHandler = function(){
		
}
Editor.prototype.value = function(val){
	return simplemde.value(val);		
}
Editor.prototype.getHtml = function(){
	return simplemde.options.previewRender(simplemde.value());	
}
Editor.prototype.save = function(params,callback){
	if(isSaving){
		return;	
	}
	isSaving = true;
	$.ajax({
		type: "post",
		url: params.url,
		data: params.data,
		dataType: "json",
		success: function(ret){
			if(ret.status){
				callback && callback(null,ret);		
			}else {
				callback && callback(ret);		
			}
			isSaving = false;
		},
		error: function(e){
			callback && callback(e);	
			isSaving = false;
		}
	});
}
module.exports = Editor;
