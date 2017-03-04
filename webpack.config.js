const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlPlugin = require("style-ext-html-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const OfflinePlugin = require('offline-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const DEV_MODE = process.env.NODE_ENV === 'development';


const Define = new webpack.DefinePlugin({
  'process.env.NODE_ENV': DEV_MODE ? '"development"' : '"production"',
});

const HtmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html'
});

const CopyWebpack = new CopyWebpackPlugin([
  { from: './src/images/misc', to: 'images/misc' },
  { from: './src/manifest.json', to: 'manifest.json' },
  { from: './src/robots.txt', to: 'robots.txt' },
  { from: './src/sitemap.xml', to: 'sitemap.xml' }
]);

const ExtractText = new ExtractTextPlugin("main.css");

const StyleExtHtml = new StyleExtHtmlPlugin('main.css');

const PurifyCSS = new PurifyCSSPlugin({
  paths: glob.sync(path.join(__dirname, 'dist/*.html')),
  minimize: false,
  purifyOptions: {
    rejected: true
  }
});

const Offline = new OfflinePlugin({
  safeToUseOptionalCaches: true,

  caches: {
    main: [
      'main.js',
      'index.html',
      '**/*.woff',
      '**/*.woff2',
      'images/offline-sprite-1x.png',
      'images/offline-sprite-2x.png',
      'images/banner.jpg',
      'images/mapa-de-minas.png'
    ]
  },

  ServiceWorker: {
    events: true,
    output: 'service-worker.js'
  },
  AppCache: {
    events: true
  }
});

const Imagemin = new ImageminPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
  pngquant: {
    quality: 1
  },
  plugins: [
    imageminMozjpeg({
      quality: 80,
      progressive: true
    })
  ]
});

const IgnorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

module.exports = {
    entry: {
      main: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
          test: /\.(woff2?)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
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
    plugins: (DEV_MODE) ? [
      Define,
      IgnorePlugin,
      HtmlWebpack,
      CopyWebpack,
      ExtractText,
      Imagemin
    ] : [
      Define,
      IgnorePlugin,
      HtmlWebpack,
      CopyWebpack,
      ExtractText,
      StyleExtHtml,
      // PurifyCSS,
      Offline,
      Imagemin
    ],
    resolve: {
      alias: {
        'handlebars' : 'handlebars/dist/handlebars.js'
      }
    }
};
