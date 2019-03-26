var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	devServer: {
		contentBase: 'dist',
		port: 3000,
		disableHostCheck: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /(nodule_modules|dist)/,
				use: ['css-loader']
				
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		inject: 'body',
		template: 'src/index.ejs'
	})]
}