const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve (path__) {
  return path.resolve(__dirname, '..', path__)
}

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: resolve('src/test.js'),
  devServer: {
    contentBase: false,
    port: 8080,
    host: '0.0.0.0'
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      inject: true
    })
  ]
})
