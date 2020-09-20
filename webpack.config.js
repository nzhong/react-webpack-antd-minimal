const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")]
  },
  plugins: [htmlPlugin],
};