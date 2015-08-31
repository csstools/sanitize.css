var gulp = require('gulp');

gulp.task('default', function () {
	var autoprefixer = require('autoprefixer-core');
	var minifyCSS    = require('gulp-minify-css');
	var postcss      = require('gulp-postcss');
	var sass         = require('gulp-sass');
	var sourcemaps   = require('gulp-sourcemaps');

	return gulp.src('sanitize.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});
