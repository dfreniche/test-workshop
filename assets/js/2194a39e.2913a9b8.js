"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[55],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={},l="\ud83c\udfc1 Quick Start",i={unversionedId:"quick-start",id:"quick-start",title:"\ud83c\udfc1 Quick Start",description:"For the impatient AKA all of us",source:"@site/docs/30-quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/test-workshop/docs/quick-start",draft:!1,editUrl:"https://github.com/mongodb-developer/test-workshop/blob/main/docs/30-quick-start.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd96 Docusaurus",permalink:"/test-workshop/docs/docusaurus"},next:{title:"Site Structure",permalink:"/test-workshop/docs/category/site-structure"}},s={},p=[{value:"Install Node",id:"install-node",level:2},{value:"Install npx",id:"install-npx",level:2},{value:"Clone this repo",id:"clone-this-repo",level:2},{value:"Start it!",id:"start-it",level:2},{value:"Try it!",id:"try-it",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-quick-start"},"\ud83c\udfc1 Quick Start"),(0,o.kt)("p",null,"For the impatient AKA all of us"),(0,o.kt)("h2",{id:"install-node"},"Install Node"),(0,o.kt)("p",null,"To use Docusaurus we need to ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"install Node.js")),(0,o.kt)("h2",{id:"install-npx"},"Install npx"),(0,o.kt)("p",null,"To clone this repo we'll use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i npx\n")),(0,o.kt)("h2",{id:"clone-this-repo"},"Clone this repo"),(0,o.kt)("p",null,"Clone this repo using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),", giving it the name of the workshop you want to write about"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-docusaurus@latest name-of-my-new-awesome-workshop https://github.com/mongodb-developer/docusaurus-workshop\n")),(0,o.kt)("h2",{id:"start-it"},"Start it!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd name-of-my-new-awesome-workshop\nnpm start\n")),(0,o.kt)("h2",{id:"try-it"},"Try it!"),(0,o.kt)("p",null,"Everything going according to plan, your site should be available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/name-of-my-new-awesome-workshop")))}d.isMDXComponent=!0}}]);