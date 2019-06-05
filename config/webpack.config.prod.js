const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    })
  ]
})
