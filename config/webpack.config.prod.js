const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const resolve = dir => path.join(__dirname, '..', dir || '');

const styleLoaders = (loaders = []) => {
	const cssLoader = {
		loader: 'css-loader',
		options: {
			importLoaders: loaders.length + 1,
			sourceMap: true
		}
	};
	const output = [MiniCssExtractPlugin.loader, cssLoader];
	const others = ['postcss'].concat(loaders).map(name => ({
		loader: `${name}-loader`,
		options: {
			sourceMap: true
		}
	}));
	return output.concat(others);
};

module.exports = merge(baseConfig, {
	mode: 'production',
	output: {
		publicPath: ''
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
				use: styleLoaders()
			},
			{
				test: /\.less$/,
				use: styleLoaders(['less'])
			},
			{
				test: /\.(sass|scss)$/,
				use: styleLoaders(['sass'])
			},
			{
				test: /\.(stylus|styl)$/,
				use: styleLoaders(['stylus'])
			}
		]
	},
	devtool: 'source-map',
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '.'
		},
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
						annotation: true
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
				removeComments: true
				// removeRedundantAttributes: true,
				// removeScriptTypeAttributes: true,
				// removeStyleLinkTypeAttributes: true,
				// useShortDoctype: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[hash:8].css',
			chunkFilename: 'static/css/[id].[hash:8].css'
		})
	]
});
