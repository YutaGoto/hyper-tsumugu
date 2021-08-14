module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: `${ __dirname }`,
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|svg)/,
        loader: 'url-loader'
      }
    ]
  }
}
