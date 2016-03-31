'use strict'

module.exports = function (parent) {
  if (!parent.configs) parent.configs = {}

  parent.configs.blacklistTerms = ['Electronic books', 'Electronic book', 'Electronic Books', 'Facsimiles']
}
