"use strict";(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[478],{7678:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return l}});var r=a(7462),o=a(3366),n=(a(5007),a(4983)),s=a(1515),i=["components"],d={},m={_frontmatter:d},p=s.Z;function l(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.mdx)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"glossary"},"Glossary"),(0,n.mdx)("h3",{id:"asset"},"Asset"),(0,n.mdx)("p",null,"An item of content and data about that content, bound together under a single identifier and with a common lifetime. Assets, in turn, are organized into hierarchical namespaces, and each namespace is managed by a ",(0,n.mdx)("a",{parentName:"p",href:"#repository"},"Repository"),". There are three classes of Assets: ",(0,n.mdx)("a",{parentName:"p",href:"#file"},"Files"),", ",(0,n.mdx)("a",{parentName:"p",href:"#composite"},"Composites"),", and ",(0,n.mdx)("a",{parentName:"p",href:"#directory"},"Directories"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"component"},"Component"),(0,n.mdx)("p",null,"A unit of content storage within a ",(0,n.mdx)("a",{parentName:"p",href:"#composite"},"Composite"),". Composites typically contain tens, hundreds, or thousands of Components bound together via a ",(0,n.mdx)("a",{parentName:"p",href:"#manifest"},"Manifest"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"composite"},"Composite"),(0,n.mdx)("p",null,"An ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Asset")," stored in a composite format instead of a traditional, single-file format. Composite formats organize content as a set of ",(0,n.mdx)("a",{parentName:"p",href:"#component"},"Components")," bound together with a ",(0,n.mdx)("a",{parentName:"p",href:"#manifest"},"Manifest"),". These formats are built on top of the Digital Composite Technology DCX framework, which describes both the organization of the Components as well as the transfer and synchronization algorithms used to operate on them."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"directory"},"Directory"),(0,n.mdx)("p",null,"An ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Asset")," that serves as a container for other Assets."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"file"},"File"),(0,n.mdx)("p",null,"An ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Asset")," that is not a ",(0,n.mdx)("a",{parentName:"p",href:"#directory"},"Directory")," (e.g., a Photoshop document)."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"dcx-snapshot"},"DCX Snapshot"),(0,n.mdx)("p",null,"The single-file representation of a ",(0,n.mdx)("a",{parentName:"p",href:"#composite"},"Composite"),", stored as a ",(0,n.mdx)("a",{parentName:"p",href:"#universal-container-format-ucf"},"Universal Container Format (UCF)")," package. A Snapshot contains the following:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"MIME-type file, which contains the media type of the Snapshot. This file does not have an extension."),(0,n.mdx)("li",{parentName:"ul"},"Manifest file, which is the ",(0,n.mdx)("a",{parentName:"li",href:"#manifest"},"Manifest"),". This file does not have an extension."),(0,n.mdx)("li",{parentName:"ul"},"Files and folders containing the ",(0,n.mdx)("a",{parentName:"li",href:"#component"},"Components"),", which are all stored according to their full paths.")),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"directory-structure"},"Directory Structure"),(0,n.mdx)("p",null,"A Directory Structure is associated with the root ",(0,n.mdx)("a",{parentName:"p",href:"#directory"},"Directory")," of a ",(0,n.mdx)("a",{parentName:"p",href:"#repository"},"Repository"),". A Directory Structure can restrict the creation of ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Assets")," by name, path, class, media type, access permissions and other rules. Directory Structures are enforced by the system and supersede access control enforcement."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"enterprise-storage-model"},"Enterprise Storage Model"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("a",{parentName:"p",href:"#directory-structure"},"Directory Structure")," for all ",(0,n.mdx)("a",{parentName:"p",href:"#organizational-repository"},"Organizational Repositories"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"index-repository"},"Index Repository"),(0,n.mdx)("p",null,"The entry point that clients can use to discover all of the other ",(0,n.mdx)("a",{parentName:"p",href:"#repository"},"Repositories")," that they have access to."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"link-relation"},"Link Relation"),(0,n.mdx)("p",null,"An identifier, associated with a link, that describes the relationship between the current ",(0,n.mdx)("a",{parentName:"p",href:"#resource"},"Resource")," and the linked Resource."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"manifest"},"Manifest"),(0,n.mdx)("p",null,"A Manifest contains the structure nodes and references all of the ",(0,n.mdx)("a",{parentName:"p",href:"#component"},"Components")," of a ",(0,n.mdx)("a",{parentName:"p",href:"#composite"},"Composite"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"organizational-repository"},"Organizational Repository"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("a",{parentName:"p",href:"#storage-repository"},"Storage Repository")," owned by an organization."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"resource"},"Resource"),(0,n.mdx)("p",null,"The content and data within an ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Asset"),". There are multiple content and data Resources associated with each Asset. For example, the Primary Resource contains the full content of an Asset, while the Repository Metadata Resource contains properties about an Asset, as well as associated Resource links."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Note"),": For a ",(0,n.mdx)("a",{parentName:"li",href:"#file"},"File"),", the Primary Resource is a binary large object; for a ",(0,n.mdx)("a",{parentName:"li",href:"#directory"},"Directory"),", it is a JSON representation of the the Directory's children; and for a ",(0,n.mdx)("a",{parentName:"li",href:"#composite"},"Composite"),", it is a ",(0,n.mdx)("a",{parentName:"li",href:"#dcx-snapshot"},"DCX Snapshot"),".")),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"repository"},"Repository"),(0,n.mdx)("p",null,"A partition of content organized in a namespace hierarchy, analogous to a volume or drive in desktop operating systems. For now, there are two types: ",(0,n.mdx)("a",{parentName:"p",href:"#storage-repository"},"Storage Repository")," and ",(0,n.mdx)("a",{parentName:"p",href:"#index-repository"},"Index Repository"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"storage-repository"},"Storage Repository"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("a",{parentName:"p",href:"#repository"},"Repository")," with ",(0,n.mdx)("a",{parentName:"p",href:"#asset"},"Assets")," organized according to either the ",(0,n.mdx)("a",{parentName:"p",href:"#user-storage-model"},"User Storage Model")," or the ",(0,n.mdx)("a",{parentName:"p",href:"#enterprise-storage-model"},"Enterprise Storage Model"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"universal-container-format-ucf"},"Universal Container Format (UCF)"),(0,n.mdx)("p",null,"A general-purpose container technology that collects a related set of files into a single-file container. UCF is based on the widely used ZIP archival format, and conforms to the OEBPS Container Format guidelines, as well as the Open Document Format 1.0 specification. Off-the-shelf ZIP tools can be used to open, inspect, and extract files from UCF packages."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"user-repository"},"User Repository"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("a",{parentName:"p",href:"#storage-repository"},"Storage Repository")," owned by an individual user."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"user-storage-model"},"User Storage Model"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("a",{parentName:"p",href:"#directory-structure"},"Directory Structure")," for all ",(0,n.mdx)("a",{parentName:"p",href:"#user-repository"},"User Repositories"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"xcm"},"XCM"),(0,n.mdx)("p",null,"The Experience Content Model (XCM) is the set of models applied by the platform to content and content metadata. These models are expressed in ",(0,n.mdx)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),". Many of the models are based on open and standard vocabularies, including those defined by or incorporated into ",(0,n.mdx)("a",{parentName:"p",href:"#xmp"},"XMP"),". XCM leverages some of the meta-properties defined by ",(0,n.mdx)("a",{parentName:"p",href:"#xdm"},"XDM"),", but it is not an application of XDM."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"xdm"},"XDM"),(0,n.mdx)("p",null,"The Experience Data Model (XDM) is a technology for modeling data used at Adobe, along with associated models. It is a stylized use of ",(0,n.mdx)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," and ",(0,n.mdx)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD"),", and is a publicly documented specification, made available under a Creative Commons license. Content Platform uses meta-properties defined by XDM to augment the JSON Schema-based models defined in ",(0,n.mdx)("a",{parentName:"p",href:"#xcm"},"XCM"),"."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"xmp"},"XMP"),(0,n.mdx)("p",null,"The Extensible Metadata Platform (XMP) is an ISO standard for defining and storing metadata in an open-ended set of vocabularies. (",(0,n.mdx)("a",{parentName:"p",href:"https://www.adobe.com/devnet/xmp.html"},"Click here")," for more information.)"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-references-glossary-index-md-d1a8fb03be89690466e3.js.map