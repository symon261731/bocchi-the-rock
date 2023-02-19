

interface loader {
    test: RegExp;
    use: string | Array<string>;
    exclude? :RegExp;
}

export const buildLoaders: any = () => {

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

    return [tsLoader, scssLoader, fileLoader];
}
