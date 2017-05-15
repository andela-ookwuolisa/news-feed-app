require('dotenv').config();
const webpack = require('webpack');
require('path');

const envsDefinePlugin = new webpack.DefinePlugin({
  'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID)
});

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg$/, use: ['file-loader', 'url-loader'] },

    ],

  },
  plugins: [
    envsDefinePlugin,
  ],

};

