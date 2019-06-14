const path = require('path');
const resolve = dir => path.join(__dirname, '..', dir || '')

module.exports = {
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].chunk.[hash].js',
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
        test: /\.(bmp|png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5120,
          name: 'static/images/[name].[hash:8].[ext]',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5120,
          name: 'static/images/[name].[hash:8].[ext]',
        }
      }
    ]
  }
}
