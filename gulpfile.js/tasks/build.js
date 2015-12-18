var gulp = require('gulp')
var gulpSequence = require('gulp-sequence')

var development = function (cb) {
  gulpSequence('clean'
              , 'templates'
              , 'static'
              , 'styles:development'
              , 'webpack:watch'
              , 'watch'
              , cb)
}

var production = function (cb) {
  gulpSequence('clean',
               'templates',
               'static',
               'styles:production',
               'webpack:production',
               cb)
}

gulp.task('default', ['development'])
gulp.task('development', development)
gulp.task('production', production)
