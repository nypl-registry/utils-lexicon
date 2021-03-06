'use strict'

// Converts the MMS identfiers to a native JSON

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.mmsIdentifers = {
    'Accession number': 'accession',
    'Archives Container id': 'useless',
    'Archives EAD ID': 'mss',
    'Archives ImportRow id': 'useless',
    'Archives Item id': 'mss',
    'Archives components id': 'mssDb',
    'Barcode': 'barcode',
    'CATNYP ID (legacy)': 'catnyp',
    'Call number': 'callNumber',
    'Callnumber': 'callNumber',
    'Class mark': 'callNumber',
    'Digital Gallery Image ID': 'imageId',
    'Dynix': 'dynix',
    'Emmet number': 'emmet',
    'Hades Collection Guide ID (legacy)': 'hadesCollection',
    'Hades struc ID (legacy)': 'hades',
    'International Standard Book Number': 'isbn',
    'International Standard Serial Number': 'issn',
    'Interview ID': 'useless',
    'Library of Congress Control Number': 'lccn',
    'MSS Unit ID': 'mss',
    'NYPL Exhibition ID': 'exhibition',
    'NYPL catalog ID (B-number)': 'bNumber',
    'oclc': 'oclc',
    'OCLC/RLIN': 'oclc',
    'Orphan image': 'orphan',
    'Other local Identifier': 'other',
    'local_other': 'other',
    'Postcard series number': 'postcard',
    'PHG Object Number': 'tmsObject',
    'Photo Order': 'publicOrder',
    "Publisher's music plate number": 'useless',
    'RLIN/OCLC': 'oclc',
    'Shelley Godwin Archive': 'useless',
    'TMS ID': 'tmsId',
    'TMS Object Number': 'tmsObject',
    'accession number': 'accession',
    'identifier_local_TMS': 'tmsId',
    'isbn': 'isbn',
    'issn': 'issn',
    'lccn': 'lccn',
    'local_archives_ead': 'mss',
    'local_b': 'bNumber',
    'local_barcode': 'barcode',
    'local_bnumber': 'bNumber',
    'local_catnyp': 'catnyp',
    'local_exhibition': 'exhibition',
    'local_hades': 'hades',
    'local_hades_collection': 'hadesCollection',
    'local_imageid': 'imageId',
    'local_mss': 'mss',
    'local_photo_order': 'publicOrder',
    'local_tms_id': 'tmsId',
    'local_tms_object_number': 'tmsObject'
  }
}
