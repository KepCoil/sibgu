var 
	gulp           = require('gulp'),
	sass           = require('gulp-sass'),
	browserSync    = require('browser-sync'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
	del            = require('del'),
	autoprefixer   = require('gulp-autoprefixer'),
	notify         = require("gulp-notify");



gulp.task('browser-sync', function() {
	browserSync({
		// server: {baseDir: 'app'},
		proxy: 'sibgu',
		notify: false,
		browser: 'firefox',
	});
});


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('common-js', function() {
	return gulp.src([
		'app/js/common.js',
		])
	//.pipe(concat('common.min.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});


gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/mmenu/jquery.mmenu.all.js',
		'app/libs/equal-heights/jquery.equalheights.min.js',
		'app/libs/owl.carousel/dist/owl.carousel.min.js'
		])
	.pipe(concat('libs.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.php', browserSync.reload);
});


gulp.task('default', ['watch']);