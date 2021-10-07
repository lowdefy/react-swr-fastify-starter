const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: './src/client/index',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      publicPath: '/client',
      template: './src/client/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
