/* global require, module, __dirname */
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    devtool: "#source-map",
    path: __dirname + "/assets",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
