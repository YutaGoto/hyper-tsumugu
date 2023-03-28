const path = require("path");

/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: "production",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, ""),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: "url-loader",
      },
    ],
  },
};

module.exports = config;
