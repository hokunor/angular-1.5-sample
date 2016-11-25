var webpack = require('webpack');
var path = require('path');

var AssetsWebpackPlugin = require('assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

var DEV = JSON.parse(process.env.PROD_ENV || '0');
var PROD = !DEV;

var settings = {
    destDir: '/public/'
};

settings.root = path.join(__dirname, path.dirname(settings.destDir));

var plugins = [
    new ExtractTextPlugin("[name].css"),
    new AssetsWebpackPlugin(),
    new CleanWebpackPlugin([settings.destDir.split('/').slice(-2)[0]], {
        root: settings.root,
        verbose: true,
        dry: false
    })
];

if (PROD) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: PROD, compress: { warnings: false } }));
}

if (DEV) {
    plugins.push(new LiveReloadPlugin());
}

module.exports = {
  cache: true,
  context: __dirname,
  entry: './app/griddynamics.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "public")
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015']}},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + (PROD ? "minimize" : "-minimize") + "!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + (PROD ? "minimize" : "-minimize")) },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
      { test: /\.html$/, include: /app/, loader: 'ngtemplate?relativeTo=' + path.resolve(__dirname, './app') + '/!html'},

    ]
  },
  plugins: plugins
}
