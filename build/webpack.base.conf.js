'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('./utils')
const config = require('../config')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    vueCatCarousel: utils.resolve('src/lib.js')
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
  },
  output: {
    path: utils.resolve('dist'),
    filename: 'vue-cat-carousel.js',
    publicPath: process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ utils.resolve('src') ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', // isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
        ]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader', // isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          { 
            loader: 'sass-loader', 
            options: { 
              sourceMap: isDev
            } 
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}