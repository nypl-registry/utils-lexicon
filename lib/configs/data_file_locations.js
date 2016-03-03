"use strict"

//the path to where to find the data files

module.exports = function(parent){

	if (!parent.configs) parent.configs = {}

	parent.configs.dataSourceFiles = {
        "archivesCollections": "/data/archives_collections.csv",
        "archivesComponents": "/data/archives_components.csv",
        "archivesRepoObjects": "/data/archives_repo_objects.csv",
        "archivesTerms": "/data/archives_terms.csv",
        "mmsCaptures": "/data/mms_captures.json",
        "mmsCollections": "/data/mms_collections.json",
        "mmsContainers": "/data/mms_containers.json",
        "mmsItems": "/data/mms_items.json",
        "pdExportCsv": "/data/pd_items.csv",
        "pdExportJson": "/data/pd_items.ndjson",
        "tmsAltNum": "/data/tms_alt_num.csv",
        "tmsClassification": "/data/tms_classification.csv",
        "tmsConsituents": "/data/tms_consituents.csv",
        "tmsDepartments": "/data/tms_departments.csv",
        "tmsObjConXref": "/data/tms_obj_con_xref.csv",
        "tmsObjects": "/data/tms_objects.csv",
        "tmsTitles": "/data/tms_titles.csv",
      }

}