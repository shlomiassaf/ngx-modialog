const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
import * as mkdirp from 'mkdirp';


/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const BannerPlugin = webpack.BannerPlugin;
const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;

import { PackageMetadata, FS_REF, getOutDir, webpackAlias, getCopyInstruction, root, getMainOutputFileName } from '../scripts/util';

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
    [metadata.umd]: path.join(getOutDir(metadata, true, getMainOutputFileName(metadata) + '.js'))
  };

  const ngcWebpackConfig = {
    tsConfig: metadata.tsConfig,
    resourceTransformer: function(filePath, data) {
      if (data) {
        const relativePath = path.relative(root('src', metadata.dir, FS_REF.SRC_CONTAINER), filePath);
        const absPath = path.resolve(getCopyInstruction(metadata).from, relativePath);
        mkdirp.sync(path.dirname(absPath));
        fs.writeFileSync(absPath, data, 'utf-8');
      }
      return data;
    }
  };

  // don't transform resource if we don't have inlined resources
  if (!metadata.inlineResources) {
    delete ngcWebpackConfig.resourceTransformer;
  }

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
          test: /\.ts$/,
          use: [
            {
              loader: `awesome-typescript-loader`,
              options: {
                configFileName: '.tsconfig.tmp.json',
                declaration: false
              }
            }
          ],
          exclude: [/\.e2e\.ts$/]
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
      // new webpack.ProvidePlugin({
      //   '__assign': ['tslib', '__assign'],
      //   '__extends': ['tslib', '__extends'],
      // }),

      new TsConfigPathsPlugin(),

      // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./src')
      ),

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
