var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var react = require('gulp-react')
var htmlreplace = require('gulp-html-replace')

gulp.task('default', function() {
  return browserify('./source/app.js')
    .transform(babelify, {
      "plugins": ["transform-react-jsx"]
    })
    .bundle()
    .pipe(source('client.js'))
    .pipe(gulp.dest('./build/'));
});
