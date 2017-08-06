/* global require, module, __dirname */
module.exports = {
  entry: ['./__tests__/unit/app.test.ts'],
  devtool: 'cheap-eval-source-map',
  output: {
    path: `${__dirname}/__tests__/unit`,
    filename: 'tests.js',
  },
  plugins: [],
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
