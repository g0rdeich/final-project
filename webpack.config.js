const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        htmlPlugin
    ]
};