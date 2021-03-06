'use strict'

module.exports = function (parent) {
  if (!parent.configs) parent.configs = {}

  parent.configs.predicateResources = [
    'dcterms:contributor',
    'classify:holdings',
    'skos:note',
    'rdf:type',
    'nypl:suppressed',
    'nypl:owner',
    'dcterms:type',
    'dcterms:title',
    'dcterms:subject',
    'dcterms:language',
    'dcterms:identifier',
    'dcterms:created',
    'db:dateEnd',
    'db:dateStart',
    'roles:abr',
    'roles:acp',
    'roles:act',
    'roles:adi',
    'roles:adp',
    'roles:aft',
    'roles:anl',
    'roles:anm',
    'roles:ann',
    'roles:ant',
    'roles:ape',
    'roles:apl',
    'roles:app',
    'roles:aqt',
    'roles:arc',
    'roles:ard',
    'roles:arr',
    'roles:art',
    'roles:asg',
    'roles:asn',
    'roles:ato',
    'roles:att',
    'roles:auc',
    'roles:aud',
    'roles:aui',
    'roles:aus',
    'roles:aut',
    'roles:bdd',
    'roles:bjd',
    'roles:bkd',
    'roles:bkp',
    'roles:blw',
    'roles:bnd',
    'roles:bpd',
    'roles:brd',
    'roles:brl',
    'roles:bsl',
    'roles:cas',
    'roles:ccp',
    'roles:chr',
    'roles:cli',
    'roles:cll',
    'roles:clr',
    'roles:clt',
    'roles:cmm',
    'roles:cmp',
    'roles:cmt',
    'roles:cnd',
    'roles:cng',
    'roles:cns',
    'roles:coe',
    'roles:col',
    'roles:com',
    'roles:con',
    'roles:cor',
    'roles:cos',
    'roles:cot',
    'roles:cou',
    'roles:cov',
    'roles:cpc',
    'roles:cpe',
    'roles:cph',
    'roles:cpl',
    'roles:cpt',
    'roles:cre',
    'roles:crp',
    'roles:crr',
    'roles:crt',
    'roles:csl',
    'roles:csp',
    'roles:cst',
    'roles:ctb',
    'roles:cte',
    'roles:ctg',
    'roles:ctr',
    'roles:cts',
    'roles:ctt',
    'roles:cur',
    'roles:cwt',
    'roles:dbp',
    'roles:dfd',
    'roles:dfe',
    'roles:dft',
    'roles:dgg',
    'roles:dgs',
    'roles:dis',
    'roles:dln',
    'roles:dnc',
    'roles:dnr',
    'roles:dpc',
    'roles:dpt',
    'roles:drm',
    'roles:drt',
    'roles:dsr',
    'roles:dst',
    'roles:dtc',
    'roles:dte',
    'roles:dtm',
    'roles:dto',
    'roles:dub',
    'roles:edc',
    'roles:edm',
    'roles:edt',
    'roles:egr',
    'roles:elg',
    'roles:elt',
    'roles:eng',
    'roles:enj',
    'roles:etr',
    'roles:evp',
    'roles:exp',
    'roles:fac',
    'roles:fds',
    'roles:fld',
    'roles:flm',
    'roles:fmd',
    'roles:fmk',
    'roles:fmo',
    'roles:fmp',
    'roles:fnd',
    'roles:fpy',
    'roles:frg',
    'roles:gis',
    'roles:his',
    'roles:hnr',
    'roles:hst',
    'roles:ill',
    'roles:ilu',
    'roles:ins',
    'roles:inv',
    'roles:isb',
    'roles:itr',
    'roles:ive',
    'roles:ivr',
    'roles:jud',
    'roles:jug',
    'roles:lbr',
    'roles:lbt',
    'roles:ldr',
    'roles:led',
    'roles:lee',
    'roles:lel',
    'roles:len',
    'roles:let',
    'roles:lgd',
    'roles:lie',
    'roles:lil',
    'roles:lit',
    'roles:lsa',
    'roles:lse',
    'roles:lso',
    'roles:ltg',
    'roles:lyr',
    'roles:mcp',
    'roles:mdc',
    'roles:med',
    'roles:mfp',
    'roles:mfr',
    'roles:mod',
    'roles:mon',
    'roles:mrb',
    'roles:mrk',
    'roles:msd',
    'roles:mte',
    'roles:mtk',
    'roles:mus',
    'roles:nrt',
    'roles:opn',
    'roles:org',
    'roles:orm',
    'roles:osp',
    'roles:oth',
    'roles:own',
    'roles:pan',
    'roles:pat',
    'roles:pbd',
    'roles:pbl',
    'roles:pdr',
    'roles:pfr',
    'roles:pht',
    'roles:plt',
    'roles:pma',
    'roles:pmn',
    'roles:pop',
    'roles:ppm',
    'roles:ppt',
    'roles:pra',
    'roles:prc',
    'roles:prd',
    'roles:pre',
    'roles:prf',
    'roles:prg',
    'roles:prm',
    'roles:prn',
    'roles:pro',
    'roles:prp',
    'roles:prs',
    'roles:prt',
    'roles:prv',
    'roles:pta',
    'roles:pte',
    'roles:ptf',
    'roles:pth',
    'roles:ptt',
    'roles:pup',
    'roles:rbr',
    'roles:rcd',
    'roles:rce',
    'roles:rcp',
    'roles:rdd',
    'roles:red',
    'roles:ren',
    'roles:res',
    'roles:rev',
    'roles:rpc',
    'roles:rps',
    'roles:rpt',
    'roles:rpy',
    'roles:rse',
    'roles:rsg',
    'roles:rsp',
    'roles:rsr',
    'roles:rst',
    'roles:rth',
    'roles:rtm',
    'roles:sad',
    'roles:sce',
    'roles:scl',
    'roles:scr',
    'roles:sds',
    'roles:sec',
    'roles:sgd',
    'roles:sgn',
    'roles:sht',
    'roles:sll',
    'roles:sng',
    'roles:spk',
    'roles:spn',
    'roles:spy',
    'roles:srv',
    'roles:std',
    'roles:stg',
    'roles:stl',
    'roles:stm',
    'roles:stn',
    'roles:str',
    'roles:tcd',
    'roles:tch',
    'roles:ths',
    'roles:tld',
    'roles:tlp',
    'roles:trc',
    'roles:trl',
    'roles:tyd',
    'roles:tyg',
    'roles:uvp',
    'roles:vac',
    'roles:vdg',
    'roles:wac',
    'roles:wal',
    'roles:wam',
    'roles:wat',
    'roles:wdc',
    'roles:wde',
    'roles:win',
    'roles:wit',
    'roles:wpr',
    'roles:wst'
  ]
}
