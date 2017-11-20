const helpers = require('./helpers');
const webpack = require('webpack');

/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BannerPlugin = webpack.BannerPlugin;
const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;

import { PackageMetadata, FS_REF, webpackAlias, getCopyInstruction, root } from '../scripts/util';

module.exports = function(metadata: PackageMetadata) {
  const banner = `/** 
 * ${metadata.name} Copyright ${new Date().getFullYear()}
 * Licensed under MIT
 */`;

  /*
      The entry point references a file that does not exists at the time of definition.
      This is the generated angular flat module file which will generate once the angular compiler does its thing.
      The angular compiler runs before webpack starts via NgcWebpackPlugin so we're safe to assume
      that the file will be there (unless an error has occurred)

      The original entry point should have been:

      [metadata.umd]: helpers.root(`src/${metadata.dir}/src/index.ts`)

      But this will result in an incorrect bundle since internal aot compiler exports (ɵ) will not bundle.
   */
  const entry = {
    // [metadata.umd]: path.join(getOutDir(metadata, true, getMainOutputFileName(metadata) + '.js'))
    [metadata.umd]: metadata.tsConfigObj.files[0]
  };

  const ngcWebpackConfig = {
    mainPath: metadata.tsConfigObj.files[0],
    tsConfigPath: metadata.tsConfig
  };

  return {
    bail: true,
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [root('src'), root('node_modules')],
      alias: Object.assign(webpackAlias(), webpackAlias(metadata.parent
        ? metadata.parent.dirName + '/' + metadata.extension.dir
        : metadata.dirName
      ))
    },

    entry,

    output: {
      path: helpers.root('.'),
      publicPath: '/',
      filename: `${getCopyInstruction(metadata).toBundle.substr(root().length + 1)}/[name].webpack.umd.js`,
      libraryTarget: 'umd',
      library: metadata.moduleName
    },

    // require those dependencies but don't bundle them
    externals: metadata.externalsWebpack,

    module: {
      rules: [
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: [ '@ngtools/webpack' ]
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [root('src', 'demo')]
        },

        /*
         * to string and sass loader support for *.scss files (from Angular components)
         * Returns compiled css content as string
         *
         */
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
          exclude: [root('src', 'demo')]
        },

        /* Raw loader support for *.html
         * Returns file content as string
         *
         * See: https://github.com/webpack/raw-loader
         */
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [root('src/demo/index.html')]
        },
      ]
    },

    plugins: [
      new NgcWebpackPlugin(ngcWebpackConfig),

      new BannerPlugin({
        banner: banner,
        raw: true,
        entryOnly: true
      }),

      new CopyWebpackPlugin([
        { from: 'README.md', to: helpers.root(`./${FS_REF.PKG_DIST}/${metadata.dir}`) },
      ])
    ]
  };
};
