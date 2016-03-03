"use strict"

//Converts the MMS term type to registry term type


module.exports = function(parent){

	if (!parent.maps) parent.maps = {}

	parent.maps.mmsTermType = {
            "form": "terms:FormGenre",
            "geographic": "terms:Geographic",
            "geographicCode": "terms:Geographic",
            "occupation": "terms:NotUsed",
            "temporal": "terms:Chronological",
            "titleInfo": "terms:Title",
            "topic": "terms:Topical"
	}
}