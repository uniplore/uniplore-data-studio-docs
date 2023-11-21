"use strict";(self.webpackChunkuniplore_data_studio_dev_docs=self.webpackChunkuniplore_data_studio_dev_docs||[]).push([[947],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>g});var s=e(7294);function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){d(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,s,d=function(t,a){if(null==t)return{};var e,s,d={},n=Object.keys(t);for(s=0;s<n.length;s++)e=n[s],a.indexOf(e)>=0||(d[e]=t[e]);return d}(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)e=n[s],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(d[e]=t[e])}return d}var r=s.createContext({}),c=function(t){var a=s.useContext(r),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},u=function(t){var a=c(t.components);return s.createElement(r.Provider,{value:a},t.children)},i="mdxType",p={inlineCode:"code",wrapper:function(t){var a=t.children;return s.createElement(s.Fragment,{},a)}},m=s.forwardRef((function(t,a){var e=t.components,d=t.mdxType,n=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),i=c(e),m=d,g=i["".concat(r,".").concat(m)]||i[m]||p[m]||n;return e?s.createElement(g,o(o({ref:a},u),{},{components:e})):s.createElement(g,o({ref:a},u))}));function g(t,a){var e=arguments,d=a&&a.mdxType;if("string"==typeof t||d){var n=e.length,o=new Array(n);o[0]=m;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=t,l[i]="string"==typeof t?t:d,o[1]=l;for(var c=2;c<n;c++)o[c]=e[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,e)}m.displayName="MDXCreateElement"},6056:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=e(7462),d=(e(7294),e(3905));const n={title:"\u5143\u6a21\u578b\u7ba1\u7406",sidebar_position:4},o=void 0,l={unversionedId:"tutorial-docs/data-assets/metamodel-management",id:"tutorial-docs/data-assets/metamodel-management",title:"\u5143\u6a21\u578b\u7ba1\u7406",description:"\u6982\u8ff0",source:"@site/docs/tutorial-docs/data-assets/metamodel-management.md",sourceDirName:"tutorial-docs/data-assets",slug:"/tutorial-docs/data-assets/metamodel-management",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-assets/metamodel-management",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5143\u6a21\u578b\u7ba1\u7406",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5143\u6570\u636e\u540c\u6b65",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-assets/metadata-exchange"},next:{title:"\u5168\u90e8\u5143\u6570\u636e",permalink:"/uniplore-data-studio-docs/en/docs/tutorial-docs/data-assets/all-metadata"}},r={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5143\u6a21\u578b\u7ba1\u7406\u5217\u8868",id:"\u5143\u6a21\u578b\u7ba1\u7406\u5217\u8868",level:2},{value:"\u5143\u6a21\u578b\u8be6\u60c5",id:"\u5143\u6a21\u578b\u8be6\u60c5",level:2},{value:"\u6280\u672f\u5c5e\u6027",id:"\u6280\u672f\u5c5e\u6027",level:3},{value:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027",id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027",level:3},{value:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u65b0\u589e",id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u65b0\u589e",level:4},{value:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u7f16\u8f91",id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u7f16\u8f91",level:4},{value:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u5220\u9664",id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u5220\u9664",level:4},{value:"\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",id:"\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",level:3},{value:"\u65b0\u589e\u5b50\u6a21\u578b",id:"\u65b0\u589e\u5b50\u6a21\u578b",level:3},{value:"\u7f16\u8f91\u5b50\u6a21\u578b",id:"\u7f16\u8f91\u5b50\u6a21\u578b",level:3},{value:"\u5e94\u7528\u6570\u636e\u5e93",id:"\u5e94\u7528\u6570\u636e\u5e93",level:3},{value:"\u5220\u9664\u5b50\u6a21\u578b",id:"\u5220\u9664\u5b50\u6a21\u578b",level:3},{value:"\u65b0\u589e\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",id:"\u65b0\u589e\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",level:3},{value:"\u7f16\u8f91\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",id:"\u7f16\u8f91\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",level:3},{value:"\u5220\u9664\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",id:"\u5220\u9664\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027",level:3}],u={toc:c},i="wrapper";function p(t){let{components:a,...e}=t;return(0,d.kt)(i,(0,s.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,d.kt)("p",null,"\u5143\u6a21\u578b\u7ba1\u7406\uff0c\u662f\u8ddf",(0,d.kt)("strong",{parentName:"p"},"\u6570\u636e\u6e90\u7c7b\u578b"),"\u505a\u7ed1\u5b9a\u7684\uff0c\u4f8b\u5982\u3001MySQL\u3001Oracle\u3001Postgres\u3001SQLServer\u3001HBase\u3001MongoDB\u7b49\uff0c\u6bcf\u79cd\u5143\u6a21\u578b\u5206\u522b\u7ba1\u7406\u81ea\u5df1\u7684\uff0c\u6280\u672f\u5c5e\u6027\uff0c\u901a\u7528\u5c5e\u6027\uff0c\u4e2a\u6027\u5c5e\u6027\uff0c\u5728\u5143\u6570\u636e\u540c\u6b65\u7684\u65f6\u5019\uff0c\u4f1a\u8ddf\u6570\u636e\u6e90\u7c7b\u578b\u505a\u7ed1\u5b9a\uff0c\u6a21\u578b\u5c5e\u6027\u5219\u4f1a\u8ddf\u6570\u636e\u8868\u505a\u7ed1\u5b9a\u3002"),(0,d.kt)("h2",{id:"\u5143\u6a21\u578b\u7ba1\u7406\u5217\u8868"},"\u5143\u6a21\u578b\u7ba1\u7406\u5217\u8868"),(0,d.kt)("p",null,"\u8fdb\u5165\u6570\u636e\u8d44\u4ea7--\u5143\u6a21\u578b\u7ba1\u7406\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata_model.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata_model.png",alt:null}))),(0,d.kt)("h2",{id:"\u5143\u6a21\u578b\u8be6\u60c5"},"\u5143\u6a21\u578b\u8be6\u60c5"),(0,d.kt)("p",null,"\u8fdb\u5165\u6570\u636e\u8d44\u4ea7--\u5143\u6a21\u578b\u7ba1\u7406--\u5143\u6a21\u578b\u8be6\u60c5(",(0,d.kt)("strong",{parentName:"p"},"\u5728\u70b9\u51fb\u7f16\u8f91\u5143\u6a21\u578b\u8fdb\u5165"),")"),(0,d.kt)("h3",{id:"\u6280\u672f\u5c5e\u6027"},"\u6280\u672f\u5c5e\u6027"),(0,d.kt)("p",null,"\u6280\u672f\u5c5e\u6027\uff0c\u5143\u6570\u636e\u540c\u6b65\u7684\u65f6\u5019\u4f7f\u7528\uff0c\u4e3b\u8981\u6709\u6570\u636e\u5e93\u3001\u8868\u540d\u79f0\u3001\u5b58\u50a8\u5f15\u64ce\u3001\u8868\u884c\u6570\u3001\u8868\u6570\u636e\u5927\u5c0f\u3001\u8868\u540d\u79f0\u3001\u7b49\u4fe1\u606f\u3002\u6bcf\u79cd\u6a21\u578b\uff0c\u6280\u672f\u5c5e\u6027\u6709\u6240\u5dee\u5f02\uff0c\u4f46\u4e5f\u5927\u81f4\u4e5f\u76f8\u540c\uff0c\u7cfb\u7edf\u81ea\u5e26\u7684\uff0c\u4e0d\u652f\u6301\u6dfb\u52a0\u6216\u8005\u4fee\u6539\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-attr.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-attr.png",alt:null}))),(0,d.kt)("h3",{id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027"},"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027\uff0c\u4e5f\u662f\u5728\u540c\u6b65\u4efb\u52a1\u7684\u65f6\u5019\u8ddf\u6570\u636e\u8868\u505a\u5173\u8054\u7684\u3002"),(0,d.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u7c7b\u578b\uff1a\u679a\u4e3e\u3001\u6587\u672c\u3001\u76ee\u5f55\u3002\n",(0,d.kt)("a",{parentName:"li",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr.png",alt:null})))),(0,d.kt)("h4",{id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u65b0\u589e"},"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u65b0\u589e"),(0,d.kt)("p",null,"\u5728\u901a\u7528\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\uff0c\u65b0\u589e\u6309\u94ae\u5f39\u51fa\u65b0\u589e\u8868\u5355\uff0c\u586b\u5199\u8868\u5355\u4fe1\u606f\uff0c\u70b9\u51fb\u786e\u8ba4\u4fdd\u5b58\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-add.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-add.png",alt:null}))),(0,d.kt)("h4",{id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u7f16\u8f91"},"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u7f16\u8f91"),(0,d.kt)("p",null,"\u5728\u901a\u7528\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5217\u8868\u4e2d\u70b9\u51fb\u7f16\u8f91\u56fe\u6807\uff0c\u5f39\u51fa\u7f16\u8f91\u6846\uff0c\u8f93\u5165\u8981\u7f16\u8f91\u7684\u5185\u5bb9\uff0c\u70b9\u51fb\u786e\u8ba4\u4fdd\u5b58\u7f16\u8f91\u6570\u636e\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-edit.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-edit.png",alt:null}))),(0,d.kt)("h4",{id:"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u5220\u9664"},"\u901a\u7528\u4e1a\u52a1\u5c5e\u6027--\u5220\u9664"),(0,d.kt)("p",null,"\u5728\u901a\u7528\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5217\u8868\u4e2d\u70b9\u51fb\u5220\u9664\u56fe\u6807\uff0c\u70b9\u51fb\u786e\u8ba4\u5220\u9664\uff0c\u5220\u9664\u6210\u529f\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-delete.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-delete.png",alt:null}))),(0,d.kt)("h3",{id:"\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"},"\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"),(0,d.kt)("p",null,"\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u4e5f\u662f\u5728\u5143\u6570\u636e\u540c\u6b65\u7684\u65f6\u5019\u8ddf\u6570\u636e\u8868\u505a\u5173\u8054\u3002\n\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5206\u4e3a\u4e24\u7ea7\uff0c\u7b2c\u4e00\u7ea7\u662f\u5b50\u6a21\u578b\uff0c\u7b2c\u4e8c\u7ea7\u662f\u5b50\u6a21\u578b\u5c5e\u6027\uff0c\u5f53\u5143\u6570\u636e\u540c\u6b65\u7684\u65f6\u5019\uff0c\u5173\u8054\u7684\u662f\u5b50\u6a21\u578b\u4e0b\u7684\u5c5e\u6027\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr.png",alt:null}))),(0,d.kt)("h3",{id:"\u65b0\u589e\u5b50\u6a21\u578b"},"\u65b0\u589e\u5b50\u6a21\u578b"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u6709\u4e0a\u89d2\u70b9\u51fb\uff0c\u65b0\u589e\u5b50\u6a21\u578b\u6309\u94ae\uff0c\u5f39\u51fa\u5b50\u6a21\u578b\u8868\u5355\uff0c\u586b\u5199\u4fe1\u606f\uff0c\u70b9\u51fb\u786e\u8ba4\u4fdd\u5b58\uff0c\u5b50\u6a21\u578b\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-add.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-add.png",alt:null}))),(0,d.kt)("h3",{id:"\u7f16\u8f91\u5b50\u6a21\u578b"},"\u7f16\u8f91\u5b50\u6a21\u578b"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5de6\u4fa7\u70b9\u51fb\u64cd\u4f5c\u6309\u94ae\uff0c\u5c55\u793a\u4e0b\u62c9\u529f\u80fd\u5217\u8868\uff0c\u70b9\u51fb\u7f16\u8f91\uff0c\u5f39\u51fa\u7f16\u8f91\u6846\uff0c\u586b\u5199\u7f16\u8f91\u4fe1\u606f\uff0c\u786e\u8ba4\u63d0\u4ea4\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-edit.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-edit.png",alt:null}))),(0,d.kt)("h3",{id:"\u5e94\u7528\u6570\u636e\u5e93"},"\u5e94\u7528\u6570\u636e\u5e93"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply1.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply1.png",alt:null})),"\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply2.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply2.png",alt:null}))),(0,d.kt)("h3",{id:"\u5220\u9664\u5b50\u6a21\u578b"},"\u5220\u9664\u5b50\u6a21\u578b"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5de6\u4fa7\u70b9\u51fb\u64cd\u4f5c\u6309\u94ae\uff0c\u5c55\u793a\u4e0b\u62c9\u529f\u80fd\u5217\u8868\uff0c\u70b9\u51fb\u5220\u9664\uff0c\u5f39\u51fa\u5220\u9664\u63d0\u793a\uff0c\u786e\u8ba4\u5220\u9664\uff0c\u5220\u9664\u6210\u529f\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-delete.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-delete.png",alt:null}))),(0,d.kt)("h3",{id:"\u65b0\u589e\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"},"\u65b0\u589e\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5de6\u4fa7\u70b9\u51fb\u64cd\u4f5c\u6309\u94ae\uff0c\u5c55\u793a\u4e0b\u62c9\u529f\u80fd\u5217\u8868\uff0c\u70b9\u51fb\u65b0\u589e\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\uff0c\u5f39\u51fa\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u8868\u5355\uff0c\n\u586b\u5199\u5c5e\u6027\u540d\uff0c\u5c5e\u6027\u4e2d\u6587\u540d\uff0c\u5c5e\u6027\u7c7b\u578b\uff0c\u9009\u9879\uff0c\u662f\u5426\u5fc5\u586b\uff0c\u70b9\u51fb\u786e\u8ba4\uff0c\u5373\u53ef\u6dfb\u52a0\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-add.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-add.png",alt:null}))),(0,d.kt)("h3",{id:"\u7f16\u8f91\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"},"\u7f16\u8f91\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5c55\u5f00\u5b50\u6a21\u578b\uff0c\u5728\u5b50\u6a21\u578b\u4e0b\u9762\u5c31\u53ef\u4ee5\u770b\u5230\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\uff0c\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u53f3\u4fa7\uff0c\u70b9\u51fb\u7f16\u8f91\u7684\u56fe\u6807\uff0c\u5f39\u51fa\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u7f16\u8f91\u8868\u5355\uff0c\u586b\u5199\u8981\u7f16\u8f91\u7684\u6570\u636e\uff0c\u70b9\u51fb\u786e\u8ba4\u5373\u53ef\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-edit.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-edit.png",alt:null}))),(0,d.kt)("h3",{id:"\u5220\u9664\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"},"\u5220\u9664\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027"),(0,d.kt)("p",null,"\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u754c\u9762\uff0c\u5c55\u5f00\u5b50\u6a21\u578b\uff0c\u5728\u5b50\u6a21\u578b\u4e0b\u9762\u5c31\u53ef\u4ee5\u770b\u5230\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\uff0c\u5728\u4e2a\u6027\u4e1a\u52a1\u5c5e\u6027\u5217\u8868\u53f3\u4fa7\uff0c\u70b9\u51fb\u5220\u9664\u7684\u56fe\u6807\uff0c\u786e\u8ba4\u662f\u5426\u5220\u9664\uff0c\u70b9\u51fb\u786e\u8ba4\u5220\u9664\u6210\u529f\u3002\n",(0,d.kt)("a",{parentName:"p",href:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-delete.png"},(0,d.kt)("img",{parentName:"a",src:"https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-delete.png",alt:null}))))}p.isMDXComponent=!0}}]);