'use strict'

// Converts the MMS Resource Type to LC

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.mmsTypeOfResource = {
    'three dimensional object': 'art',
    'sound recording': 'aud',
    'sound recording-musical': 'aud',
    'sound recording-nonmusical': 'aud',
    'cartographic': 'car',
    'mixed material': 'mix',
    'moving image': 'mov',
    'software, multimedia': 'mul',
    'notated music': 'not',
    'still image': 'img',
    'text': 'txt'
  }
}
