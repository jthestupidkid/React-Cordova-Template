var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src', 
	entry: ['./index.js'],
	output: {
		path: __dirname + '/www',
		filename: 'bundle.js'
	},
	node: {
		console: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loaders: ['react-hot','babel']
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(css|scss)$/,
				loader: 'style!css!sass',
				include: __dirname + '/src'
			},
			{
				test: /\.(png|woff|ttf|eog|svg|jpeg|jpg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: []
};