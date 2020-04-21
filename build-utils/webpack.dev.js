const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const port = process.env.PORT || 3000;

const config = {
  mode: "development",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
    profile: [`${commonPaths.appEntry}/profile/Profile.js`],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = config;
