var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var server = require('gulp-devserver');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-clean-css');
var changed = require('gulp-changed');
var rev = require('gulp-rev');
var filter = require('gulp-filter');
var revCollector = require('gulp-rev-collector');
var gutil = require('gulp-util');
var gsass = require('gulp-sass');
var gclean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var gwatch = require('gulp-watch');
var webpack = require("webpack");
var pk = require('./package.json');

var condition = true; //true 生产，false开发

//生产环境
var pro_css = './assets/css',
	pro_js = './assets/js',
	pro_img = './assets/img',
	pro_lib = './assets/lib',
	pro_index = './assets',
	pro_css_filename = 'app.css';

//开发环境
var dev_css = './src/style/css/**/*.css',
	dev_css_dir = './src/style/css',
	dev_img = './src/img/**/*',
	dev_mainjs = './src/_pack/app.js',
	dev_js = './src/js/**/*',
	dev_chunkjs = ['./src/_pack/**/*','!./src/_pack/app.js'],
	dev_lib = './src/lib/**/*',
	dev_index = './src/index.html',
	dev_scss = './src/style/scss/**/*.scss';

//manifest path
var img_manifest = './src/_rev/img',
	js_manifest = './src/_rev/js',
	css_manifest = './src/_rev/css',
	rev_manifest = './src/_rev/**/*.json';

var htmlminOptions = {
	removeComments: true,//清除HTML注释
	collapseWhitespace: true,//压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==>     <input />
	removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input     />
	removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	minifyJS: true,//压缩页面JS
	minifyCSS: true//压缩页面CSS
}

//遍历目录获取目录下所有文件的相对路径
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file.replace('./src/',''));
          next();
        }
      });
    })();
  });
};

gulp.task('devserver', function () {
  gulp.src('./')
    .pipe(server({
	  port: 33333,
      livereload: {
		clientConsole: true 
	  },
	  open: false,
	  debug: true,
      proxy: {
      	enable: true,
      	host: 'http://127.0.0.1',
      	urls: [
			/^\/cates/,
			/^\/notes/,
			/^\/safe/
		] 
      }
     }));
});

gulp.task("webpack", function(callback) {
	var webpackConfig = require("./webpack.config.js");
	var config = webpackConfig(condition);
	// run webpack
	webpack(config,function(err, stats) {
		callback && callback();
	});
});

gulp.task("img",function(){
	return gulp.src(dev_img)
		.pipe(gulpif(condition,rev()))
		.pipe(gulp.dest(pro_img))
		.pipe(gulpif(condition,rev.manifest()))
		.pipe(gulpif(condition,gulp.dest(img_manifest)));
});

gulp.task("mainjs",function(){
	return gulp.src(dev_mainjs)
		.pipe(gulpif(
			condition,uglify().on('error',gutil.log)	
		))
		.pipe(gulpif(condition,rev()))
		.pipe(gulp.dest(pro_js))
		.pipe(gulpif(condition,rev.manifest()))
		.pipe(gulpif(condition,gulp.dest(js_manifest)));
});
gulp.task("chunkjs",function(){
	dev_chunkjs.push(rev_manifest);
	return gulp.src(dev_chunkjs)
		.pipe(gulpif(condition,revCollector()))
		.pipe(gulpif(condition,uglify()))
		.pipe(gulp.dest(pro_js));
});

gulp.task('css',function(){
	return gulp.src(dev_css)
		.pipe(concat(pro_css_filename))
		.pipe(gulpif(
			condition,cssmin()	
		))
		.pipe(gulpif(condition,rev()))
		.pipe(gulp.dest(pro_css))
		.pipe(gulpif(condition,rev.manifest()))
		.pipe(gulpif(condition,gulp.dest(css_manifest)));
});

gulp.task('scss',function(){
	return gulp.src(dev_scss)
		.pipe(gsass().on('error',gsass.logError))
		.pipe(autoprefixer())	
		.pipe(gulpif(condition,cssmin()))
		.pipe(gulp.dest(dev_css_dir));	
});

gulp.task('lib',function(){
	return gulp.src(dev_lib)
		.pipe(gulp.dest(pro_lib));
});

gulp.task('index',function(){
	var indexFile = gulp.src([rev_manifest,dev_index]);
	if(condition){
		walk(dev_css_dir,function(err,results){
			if (err) throw err;
			for(var i = 0; i<results.length;i++){
				var reg = new RegExp('<link[^>]+'+results[i]+'[^>]+>');		
				if(i == results.length - 1){
					indexFile = indexFile.pipe(replace(reg,'<link rel="stylesheet" href="css/' + pro_css_filename + '">'));	
				}else {
					indexFile = indexFile.pipe(replace(reg,''));
				}
			}
			indexFile = indexFile.pipe(replace('_pack/app.js','js/app.js'));
			indexFile.pipe(gulpif(condition,revCollector()))
			.pipe(gulpif(
				condition,htmlmin(htmlminOptions)	
			))
			.pipe(gulp.dest(pro_index));
		});	
	}else {
		indexFile.pipe(gulpif(condition,revCollector()))
		.pipe(gulpif(
			condition,htmlmin(htmlminOptions)	
		))
		.pipe(gulp.dest(pro_index));
	}
});

//清空部署文件夹
gulp.task('cleandeploy',function(done){
	return gulp.src('../back/public/'+pk.name+'/**/*')
		.pipe(gclean());
});
//复制assets中的所有文件到后台public文件夹下
gulp.task('copy2deploy',function(){
	gulp.src('./assets/**/*')
		.pipe(gulp.dest('../back/public/'+pk.name));		
});

//watch
gulp.task('watch',function(){
	gwatch(dev_js,function(){
		runSequence(['webpack']);	
	});
	//gulp.watch(dev_scss,['scss']);
	gwatch(dev_scss,function(){
		runSequence(['scss']);	
	});
});

//开发环境
gulp.task('dev',function(done){
	condition = false;
	runSequence (
		['webpack'],
		['scss'],
		['watch'],
		['devserver'],
	done);
});

//生产环境
gulp.task('pro',function(done){
	runSequence (
		['webpack'],
		['img'],
		['scss'],
		['css'],
		['mainjs'],
		['chunkjs'],
		['lib'],
		['index'],
	done);
});

//部署
gulp.task('deploy',['pro'],function(done){
	runSequence(
		//['cleandeploy']
		['copy2deploy']
	);
});




