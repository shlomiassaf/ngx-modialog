const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR
});

module.exports = webpackMerge(commonConfig, {
  /**
   * Merged metadata from webpack.common.js for index.html
   *
   * See: (custom attribute)
   */
  metadata: METADATA,

  // for faster builds use 'eval'
  devtool: 'inline-source-map',
  debug: true, // remove in production


  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  preLoaders: [
    {
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: [/node_modules/]
    }
  ],
  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    })
  ],
  module: {
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
  },
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('dist')
  },
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
});