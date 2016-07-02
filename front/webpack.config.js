var path = require('path');

module.exports = {
    entry: {
        app: './app/src/js/app.js'
    },
    output: {
        path: path.join(__dirname, './app/_pack'),
        filename: 'app.js',
		chunkFilename: '[name].app.js',
		publicPath: '_pack/'
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
