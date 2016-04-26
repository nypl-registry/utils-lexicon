'use strict'

// convinence short cuts to the data uris

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.dataUriAlias = {
    shadowcat: 'data:10000',
    archives: 'data:10001',
    mms: 'data:10002',
    tms: 'data:10003'
  }
}
