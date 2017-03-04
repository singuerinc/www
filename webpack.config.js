/* global require, module, __dirname */
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  devtool: '#source-map',
  output: {
    path: `${__dirname}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
