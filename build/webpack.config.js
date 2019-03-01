const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
// Files
const utils = require('./utils');
const plugins = require('../postcss.config');

var env = null,
  publicPath = '';

const config = {

  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: publicPath,
    filename: 'assets/js/[name].[hash:7].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      source: path.resolve(__dirname, '../src'), // Relative path of src
      images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
      fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
      "anime": path.relative(__dirname, '../node_modules/','animejs/lib/anime.js'),
      //"TweenLite": path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TweenLite.min.js'),
      "TweenMax": path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TweenMax.min.js'),
      //"TimelineLite": path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TimelineLite.min.js'),
      "scrollTo": path.resolve(__dirname, '../node_modules/','gsap/src/minified/plugins/ScrollToPlugin.min.js'),
      //"TimelineMax": path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TimelineMax.min.js'),
      "ScrollMagic": path.resolve(__dirname, '../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
      "animation.gsap": path.resolve(__dirname, '../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
      "jquery.ScrollMagic": path.resolve(__dirname, '../node_modules', 'scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js'),
      "IScroll": path.resolve(__dirname, '../node_modules/iscroll/build/iscroll-probe.js'),
      //"jquery.easings": path.resolve(__dirname, '../node_modules/jquery.easing/jquery.easing.js'),
    }
  },


  /*
    Loaders with configurations
  */
  module: {
    //noParse: /script-loader/,
    rules: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },


      {
        test: /\.css$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
              colormin: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              colormin: false
            }
          }, // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader'
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          publicPath: '../../',
          limit: 3000,
          name: 'assets/images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          publicPath: '../../',
          limit: 5000,
          name: 'assets/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/videos/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],


    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          filename: 'assets/js/vendor.[hash:7].bundle.js',
          // sync + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  },

  plugins: [
    new CopyWebpackPlugin([{
        from: '../src/assets/files/*pdf',
        to: '../dist'
      },
      {
        from: '../src/assets/php/*.php',
        to: '../dist/'
      },
      {
        from: '../src/assets/*.json',
        to: '../dist/'
      },
      {
        from: '../src/assets/Sites/*',
        to: '../dist/'
      },
      {
        from: '../src/assets/jeu/*',
        to: '../dist/'
      },

    ]),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      pngquant: ({
        quality: '80-85'
      }),
      plugins: [imageminMozjpeg({
        quality: 60
      })]
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:7].bundle.css',
      allChunks: true
    }),

    /*
      Pages
    */

    // // Desktop page
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/index.pug',
      inject: true,
      title: require('../src/content/global.json').title,
      content: require('../src/content/content.json'),
      //chunks:['fonts','images','TweenMax','iscroll']
    }),

    //   ...utils.pages(env),
    //   ...utils.pages(env, 'blog'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      'anime': 'animejs/lib/anime.js',
      'TweenMax':'gsap',
      'TimelineMax':'gsap',
      'ScrollMagic':'scrollmagic',
      'window.ScrollMagic':'scrollmagic',
      'TweenMax.set':'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
      'jquery.ScrollMagic':'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
      '$.ScrollMagic':'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
      'scrollTo':'gsap/ScrollToPlugin.js',
      'window.scrollTo':'gsap/ScrollToPlugin.js',
    }),
    new WebpackNotifierPlugin({
      title: 'Portfolio'
    })
  ]
};



const prod = {


  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],

  },

  plugins: [
    new CopyWebpackPlugin([{
        from: '../src/assets/files/*pdf',
        to: '../dist'
      },
      {
        from: '../src/assets/php/*.php',
        to: '../dist/'
      },
      {
        from: '../src/assets/*.json',
        to: '../dist/'
      },
      {
        from: '../src/assets/Sites/*',
        to: '../dist/'
      },
      {
        from: '../src/assets/jeu/*',
        to: '../dist/'
      },

    ]),
    new ImageminPlugin({
      pngquant: ({
        quality: '80-85'
      }),
      plugins: [imageminMozjpeg({
        quality: 60
      })]
    }),

  ]
};



// Configuration
module.exports = env => {
  if (env.NODE_ENV === 'development') {
    publicPath = '/';
    return config;
  } else if (env.NODE_ENV === 'production') {
    publicPath = './';
    return config;
  }
};
