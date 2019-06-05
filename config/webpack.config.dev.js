const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');


module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: baseConfig.output.path,
    compress: false,
    publicPath: "/",
    host: 'localhost',
    port: 2840,
    proxy: {},
    clientLogLevel: 'error',
    stats: 'errors-only',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    quiet: true,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
})

