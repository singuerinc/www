/* global require, module, __dirname */
const webpack = require('webpack');

module.exports = {
  entry: ['./_src/index.ts'],
  output: {
    path: `${__dirname}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/',
    library: 'app',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ],
  },
};
