"use strict"

//TMS roles to LC roles

module.exports = function(parent){

      if (!parent.maps) parent.maps = {}

      parent.maps.tmsRoles = {
            "artist" : "art",
            "attributed to'" : "att",
            "attributed to" : "att",
            "author" : "aut",
            "binder" : "bnd",
            "block cutter" : "wdc",
            "collector" : "col",
            "compiler" : "com",
            "copyright holder" : "cph",
            "dedicatee" : "dte",
            "designer" : "dsr",
            "distributor" : "dst",
            "draftsman" : "drm",
            "editor" : "edt",
            "illustrator" : "ill",
            "manufacturer" : "mfr",
            "photographer" : "pht",
            "printer" : "prt",
            "printmaker" : "prm",
            "publisher (photographic)" : "pbl",
            "publisher" : "pbl",
            "press" : "pbl",
            "sponsor" : "spn",
            "translator" : "trl",
            "typesetter" : "cmt"
      }
}