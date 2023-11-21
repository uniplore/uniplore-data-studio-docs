"use strict";(self.webpackChunkuniplore_data_studio_dev_docs=self.webpackChunkuniplore_data_studio_dev_docs||[]).push([[161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(g,c(c({ref:t},l),{},{components:n})):a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u6570\u636e\u6e90\u7ba1\u7406",sidebar_position:2},c=void 0,i={unversionedId:"tutorial-docs/org-management/datasource-management",id:"tutorial-docs/org-management/datasource-management",title:"\u6570\u636e\u6e90\u7ba1\u7406",description:"\u6982\u8ff0",source:"@site/docs/tutorial-docs/org-management/datasource-management.md",sourceDirName:"tutorial-docs/org-management",slug:"/tutorial-docs/org-management/datasource-management",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/org-management/datasource-management",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u6e90\u7ba1\u7406",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6210\u5458\u7ba1\u7406",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/org-management/member-management"},next:{title:"ChangeLog",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/org-management/ChangeLog"}},s={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6570\u636e\u6e90\u64cd\u4f5c",id:"\u6570\u636e\u6e90\u64cd\u4f5c",level:2},{value:"\u6dfb\u52a0",id:"\u6dfb\u52a0",level:3},{value:"\u7f16\u8f91",id:"\u7f16\u8f91",level:3},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:3},{value:"\u6388\u6743\u9879\u76ee",id:"\u6388\u6743\u9879\u76ee",level:3}],l={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"\u5c55\u793a\u7cfb\u7edf\u4e2d\u6240\u6709\u53ef\u7528\u7684\u6570\u636e\u6e90\uff0c\u76ee\u524d\u7248\u672c\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b\u5305\u62ec\uff1aMySQL\u3001Oracle\u3001Postgres\uff0c\u5176\u4ed6\u6570\u636e\u6e90\u7c7b\u578b\u5c06\u5728\u540e\u7eed\u7248\u672c\u9010\u6b65\u5f15\u5165\u652f\u6301\u3002\u4e0d\u540c\u7684\u6570\u636e\u6e90\u5728\u8fde\u63a5\u662f\u4f1a\u6709\u4e0d\u540c\u7684\u5dee\u5f02\uff0c\u4e0d\u8fc7\u5927\u591a\u6570\u5747\u53ef\u901a\u8fc7 JDBC \u8fde\u63a5\uff0c\u8fd9\u4e5f\u662f\u5e73\u53f0\u76ee\u524d\u91c7\u7528\u7684\u65b9\u6cd5\u3002\u7528\u6237\u53ef\u65b0\u589e\u3001\u7f16\u8f91\u3001\u7b5b\u9009\u6570\u636e\u6e90\u3001\u628a\u6570\u636e\u6e90\u6388\u6743\u7ed9\u6307\u5b9a\u9879\u76ee\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u6e90\u64cd\u4f5c"},"\u6570\u636e\u6e90\u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u6dfb\u52a0"},"\u6dfb\u52a0"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u6dfb\u52a0\u6570\u636e\u6e90\u201d\u6309\u94ae\uff0c\u8fdb\u5165\u65b0\u589e\u9875\u9762\u3002\u9700\u8981\u6ce8\u610f\u8fde\u63a5\u5730\u5740\u4e3a\u6807\u51c6 IP \u5730\u5740\u683c\u5f0f\uff08\u6bd4\u5982\uff1a127.0.0.1\uff09\uff0c\u7aef\u53e3\u53f7\u662f\u6570\u636e\u6e90\u7684\u8fde\u63a5\u7aef\u53e3\u53f7\uff0c\u4e0d\u540c\u7684\u6570\u636e\u6e90\u7aef\u53e3\u53f7\u4e0d\u76f8\u540c\uff0c\u7528\u6237\u540d\u3001\u5bc6\u7801\u4e5f\u8981\u5bf9\u5e94\u4e0a\u3002\u6d4b\u8bd5\u8fde\u63a5\u6210\u529f\uff0c\u5373\u53ef\u4fdd\u5b58\u8be5\u6570\u636e\u6e90\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/add.png"},(0,r.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/add.png",alt:null}))),(0,r.kt)("h3",{id:"\u7f16\u8f91"},"\u7f16\u8f91"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u7f16\u8f91\u201d\u6253\u5f00\u7f16\u8f91\u9875\u9762\uff0c\u66f4\u6539\u76ee\u6807\u4fe1\u606f\uff0c\u6d4b\u8bd5\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5373\u53ef\u5b8c\u6210\u7f16\u8f91\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/edit.png"},(0,r.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/edit.png",alt:null}))),(0,r.kt)("h3",{id:"\u641c\u7d22"},"\u641c\u7d22"),(0,r.kt)("p",null,"\u53ef\u5728\u6700\u4e0a\u65b9\u641c\u7d22\u6846\u4e2d\u6839\u636e\u6570\u636e\u6e90\u540d\u79f0\u3001\u7c7b\u578b\u3001\u6388\u6743\u9879\u76ee\u7b5b\u9009\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/search.png"},(0,r.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/search.png",alt:null}))),(0,r.kt)("h3",{id:"\u6388\u6743\u9879\u76ee"},"\u6388\u6743\u9879\u76ee"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u6388\u6743\u201d\u628a\u6570\u636e\u6e90\u6388\u6743\u7ed9\u9879\u76ee\uff0c\u4e00\u4e2a\u6570\u636e\u6e90\u53ef\u6388\u6743\u7ed9\u591a\u4e2a\u9879\u76ee\u3002\u6388\u6743\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728\u6388\u6743\u9879\u76ee\u4e2d\u5bf9\u8be5\u6570\u636e\u6e90\u8fdb\u884c\u89c4\u5219\u914d\u7f6e\u3001\u4efb\u52a1\u7ba1\u7406\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/authorize.png"},(0,r.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/authorize.png",alt:null}))))}m.isMDXComponent=!0}}]);