var gulp = require('gulp')
var changed = require('gulp-changed')
var imagemin = require('gulp-imagemin')

var opts = {
  progressive: true,
  multipass: true,
  optimizationLevel: 5
}

gulp.task('images', function () {
  return gulp.src('./src/static/images/**/*.{png,svg,gif,jpeg,jpg}')
    .pipe(changed('./dist/images'))
    .pipe(imagemin(opts))
    .pipe(gulp.dest('./dist/images'))
})
