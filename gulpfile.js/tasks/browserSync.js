var browserSync = require('browser-sync')
var gulp = require('gulp')

var browserSyncTask = function () {
  browserSync.init({
    server: { baseDir: 'dist' }
  })
}

gulp.task('browserSync', browserSyncTask)
