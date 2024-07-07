const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Coffee Shop',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(mp4|webm)$/,
          use: {
            loader: "file-loader",
          },
        },
    ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Coffee Shop",
        template: "./src/index.html", // Add template path
        scriptLoading: "defer",
      }),
    ],
};