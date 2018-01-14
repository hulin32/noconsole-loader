import path from 'path';

module.exports = {
  entry: './file.js',
  output: {
    path: path.resolve(`${__dirname}/../`, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(`${__dirname}/../`, 'src') + '/loader.js',
          },
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  }
};

