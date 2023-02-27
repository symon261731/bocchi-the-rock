import { RuleSetRule } from 'webpack';

interface loader {
    test: RegExp;
    use: string | Array<string>;
    exclude? :RegExp;
}

export function buildLoaders(isDev: boolean) : RuleSetRule[] {
  const tsLoader: loader = {
    test: /\.(ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        },
      },
    }, 'sass-loader'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|mp3)$/i,
    use: [{ loader: 'file-loader' }],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  return [tsLoader, scssLoader, fileLoader, svgLoader];
}
