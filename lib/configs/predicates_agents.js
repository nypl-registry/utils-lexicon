'use strict'

module.exports = function (parent) {
  if (!parent.configs) parent.configs = {}

  parent.configs.predicateAgents = [
    'dbo:birthDate',
    'dbo:deathDate',
    'dcterms:description',
    'foaf:depiction',
    'foaf:isPrimaryTopicOf',
    'rdf:type',
    'skos:exactMatch',
    'skos:prefLabel'
  ]
}
