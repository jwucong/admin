const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const resolve = dir => path.join(__dirname, '..', dir || '')

const styleLoaders = loaderNames => {
  const output = [MiniCssExtractPlugin.loader]
  const loaders = loaderNames.map(name => ({
    loader: `${name}-loader`,
    options: {
      sourceMap: true
    }
  }))
  return output.concat(loaders)
}

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        exclude: /node_modules/,
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.css$/,
        use: styleLoaders(['css', 'postcss'])
      },
      {
        test: /\.(sass|scss)$/,
        use: styleLoaders(['css', 'postcss', 'sass'])
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            // `inline: false` forces the sourcemap to be output into a
            // separate file
            inline: false,
            // `annotation: true` appends the sourceMappingURL to the end of
            // the css file, helping the browser find the sourcemap
            annotation: true,
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
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
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: 'static/css/[id].[hash].css',
    })
  ]
})
