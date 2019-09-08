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
const GoogleFontsPlugin = require("google-fonts-plugin");
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
//post css plugins
const autoprefixer = require("autoprefixer");
const postcss_import = require("postcss-import");
const post_env = require("postcss-preset-env")



const $version = "3.3.0";

// Files
const utils = require('./utils');
const isDev = env === 'development';


var env = null,
  publicPath = '',
  assetPath = '',
  devMap;

const config = {
  context: path.resolve(__dirname, '../src'),
  devtool: 'inline-source-map',
  entry: {
    app: "./app.js",
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
        env === 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: isDev,
            minimize: true,
            colormin: false,
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        isDev ? MiniCssExtractPlugin.loader : 'style-loader', // creates style nodes from JS strings
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
            sourceMap:isDev,
            colormin: false
          }
        }, // translates CSS into CommonJS
        {
          loader: 'postcss-loader',
          options:
          {
            sourceMap: isDev,
            plugins: function () {
              return [
                autoprefixer,
                postcss_import,
                post_env
              ]
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev
          }
        }, // compiles Sass to CSS
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
      test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
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
        publicPath:'../../',
        limit: 1000,
        name: 'assets/videos/[name].[hash:7].[ext]'
      }
    },
    {
      test:/\.(pdf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/files/[name].[ext]'
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
    /////////\\\\\\\\\\
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:7].bundle.css',
      allChunks: true,
      options: { sourceMap: true },
    }),
    /*
      Pages
    */
    ////////// Desktop page\\\\\\\\\\
    new HtmlWebpackPlugin({
      filename: 'en/index.html',
      template: 'views/en/index.pug',
      inject: true,
      title: require('../src/content/global.json').title,
      global: require('../src/content/global.json'),
      content: require('../src/content/content.json'),
      version: $version
      //chunks:['fonts','images','TweenMax','iscroll']
    }),

    new HtmlWebpackPlugin({
      filename: `fr/index.html`,
      template: 'views/fr/index.pug',
      inject: true,
      title: require('../src/content/fr/global.json').title,
      global: require('../src/content/fr/global.json'),
      content: require('../src/content/fr/content.json'),
      version: $version
    }),
    //   ...utils.pages(env, 'blog'),

    new webpack.ProvidePlugin({
      'anime': 'animejs/anime.js',
      'scrollTo': 'gsap/ScrollToPlugin.js',
      'window.scrollTo': 'gsap/ScrollToPlugin.js',
    }),
    new WebpackNotifierPlugin({
      title: 'Portfolio'
    }),
    //new DashboardPlugin()
  ]
};

const prod = {

  plugins: [

    new CopyWebpackPlugin([{
      from: '../src/assets/fonts/**',
      to: '../dist/assets/fonts/[name].[hash:7].[ext]'
    },
    {
      from: '../src/assets/files/*pdf',
      to: '../dist'
    },
    {
      from: '../src/**.php',
      to: '../dist/'
    },
    {
      from: '../src/assets/*.json',
      to: '../dist/'
    },
    {
      from: '../src/googledf8020a3ab56ea95.html',
      to: '../dist/googledf8020a3ab56ea95.html'
    },
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
      detailedLogs: true,
      strict: true
    }),
    new AppManifestWebpackPlugin({
      logo: '../src/assets/images/favicon.png',
      output: '/manifest/', // default '/'. Can be absolute or relative

      persistentCache: true,
      // Inject the html into the html-webpack-plugin. Default true
      inject: true,
      config: {
        path: '../src/assets/images/',
        appName: 'portfolio-website-loic-roux',
        appDescription: 'Portfolio of a fullstack Web developer at Lyon',
        developerName: 'Loïc Roux',
        developerURL: 'https://www.loicroux.com',
        //background: '#F0F5F5', 
        theme_color: '#3C6382',
        display: 'browser',
        orientation: 'portrait', // Android orientation: "portrait" or "landscape". `string`
        start_url: '/', // Android start application's URL. `string`
        version: $version, // Your application's version number. `number`
        icons: {
          android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
          appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
          appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
          coast: { offset: 25 }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
          favicons: true, // Create regular favicons. `boolean`
          firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background }`
          windows: true, // Create Windows 8 tile icons. `boolean` or `{ background }`
          yandex: false
        }
      }
    }),

    new webpack.DefinePlugin({
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
  publicPath = '../';
  devMap = "cheap-module-eval-source-map";
  if (env.NODE_ENV === 'development') {
    return config;
  } else if (env.NODE_ENV === 'production') {
    return merge(config, prod);
  }
};
