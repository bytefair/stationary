var webpack = require('webpack')

module.exports = function (env) {
  // base config
  var webpackConfig = {
    context: __dirname + '/src/scripts',
    entry: './entry.js',
    output: {
      path: __dirname + '/dist/scripts',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [ {
        test: /\.js/,
        loader: 'standard',
        exclude: /node_modules/
      } ],
      loaders: [ {
        test: /\.js/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: /node_modules/
      } ]
    }
  }

  // development config
  if (env === 'development') {
    webpackConfig.devtool = 'source-map'
    webpack.debug
  }

  return webpackConfig
}
