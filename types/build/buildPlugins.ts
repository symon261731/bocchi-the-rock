import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildPluginsProps } from './TypesWebpack/types';

export function buildPlugins({ pathToHtml }: buildPluginsProps) {
  const plugins = [];

  plugins.push(new HtmlWebpackPlugin({ template: pathToHtml }));
  plugins.push(new MiniCssExtractPlugin());
  plugins.push(new ProgressPlugin());

  return plugins;
}
