const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      News: path.resolve(__dirname, 'app/components/News.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Search: path.resolve(__dirname, 'app/components/Search.jsx'),
      Newsfeeds: path.resolve(__dirname, 'app/components/Newsfeeds.jsx'),
      API: path.resolve(__dirname, 'app/api/API.js'),
      Login: path.resolve(__dirname, 'app/components/Login.jsx'),
      Logout: path.resolve(__dirname, 'app/components/Logout.js'),
      Dispatcher: path.resolve(__dirname, 'app/dispatcher/newsDispatcher.js'),
      NewsActions: path.resolve(__dirname, 'app/actions/newsActions.js'),
      NewsStore: path.resolve(__dirname, 'app/stores/newsStore.js'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg$/, use: ['file-loader', 'url-loader'] },

    ],

  },

};

