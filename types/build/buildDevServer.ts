



export const buildDevServer = () => {
    return {
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}