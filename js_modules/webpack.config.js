const path =require('path');
// Need this for webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  //Relative from project folder
  entry: "./src/index.js",
  output: {
    //Uses Node helper path to get absolute path to directory
    //Creates new directroy within called build
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    //Loaders like babel fall under module rules
    rules: [
      {
        use: 'babel-loader',
        //Only apply  babel on js files
        test: /\.js$/
      },
      {
        //Order matters Webpack load from left to right
        // This method loads css js as single file
//        use: ['style-loader', 'css-loader'],
//        test: /\.css/
        //Newer method
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png\gif\svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  //Need for webpack plugins
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;