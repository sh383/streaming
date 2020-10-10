const path = require("path");
const autoprefixer = require("autoprefixer");
const extractCSS = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,

        use: [
          extractCSS.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer({ overrideBrowserslist: "cover 99.5%" }),
                ],
              },
            },
          },

          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [new extractCSS("styles.css")],
};

module.exports = config;
