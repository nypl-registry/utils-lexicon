'use strict'

// convers TMS material type numbers to LC URI

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.tmsMaterialType = {
    '1': 'txt',
    '11': 'img',
    '15': 'txt',
    '17': 'art',
    '19': 'img',
    '2': 'img',
    '20': 'img',
    '21': 'img',
    '22': 'mix',
    '23': 'img',
    '28': 'img',
    '29': 'col',
    '3': 'img',
    '30': 'img',
    '31': 'txt',
    '32': 'img',
    '33': 'img',
    '34': 'img',
    '36': 'img',
    '38': 'img',
    '39': 'img',
    '40': 'img',
    '41': 'txt',
    '42': 'aud',
    '43': 'mov',
    '44': 'img',
    '45': 'mov',
    '46': 'img',
    '47': 'img',
    '48': 'art',
    '49': 'img',
    '5': 'img',
    '6': 'img',
    '7': 'img',
    '8': 'img',
    '9': 'img'
  }
}
