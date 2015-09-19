var gulp         = require('gulp');
var autoprefixer = require('autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var processors   = [
	autoprefixer({browsers: ["Android >= 4.3", "Chrome >= 39", "Edge >= 12", "Firefox >= 34", "Explorer >= 9", "iOS >= 7", "Safari >= 7", "ExplorerMobile >= 10"]})
];
var rename       = require('gulp-rename');

gulp.task('development', function() {
	return gulp.src('sanitize.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({
							outputStyle: 'expanded'
						}))
			.pipe(postcss(processors))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('./dist'));
});

gulp.task('minified', function() {
	return gulp.src('sanitize.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({
							outputStyle: 'expanded'
						}))
			.pipe(minifyCSS())
			.pipe(postcss(processors))
			.pipe(rename({suffix: '.min'}))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['minified', 'development']);
