import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { PathsProps } from './TypesWebpack/types';

export function buildPlugins({ pathToHtml }: PathsProps) {
  const plugins = [];

  plugins.push(new HtmlWebpackPlugin({ template: pathToHtml }));
  plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash: 8].css',
    chunkFilename: 'css/[name].[contenthash: 8].css',
  }));
  plugins.push(new ProgressPlugin());

  return plugins;
}
