import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, PathsProps } from './types/build/TypesWebpack/types';
import { webpackConfig } from './types/build/webpackConfig';

export default (env: BuildEnv) => {
  const paths: PathsProps = {
    pathToHtml: path.resolve(__dirname, 'public', 'index.html'),
    pathToEntry: path.resolve(__dirname, 'src', 'index.tsx'),
    pathOfBuild: path.resolve(__dirname, 'dist'),
    pathToSrc: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = 3000;
  const isDev = mode === 'development';

  const config: Configuration = webpackConfig(
    {
      mode: env.mode ? env.mode : 'development',
      paths,
      isDev,
      port: PORT,
    },
  );
  return config;
};
