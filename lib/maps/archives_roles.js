'use strict'

// Archives roles to LC roles

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.archivesRoles = {
    'originator': 'cre',
    'contibutor': 'ctb'
  }
}
