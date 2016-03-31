'use strict'

// the path to where to find the data files

module.exports = function (parent) {
  if (!parent.configs) parent.configs = {}

  parent.configs.agentNamesBlacklist = ['Unknown', 'None', '[Illegible logo]']
}
