"use strict";(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[274],{9703:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a,r=n(7462),i=n(3366),l=(n(5007),n(4983)),d=n(1515),o=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:m},h=d.Z;function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.mdx)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",null,"Accessing Different File Formats with Representations"),(0,l.mdx)("p",null,"An element in a Creative Cloud Library can include one or more formats that are accessed as ",(0,l.mdx)("em",{parentName:"p"},"representations")," using the API. As an example, an XD Component can have three different representations; A static PNG file that provides a bitmap version of what the component looks like, an SVG file that has vector information about the component, and a JSON representation of the component that includes a variety of properties included in the component."),(0,l.mdx)("p",null,"Representations are added when an element is created and can be added/modified later. By default, all elements have a static representation in PNG format in addition to whatever the native format of the element is. For instance, a Photoshop object that is added as a Graphics element will include the the source file as a representation (",(0,l.mdx)("inlineCode",{parentName:"p"},".psd"),") as well as a static ",(0,l.mdx)("inlineCode",{parentName:"p"},".png")," representation."),(0,l.mdx)("h2",{id:"getting-thumbnails-and-full-resolution-pngs-using-renditions"},"Getting Thumbnails and Full Resolution PNGs using Renditions"),(0,l.mdx)("p",null,"Separate from ",(0,l.mdx)("inlineCode",{parentName:"p"},"representations"),", all graphical elements in a Library include a static PNG ",(0,l.mdx)("inlineCode",{parentName:"p"},"rendition")," that is created when the element is added. This ",(0,l.mdx)("inlineCode",{parentName:"p"},"rendition")," can be an easy way to get PNG of an graphical element that doesn't require the use of representations. "),(0,l.mdx)("p",null,"Each Library Element includes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"thumbnail")," property which has a ",(0,l.mdx)("inlineCode",{parentName:"p"},"rendition")," link that can be used to access the static PNG for an element. It looks something like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'"thumbnail": {\n    "type": "href",\n    "rendition": "https://cc-api-storage.adobe.io/assets/adobe-libraries/<libraryId>/<UUID of the asset>/:rendition;size=200"\n}\n')),(0,l.mdx)("p",null,"This information is also returned in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/melville/rel/rendition")," object of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"_links")," array on an element. "),(0,l.mdx)("p",null,"When calling that API, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"size")," value can be omitted to return a full-sized rendition or modified which will return a PNG where the longest side is equal to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"size")," specified. "),(0,l.mdx)("p",null,"The following curl call can be used to access a rendition whose longest size will be 400 pixels:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://cc-api-storage.adobe.io/assets/adobe-libraries/<libraryId>/<UUID of the asset>/:rendition;size=400' \\\n--header 'x-api-key: <client ID>' \\\n--header 'Authorization: Bearer <access token>'\n")),(0,l.mdx)("h2",{id:"adobe-product-compatibility-for-representations"},"Adobe Product Compatibility for Representations"),(0,l.mdx)("p",null,"Each Adobe product has specific rules for what representations they include when an element is uploaded."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Product"),(0,l.mdx)("th",{parentName:"tr",align:null},"Element Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Representation Formats"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Photoshop"),(0,l.mdx)("td",{parentName:"tr",align:null},"Graphic"),(0,l.mdx)("td",{parentName:"tr",align:null},"PSD, PNG")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Illustrator"),(0,l.mdx)("td",{parentName:"tr",align:null},"Graphic"),(0,l.mdx)("td",{parentName:"tr",align:null},"AI, PNG")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"XD"),(0,l.mdx)("td",{parentName:"tr",align:null},"Graphic"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"XD"),(0,l.mdx)("td",{parentName:"tr",align:null},"Component"),(0,l.mdx)("td",{parentName:"tr",align:null},"JSON (AGC), SVG, PNG")))),(0,l.mdx)("h2",{id:"getting-representations"},"Getting Representations"),(0,l.mdx)("p",null,"To get a list of all the representations for an element use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"?selector=representations")," on any element:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://cc-libraries.adobe.io/api/v1/libraries/{library_id}/elements/{element_id}?selector=representations' \\\n--header 'x-api-key: {api_key}' \\\n--header 'Authorization: Bearer {access_token}'\n")),(0,l.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"IMPORTANT")," Using selectors can increase the response time of API calls so use them sparingly and only when they are the only option for getting the required data."),(0,l.mdx)("p",null,"That returns a JSON object that includes some basic metadata about the element as well as an array of any representations. Each representation is made up of an asset (usually a file) and has the following properties:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique ID of the representation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"type")),(0,l.mdx)("td",{parentName:"tr",align:null},"The mime type of the asset that defines the representation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"path")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The file name of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_full_size")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean property for whether the specific assets is a full sized representation of the element")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"width")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The width (in pixels) of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"height")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The height (in pixels) of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"version")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The version of the representation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"md5")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The MD5 hash of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"_links")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," An array of links to other properties of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"etag")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The etag of the representation's asset")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"storage_href")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," The location of the file that defines the representation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"is_preferred_thumbnail")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean property for Whether the representation is used as the thubmnail of the element")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"name")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(For file-based representations)")," Name of the representation's asset")))),(0,l.mdx)("h2",{id:"downloading-and-accessing-representations"},"Downloading and Accessing Representations"),(0,l.mdx)("p",null,"For non-file representations, the main information will be captured in a JSON object. For instance, representations of color elements will have a specific ",(0,l.mdx)("inlineCode",{parentName:"p"},"color#data")," property that includes the ",(0,l.mdx)("inlineCode",{parentName:"p"},"mode")," and corresponding color ",(0,l.mdx)("inlineCode",{parentName:"p"},"value"),"."),(0,l.mdx)("p",null,"For file-based representations, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"storage_href")," property contains the path to the file that defines that representation. For many representations, that will be an image file, but in the case of components and other representations, it may point to the JSON object that defines that specific representation format."),(0,l.mdx)("p",null,"To access the representation's file, use a ",(0,l.mdx)("inlineCode",{parentName:"p"},"GET")," request with the same headers on that URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET '{storage_href}' \\\n--header 'x-api-key: {api_key}' \\\n--header 'Authorization: Bearer {access_token}'\n")),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"Note: The URL can also be accessed by following the ",(0,l.mdx)("inlineCode",{parentName:"em"},"http://ns.adobe.com/melville/rel/path")," property of the ",(0,l.mdx)("inlineCode",{parentName:"em"},"_links")," array on the representation.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-guides-working-with-elements-accessing-file-formats-index-md-4e6b24bb45060fc89e7a.js.map