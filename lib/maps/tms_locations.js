'use strict'

// converts TMS(MMS) based codes to registry URI

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.tmsLocations = {
    'phg': ['1111'],
    'prn': ['1112'],
    'spn': ['1113'],
    'hv': ['1129', '1130'],
    'wal': ['1130'],
    'art': ['1110']
  }
}
