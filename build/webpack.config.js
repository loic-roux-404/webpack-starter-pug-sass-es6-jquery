const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const multi = require('multi-loader');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebP = require("imagemin-webp");
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");


// Files
const utils = require('./utils');
const plugins = require('../postcss.config');

var env = null,
  publicPath = '',
  assetPath = '',
  devMap;

const config = {

  context: path.resolve(__dirname, '../src'),
  entry: {
    app: "./app.js",
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: publicPath,
    filename: 'assets/js/[name].[hash:7].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: devMap,
  resolve: {
    extensions: ['.js'],
    alias: {
      source: path.resolve(__dirname, '../src'), // Relative path of src
      images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
      fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
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
          loader: 'babel-loader?optional=runtime',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.txt$/,
        use: [{
          loader: 'text-loader'
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
              minimize: true,
              colormin: false,
              sourceMap: true
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
              colormin: false,
              sourceMap: true
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
        test: /(manifest\.webmanifest|browserconfig\.xml)$/,
        use: [
          {
            loader: "file-loader"
          },
          {
            loader: "app-manifest-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|webp)(\?.*)?$/,
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
          publicPath: './',
          limit: 1000,
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
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    runtimeChunk: {
      name: "manifest",
    },

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
    ///////\\\\\\\\\\
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:7].bundle.css',
      allChunks: true,
      sourceMap: true
    }),

    /*
      Pages
    */

    ////////// Desktop page\\\\\\\\\\
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/index.pug',
      inject: true,
      title: require('../src/content/global.json').title,
      global: require('../src/content/global.json'),
      content: require('../src/content/content.json'),
      //chunks:['fonts','images','TweenMax','iscroll']
    }),

    //   ...utils.pages(env),
    //   ...utils.pages(env, 'blog'),

    new GoogleFontsPlugin({
      fonts: [{
          family: "Didact Gothic"
        },
        {
          family: "Muli",
          variants: ["200", "300", "400", "700", "800", "900", "900i"]
        },
        {
          family: "Heebo",
          variants: ["300", "500", "700", "800", "900"]

        }
      ]
      /* ...options */
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'window.$': 'jquery',
      'anime': 'animejs/lib/anime.js',
      'scrollTo': 'gsap/ScrollToPlugin.js',
      'window.scrollTo': 'gsap/ScrollToPlugin.js',
    }),
    new WebpackNotifierPlugin({
      title: 'Portfolio'
    })
  ]
};

const prod = {

  plugins: [

    new CopyWebpackPlugin([{
        from: '../src/assets/fonts/**',
        to: '../dist/fonts/[name].[hash:7].woff2'
      },
      {
        from: '../src/assets/fonts/**',
        to: '../dist/fonts/[name].[hash:7].woff'
      }, {
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
        from: '../src/assets/fonts/**',
        to: '../dist/fonts/[name].[hash:7].woff2'
      },
      // {
      //   from: '../src/assets/Sites/**',
      //   to: '../dist/'
      // },
      {
        from: '../src/sitemap.xml',
        to: '../dist/sitemap.xml'
      },
      {
        from: '../src/.htaccess',
        to: '../dist/'
      },
      {
        from: '../src/*.txt',
        to: '../dist/'
      },
      // {
      //   from: '../src/assets/jeu/*',
      //   to: '../dist/'
      // },
      {
        from: '../src/assets/images/**',
        to: '../dist/assets/images/[name].[hash:7].webp'
      }

    ]),
    new ImageminPlugin({
      pngquant: ({
        quality: '80-85'
      }),
      plugins: [
        imageminMozjpeg({
          quality: 55,
          progressive: true
        }),
        ImageminWebP({
          quality: 75
        })
      ],
      overrideExtension: true,
      detailedLogs: false,
      strict: true
    }),
    new ManifestPlugin(),

    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      //filename: '[path].br[query]',
      //algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg|png|jpe?g|mp4|webp|eot|ttf|woff)$/,
      compressionOptions: {
        level: 6
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks 

  ]
};

// Configuration

module.exports = env => {
  assetPath = '../../';
  publicPath = '/';
  devmap = "source-map";
  if (env.NODE_ENV === 'development') {
    return config;
  } else if (env.NODE_ENV === 'production') {
    return merge(config, prod);
  }
};
