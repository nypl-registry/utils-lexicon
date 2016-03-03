"use strict"

//catalog material type to LC material type URI

module.exports = function(parent){

	if (!parent.maps) parent.maps = {}

	parent.maps.catalogMaterialType = {
		"3": "mov",
		"a": "txt",
		"b": "mov",
		"c": "not",
		"d": "not",
		"e": "car",
		"g": "img",
		"h": "txt",
		"i": "aud",
		"j": "aud",
		"k": "img",
		"l": "txt",
		"m": "mul",
		"n": "aud",
		"p": "mix",
		"q": "aud",
		"r": "art",
		"s": "mov",
		"t": "txt",
		"u": "aud",
		"v": "mov",
		"y": "aud",
		"z": "txt"
	}
}