import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import { buildPluginsProps } from './TypesWebpack/types';

export function buildPlugins({ pathToHtml }: buildPluginsProps) {
  const plugins = [];

  plugins.push(new HtmlWebpackPlugin({ template: pathToHtml }));
  plugins.push(new ProgressPlugin());

  return plugins;
}
