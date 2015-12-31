var path = require('path')
// var webpack = require('webpack')

console.log('DIR: ' + path.join(__dirname, 'dist'))

module.exports = {
  cache: true,
  entry: ['./src/_daft.js'],
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js/',
    filename: 'daft.js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'var',
    library: 'Daft'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [
  ]
}
