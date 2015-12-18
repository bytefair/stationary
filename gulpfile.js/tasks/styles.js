var gulp = require('gulp')
var postcss = require('gulp-postcss')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
// PostCSS modules
var prefix = require('autoprefixer')
// big truck plugin
var nano = require('gulp-cssnano')

var processors = [ prefix ]

var devStyles = function () {
  return gulp.src('./src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream())
}

var prodStyles = function () {
  return gulp.src('./src/styles/*.css')
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(nano())
    .pipe(gulp.dest('./dist/styles'))
}

gulp.task('styles:development', devStyles)
gulp.task('styles:production', prodStyles)
