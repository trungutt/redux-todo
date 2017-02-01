import path from 'path';

module.exports = {
	entry: [
		'./src/index.js',
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
		}],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
	},
};
