 const path = require('path');

 module.exports = {
  entry: './src/index.js',
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
   output: {
    filename: 'aetherclient.bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };