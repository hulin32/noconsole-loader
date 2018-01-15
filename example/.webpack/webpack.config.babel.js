const path = require('path');

module.exports = {
  entry: path.resolve(`${__dirname}/../`, '') + '/file.js',
  output: {
    path: path.resolve(`${__dirname}/../`),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(`${__dirname}/../../`, 'src') + '/index.js',
          },
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  }
};

