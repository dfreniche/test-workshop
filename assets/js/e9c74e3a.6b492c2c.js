"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[340],{4137:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||u;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<u;i++)a[i]=n[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4797:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var t=n(7462),o=(n(7294),n(4137));const u={},a="\ud83d\udc69\u200d\ud83d\udcbb Running Docusaurus",s={unversionedId:"running-docusaurus",id:"running-docusaurus",title:"\ud83d\udc69\u200d\ud83d\udcbb Running Docusaurus",description:"Run in development",source:"@site/docs/70-running-docusaurus.mdx",sourceDirName:".",slug:"/running-docusaurus",permalink:"/docusaurus-workshop/docs/running-docusaurus",draft:!1,editUrl:"https://github.com/mongodb-developer/docusaurus-workshop/blob/main/docs/70-running-docusaurus.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Deploying the workshop",permalink:"/docusaurus-workshop/docs/deploy-the-workshop"},next:{title:"\ud83c\udfaf Summary",permalink:"/docusaurus-workshop/docs/summary"}},l={},i=[{value:"Run in development",id:"run-in-development",level:2},{value:"Search",id:"search",level:2}],c={toc:i},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-running-docusaurus"},"\ud83d\udc69\u200d\ud83d\udcbb Running Docusaurus"),(0,o.kt)("h2",{id:"run-in-development"},"Run in development"),(0,o.kt)("p",null,"Once you start your site, you should see changes as you save (no need to reload manually)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,o.kt)("p",null,"But sometimes we don't see our changes, or some error appears (esp when deleting folder with docs in the ",(0,o.kt)("a",{parentName:"p",href:"structure-site/docs-folder"},"docs folder"),")"),(0,o.kt)("p",null,"To fix this, stop docusaurus and restart it ",(0,o.kt)("inlineCode",{parentName:"p"},"\xaf\\_(\u30c4)_/\xaf")),(0,o.kt)("h2",{id:"search"},"Search"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cmfcmf/docusaurus-search-local"},"Offline / Local plugin")," is installed to provide search. It only works on production builds, won't work while we're running the development build."),(0,o.kt)("p",null,"To test the search plugin locally you need to generate a production build, then serve it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run docusaurus build\nnpm run docusaurus serve\n")))}d.isMDXComponent=!0}}]);