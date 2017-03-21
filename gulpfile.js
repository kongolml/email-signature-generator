const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')


var paths = {
	styles: 'css/main.scss',
	scripts: 'js/app.js'
}



// process scss, compress, autoprefix:
gulp.task('styles', function(){
	gulp.src(paths.styles)

		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))

		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))

		//.pipe(rename('style-gulp.css'))

		.pipe(gulp.dest('./css/'))
})


// minify js:
gulp.task('scripts', function(){
	gulp.src(paths.scripts)

	.pipe(uglify())

	.pipe(rename('app.min.js'))

	.pipe(gulp.dest('./js'))
})



gulp.task('watch', function(){
	gulp.watch(paths.styles, ['styles'])
	// gulp.watch(paths.scripts, ['scripts'])
})


gulp.task('default', ['styles', 'watch'])
