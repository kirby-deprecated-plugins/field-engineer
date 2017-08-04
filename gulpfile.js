var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
//var sourcemaps = require('gulp-sourcemaps');

// css
gulp.task('css', function() {
	gulp.src('assets/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		//.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('fields/engineer/assets/css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('fields/engineer/assets/css'))
		.pipe(notify("CSS generated!"))
	;
});

// JS
gulp.task('js', function() {
	gulp.src('assets/js/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('fields/engineer/assets/js'))
		.pipe(uglify()).on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('fields/engineer/assets/js'))
		.pipe(notify("JS generated!"))
	;
});

// Default
gulp.task('default',function() {
	gulp.watch('assets/scss/*.scss',['css']);
	gulp.watch('assets/js/*.js',['js']);
});