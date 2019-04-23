
const path = require('path');
const webpack = require('webpack');

const webpack_rules = [];
const webpackOption = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'responsive-dimensions-web.js',
    library: 'responsiveDimensionsWeb',
    libraryTarget: 'umd',
  },
  module: {
    rules: webpack_rules,
  },
};
const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;
