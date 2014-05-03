var gulp = require('gulp')
var coffee = require('gulp-coffee')
var gutil = require('gulp-util')
var nodemon = require('gulp-nodemon')

gulp.task('coffee', function() {
	gulp.src('./app/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('./build'))
})

gulp.task('watch', function() {
  gulp.watch('./app/*.coffee', ['coffee'])
})

gulp.task('serve', function() {
  nodemon({script: './build/app.js'})
})

gulp.task('default', ['coffee', 'watch', 'serve'] )
