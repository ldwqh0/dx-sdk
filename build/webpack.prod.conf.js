const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    library: 'dx',
    libraryTarget: 'umd',
    filename: 'dx-sdk.js'
  }
})
