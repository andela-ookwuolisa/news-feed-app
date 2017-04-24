module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      News: 'app/components/News.jsx',
      About: 'app/components/About.jsx',
      Search: 'app/components/Search.jsx',
      Newsfeeds: 'app/components/Newsfeeds.jsx',
      API: 'app/api/API.js',
      Login: 'app/components/Login.jsx',
      Dispatcher: 'app/dispatcher/newsDispatcher.js',
      NewsActions: 'app/actions/newsActions.js',
      NewsStore: 'app/stores/newsStore.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtools: 'cheap-module-eval-source-map'
};

