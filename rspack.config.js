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
        test: /\.(png|jpg|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "tsumuguFace[ext]",
        },
      },
    ],
  },
};

module.exports = config;
