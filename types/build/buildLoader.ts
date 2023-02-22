import { RuleSetRule } from "webpack";


interface loader {
    test: RegExp;
    use: string | Array<string>;
    exclude? :RegExp;
}

export function buildLoaders() : RuleSetRule[] {

    const tsLoader: loader = {
            test: /\.(ts|tsx)$/, 
            use: 'ts-loader',
            exclude: /node_modules/,
    }

    const scssLoader: loader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
    }

    const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    }

    return [tsLoader, scssLoader, fileLoader, svgLoader];
}
