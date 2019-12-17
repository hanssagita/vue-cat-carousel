'use strict'
const path = require('path')
const config = require('../config')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  },
  assetsPath: function (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },
  assetsLibPath: function (_path) {
    return path.posix.join(config.lib.assetsSubDirectory, _path)
  }
}