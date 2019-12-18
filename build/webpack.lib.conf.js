const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpackLibConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.lib.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.lib.assetsRoot,
    filename: utils.assetsLibPath('vue-cat-carousel.min.js'),
    library: 'vue-cat-carousel',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.lib.env
    }),
    new MiniCSSExtractPlugin({
      filename: 'vue-cat-carousel.css',
    })
  ]
})

if (config.lib.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackLibConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.lib.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.lib.bundleAnalyzerReport) {
  let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackLibConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackLibConfig