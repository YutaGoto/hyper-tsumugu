export const mode = "production";
export const entry = "./src/index.ts";
export const output = {
  path: `${__dirname}`,
  filename: "index.js"
};
export const resolve = {
  extensions: [".ts", ".js"]
};
export const module = {
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
};
