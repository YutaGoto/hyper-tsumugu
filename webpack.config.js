const path = require("path");

const config = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.join(__dirname, ""),
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        loader: "url-loader",
      },
    ],
  },
};

module.exports = config;
