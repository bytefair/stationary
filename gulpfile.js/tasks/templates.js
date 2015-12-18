var gulp = require('gulp')
var render = require('gulp-nunjucks-render')
var handleErrors = require('../lib/handleErrors')
var browserSync = require('browser-sync')
// var data = require('gulp-data')
// var fs = require('fs')

// var getData = function (file) {
//   var path = './src/data/data.json'
//   return JSON.parse(fs.readFileSync(path, 'utf8'))
// }

var templatesTask = function (env) {
  render.nunjucks.configure([
    './src/templates/',
    '!./src/templates/layouts',
    '!.src/templates/partials'], { watch: false })

  return gulp.src('./src/templates/**/*.nunj')
    // .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render())
    .on('error', handleErrors)
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
}

gulp.task('templates', templatesTask)
