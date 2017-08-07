/* global require, module, __dirname */

module.exports = {
  entry: ['./_src/index.ts'],
  devtool: 'cheap-eval-source-map',
  output: {
    path: `${__dirname}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/',
    library: 'app',
    libraryTarget: 'umd',
  },
  plugins: [
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
