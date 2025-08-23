const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    console.log("val: " + env.prod);
    return {
        entry: "./src/index.ts",
        // Environment and Dev Server Config
        mode: env.prod ? "production" : "development",
        devServer: env.prod
            ? {}
            : {
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
            extensions: [".ts", ".js"],
        },
        output: {
            filename: "index.bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
    };
};
