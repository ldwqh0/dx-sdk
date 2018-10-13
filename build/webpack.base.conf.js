module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.d.ts']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
}
