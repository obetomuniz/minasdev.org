const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OfflinePlugin = require('offline-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
      main: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.html/,
            use: [{
              loader: 'html-loader'
            }]
          },
          {
            test: /\.scss$/,
            use: DEV_MODE ? [{
              loader: 'style-loader'
            }, {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }] : ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
        },
        {
          test: /\.js/,
          use: [{
            loader: 'babel-loader',
            options: {
              ignore: "node_modules",
              comments: false
            }
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }]
        },
        {
          test: /\.svg$/,
          use: [{
            loader: 'url-loader'
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin([
        { from: './src/images/misc', to: 'images/misc' },
        { from: './src/manifest.json', to: 'manifest.json' },
        { from: './src/robots.txt', to: 'robots.txt' },
        { from: './src/sitemap.xml', to: 'sitemap.xml' }
      ]),
      new ExtractTextPlugin("styles.css"),
      new OfflinePlugin({
        safeToUseOptionalCaches: true,
        caches: 'all',
        ServiceWorker: {
          output: 'service-worker.js',
          events: true
        },
        responseStrategy: 'network-first'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': DEV_MODE ? '"development"' : '"production"',
      })
    ],
    resolve: {
      alias: {
        'handlebars' : 'handlebars/dist/handlebars.js'
      }
    }
};
