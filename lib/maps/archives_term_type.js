"use strict"

//Converts the archives term type to registry term type


module.exports = function(parent){

	if (!parent.maps) parent.maps = {}

	parent.maps.archivesTermType = {
            "genreform": "terms:FormGenre",
            "geogname": "terms:Geographic",
            "subject": "terms:Topical",
            "topic": "terms:Topical"
	}
}