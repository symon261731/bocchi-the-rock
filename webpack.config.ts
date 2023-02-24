import path from 'path';
import { Configuration } from 'webpack';
// import  buildDevServer  from './types/build/buildDevServer';
// import { buildLoaders } from './types/build/buildLoader';
// import { buildPlugins } from './types/build/buildPlugins';
import { PathsProps } from './types/build/TypesWebpack/types';
import { webpackConfig } from './types/build/webpackConfig';


// module.exports = {

//   mode: 'development',
//   entry: './src/index.tsx',
//   module: {
//     rules: buildLoaders()
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   plugins: buildPlugins(paths),
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devtool: 'inline-source-map',
//   devServer:  buildDevServer(),
  
// };

export default () => {

  const paths: PathsProps = {
    pathToHtml: path.resolve(__dirname, 'public', 'index.html'),
    pathToEntry: path.resolve(__dirname, 'src', 'index.tsx'),
    pathOfBuild: path.resolve(__dirname, 'dist'),
    pathToSrc: path.resolve(__dirname, 'src'),
  }
  
  const mode = 'development';
  const PORT = 3000;
  const isDev = mode === 'development';

  const config: Configuration = webpackConfig(
    {
      mode: mode,
      paths,
      isDev,
      port: PORT,
    }
  );
  return config;
}