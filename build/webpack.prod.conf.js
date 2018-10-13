const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const path = require('path')

function resolve (path__) {
  return path.resolve(__dirname, '..', path__)
}

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: resolve('src/index.ts'),
  output: {
    library: 'dx',
    libraryTarget: 'umd',
    filename: 'dx-sdk.js'
  }
})
