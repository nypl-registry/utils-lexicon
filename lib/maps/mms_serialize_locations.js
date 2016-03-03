"use strict"

//Converts the MMS Division to the registry location URI


module.exports = function(parent){

	if (!parent.maps) parent.maps = {}

	parent.maps.mmsSerializeLocations = {
            "ARN": "1109",
            "ART": "1110",
            "BG": "1125",
            "BRG": "1104",
            "CHILDCTR": "1126",
            "CPS": "1102",
            "DAN": "1121",
            "DAN_MIA": "1122",
            "EPE/CSW": "1127",
            "GRD": "1101",
            "HV": "1129",
            "JWS": "1103",
            "LHG": "1105",
            "MAP": "1106",
            "MMPC": "1128",
            "MSS": "1107",
            "MUS": "1123",
            "MYA": "1131",
            "NYPLA": "1100",
            "PHG": "1111",
            "PRN": "1112",
            "RBK": "1108",
            "RHA": "1124",
            "SCF": "1115",
            "SCG": "1118",
            "SCL": "1117",
            "SCM": "1116",
            "SCR": "1114",
            "SIBL": "1125",
            "SPN": "1113",
            "THE": "1119",
            "TOFT": "1120",
            "[HV]": "1129",
            "ukn": "1000",
            "undefined": "1000"
	}
}