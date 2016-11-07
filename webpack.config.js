module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }, {
                test: /\.html/,
                loader: 'raw'
            }, {
                test: /\.css/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts", '.html', '.css']
    }
};
