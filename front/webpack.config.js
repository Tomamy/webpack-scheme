var path = require('path');

module.exports = function(condition){
	return {
		entry: {
			app: './src/js/app.js'
		},
		output: {
			path: path.join(__dirname, './src/_pack'),
			filename: 'app.js',
			chunkFilename: condition ? '[name].app-[hash:6].js' : '[name].app.js',
			publicPath: condition ? 'js/' : '_pack/'
		},
		externals: {
			jquery: 'window.$',
			Backbone: 'Backbone'
		},
		debug: true,
		plugins: [
		],	
		module: {
			//加载器配置
			loaders: [
				{ test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
				{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
				{test: /\.html$/,loader: "html"},

				{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
			]
		}
	}
}
