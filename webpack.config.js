var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + './public/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/public/',
		inline: true
	},
	module: {
		loaders: [
			{test: /\.sass$/, loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')},
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2)$/,
			// 	loader: 'file-loader?name=public/fonts/[name].[ext]'
			// }
			{ test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
			{ test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
			{ test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
			{ test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
			{ test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }

		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	]
};