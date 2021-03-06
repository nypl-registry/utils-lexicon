'use strict'

// Converts the MMS Division to the registry location URI

module.exports = function (parent) {
  if (!parent.maps) parent.maps = {}

  parent.maps.catalogSerializeLocations = {
    'axv': '1000',
    'iarch': '1000',
    'iaslr': '1125',
    'ls': '',
    'lsa0v': '',
    'lsbb2': '',
    'lsx': '',
    'lsxx2': '',
    'ma': '1000',
    'maa': '1000',
    'maa0f': '1000',
    'maa0n': '1000',
    'maa0v': '1000',
    'maar': '1000',
    'mab': '1110',
    'mab72': '1110',
    'mab82': '1110',
    'mabb1': '1110',
    'mabb2': '1110',
    'mabb3': '1110',
    'mabm2': '1110',
    'mac': '1109',
    'mac82': '1109',
    'macc2': '1109',
    'mae': '1104',
    'mae82': '1104',
    'maee2': '1104',
    'maf': '1103',
    'maf82': '1103',
    'maf88': '1103',
    'maff1': '1103',
    'maff3': '1103',
    'mag': '1105',
    'mag32': '1000',
    'mag82': '1105',
    'magg1': '1105',
    'magg2': '1105',
    'magg3': '1105',
    'magh1': '1105',
    'mai': '1101',
    'mai22': '1000',
    'mai82': '1101',
    'mai83': '1101',
    'mai87': '1101',
    'maii1': '1101',
    'maii2': '1101',
    'maii3': '1101',
    'maj': '1000',
    'maj01': '1000',
    'maj03': '1000',
    'maj0a': '1000',
    'maj0f': '1000',
    'maj0h': '1000',
    'maj0i': '1000',
    'maj0l': '1000',
    'maj0n': '1000',
    'maj0t': '1000',
    'maj0v': '1000',
    'maj0y': '1000',
    'majr': '1000',
    'mak': '1101',
    'mak82': '1000',
    'makk3': '1101',
    'mal': '1101',
    'mal82': '1101',
    'mala': '1000',
    'malc': '1127',
    'mall1': '1101',
    'mall2': '1000',
    'malm2': '1101',
    'maln': '1000',
    'maln1': '1101',
    'malv2': '1101',
    'malw': '1000',
    'malw1': '1101',
    'mao': '1107',
    'mao82': '1107',
    'maor2': '1107',
    'map': '1106',
    'map82': '1106',
    'mapp1': '1106',
    'mapp2': '1106',
    'mapp3': '1106',
    'maq': '1102',
    'maqq2': '1102',
    'mar': '1108',
    'mar62': '1108',
    'mar82': '1108',
    'mard2': '1108',
    'marr2': '1108',
    'mas': '1111',
    'mas62': '1110',
    'mas82': '1110',
    'masb2': '1111',
    'mass2': '1111',
    'masu2': '1111',
    'matel': '1000',
    'mau': '1112',
    'mauu1': '1112',
    'mauu2': '1112',
    'max82': '1101',
    'may': '1000',
    'mazzz': '1000',
    'my': '1002',
    'mya': '1002',
    'mya01': '1002',
    'mya03': '1002',
    'mya0n': '1002',
    'mya0s': '1002',
    'mya0v': '1002',
    'mya21': '1002',
    'mya23': '1002',
    'myaos': '1123',
    'myar': '1131',
    'myar1': '1131',
    'myarn': '1131',
    'myarv': '1131',
    'myas1': '1102',
    'myav3': '1002',
    'myd': '1121',
    'myd11': '1121',
    'myd22': '1121',
    'myd28': '1121',
    'myd32': '1121',
    'myd38': '1121',
    'myd42': '1002',
    'myd48': '1002',
    'myf': '1120',
    'myf22': '1120',
    'myh': '1002',
    'myh11': '1002',
    'myh22': '1002',
    'myh23': '1002',
    'myh32': '1002',
    'myh42': '1002',
    'myj': '1002',
    'myj2v': '1002',
    'myjrv': '1102',
    'mym': '1123',
    'mym11': '1123',
    'mym22': '1123',
    'mym28': '1123',
    'mym32': '1123',
    'mym38': '1123',
    'mym42': '1002',
    'mym48': '1002',
    'myr': '1002',
    'myrfv': '1002',
    'myt': '1119',
    'myt11': '1119',
    'myt22': '1119',
    'myt28': '1119',
    'myt32': '1119',
    'myt38': '1119',
    'myt42': '1002',
    'myt48': '1002',
    'myv': '1002',
    'myy': '1102',
    'myy0v': '1002',
    'myy2v': '1002',
    'myyrv': '1102',
    'myzzz': '1002',
    'none': '1000',
    'qc': '1101',
    'qc2ma': '1000',
    'qc2mj': '1000',
    'qc2sc': '1000',
    'qc2sl': '1000',
    'qcma2': '1000',
    'qcmb2': '1000',
    'qcmb8': '1110',
    'qcmb9': '1110',
    'qcmf2': '1000',
    'qcmf8': '1103',
    'qcmf9': '1103',
    'qcmg2': '1000',
    'qcmg8': '1105',
    'qcmi2': '1000',
    'qcmj2': '1000',
    'qcml2': '1000',
    'qcmo2': '1000',
    'qcmp2': '1000',
    'qcmq2': '1000',
    'qcmr2': '1000',
    'qcmy2': '1002',
    'qcsc2': '1001',
    'qcsl2': '1125',
    'qcxx2': '1000',
    'rc': '1101',
    'rc2cf': '1000',
    'rc2cm': '1000',
    'rc2ma': '1000',
    'rc2mj': '1000',
    'rc2sc': '1000',
    'rc2sl': '1000',
    'rcca9': '1110',
    'rccb2': '1117',
    'rccb9': '1117',
    'rccd2': '1116',
    'rccd9': '1116',
    'rcce2': '1118',
    'rcce9': '1118',
    'rccf2': '1114',
    'rccf9': '1114',
    'rcma2': '1000',
    'rcmb2': '1110',
    'rcmb8': '1110',
    'rcmb9': '1110',
    'rcmf2': '1103',
    'rcmf8': '1103',
    'rcmf9': '1103',
    'rcmg2': '1105',
    'rcmg8': '1105',
    'rcmg9': '1105',
    'rcmi2': '1000',
    'rcmj2': '1000',
    'rcml2': '1101',
    'rcmo2': '1000',
    'rcmp2': '1106',
    'rcmq2': '1000',
    'rcmr2': '1000',
    'rcms2': '1111',
    'rcmy8': '1002',
    'rcpd2': '1002',
    'rcpd8': '1002',
    'rcpf2': '1002',
    'rcph2': '1002',
    'rcpm2': '1002',
    'rcpr2': '1002',
    'rcpt2': '1002',
    'rcpt8': '1002',
    'rcsc2': '1001',
    'rcsl2': '1125',
    'rcxx2': '1000',
    'sc': '1101',
    'scb': '1117',
    'scbb2': '1117',
    'scc': '1110',
    'sccc2': '1110',
    'sccc3': '1110',
    'scd': '1116',
    'scdd1': '1116',
    'scdd2': '1116',
    'sce': '1118',
    'scee2': '1118',
    'scf': '1114',
    'scff1': '1114',
    'scff2': '1114',
    'scff3': '1114',
    'sczzz': '1101',
    'sl': '1125',
    'sla': '1125',
    'sla01': '1125',
    'sla0f': '1125',
    'sla0n': '1125',
    'sla0v': '1125',
    'slafn': '1125',
    'slaj1': '1125',
    'slajn': '1125',
    'slajv': '1125',
    'slar': '1125',
    'sle': '1125',
    'slee1': '1125',
    'slr': '1125',
    'slr12': '1125',
    'slr22': '1125',
    'slra3': '1125',
    'slrb1': '1125',
    'slrc3': '1125',
    'slzzz': '1125',
    'xxx': '1000',
    'zzzzz': '1000'

  }
}
