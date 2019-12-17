const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('../config')

const webpackDevConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    demo: utils.resolve('demo/index.js')
  },
  output: {
    path: utils.resolve( 'dist'),
    filename: 'index.js'
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    port: config.dev.port,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      title: 'Vue Cat Carousel',
      inject: true,
      template: utils.resolve('demo/index.html'),
    }),
    new HotModuleReplacementPlugin()
  ]
})

module.exports = webpackDevConfig