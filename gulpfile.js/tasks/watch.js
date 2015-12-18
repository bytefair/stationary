var gulp = require('gulp')
var watch = require('gulp-watch')

var src = {
  css: './src/styles/**/*.css',
  html: './src/templates/**/*.nunj',
  static: ['./src/static/**/*', '!./src/static/images/**/*'],
  images: ['./src/static/images/**/*.{gif,svg,png,jpg,jpeg}']
}

gulp.task('watch', ['browserSync'], function () {
  watch(src.html, function () { gulp.start('templates') })
  watch(src.css, function () { gulp.start('styles:development') })
  watch(src.static, function () { gulp.start('static') })
  watch(src.images, function () { gulp.start('images') })
})
