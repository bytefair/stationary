var gulp = require('gulp')
var del = require('del')

var cleanTask = function (cb) {
  del(['./dist']).then(function (paths) {
    cb()
  })
}

gulp.task('clean', cleanTask)
