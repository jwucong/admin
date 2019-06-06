const path = require('path');
const root = dir => path.join(__dirname, '..', dir || '')
const entryFile = root('src/index.js')
const outputDir = root('dist')

module.exports = {
  entry: {
    app: entryFile
  },
  output: {
    path: outputDir,
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/chunk.[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {

    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [root('src')],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        loader: 'sass-loader',
        include: [root('src')],
        exclude: /node_modules/
      }
    ]
  }
}
