"use strict"

//Converts the ARCHIVES identfiers to a native JSON


module.exports = function(parent){

	if (!parent.maps) parent.maps = {}

	parent.maps.archivesIdentifiers = {
            "bnumber": "bNumber",
            "call_number": "callNumber",
            "local_b": "bNumber",
            "local_barcode": "barcode",
            "local_call": "callNumber",
            "local_mss": "mss",
            "portal_id": "mssDb"
	}
}