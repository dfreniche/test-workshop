"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[394],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=i,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const l={},r="\ud83e\uddea Markdown Test",o={unversionedId:"content-tips/md-support-test",id:"content-tips/md-support-test",title:"\ud83e\uddea Markdown Test",description:"Original File",source:"@site/docs/50-content-tips/6-md-support-test.mdx",sourceDirName:"50-content-tips",slug:"/content-tips/md-support-test",permalink:"/test-workshop/docs/content-tips/md-support-test",draft:!1,editUrl:"https://github.com/mongodb-developer/test-workshop/blob/main/docs/50-content-tips/6-md-support-test.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcfa Youtube",permalink:"/test-workshop/docs/content-tips/youtube"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Deploying the workshop",permalink:"/test-workshop/docs/deploy-the-workshop"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Philosophy",id:"philosophy",level:3},{value:"Block Elements",id:"block-elements",level:2},{value:"Paragraphs and Line Breaks",id:"paragraphs-and-line-breaks",level:3},{value:"Headers",id:"headers",level:3},{value:"Blockquotes",id:"blockquotes",level:3},{value:"Lists",id:"lists",level:3},{value:"Code Blocks",id:"code-blocks",level:3},{value:"Span Elements",id:"span-elements",level:2},{value:"Links",id:"links",level:3},{value:"Emphasis",id:"emphasis",level:3},{value:"Code",id:"code",level:3}],u={toc:p},k="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-markdown-test"},"\ud83e\uddea Markdown Test"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/mxstbr/markdown-test-file/master/TEST.md"},"Original File")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Just a test to show that regular Markdown works perfectly in Docusaurus")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"------ BEGIN TEST ------\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#philosophy"},"Philosophy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#html"},"Inline HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#autoescape"},"Automatic Escaping for Special Characters")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#block"},"Block Elements"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#p"},"Paragraphs and Line Breaks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#header"},"Headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#blockquote"},"Blockquotes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#list"},"Lists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#precode"},"Code Blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hr"},"Horizontal Rules")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#span"},"Span Elements"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#link"},"Links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#em"},"Emphasis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code"},"Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#img"},"Images")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#misc"},"Miscellaneous"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#backslash"},"Backslash Escapes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#autolink"},"Automatic Links"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("h3",{id:"philosophy"},"Philosophy"),(0,i.kt)("p",null,"Markdown is intended to be as easy-to-read and easy-to-write as is feasible."),(0,i.kt)("p",null,"Readability, however, is emphasized above all else. A Markdown-formatted\ndocument should be publishable as-is, as plain text, without looking\nlike it's been marked up with tags or formatting instructions. While\nMarkdown's syntax has been influenced by several existing text-to-HTML\nfilters -- including ",(0,i.kt)("a",{parentName:"p",href:"http://docutils.sourceforge.net/mirror/setext.html"},"Setext"),", ",(0,i.kt)("a",{parentName:"p",href:"http://www.aaronsw.com/2002/atx/"},"atx"),", ",(0,i.kt)("a",{parentName:"p",href:"http://textism.com/tools/textile/"},"Textile"),", ",(0,i.kt)("a",{parentName:"p",href:"http://docutils.sourceforge.net/rst.html"},"reStructuredText"),",\n",(0,i.kt)("a",{parentName:"p",href:"http://www.triptico.com/software/grutatxt.html"},"Grutatext"),", and ",(0,i.kt)("a",{parentName:"p",href:"http://ettext.taint.org/doc/"},"EtText")," -- the single biggest source of\ninspiration for Markdown's syntax is the format of plain text email."),(0,i.kt)("h2",{id:"block-elements"},"Block Elements"),(0,i.kt)("h3",{id:"paragraphs-and-line-breaks"},"Paragraphs and Line Breaks"),(0,i.kt)("p",null,"A paragraph is simply one or more consecutive lines of text, separated\nby one or more blank lines. (A blank line is any line that looks like a\nblank line -- a line containing nothing but spaces or tabs is considered\nblank.) Normal paragraphs should not be indented with spaces or tabs."),(0,i.kt)("p",null,'The implication of the "one or more consecutive lines of text" rule is\nthat Markdown supports "hard-wrapped" text paragraphs. This differs\nsignificantly from most other text-to-HTML formatters (including Movable\nType\'s "Convert Line Breaks" option) which translate every line break\ncharacter in a paragraph into a ',(0,i.kt)("inlineCode",{parentName:"p"},"<br />")," tag."),(0,i.kt)("p",null,"When you ",(0,i.kt)("em",{parentName:"p"},"do")," want to insert a ",(0,i.kt)("inlineCode",{parentName:"p"},"<br />")," break tag using Markdown, you\nend a line with two or more spaces, then type return."),(0,i.kt)("h3",{id:"headers"},"Headers"),(0,i.kt)("p",null,"Markdown supports two styles of headers, ","[Setext][1]"," and ","[atx][2]","."),(0,i.kt)("p",null,'Optionally, you may "close" atx-style headers. This is purely\ncosmetic -- you can use this if you think it looks better. The\nclosing hashes don\'t even need to match the number of hashes\nused to open the header. (The number of opening hashes\ndetermines the header level.)'),(0,i.kt)("h3",{id:"blockquotes"},"Blockquotes"),(0,i.kt)("p",null,"Markdown uses email-style ",(0,i.kt)("inlineCode",{parentName:"p"},">")," characters for blockquoting. If you're\nfamiliar with quoting passages of text in an email message, then you\nknow how to create a blockquote in Markdown. It looks best if you hard\nwrap the text and put a ",(0,i.kt)("inlineCode",{parentName:"p"},">")," before every line:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus."),(0,i.kt)("p",{parentName:"blockquote"},"Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\nid sem consectetuer libero luctus adipiscing.")),(0,i.kt)("p",null,"Markdown allows you to be lazy and only put the ",(0,i.kt)("inlineCode",{parentName:"p"},">")," before the first\nline of a hard-wrapped paragraph:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\nid sem consectetuer libero luctus adipiscing.")),(0,i.kt)("p",null,"Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by\nadding additional levels of ",(0,i.kt)("inlineCode",{parentName:"p"},">"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is the first level of quoting."),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"This is nested blockquote.")),(0,i.kt)("p",{parentName:"blockquote"},"Back to the first level.")),(0,i.kt)("p",null,"Blockquotes can contain other Markdown elements, including headers, lists,\nand code blocks:"),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"this-is-a-header"},"This is a header."),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"This is the first list item."),(0,i.kt)("li",{parentName:"ol"},"This is the second list item.")),(0,i.kt)("p",{parentName:"blockquote"},"Here's some example code:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'return shell_exec("echo $input | $markdown_script");\n'))),(0,i.kt)("p",null,"Any decent text editor should make email-style quoting easy. For\nexample, with BBEdit, you can make a selection and choose Increase\nQuote Level from the Text menu."),(0,i.kt)("h3",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Markdown supports ordered (numbered) and unordered (bulleted) lists."),(0,i.kt)("p",null,"Unordered lists use asterisks, pluses, and hyphens -- interchangably\n-- as list markers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red"),(0,i.kt)("li",{parentName:"ul"},"Green"),(0,i.kt)("li",{parentName:"ul"},"Blue")),(0,i.kt)("p",null,"is equivalent to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red"),(0,i.kt)("li",{parentName:"ul"},"Green"),(0,i.kt)("li",{parentName:"ul"},"Blue")),(0,i.kt)("p",null,"and:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red"),(0,i.kt)("li",{parentName:"ul"},"Green"),(0,i.kt)("li",{parentName:"ul"},"Blue")),(0,i.kt)("p",null,"Ordered lists use numbers followed by periods:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bird"),(0,i.kt)("li",{parentName:"ol"},"McHale"),(0,i.kt)("li",{parentName:"ol"},"Parish")),(0,i.kt)("p",null,"It's important to note that the actual numbers you use to mark the\nlist have no effect on the HTML output Markdown produces. The HTML\nMarkdown produces from the above list is:"),(0,i.kt)("p",null,"If you instead wrote the list in Markdown like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bird"),(0,i.kt)("li",{parentName:"ol"},"McHale"),(0,i.kt)("li",{parentName:"ol"},"Parish")),(0,i.kt)("p",null,"or even:"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Bird"),(0,i.kt)("li",{parentName:"ol"},"McHale"),(0,i.kt)("li",{parentName:"ol"},"Parish")),(0,i.kt)("p",null,"you'd get the exact same HTML output. The point is, if you want to,\nyou can use ordinal numbers in your ordered Markdown lists, so that\nthe numbers in your source match the numbers in your published HTML.\nBut if you want to be lazy, you don't have to."),(0,i.kt)("p",null,"To make lists look nice, you can wrap items with hanging indents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\nviverra nec, fringilla in, laoreet vitae, risus."),(0,i.kt)("li",{parentName:"ul"},"Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\nSuspendisse id sem consectetuer libero luctus adipiscing.")),(0,i.kt)("p",null,"But if you want to be lazy, you don't have to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\nviverra nec, fringilla in, laoreet vitae, risus."),(0,i.kt)("li",{parentName:"ul"},"Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\nSuspendisse id sem consectetuer libero luctus adipiscing.")),(0,i.kt)("p",null,"List items may consist of multiple paragraphs. Each subsequent\nparagraph in a list item must be indented by either 4 spaces\nor one tab:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This is a list item with two paragraphs. Lorem ipsum dolor\nsit amet, consectetuer adipiscing elit. Aliquam hendrerit\nmi posuere lectus."),(0,i.kt)("p",{parentName:"li"},"Vestibulum enim wisi, viverra nec, fringilla in, laoreet\nvitae, risus. Donec sit amet nisl. Aliquam semper ipsum\nsit amet velit.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Suspendisse id sem consectetuer libero luctus adipiscing."))),(0,i.kt)("p",null,"It looks nice if you indent every line of the subsequent\nparagraphs, but here again, Markdown will allow you to be\nlazy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is a list item with two paragraphs."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"This is the second paragraph in the list item. You're\n")),(0,i.kt)("p",{parentName:"li"},"only required to indent the first line. Lorem ipsum dolor\nsit amet, consectetuer adipiscing elit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Another item in the same list."))),(0,i.kt)("p",null,"To put a blockquote within a list item, the blockquote's ",(0,i.kt)("inlineCode",{parentName:"p"},">"),"\ndelimiters need to be indented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A list item with a blockquote:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This is a blockquote\ninside a list item.")))),(0,i.kt)("p",null,"To put a code block within a list item, the code block needs\nto be indented ",(0,i.kt)("em",{parentName:"p"},"twice")," -- 8 spaces or two tabs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A list item with a code block:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"<code goes here>\n")))),(0,i.kt)("h3",{id:"code-blocks"},"Code Blocks"),(0,i.kt)("p",null,"Pre-formatted code blocks are used for writing about programming or\nmarkup source code. Rather than forming normal paragraphs, the lines\nof a code block are interpreted literally. Markdown wraps a code block\nin both ",(0,i.kt)("inlineCode",{parentName:"p"},"<pre>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<code>")," tags."),(0,i.kt)("p",null,"To produce a code block in Markdown, simply indent every line of the\nblock by at least 4 spaces or 1 tab."),(0,i.kt)("p",null,"This is a normal paragraph:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"This is a code block.\n")),(0,i.kt)("p",null,"Here is an example of AppleScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tell application "Foo"\n    beep\nend tell\n')),(0,i.kt)("p",null,"A code block continues until it reaches a line that is not indented\n(or the end of the article)."),(0,i.kt)("p",null,"Within a code block, ampersands (",(0,i.kt)("inlineCode",{parentName:"p"},"&"),") and angle brackets (",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),")\nare automatically converted into HTML entities. This makes it very\neasy to include example HTML source code using Markdown -- just paste\nit and indent it, and Markdown will handle the hassle of encoding the\nampersands and angle brackets. For example, this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<div class="footer">\n    &copy; 2004 Foo Corporation\n</div>\n')),(0,i.kt)("p",null,"Regular Markdown syntax is not processed within code blocks. E.g.,\nasterisks are just literal asterisks within a code block. This means\nit's also easy to use Markdown to write about Markdown's own syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tell application "Foo"\n    beep\nend tell\n')),(0,i.kt)("h2",{id:"span-elements"},"Span Elements"),(0,i.kt)("h3",{id:"links"},"Links"),(0,i.kt)("p",null,"Markdown supports two style of links: ",(0,i.kt)("em",{parentName:"p"},"inline")," and ",(0,i.kt)("em",{parentName:"p"},"reference"),"."),(0,i.kt)("p",null,"In both styles, the link text is delimited by ","[square brackets]","."),(0,i.kt)("p",null,"To create an inline link, use a set of regular parentheses immediately\nafter the link text's closing square bracket. Inside the parentheses,\nput the URL where you want the link to point, along with an ",(0,i.kt)("em",{parentName:"p"},"optional"),"\ntitle for the link, surrounded in quotes. For example:"),(0,i.kt)("p",null,"This is ",(0,i.kt)("a",{parentName:"p",href:"http://example.com/"},"an example")," inline link."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://example.net/"},"This link")," has no title attribute."),(0,i.kt)("h3",{id:"emphasis"},"Emphasis"),(0,i.kt)("p",null,"Markdown treats asterisks (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") and underscores (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") as indicators of\nemphasis. Text wrapped with one ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," will be wrapped with an\nHTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>")," tag; double ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"'s or ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"'s will be wrapped with an HTML\n",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>")," tag. E.g., this input:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"single asterisks")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"single underscores")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"double asterisks")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"double underscores")),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("p",null,"To indicate a span of code, wrap it with backtick quotes (",(0,i.kt)("inlineCode",{parentName:"p"},"`"),").\nUnlike a pre-formatted code block, a code span indicates code within a\nnormal paragraph. For example:"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"printf()")," function."))}m.isMDXComponent=!0}}]);