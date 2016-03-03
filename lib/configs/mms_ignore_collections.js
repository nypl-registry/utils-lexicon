"use strict"

//some MMS collections UUIDs we do not want to ingest for various resons

module.exports = function(parent){

	if (!parent.configs) parent.configs = {}

	parent.configs.mmsIgnoreCollections = [
        "1a438be0-c52b-012f-b6b4-58d385a7bc34",
        "6681fc20-c52b-012f-4eb1-58d385a7bc34",
        "995b5f10-c599-012f-ed50-58d385a7bc34",
        "8101bb90-c602-012f-7c73-58d385a7bc34",
        "83214170-c602-012f-6404-58d385a7bc34",
        "88272520-c602-012f-ad48-58d385a7bc34",
        "07f1f6c0-c603-012f-9cd6-58d385a7bc34",
        "346b8190-c603-012f-3270-58d385a7bc34",
        "c9a4c470-c603-012f-5ccb-58d385a7bc34",
        "d76d5d50-c603-012f-81a1-58d385a7bc34",
        "f2edc120-c603-012f-ab7c-58d385a7bc34",
        "46b23280-c604-012f-7256-58d385a7bc34",
        "9b4f8820-c604-012f-fc38-58d385a7bc34",
        "bc1d78a0-c604-012f-02f7-58d385a7bc34",
        "dad17710-c604-012f-2ad5-58d385a7bc34",
        "ddbe0710-c604-012f-d763-58d385a7bc34",
        "e95b17c0-c604-012f-fa9c-58d385a7bc34",
        "0d3b9180-c605-012f-8f2a-58d385a7bc34",
        "16b25600-c605-012f-1d58-58d385a7bc34",
        "a94e6480-c605-012f-4201-58d385a7bc34",
        "fb5421f0-c605-012f-1591-58d385a7bc34",
        "0546fb80-c606-012f-6a17-58d385a7bc34",
        "162f6310-c606-012f-00c5-58d385a7bc34",
        "1fa68580-c606-012f-3f20-58d385a7bc34",
        "22496ed0-c606-012f-2895-58d385a7bc34",
        "877a2830-c606-012f-7a59-58d385a7bc34",
        "92d772f0-c606-012f-55df-58d385a7bc34",
        "25a1d380-c607-012f-2172-58d385a7bc34",
        "565e4110-c607-012f-56d4-58d385a7bc34",
        "5b5c6110-c607-012f-e6f6-58d385a7bc34",
        "5c506b10-c607-012f-1d34-58d385a7bc34",
        "5fc2d610-c607-012f-fb07-58d385a7bc34",
        "73cd3390-c607-012f-81db-58d385a7bc34",
        "8f7266e0-c607-012f-f0d2-58d385a7bc34",
        "c4ba2650-c607-012f-6ea4-58d385a7bc34",
        "f0995c60-c607-012f-3f02-58d385a7bc34",
        "f1c7b2d0-c607-012f-d89c-58d385a7bc34",
        "060e21f0-c608-012f-8e6b-58d385a7bc34",
        "16b64d70-c608-012f-1714-58d385a7bc34",
        "1b1028c0-c608-012f-e37f-58d385a7bc34",
        "a2b250b0-c608-012f-8f04-58d385a7bc34",
        "ac55cc10-c608-012f-6b28-58d385a7bc34",
        "c9148420-c608-012f-58da-58d385a7bc34",
        "ddf1a1d0-c608-012f-8bf8-58d385a7bc34",
        "efc2ba80-c608-012f-fa4c-58d385a7bc34",
        "fdc0e2c0-c608-012f-579d-58d385a7bc34",
        "041299d0-c609-012f-5602-58d385a7bc34",
        "7b284740-c609-012f-faa0-58d385a7bc34",
        "8c284170-c609-012f-1eee-58d385a7bc34",
        "9c027480-c609-012f-e89a-58d385a7bc34",
        "5dfd9cc0-c60a-012f-1d4c-58d385a7bc34",
        "ee651e10-c60a-012f-592d-58d385a7bc34",
        "597122d0-c60b-012f-f356-58d385a7bc34",
        "88a9c9e0-c60b-012f-5a71-58d385a7bc34",
        "c76da9a0-c60d-012f-c7e2-58d385a7bc34",
        "c9764380-c60d-012f-50e9-58d385a7bc34",
        "3995e880-c617-012f-600c-58d385a7bc34",
        "fbca8590-c618-012f-73e7-58d385a7bc34",
        "68aa0fa0-c619-012f-4cab-58d385a7bc34",
        "36606c90-c61d-012f-98c3-58d385a7bc34",
        "a768c830-c61e-012f-b367-58d385a7bc34",
        "b9281520-c61e-012f-fe6f-58d385a7bc34",
        "9a57a860-c61f-012f-636c-58d385a7bc34",
        "26537ff0-c621-012f-0449-58d385a7bc34",
        "e4720650-c621-012f-7482-58d385a7bc34",
        "894a7160-c627-012f-e0b4-58d385a7bc34",
        "292eaf40-c62b-012f-6fe8-58d385a7bc34",
        "be0dea00-c62b-012f-12c9-58d385a7bc34",
        "fdd7d880-c62c-012f-bf70-58d385a7bc34",
        "053d6e70-c62d-012f-72fc-58d385a7bc34",
        "05929160-c6b3-012f-b170-58d385a7bc34",
        "d8ae4db0-c6b4-012f-724e-58d385a7bc34",
        "bfe0cac0-c6be-012f-bde1-58d385a7bc34",
        "bd6d9e10-c6c1-012f-aced-58d385a7bc34",
        "fb40c830-c6cf-012f-d5d5-58d385a7bc34",
        "13f20cc0-c6d5-012f-9c3f-58d385a7bc34",
        "657dd020-c6ed-012f-8f0a-58d385a7bc34",
        "81316080-0042-0130-3e0f-58d385a7bc34",
        "432e3c00-63fa-0130-36d2-58d385a7bbd0",
        "3b8c7540-63fe-0130-aff3-58d385a7bbd0",
        "bfc09be0-c6c6-012f-5f82-58d385a7bc34",
        "d7c1e920-c605-012f-e45a-58d385a7bc34"
      ]
}