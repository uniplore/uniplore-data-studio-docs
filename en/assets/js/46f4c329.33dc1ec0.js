"use strict";(self.webpackChunkuniplore_data_studio_dev_docs=self.webpackChunkuniplore_data_studio_dev_docs||[]).push([[1297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),v=a,m=u["".concat(s,".").concat(v)]||u[v]||p[v]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"\u670d\u52a1\u7ba1\u7406",sidebar_position:5},o=void 0,c={unversionedId:"tutorial-docs/data-service/service-management",id:"tutorial-docs/data-service/service-management",title:"\u670d\u52a1\u7ba1\u7406",description:"\u6982\u8ff0",source:"@site/docs/tutorial-docs/data-service/service-management.md",sourceDirName:"tutorial-docs/data-service",slug:"/tutorial-docs/data-service/service-management",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-service/service-management",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u670d\u52a1\u7ba1\u7406",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API\u7ba1\u7406",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-service/api-management"},next:{title:"\u670d\u52a1\u7b56\u7565",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-service/service-strategy"}},s={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u670d\u52a1\u7684\u4e0a\u7ebf\u4e0e\u4e0b\u7ebf",id:"\u670d\u52a1\u7684\u4e0a\u7ebf\u4e0e\u4e0b\u7ebf",level:2},{value:"\u670d\u52a1\u4e0a\u7ebf",id:"\u670d\u52a1\u4e0a\u7ebf",level:3},{value:"\u670d\u52a1\u4e0b\u7ebf",id:"\u670d\u52a1\u4e0b\u7ebf",level:3},{value:"\u670d\u52a1\u7684\u542f\u7528\u4e0e\u7981\u7528",id:"\u670d\u52a1\u7684\u542f\u7528\u4e0e\u7981\u7528",level:2},{value:"\u670d\u52a1\u542f\u7528",id:"\u670d\u52a1\u542f\u7528",level:3},{value:"\u670d\u52a1\u7981\u7528",id:"\u670d\u52a1\u7981\u7528",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5728\u300c\u6570\u636e\u670d\u52a1\u300d-\u300cAPI\u7ba1\u7406\u300d\u5bf9API\u8fdb\u884c\u6388\u6743\u540e\uff0c\u6bcf\u4e2a\u6388\u6743\u5bf9\u8c61\u9488\u5bf9API\u4f1a\u6ce8\u518c\u4e00\u4e2a\u670d\u52a1\uff0c\u670d\u52a1\u7684\u72b6\u6001\u51b3\u5b9a\u8c03\u7528API\u5bf9\u8c61\u6700\u7ec8\u662f\u5426\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u670d\u52a1\u3002",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7ba1\u7406"),"\u5c31\u662f\u5bf9\u6240\u6709\u6ce8\u518c\u7684\u670d\u52a1\u8fdb\u884c\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"\u670d\u52a1\u7684\u4e0a\u7ebf\u4e0e\u4e0b\u7ebf"},"\u670d\u52a1\u7684\u4e0a\u7ebf\u4e0e\u4e0b\u7ebf"),(0,a.kt)("h3",{id:"\u670d\u52a1\u4e0a\u7ebf"},"\u670d\u52a1\u4e0a\u7ebf"),(0,a.kt)("p",null,"\u6210\u529f\u6ce8\u518c\u4e00\u4e2a\u670d\u52a1\u4e4b\u540e\uff0c\u670d\u52a1\u7684\u9ed8\u8ba4\u662f\u5df2\u4e0a\u7ebf\uff0c\u5df2\u4e0a\u7ebf\u7684\u670d\u52a1\u6388\u6743\u5bf9\u8c61\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u8be5\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u8fdb\u5165\u300c\u6570\u636e\u670d\u52a1\u300d-\u300c\u670d\u52a1\u7ba1\u7406\u300d\uff0c\u9009\u62e9\u5df2\u4e0b\u7ebf\u7684\u670d\u52a1\uff0c\u70b9\u51fb\u300c\u4e0a\u7ebf\u300d\u786e\u8ba4\u4e0a\u7ebf\u540e\u5373\u53ef\u4e0a\u7ebf\u8be5\u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-online.png"}," ",(0,a.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-online.png",alt:"API\u6388\u6743\u8be6\u60c5"})," ")),(0,a.kt)("h3",{id:"\u670d\u52a1\u4e0b\u7ebf"},"\u670d\u52a1\u4e0b\u7ebf"),(0,a.kt)("p",null,"\u8fdb\u5165\u300c\u6570\u636e\u670d\u52a1\u300d-\u300c\u670d\u52a1\u7ba1\u7406\u300d\uff0c\u9009\u62e9\u5df2\u4e0a\u7ebf\u7684\u670d\u52a1\uff0c\u70b9\u51fb\u300c\u4e0b\u7ebf\u300d\uff0c\u786e\u8ba4\u4e0b\u7ebf\u540e\u5373\u53ef\u4e0b\u7ebf\u8be5\u670d\u52a1\uff0c\u4e0b\u7ebf\u7684\u670d\u52a1\u4e0d\u53ef\u4ee5\u88ab\u6388\u6743\u5bf9\u8c61\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-offline.png"}," ",(0,a.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-offline.png",alt:"API\u6388\u6743\u8be6\u60c5"})," ")),(0,a.kt)("h2",{id:"\u670d\u52a1\u7684\u542f\u7528\u4e0e\u7981\u7528"},"\u670d\u52a1\u7684\u542f\u7528\u4e0e\u7981\u7528"),(0,a.kt)("h3",{id:"\u670d\u52a1\u542f\u7528"},"\u670d\u52a1\u542f\u7528"),(0,a.kt)("p",null,"\u8fdb\u5165\u300c\u6570\u636e\u670d\u52a1\u300d-\u300c\u670d\u52a1\u7ba1\u7406\u300d\uff0c\u70b9\u51fb\u300c\u7981\u7528\u300d\uff0c\u786e\u8ba4\u7981\u7528\u540e\uff0c\u8be5\u670d\u52a1\u5373\u4e3a\u7981\u7528\u72b6\u6001\u3002\u7981\u7528\u7684\u670d\u52a1\u4e0d\u53ef\u4ee5\u88ab\u6388\u6743\u5bf9\u8c61\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-enable.png"}," ",(0,a.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-enable.png",alt:"API\u6388\u6743\u8be6\u60c5"})," ")),(0,a.kt)("h3",{id:"\u670d\u52a1\u7981\u7528"},"\u670d\u52a1\u7981\u7528"),(0,a.kt)("p",null,"\u8fdb\u5165\u300c\u6570\u636e\u670d\u52a1\u300d-\u300c\u670d\u52a1\u7ba1\u7406\u300d\uff0c\u9009\u62e9\u5df2\u7981\u7528\u7684\u670d\u52a1\uff0c\u70b9\u51fb\u300c\u542f\u7528\u300d\uff0c\u786e\u8ba4\u542f\u7528\u540e\uff0c\u8be5\u670d\u52a1\u66f4\u65b0\u4e3a\u5df2\u4e0a\u7ebf\uff0c\u53ef\u4ee5\u91cd\u65b0\u88ab\u6388\u6743\u5bf9\u8c61\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-disable.png"}," ",(0,a.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-disable.png",alt:"API\u6388\u6743\u8be6\u60c5"})," ")))}p.isMDXComponent=!0}}]);