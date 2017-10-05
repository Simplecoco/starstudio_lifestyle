var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');


var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');

module.exports={
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx'),
		vendor: [
			"react",
			"react-dom"
		]
	},
	output: {
		path: BUILD_PATH,
		filename: "bundle.js",
	},
	devtool: 'eval-source-map',
	devServer: {
		port: 8080,
		historyApiFallback: true,
		hot: true,
		inline: true
	},

	module: {
			loaders:[
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:"css-loader"
				}),
				include:path.resolve(ROOT_PATH,"styles")
			},
			
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: APP_PATH,
				exclude: path.resolve(ROOT_PATH,"node_modules")
			},
			
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=assets/[name][hash:8].[ext]',
				exclude: path.resolve(ROOT_PATH,"node_modules")
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename:"vendor.bundle.js"}),
		new HtmlwebpackPlugin({
			title: "material-ui-test",
			template: "./templates/index.html",
			inject: true
		}),
		new ExtractTextPlugin("css/[name]-[hash:8].css"),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			},
			minimize: true
		})
	],
	resolve: {
		extensions: [' ','.js','.jsx']
	}
};