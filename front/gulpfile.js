var gulp = require('gulp');
var runSequence = require('run-sequence');
var server = require('gulp-devserver');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-clean-css');
var changed = require('gulp-changed');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('devserver', function () {
  gulp.src('./app')
    .pipe(server({
	  port: 33333,
      livereload: {
		clientConsole: true 
	  },
	  open: false,
	  debug: true,
      proxy: {
      	enable: true,
      	host: 'http://127.0.0.1:33334',
      	urls: [
			/^\/api/
		] 
      }
     }));
});

gulp.task("webpack", function(callback) {
	var config = Object.create(webpackConfig);
	// run webpack
	webpack(config,function(err, stats) {
		callback && callback();
	});
});
