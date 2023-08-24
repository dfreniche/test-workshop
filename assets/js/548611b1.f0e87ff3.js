"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[617],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),g=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=g(e.components);return s.createElement(c.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(n),p=i,d=m["".concat(c,".").concat(p)]||m[p]||l[p]||a;return n?s.createElement(d,r(r({ref:t},u),{},{components:n})):s.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var g=2;g<a;g++)r[g]=n[g];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>g,toc:()=>m});var s=n(7462),i=(n(7294),n(4137)),a=n(9524);const r="data:image/png;base64,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",o={},c="\ud83c\udf05 Images",g={unversionedId:"content-tips/images",id:"content-tips/images",title:"\ud83c\udf05 Images",description:"Showing images using Markdown",source:"@site/docs/50-content-tips/1-images.mdx",sourceDirName:"50-content-tips",slug:"/content-tips/images",permalink:"/test-workshop/docs/content-tips/images",draft:!1,editUrl:"https://github.com/mongodb-developer/test-workshop/blob/main/docs/50-content-tips/1-images.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc4 Pages",permalink:"/test-workshop/docs/structure-site/pages"},next:{title:"\ud83d\uddc2\ufe0f PDF files",permalink:"/test-workshop/docs/content-tips/pdf-files"}},u={},m=[{value:"Showing images using Markdown",id:"showing-images-using-markdown",level:2},{value:"Showing images using JSX",id:"showing-images-using-jsx",level:2},{value:"Showing images using JSX, recommended way",id:"showing-images-using-jsx-recommended-way",level:2}],l={toc:m},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,s.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-images"},"\ud83c\udf05 Images"),(0,i.kt)("h2",{id:"showing-images-using-markdown"},"Showing images using Markdown"),(0,i.kt)("p",null,"To show this image:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Some alt text",src:n(8744).Z,width:"760",height:"160"})),(0,i.kt)("p",null,"Just use the usual Markdown code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![Some alt text](/img/docu.svg)\n")),(0,i.kt)("h2",{id:"showing-images-using-jsx"},"Showing images using JSX"),(0,i.kt)("p",null,"If you want a fine-grained control over how the image is presented (changing the size, for instance) then use this JSX snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img\n        alt=\"Using JSX to change image's size\" \n        src={useBaseUrl('/img/docu.svg')}\n        width=\"500\"\n/>\n")),(0,i.kt)("img",{alt:"Using JSX to change image's size",src:(0,a.Z)("/img/docu.svg"),width:"500"}),(0,i.kt)("h2",{id:"showing-images-using-jsx-recommended-way"},"Showing images using JSX, recommended way"),(0,i.kt)("p",null,"We can just import the desired image/resource and create a variable that we'll use to display the image. Works well with images (pngs, gif, jpg) not with svg files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import SampleImage from \'@site/static/img/logo.png\';\n\n<img\n        alt="Using JSX to change image\'s size" \n        src={SampleImage}\n        width="100"\n/>\n')),(0,i.kt)("img",{alt:"Using JSX to change image's size",src:r,width:"100"}))}d.isMDXComponent=!0},8744:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/docu-411a16dd05086935b8e9ddae38ae9b45.svg"}}]);