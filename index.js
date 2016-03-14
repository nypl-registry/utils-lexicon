'use strict'

var glob = require('glob')
var path = require('path')

var exports = module.exports = {}

glob.sync(`${__dirname}/lib/**/*.js`).forEach(function (file) {
  require(path.resolve(file))(exports)
})
