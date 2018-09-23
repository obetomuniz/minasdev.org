const path = require("path");
const webpack = require("webpack");
const WebpackIsomorphicToolsPlugin = require("webpack-isomorphic-tools/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

const srcPath = path.join(__dirname, "../", "../", "/src/");
const distPath = path.join(__dirname, "../", "../", "/dist/");
const webpackIsomorphicTools = new WebpackIsomorphicToolsPlugin(
  require("../isomorphictools.config")
);

module.exports = () => {
  return {
    devtool: "inline-source-map",
    mode: "development",
    entry: {
      main: [
        "babel-polyfill",
        "webpack-hot-middleware/client?reload=true",
        "react-hot-loader/patch",
        `${srcPath}index`
      ]
    },
    output: {
      path: distPath,
      filename: "js/[name].js",
      publicPath: `http://localhost:3000/`
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: srcPath,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: webpackIsomorphicTools.regular_expression("images"),
          use: [
            {
              loader: "url-loader",
              options: { limit: 8192, name: "images/[name].[ext]" }
            },
            {
              loader: "img-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.svg$/,
          include: srcPath,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "svg/[name].[ext]",
                mimetype: "image/svg+xml"
              }
            },
            {
              loader: "img-loader"
            }
          ]
        },
        {
          test: /\.svg(\?[\s\S]+)?$/,
          exclude: srcPath,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "fonts/[name].[ext]",
                mimetype: "image/svg+xml"
              }
            }
          ]
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "url-loader",
              options: { limit: 8192, name: "fonts/[name].[ext]" }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("development") }
      }),
      new CopyWebpackPlugin([
        {
          from: `${srcPath}assets/images/facebook-thumb.png`,
          to: `${distPath}assets/images/facebook-thumb.png`
        },
        { from: `${srcPath}assets/images/vectors`, to: `${distPath}images/vectors` },
        { from: `${srcPath}assets/images/favicons`, to: `${distPath}images/favicons` },
        { from: `${srcPath}assets/static`, to: distPath }
      ]),
      new OfflinePlugin({
        safeToUseOptionalCaches: true,
        externals: [
          "index.html",
          "index.js",
          "images/background.jpg",
          "images/icons.svg",
          "images/mapa-de-minas.png",
          "images/objects.svg",
          "fonts/Montserrat-Black.woff2",
          "fonts/Montserrat-Black.woff",
          "fonts/Montserrat-Bold.woff2",
          "fonts/Montserrat-Bold.woff",
          "fonts/Montserrat-ExtraBold.woff2",
          "fonts/Montserrat-ExtraBold.woff",
          "fonts/Montserrat-Light.woff2",
          "fonts/Montserrat-Light.woff",
          "fonts/Montserrat-Regular.woff2",
          "fonts/Montserrat-Regular.woff",
          "fonts/Montserrat-SemiBold.woff2",
          "fonts/Montserrat-SemiBold.woff",
          "fonts/Montserrat-Thin.woff2",
          "fonts/Montserrat-Thin.woff"
        ],
        ServiceWorker: {
          events: true,
          output: "service-worker.js"
        }
      }),
      webpackIsomorphicTools.development()
    ],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@containers": path.resolve(__dirname, "src/containers/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        "@reducers": path.resolve(__dirname, "src/reducers/"),
        "@sagas": path.resolve(__dirname, "src/sagas/"),
        "@services": path.resolve(__dirname, "src/services/"),
        "@assets": path.resolve(__dirname, "src/"),
        "@helpers": path.resolve(__dirname, "src/helpers/")
      },
      extensions: [".js"]
    }
  };
};
