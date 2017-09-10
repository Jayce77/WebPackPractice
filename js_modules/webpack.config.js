const path =require('path');

const config = {
  //Relative from project folder
  entry: "./src/index.js",
  output: {
    //Uses Node helper path to get absolute path to directory
    //Creates new directroy within called build
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    //Loaders like babel fall under module rules
    rules: [
      {
        use: 'babel-loader',
        //Only apply  babel on js files
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;