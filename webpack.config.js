import path from 'path';
import webpack from 'webpack';

module.exports = {
	debug: true,
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
		'webpack/hot/only-dev-server', // Reload only the dev server
		path.resolve(__dirname, 'src/index'),
	],
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
		hot: true, // Activate hot loading
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Wire in the hot loading plugin
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel', // Include the react-hot loader
		}],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
};
