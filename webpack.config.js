// webpack.config.js
var path = require('path');

module.exports = {
  // entry point of our application
  entry: './src/main.js',
  // where to place the compiled bundle
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  devtool: 'source-map',
  // other configs...
  babel: {
    // enable stage 0 babel transforms.
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  module: {
    // `loaders` is an array of loaders to use.
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: "style!css!less",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css",
        exclude: /node_modules/
      }
    ]
  }
};
