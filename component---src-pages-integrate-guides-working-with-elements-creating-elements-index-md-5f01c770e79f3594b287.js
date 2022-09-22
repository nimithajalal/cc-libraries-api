"use strict";(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[338],{5687:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return c}});var t=a(7462),i=a(3366),r=(a(5007),a(4983)),s=a(1515),o=["components"],l={},d={_frontmatter:l},p=s.Z;function c(e){var n=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"creating-library-elements"},"Creating Library Elements"),(0,r.mdx)("p",null,"This document provides background on workflows to create library elements. It does not assume that\nyou have any background in library element concepts. However, it does assume that you are already\nfamiliar with how to call the Libraries API, e.g., how to get an API token, required header fields, etc.\nthis document attempts to remain technology-agnostic w.r.t. documenting API calls."),(0,r.mdx)("h2",{id:"background"},"Background"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"library")," consists of one or more library ",(0,r.mdx)("em",{parentName:"p"},"elements"),". These elements consist of metadata that represent entities which\nare used within different Creative Cloud applications, e.g., images, videos, colors, 3D models, etc. Library elements contain one or more\n",(0,r.mdx)("em",{parentName:"p"},"representations"),", each of which refers to, or contains, an ",(0,r.mdx)("em",{parentName:"p"},"asset"),", and will have a particular ",(0,r.mdx)("em",{parentName:"p"},"relationship")," to\nthe entity represented by the element."),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Representations")," may have one of three different relationships to the entity they represent, 'primary', 'rendition', or\nrarely, 'alternate'. 'Primary' representations usually refer to the asset that is the thing itself, e.g., for graphics,\nthe largest, highest-resolution version; for 3d models, the file containing 3d data, etc. All library elements should have\na single primary representation. 'Renditions' typically refer to versions of the primary representation specific to some\nuse case, e.g., a thumbnail for display on a web page. Elements may have an unlimited number of renditions. The\n'alternate' relationship designates alternative primary representations that are used in different contexts;\ncurrently, its use is limited to pattern elements."),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Assets")," in this context refer to the primary data source for some representation, e.g., for an image, it will be some\nimage file, for colors, it will be a json document containing the spec for that color, etc."),(0,r.mdx)("h3",{id:"generally-required-properties"},"Generally Required Properties"),(0,r.mdx)("p",null,'In addition to a list of representations, every library element requires a "type" property, and a "client" dictionary.'),(0,r.mdx)("p",null,'The "type" property will contain the MIME type of the library element you are creating. This type will be in the group\napplication/vnd.adobe.',"*","+dcx."),(0,r.mdx)("p",null,'The "client" dictionary contains the properties "deviceId", "device", and "app". These fields are unchecked, but you will\nget them back with future element requests, and it may be helpful to populate them with something meaningful to track who\nor what is creating or modifying library elements.'),(0,r.mdx)("p",null,'Each representation is required to contain a "type" property that is the MIME type of that representation. The\nprimary representation type is constrained according to the MIME type of the library element. For example, when creating\na color, the library element will have a MIME type of "application/vnd.adobe.element.color+dcx", and the primary representation\nmust be of type "application/vnd.adobe.color+json". Other properties within the representation may be required depending\non the representation type.'),(0,r.mdx)("p",null,'Generally, all representations should also contain a "relationship" property as described above. However, this is not\nstrictly required; the default relationship is "rendition."'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-cool-graphic",\n  "type": "application/vnd.adobe.element.image+dcx",\n  "client": {\n    "deviceId": "MY_COOL_DEVICE_ID",\n    "device": "MY_COOL_DEVICE",\n    "app": "MY_COOL_APP"\n  },\n  "representations": [\n    {\n      "type": "image/svg+xml",\n      "relationship": "primary",\n      "storage_href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/3f4d2883-f7e5-4d64-bec1-f153ae5d80af"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Figure 1: An example image payload for postLibraryElements (/api/v1/libraries/{{library-id}}/elements/), containing the minimum required properties.")),(0,r.mdx)("h3",{id:"asset-types-usage-patterns-required-fields-by-asset-type"},"Asset Types, Usage Patterns, Required Fields by Asset Type"),(0,r.mdx)("p",null,"Assets generally fall into three categories: 1. ",(0,r.mdx)("em",{parentName:"p"},"User-uploaded"),", 2. ",(0,r.mdx)("em",{parentName:"p"},"Self-contained"),", 3. ",(0,r.mdx)("em",{parentName:"p"},"Stock"),". Each category of asset\nmay require a different usage pattern to correctly create a library element, and each requires different representation\nproperties."),(0,r.mdx)("h4",{id:"user-uploaded-assets"},"User-Uploaded Assets"),(0,r.mdx)("p",null,"User-uploaded assets are files that are uploaded before the library element is created, and the library element should\ncontain a link to that file. In other words, the recommended pattern for creating any library element that contains\nuser-uploaded assets is to upload all the assets first, then create the library element referencing them using a single\ncall to the Libraries service. The steps to upload assets change depending on the size of the file; files under 5mb\nin size may be uploaded in one shot, files over 5mb must be broken into chunks."),(0,r.mdx)("p",null,'User-uploaded asset representations require, alongside\na "type" property, either a "storage_href" or "path" property, but not both. The "storage_href" property should contain\nan absolute link to the asset in Creative Cloud storage, and "path" should contain the relative path to the asset (TODO: ?? & explain this).\nFigure 1 contains an example of a valid asset representation.'),(0,r.mdx)("h4",{id:"self-contained-assets"},"Self-contained Assets"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Self-contained"),' assets refer to assets that are entirely contained within the library element representation metadata.\nIn this case, only a single call to the Library service is needed. An example might be a json document describing a color.\nSelf-contained assets will always contain a required namespaced property, e.g., for colors, "color#data". The requirements\nfor these properties will vary by representation type.'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-cooler-color",\n  "type": "application/vnd.adobe.element.color+dcx",\n  "client": {\n    "deviceId": "MY_COOL_DEVICE_ID",\n    "device": "MY_COOL_DEVICE",\n    "app": "MY_COOL_APP"\n  },\n  "representations": [\n    {\n      "type": "application/vnd.adobe.color+json",\n      "relationship": "primary",\n      "color#data": {\n        "mode": "CMYK",\n        "value": {\n          "c": 100,\n          "m": 79.0585160255432,\n          "y": 39.5178139209747,\n          "k": 31.2565803527832\n        },\n        "type": "process"\n      }\n    },\n    {\n      "id": "fe595a93-aefc-4e2f-a6a7-d594610f292f",\n      "type": "application/vnd.adobe.color+json",\n      "relationship": "rendition",\n      "color#data": {\n        "mode": "RGB",\n        "value": {\n          "r": 12.7313232421875,\n          "g": 56.0341644287109,\n          "b": 89.8001861572266\n        },\n        "type": "process"\n      }\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},'Figure 2: An example color payload for postLibraryElement, containing two color representations, each with a required "color#data" property.')),(0,r.mdx)("h4",{id:"stock-assets"},"Stock Assets"),(0,r.mdx)("p",null,"Stock assets refer to files managed within the Adobe Stock product. Library elements that contain stock asset representations\nwill contain a link to the asset within Adobe Stock, as well as additional metadata describing the stock asset. A stock asset\nis acceptable within a library element representation wherever a user-uploaded asset is (TODO: glossing over this for the moment)."),(0,r.mdx)("h3",{id:"in-practice"},"In Practice"),(0,r.mdx)("p",null,"Although the last few examples contained different asset types in isolation, it is more realistic to expect to use multiple\nasset types within a single library element. For example, a common scenario is to have a primary representation that\ncontains a self-contained asset, and other asset renditions."),(0,r.mdx)("p",null,"Let's say we want to create a font element. The font element requires two representations: a self-contained font specification,\nand a thumbnail image. In this example, for clarity, we will assume that the thumbnail image is under 5mb in size.\nIf the image were bigger, we would need to upload the file in chunks (see below)."),(0,r.mdx)("p",null,"First, we would upload the thumbnail:"),(0,r.mdx)("p",null,"POST /api/v1/libraries/{{library-id}}/representations/content"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'(form-data)\nRepresentation-Data: {"type":"image/png"}\nRepresentation-Content: <... the file ...>\n\nResponse:\n{\n    "id": "602eb2e4-d86d-481f-adc2-d751fc5ca961",\n    "storage_href": "https://cc-api-storage-stage.adobe.io/id/urn:aaid:sc:US:efb1969b-fed5-4381-836e-6d7a97a14fbf?component_id=602eb2e4-d86d-481f-adc2-d751fc5ca961",\n    "asset_id": "urn:aaid:sc:US:e51bf45b-5799-43bb-9c64-37857357cb5e",\n    "type": "image/png",\n    "content_length": 158356,\n    "etag": "\\"9b4fb626b2ea694ceceda1b5caa7463c\\"",\n    "md5": "m0+2JrLqaUzs7aG1yqdGPA==",\n    "version": "0"\n}\n')),(0,r.mdx)("p",null,"Then, we would upload the metadata:"),(0,r.mdx)("p",null,"POST /api/v1/libraries/{{library-id}}/elements/"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'REQUEST:\n{\n  "name": "my-coolest-font",\n  "type": "application/vnd.adobe.element.font+dcx",\n  "client": {\n    "deviceId": "MY_COOL_DEVICE_ID",\n    "device": "MY_COOL_DEVICE",\n    "app": "MY_COOL_APP"\n  },\n  "representations": [\n    {\n      "type": "application/vnd.adobe.font+json",\n      "relationship": "primary",\n      "font#data": {\n          "postScriptName": "TimesNewRomanPS-BoldMT",\n          "name": "Times New Roman Bold",\n          "family": "Times New Roman",\n          "style": "Bold",\n          "typekitFontId": "some_meaningful_uuid",\n          "foundry": "The FooBaz Corporation"\n        }\n    },\n    {\n        "type": "image/png",\n        "relationship": "rendition",\n        "storage_href": "https://cc-api-storage-stage.adobe.io/id/urn:aaid:sc:US:efb1969b-fed5-4381-836e-6d7a97a14fbf?component_id=602eb2e4-d86d-481f-adc2-d751fc5ca961",\n        "content_length": 158356,\n        "etag": "\\"9b4fb626b2ea694ceceda1b5caa7463c\\"",\n        "md5": "m0+2JrLqaUzs7aG1yqdGPA==",\n        "version": "0"\n    }\n  ]\n}\n\nRESPONSE:\n{\n    "total_count": 1,\n    "elements": [\n        {\n            "id": "9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n            "name": "my-coolest-font",\n            "created_date": 1590014039430,\n            "modified_date": 1590014039430,\n            "type": "application/vnd.adobe.element.font+dcx",\n            "thumbnail": {},\n            "assetSubType": "element",\n            "_fc": false,\n            "path": "ad9bcb38-b783-4490-8ca4-a87b18b12349",\n            "library#createdData": {\n                "app": "MY_COOL_APP",\n                "time": 1590014039430,\n                "userId": "35305C3E5E861DB40A494026@AdobeID",\n                "deviceId": "MY_COOL_DEVICE_ID",\n                "device": "MY_COOL_DEVICE"\n            },\n            "library#modifiedData": {\n                "app": "MY_COOL_APP",\n                "time": 1590014039430,\n                "userId": "35305C3E5E861DB40A494026@AdobeID",\n                "deviceId": "MY_COOL_DEVICE_ID",\n                "device": "MY_COOL_DEVICE"\n            }\n        }\n    ]\n}\n')),(0,r.mdx)("p",null,"Afterwards, if you were to get the element, it might look like this:"),(0,r.mdx)("p",null,"GET /api/v1/libraries/{{library-id}}/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c?selector=full"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n  "name": "my-coolest-font",\n  "created_date": 1590014039430,\n  "modified_date": 1590014039432,\n  "type": "application/vnd.adobe.element.font+dcx",\n  "thumbnail": {\n    "type": "href",\n    "rendition": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e/:rendition;size=200"\n  },\n  "representations": [\n    {\n      "id": "22fd8c85-eb35-47bc-aa0d-379497e7414e",\n      "type": "image/png",\n      "relationship": "rendition",\n      "path": "84688801-5e6e-466e-a896-fd69188d9904",\n      "is_full_size": false,\n      "is_external_link": false,\n      "content_length": 158356,\n      "version": "0",\n      "md5": "m0+2JrLqaUzs7aG1yqdGPA==",\n      "_links": {\n        "http://ns.adobe.com/melville/rel/primary": {\n          "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e",\n          "rel": "http://ns.adobe.com/melville/rel/primary",\n          "type": "image/png",\n          "templated": false\n        },\n        "http://ns.adobe.com/melville/rel/path": {\n          "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e",\n          "rel": "http://ns.adobe.com/melville/rel/path",\n          "type": "image/png",\n          "templated": false\n        },\n        "http://ns.adobe.com/melville/rel/rendition": {\n          "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e/:rendition{;page,size,version}",\n          "rel": "http://ns.adobe.com/melville/rel/rendition",\n          "templated": true\n        },\n        "http://ns.adobe.com/melville/rel/version-history": {\n          "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e/:paged_versions{?order,orderby,start,limit,property}",\n          "rel": "http://ns.adobe.com/melville/rel/version-history",\n          "type": "application/vnd.adobe.versions+json",\n          "templated": true\n        },\n        "http://ns.adobe.com/melville/rel/raw": {\n          "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e{;version}/:raw",\n          "rel": "http://ns.adobe.com/melville/rel/raw",\n          "templated": true\n        }\n      },\n      "etag": "\\"9b4fb626b2ea694ceceda1b5caa7463c\\"",\n      "storage_href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e",\n      "representation_order": 1,\n      "is_preferred_thumbnail": false,\n      "is_component": true,\n      "is_external_link": false,\n      "state": "unmodified",\n      "name": "7f95b8e0-5f88-4ba0-8404-82ed3ce90ed5"\n    },\n    {\n      "id": "3cebe682-a820-4b47-a267-f124dcde0941",\n      "type": "application/vnd.adobe.font+json",\n      "relationship": "primary",\n      "is_full_size": false,\n      "is_external_link": false,\n      "is_preferred_thumbnail": false,\n      "is_component": false,\n      "is_external_link": false,\n      "library#isExternalLink": false,\n      "font#data": {\n        "foundry": "The FooBaz Corporation",\n        "postScriptName": "TimesNewRomanPS-BoldMT",\n        "name": "Times New Roman Bold",\n        "style": "Bold",\n        "family": "Times New Roman",\n        "typekitFontId": "some_meaningful_uuid"\n      }\n    }\n  ],\n  "assetSubType": "element",\n  "_fc": true,\n  "_links": {\n    "http://ns.adobe.com/melville/rel/primary": {\n      "href": "/api/v1/libraries/urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n      "rel": "http://ns.adobe.com/melville/rel/primary",\n      "type": "application/json",\n      "templated": false\n    },\n    "http://ns.adobe.com/melville/rel/path": {\n      "href": "/api/v1/libraries/urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n      "rel": "http://ns.adobe.com/melville/rel/path",\n      "type": "application/json",\n      "templated": false\n    },\n    "http://ns.adobe.com/melville/rel/id": {\n      "href": "/api/v1/libraries/urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n      "rel": "http://ns.adobe.com/melville/rel/id",\n      "type": "application/json",\n      "templated": false\n    },\n    "http://ns.adobe.com/melville/rel/describedBy": {\n      "href": "/api/v1/libraries/urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c",\n      "rel": "http://ns.adobe.com/melville/rel/describedBy",\n      "type": "application/json",\n      "templated": false\n    },\n    "http://ns.adobe.com/melville/rel/rendition": {\n      "href": "https://cc-api-storage-stage.adobe.io/assets/adobe-libraries/4dc522a7-af3d-4274-986c-bb1f59bb20d0/22fd8c85-eb35-47bc-aa0d-379497e7414e/:rendition{;size}",\n      "rel": "http://ns.adobe.com/melville/rel/rendition",\n      "templated": true\n    },\n    "http://ns.adobe.com/melville/rel/representations": {\n      "href": "/api/v1/libraries/urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf/elements/9e46e07f-f9c1-4380-b199-754c1f6ffb9c?selector=representations",\n      "rel": "http://ns.adobe.com/melville/rel/representations",\n      "type": "application/json",\n      "templated": false\n    }\n  },\n  "parent_id": "urn:aaid:sc:us:efb1969b-fed5-4381-836e-6d7a97a14fbf",\n  "details": {\n    "created": {\n      "userId": "35305C3E5E861DB40A494026@AdobeID",\n      "deviceId": "MY_COOL_DEVICE_ID",\n      "device": "MY_COOL_DEVICE",\n      "app": "MY_COOL_APP"\n    },\n    "lastModified": {\n      "userId": "35305C3E5E861DB40A494026@AdobeID",\n      "deviceId": "MY_COOL_DEVICE_ID",\n      "device": "MY_COOL_DEVICE",\n      "app": "MY_COOL_APP",\n      "time": 1590014039432\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"multipart-uploads"},"Multipart Uploads"),(0,r.mdx)("p",null,"Uploading an asset that is 5mb or greater requires a different usage pattern than the above. In this case,\nwe will: (1) initiate an upload, (2) split the asset into chunks, (3) upload each chunk separately,\n(4) finalize the upload, and lastly, (5) create the new element."),(0,r.mdx)("p",null,"... coming soon ..."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-guides-working-with-elements-creating-elements-index-md-5f01c770e79f3594b287.js.map