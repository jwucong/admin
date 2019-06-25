const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const resolve = dir => path.join(__dirname, '..', dir || '');

const styleLoaders = (loaders = []) => {
	const cssLoader = {
		loader: 'css-loader',
		options: {
			importLoaders: loaders.length + 1
		}
	};
	const output = ['style-loader', cssLoader, 'postcss-loader'];
	const others = loaders.map(name => `${name}-loader`);
	return output.concat(others);
};

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	stats: 'minimal',
	output: {
		publicPath: '/'
	},
	module: {
		rules: [
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
});
