!function(){"use strict";var t="/yxhooks/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"yxhooks","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.ff53c311.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.88ad08f7.async.js",65],["docs__Guide__index.md.63fc55ed.chunk.css",81],["docs__Guide__index.md.d37692c0.async.js",81],["hooks__useDebounce__index.md.63fc55ed.chunk.css",150],["hooks__useDebounce__index.md.720482ca.async.js",150],["components__index.md.63fc55ed.chunk.css",179],["components__index.md.7e20796f.async.js",179],["hooks__useRequest__index.md.63fc55ed.chunk.css",190],["hooks__useRequest__index.md.bd1a8ba8.async.js",190],["components__Button__index.md.63fc55ed.chunk.css",220],["components__Button__index.md.a29f481f.async.js",220],["utils__index.md.63fc55ed.chunk.css",422],["utils__index.md.941e94a6.async.js",422],["nm__dumi__theme-default__layouts__DocLayout__index.bc9ad368.async.js",519],["529.047a4725.chunk.css",529],["529.d9b4e8e5.async.js",529],["hooks__useThrottle__index.md.63fc55ed.chunk.css",563],["hooks__useThrottle__index.md.26cd45ab.async.js",563],["593.63a1dd68.async.js",593],["docs__Guide__test1.md.63fc55ed.chunk.css",611],["docs__Guide__test1.md.881e12cb.async.js",611],["715.ddfbf22d.async.js",715],["hooks__useMount__index.md.63fc55ed.chunk.css",789],["hooks__useMount__index.md.97dbffdd.async.js",789],["hooks__useCopy__index.md.63fc55ed.chunk.css",804],["hooks__useCopy__index.md.7773dc66.async.js",804],["hooks__useUnMount__index.md.63fc55ed.chunk.css",839],["hooks__useUnMount__index.md.8a9b155e.async.js",839],["components__CopyToClipboard__index.md.63fc55ed.chunk.css",841],["components__CopyToClipboard__index.md.fd082c17.async.js",841],["hooks__useFullScreen__index.md.63fc55ed.chunk.css",855],["hooks__useFullScreen__index.md.317aa492.async.js",855],["hooks__useTable__index.md.63fc55ed.chunk.css",908],["hooks__useTable__index.md.c86169ba.async.js",908],["dumi__tmp-production__dumi__theme__ContextWrapper.15749e76.async.js",923],["docs__index.md.63fc55ed.chunk.css",935],["docs__index.md.5961642f.async.js",935],["hooks__useClickAny__index.md.63fc55ed.chunk.css",938],["hooks__useClickAny__index.md.2fd18f67.async.js",938]],"r":{"/*":[2,3,16,17,18,37],"/":[21,24,38,39,16,17,18,37],"/guide":[4,5,21,24,16,17,18,37],"/components":[8,9,21,24,16,17,18,37],"/utils":[14,15,21,24,16,17,18,37],"/~demos/:id":[0,1,37],"/guide/test1":[21,22,23,24,16,17,18,37],"/components/button":[12,13,21,24,16,17,18,37],"/components/copy-to-clipboard":[21,24,31,32,16,17,18,37],"/hooks/use-click-any":[21,24,40,41,16,17,18,37],"/hooks/use-copy":[21,24,27,28,16,17,18,37],"/hooks/use-debounce":[6,7,21,24,16,17,18,37],"/hooks/use-full-screen":[21,24,33,34,16,17,18,37],"/hooks/use-mount":[21,24,25,26,16,17,18,37],"/hooks/use-request":[10,11,21,24,16,17,18,37],"/hooks/use-table":[21,24,35,36,16,17,18,37],"/hooks/use-throttle":[19,20,21,24,16,17,18,37],"/hooks/use-un-mount":[21,24,29,30,16,17,18,37]}},{publicPath:"/yxhooks/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();