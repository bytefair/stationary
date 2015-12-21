var gulp = require('gulp')
var watch = require('gulp-watch')

var src = {
  css: './src/styles/**/*.css',
  html: './src/templates/**/*.nunj',
  static: ['./src/static/**/*', '!./src/static/images/**/*'],
  images: ['./src/static/images/**/*.{gif,svg,png,jpg,jpeg}']
}

gulp.task('watch', ['browserSync'], () => {
  watch(src.html, () => { gulp.start('templates') })
  watch(src.css, () => { gulp.start('styles:development') })
  watch(src.static, () => { gulp.start('static') })
  watch(src.images, () => { gulp.start('images') })
})
