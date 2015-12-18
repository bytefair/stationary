var notify = require('gulp-notify')

module.exports = function (error, callback) {
  notify
    .onError(error.toString().split(': ').join(':\n'))
    .apply(this, arguments)

  if (typeof this.emit === 'function') this.emit('end')
}
