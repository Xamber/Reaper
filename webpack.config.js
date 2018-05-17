const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: "./src/polyfills.ts",
    main: "./src/main.ts"
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ], exclude: /node_modules/ },
      { test: /\.html$/, loader: "html-loader" },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
};