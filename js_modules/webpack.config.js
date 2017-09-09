const path =require('path');

const config = {
  //Relative from project folder
  entry: "./src/index.js",
  output: {
    //Uses Node helper path to get absolute path to directory
    //Creates new directroy within called build
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};

module.exports = config;