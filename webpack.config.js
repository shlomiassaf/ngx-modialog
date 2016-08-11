const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;


module.exports = {
  // for faster builds use 'eval'
  devtool: 'inline-source-map',
  debug: true, // remove in production

  entry: {
    'vendor': ['webpack/hot/dev-server', './src/demo/vendor.ts'],
    'app': './src/bootstrap.ts' // our angular app
  },

  // Config for our build files
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "node_modules", "angular2")
          // Add more as needed or replace to include all modules:
          //path.resolve(__dirname, "node_modules2")
        ],
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'},

      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}

    ],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks: 2,
      chunks: ['app', 'vendor']
    })
  ],
  resolve: {
    root: [
      path.resolve('./src/demo'),
      path.resolve('./src/components')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', '.css', '.html']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '',
    publicPath: '/build'
  },
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
};