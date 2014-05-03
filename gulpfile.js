var gulp = require('gulp')
var coffee = require('gulp-coffee')
var gutil = require('gulp-util')

var http = require('http')
var app = require('./build/app')

var port = 3000

gulp.task('coffee', function() {
	gulp.src('./app/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('./build'))
})

gulp.task('server', function() {
	http.createServer(app.onRequest).listen(port)
})

gulp.task('default', ['coffee', 'server'] )
