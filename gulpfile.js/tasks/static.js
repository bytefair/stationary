var gulp = require('gulp')
var changed = require('gulp-changed')

var staticTask = function () {
  return gulp.src(['./src/static/**/*', '!./src/static/images/**/*'])
    .pipe(changed('./dist'))
    .pipe(gulp.dest('./dist'))
}

gulp.task('static', staticTask)
