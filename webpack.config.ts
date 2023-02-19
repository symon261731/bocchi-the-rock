const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { buildDevServer } from './types/build/buildDevServer';
import { buildLoaders } from './types/build/buildLoader';

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: buildLoaders()
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html')
  })],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer:  buildDevServer(),
  
  
};