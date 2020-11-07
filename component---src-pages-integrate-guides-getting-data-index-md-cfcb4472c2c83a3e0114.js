(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{i4l0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("ndZU"),i=(a("qKvR"),{}),l={_frontmatter:i},c=s.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"getting-library-and-element-data"},"Getting Library and Element Data"),Object(o.mdx)("p",null,"Any integration with the Libraries API will involve reading information about a user's stored libraries and elements."),Object(o.mdx)("p",null,"For example, you may want answers to questions like:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"What libraries or elements were created in the last week?"),Object(o.mdx)("li",{parentName:"ul"},"What is the name of each element in a given library?"),Object(o.mdx)("li",{parentName:"ul"},"Where is the thumbnail for a given library element?")),Object(o.mdx)("p",null,"As you might imagine, you can accomplish all of this and much more with ",Object(o.mdx)("inlineCode",{parentName:"p"},"GET")," requests to the Libraries API."),Object(o.mdx)("p",null,"Depending on your use case, you may prefer to make your Libraries API calls from the client or from your server. In this tutorial, we're going to focus on how to make calls from your server with Node.js and Express."),Object(o.mdx)("p",null,"In each step, we'll set up an Express route to make an API call and talk a little about the response we get. The accompanying sample repo will embellish slightly on what we cover here by making simple use of the API responses in the browser."),Object(o.mdx)("p",null,"Reading through this tutorial will give you a simple jumping off point for learning more about our ",Object(o.mdx)("inlineCode",{parentName:"p"},"GET")," endpoints in the API references."),Object(o.mdx)("h2",{id:"before-you-start"},"Before you start"),Object(o.mdx)("h3",{id:"technology-used"},"Technology Used"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Node.js"),Object(o.mdx)("li",{parentName:"ul"},"npm"),Object(o.mdx)("li",{parentName:"ul"},"Express"),Object(o.mdx)("li",{parentName:"ul"},"Axios")),Object(o.mdx)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./tutorials/how-to-get-access-tokens-with-oauth.md"}),"How to get access tokens with OAuth")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./quick-start-nodejs.md"}),"Quick Start: Node.js"))),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this tutorial can be found ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cc-libraries-api/code-samples/tree/master/getting-data-nodejs"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"1-bootstrap-an-express-app"},"1. Bootstrap an Express app"),Object(o.mdx)("p",null,"We'll start by using ",Object(o.mdx)("inlineCode",{parentName:"p"},"express-generator"),", a scaffolding tool provided by Express, a popular server-side framework for Node.js. In your terminal, create your project:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx express-generator --ejs --git myapp\n")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nYou can learn more about ",Object(o.mdx)("inlineCode",{parentName:"p"},"express-generator")," in ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/generator.html"}),"their docs"),". For our purposes here, this is all we need to do before digging in.")),Object(o.mdx)("p",null,"Then navigate to your new project, install dependencies, and start your app:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd myapp\nnpm install --save axios dotenv\ntouch .env\nnpm start\n")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nFor setting up your ",Object(o.mdx)("inlineCode",{parentName:"p"},".env")," file, see the ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cc-libraries-api/api-docs/blob/master/tutorials/quick-start-nodejs.md#1-set-up-your-environment-variables"}),'"Set up your environment variables" section')," in our ",Object(o.mdx)("em",{parentName:"p"},"Quick Start: Node.js")," tutorial.")),Object(o.mdx)("p",null,"In your browser, if you navigate to ",Object(o.mdx)("inlineCode",{parentName:"p"},"localhost:3000"),", you'll see the default home page created by ",Object(o.mdx)("inlineCode",{parentName:"p"},"express-generator"),". (We won't be working with UI in this tutorial, but the accompanying sample repo makes very basic use of the API responses in the browser.)"),Object(o.mdx)("h3",{id:"2-get-metadata-about-your-users-libraries"},"2. Get metadata about your user's Libraries"),Object(o.mdx)("p",null,"We'll get started with the Libraries API by getting a top-level view of the libraries that the user has stored."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Creating the route")),Object(o.mdx)("p",null,"In the app we just generated, we'll create a new route in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"routes/index.js")," file:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'require("dotenv").config();\nconst express = require("express");\nconst router = express.Router();\nconst axios = require("axios"); // Be sure to require axios\n\nconst baseURL = "https://cc-libraries.adobe.io/api/v1/libraries";\n\n// The default GET route provided by express-generator\nrouter.get("/", async (req, res, next) => {\n  res.render("index", { title: "Creative Cloud Libraries API" });\n});\n\n// Our new route\nrouter.get("/cc-libraries/data", async (req, res, next) => {\n  const options = {\n    headers: {\n      "x-api-key": process.env.API_KEY,\n      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n    },\n  };\n\n  try {\n    const response = await axios.get(baseURL, options);\n    res.json(response.data);\n  } catch (error) {\n    console.log(error);\n    next(error);\n  }\n});\n\nmodule.exports = router;\n')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nAbove this route, we've also set the ",Object(o.mdx)("inlineCode",{parentName:"p"},"baseURL")," variable. We'll use this variable in other routes later on, so make sure you've set it outside of the route as you see above.")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"What it does")),Object(o.mdx)("p",null,"The heart of the ",Object(o.mdx)("inlineCode",{parentName:"p"},'"/cc-libraries/data"')," route is where we make the API call (for this example, we're using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module for making HTTP requests):"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const response = await axios.get(baseURL, options);\nres.json(response.data);\n")),Object(o.mdx)("p",null,"If everything goes well, we'll get a response from the Libraries API that contains JSON data (in this example, within ",Object(o.mdx)("inlineCode",{parentName:"p"},"response.data"),") that we return to the browser."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Try it out")),Object(o.mdx)("p",null,"You can access this endpoint by navigating your browser to:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"http://localhost:3000/cc-libraries/data\n")),Object(o.mdx)("p",null,"The response will look something like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ]\n}\n')),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"libraries")," array contains a JSON object full of metadata related to each of your user's Libraries. Each object in this array will have a unique ",Object(o.mdx)("inlineCode",{parentName:"p"},"id")," property for that specific library:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "AAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA",\n  "name": "My Libraray",\n  "created_date": 1565044330560,\n  "modified_date": 1568329791348\n  /* More library metadata */\n}\n')),Object(o.mdx)("p",null,"Go ahead and copy an ",Object(o.mdx)("inlineCode",{parentName:"p"},"id")," from one of your libraries. We'll use it in the next step."),Object(o.mdx)("h3",{id:"3-get-metadata-for-elements-in-a-specific-library"},"3. Get metadata for elements in a specific Library"),Object(o.mdx)("p",null,"Next we'll get a list of elements contained in a given library."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Creating the route")),Object(o.mdx)("p",null,"Back in ",Object(o.mdx)("inlineCode",{parentName:"p"},"routes/index.js"),", we'll create a route for retreiving metadata for a specific Library's elements:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'router.get("/cc-libraries/data/:libraryId", async (req, res, next) => {\n  const { libraryId } = req.params;\n\n  const options = {\n    headers: {\n      "x-api-key": process.env.API_KEY,\n      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n    },\n  };\n\n  try {\n    const response = await axios.get(\n      `${baseURL}/${libraryId}/elements`,\n      options\n    );\n    res.json(response.data);\n  } catch (error) {\n    console.log(error);\n    next(error);\n  }\n});\n')),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"What it does")),Object(o.mdx)("p",null,"Our route above takes a ",Object(o.mdx)("inlineCode",{parentName:"p"},"libraryId")," parameter. This parameter is then used to create the Libraries API endpoint we want to call:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"`${baseURL}/${libraryId}/elements`;\n// Or, https://cc-libraries.adobe.io/api/v1/libraries/AAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA/elements\n")),Object(o.mdx)("p",null,"As in the first route, we use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module to make the HTTP request. If the request is successful, we get a JSON object from the Libraries API that we send back to the browser."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Try it out")),Object(o.mdx)("p",null,"You can access this endpoint by navigating your browser to this URL (be sure to swap in the library ID you copied in the previous step):"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"http://localhost:3000/cc-libraries/data/AAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA\n")),Object(o.mdx)("p",null,"The response will look something like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "total_count": 60,\n  "elements": [\n    /* Library elements here */\n  ]\n}\n')),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"elements")," array contains a JSON object full of metadata related to each of the elements stored in a given Library:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "BBBBBBBB-BBBB-BBBB-BBBB-BBBBBBBBB",\n  "name": "An Element Name",\n  "created_date": 1565044330560,\n  "modified_date": 1568329791348,\n  "type": "application/vnd.adobe.element.pattern+dcx",\n  "thumbnail": {},\n  "groups": [],\n  "assetSubType": "element"\n}\n')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nIt's worth noting that if you already have a specific element ID that you want metadata for, you can request it directly using the element ID (e.g., ",Object(o.mdx)("inlineCode",{parentName:"p"},"${baseURL}/${libraryId}/elements/${elementId}"),"). See the endpoint references for more details.")),Object(o.mdx)("h3",{id:"4-getting-image-renditions-and-thumbnails"},"4. Getting image renditions and thumbnails"),Object(o.mdx)("p",null,"Next we'll get an image rendition for a specific element."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Creating the route")),Object(o.mdx)("p",null,"Back in ",Object(o.mdx)("inlineCode",{parentName:"p"},"routes/index.js"),", we'll create a route for retreiving an image representation of a Library element:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'router.get("/cc-libraries/image", async (req, res, next) => {\n  let { url } = req.query;\n  url = url.slice(0, url.lastIndexOf("/")); // See the Info box below\n\n  const options = {\n    responseType: "arraybuffer",\n    headers: {\n      "x-api-key": process.env.API_KEY,\n      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n    },\n  };\n\n  try {\n    const response = await axios.get(url, options);\n    const dataUrl = getBase64dataUrl(response);\n\n    res.set("Content-Type", response.headers["content-type"]);\n    res.set("Content-Length", response.headers["content-length"]);\n    res.send(dataUrl);\n  } catch (error) {\n    console.log(error.message);\n    next(error);\n  }\n});\n\nconst getBase64dataUrl = (response) => {\n  const base64flag = `data:${response.headers["content-type"]};base64,`;\n  const base64string = Buffer.from(response.data, "binary").toString("base64");\n\n  return `${base64flag}${base64string}`;\n};\n')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nNote that above, for simplicity we are naively slicing off from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"url")," query the rendition argument the Libraries API provides by default, which is ",Object(o.mdx)("inlineCode",{parentName:"p"},":rendition;size=200"),". Slicing this off gives you a full-size image, which in many cases may not be ideal due to size. If you have a specific size in mind, you can change ",Object(o.mdx)("inlineCode",{parentName:"p"},"200")," to another value, or keep the query in tact.")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"What it does")),Object(o.mdx)("p",null,"Our route above takes a ",Object(o.mdx)("inlineCode",{parentName:"p"},"url")," query (",Object(o.mdx)("inlineCode",{parentName:"p"},"/cc-libraries/image?url=https://url-here"),"). The value of this query (which is the element's thumbnail URL we copied in the previous step) is then used to call the Adobe storage service:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const response = await axios.get(url, options);\n")),Object(o.mdx)("p",null,"Again, we use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module to make the HTTP request. If the request is successful, we receive image data that we can do further work with."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nNote that, unlike in our previous routes, here we are not using the Libraries API ",Object(o.mdx)("inlineCode",{parentName:"p"},"baseURL")," variable that we defined earlier. Images come from another service which we will call directly.")),Object(o.mdx)("p",null,"The route will then transform the response data from an array buffer to a base64 data URL (",Object(o.mdx)("inlineCode",{parentName:"p"},"dataUrl"),") that can be used as the ",Object(o.mdx)("inlineCode",{parentName:"p"},"src")," of an image element in the browser. This step is just for the purpose of demonstration; you might have other uses for the image data."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Try it out")),Object(o.mdx)("p",null,"You can access this endpoint by navigating your browser to this URL (be sure to swap in the thumbnail URL you copied in the previous step):"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"http://localhost:3000/cc-libraries/image?url=https://url-here\n")),Object(o.mdx)("p",null,"Your browser will receive a base64 string representing the image data. Since we haven't set up an image element to display the image data, you'll need to have a look in your browser's developer tools to see the data. In Chome DevTools for example, you can find the data string in the ",Object(o.mdx)("em",{parentName:"p"},"Sources")," tab, under ",Object(o.mdx)("em",{parentName:"p"},"top > localhost:{port} > cc-libraries > image?url=https://url-here"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-base64"}),"data:image/jpeg;base64,base64stringhere...\n")),Object(o.mdx)("p",null,"If we wanted to display the image, this base64 data URL (",Object(o.mdx)("inlineCode",{parentName:"p"},"dataUrl"),") could be used as the ",Object(o.mdx)("inlineCode",{parentName:"p"},"src")," of an image element. In fact, the accompanying sample repo does this if it's something you're interested in seeing."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-guides-getting-data-index-md-cfcb4472c2c83a3e0114.js.map