import { Configuration } from 'webpack';
import { PathsProps } from './TypesWebpack/types';
import buildDevServer from './buildDevServer';
import { buildLoaders } from './buildLoader';
import { buildPlugins } from './buildPlugins';

interface webpackConfigOptions {
    paths: PathsProps,
    mode: 'development' | 'production' | 'none',
    isDev: boolean,
    port: number
}

export function webpackConfig(options: webpackConfigOptions) : Configuration {
  const {
    paths, mode, isDev, port,
  } = options;

  return {
    mode,

    entry: paths.pathToEntry,

    devtool: isDev ? 'inline-source-map' : undefined,

    module: {
      rules: buildLoaders(isDev),
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [paths.pathToSrc, 'node_modules'],

    },

    plugins: buildPlugins(paths),

    output: {
      filename: '[name].[contenthash].js',
      path: paths.pathOfBuild,
      clean: true,
    },

    devServer: isDev ? buildDevServer(port) : null,
  };
}
