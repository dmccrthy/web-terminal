import path, { dirname } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default () => {
    return {
        entry: "./src/index.ts",
        // Environment and Dev Server Config
        mode: "development",
        devServer: {
            static: {
                directory: path.resolve(__dirname, "."),
            },
            hot: true,
            port: 8080,
            open: false,
        },
        plugins: [new MiniCssExtractPlugin()],
        // Handle loading typescript and sass
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
        },
        output: {
            filename: "index.bundle.js",
            path: path.resolve(__dirname, "./dist"),
        },
    };
};
