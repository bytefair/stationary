var gulp = require('gulp')
var logger = require('../lib/compileLogger')
var webpack = require('webpack')
var config = require('../../webpack.config')('development')
var browserSync = require('browser-sync')

var webpackWatchTask = function (cb) {
  var initialCompile = false

  webpack(config).watch(200, function (err, stats) {
    logger(err, stats)
    browserSync.reload()
    // On the initial compile, let gulp know the task is done
    if (!initialCompile) {
      initialCompile = true
      cb()
    }
  })
}

gulp.task('webpack:watch', webpackWatchTask)
