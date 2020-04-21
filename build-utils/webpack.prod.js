const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
    profile: [`${commonPaths.appEntry}/profile/Profile.js`],
  },
  output: {
    filename: "static/[name].js",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              importLoaders: 1,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),

    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
      chunks: ["profile"],
      filename: `${commonPaths.outputPath}/profile.html`,
    }),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
      chunks: ["app"],
    }),
  ],
};

module.exports = config;
