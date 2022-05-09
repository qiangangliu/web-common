const config = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
    ],
  },
};

module.exports = config;
