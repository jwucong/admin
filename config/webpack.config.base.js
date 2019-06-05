const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir || '')

const entryFile = resolve('src/index.js')
const outputDir = resolve('dist')

module.exports = {
  entry: {
    app: entryFile
  },
  output: {
    // path: 输出路径
    path: outputDir,
    // filename: 资源输出路径
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/chunk.[name].[contenthash].js',
    // publicPath: 相对于打包后的index.html文件的静态资源路径
    publicPath: "./",
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
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        loader: 'sass-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      }
    ]
  }
}
