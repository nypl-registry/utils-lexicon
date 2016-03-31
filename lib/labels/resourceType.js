'use strict'

module.exports = function (parent) {
  if (!parent.labels) parent.labels = {}

  parent.resourceType.orgs = {
    'resourcetypes:art': 'Artifact',
    'resourcetypes:aud': 'Audio',
    'resourcetypes:car': 'Cartographic',
    'resourcetypes:col': 'Collection',
    'resourcetypes:dat': 'Dataset',
    'resourcetypes:dig': 'Digital',
    'resourcetypes:img': 'Still Image',
    'resourcetypes:man': 'Manuscript',
    'resourcetypes:mix': 'Mixed material',
    'resourcetypes:mov': 'Moving image',
    'resourcetypes:mul': 'Multimedia',
    'resourcetypes:not': 'Notated music',
    'resourcetypes:tac': 'Tactile',
    'resourcetypes:txt': 'Text',
    'resourcetypes:unk': 'Unspecified',
    false: 'Unknown',
    null: 'Unknown'
  }
}
