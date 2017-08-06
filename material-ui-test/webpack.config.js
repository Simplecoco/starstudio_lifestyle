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
			"react-dom",
			"material-ui",
			"material-ui-icons"
		]
	},
	output: {
		path: BUILD_PATH,
		filename: "bundle.js"
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback:true,
		hot: true,
		inline: true
	},

	module: {
			loaders:[
			{
				test: /\.css$/,
				loader: ["style-loader", "css-loader"],
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
				loader: 'file-loader?name=image/[name][hash:8].[ext]',
				exclude: path.resolve(ROOT_PATH,"node_modules")
			}
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename:"vendor.bundle.js"}),
		new HtmlwebpackPlugin({
			title: "material-ui-test",
			template: "./templates/index.html",
			inject: true
		}),
		new ExtractTextPlugin("./styles/style.css"),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings:false
			}
		})
	],
	resolve: {
		extensions: [' ','.js','.jsx']
	}
};