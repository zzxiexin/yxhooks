(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[715],{38645:function(N,M,p){"use strict";var C=p(85045),o=p(67294),_=p(35532),k=p(67915);function b(a){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(a)}function O(a,t){return W(a)||F(a,t)||g(a,t)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(a,t){if(a){if(typeof a=="string")return y(a,t);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return y(a,t)}}function y(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,e=new Array(t);l<t;l++)e[l]=a[l];return e}function F(a,t){var l=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e,n,r,i,s=[],f=!0,m=!1;try{if(r=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=r.call(l)).done)&&(s.push(e.value),s.length!==t);f=!0);}catch(h){m=!0,n=h}finally{try{if(!f&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(m)throw n}}return s}}function W(a){if(Array.isArray(a))return a}function A(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),l.push.apply(l,e)}return l}function P(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?A(Object(l),!0).forEach(function(e){I(a,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):A(Object(l)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))})}return a}function I(a,t,l){return t=c(t),t in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function c(a){var t=d(a,"string");return b(t)==="symbol"?t:String(t)}function d(a,t){if(b(a)!=="object"||a===null)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var e=l.call(a,t||"default");if(b(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function u(a){var t=a.children;return o.createElement("span",{"data-token":t},t)}function v(a){return a.hasQuestionToken&&typeof a.type=="string"&&(a.type=a.type.replace(/\s+\|\s+undefined\s*$/i,"")),a}var E=function(t){var l,e=(0,C.YB)(),n=(0,C.WF)(),r=n.themeConfig;return(l=t.source)!==null&&l!==void 0&&l[0]&&r.sourceLink?o.createElement("a",{className:"dumi-default-api-link",href:e.formatMessage({id:"$internal.api.sourceLink"},P({},t.source[0])),target:"_blank",rel:"noreferrer"},t.className):t.className},S={toNode:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||o.createElement("span",null,t.type):"const"in t?o.createElement("span",null,t.const):"oneOf"in t?this.oneOf(t):o.createElement("span",null,"unknown")},string:function(t){return o.createElement("span",null,t.type)},number:function(t){return o.createElement("span",null,t.type)},boolean:function(t){return o.createElement("span",null,t.type)},any:function(t){return o.createElement("span",null,t.type)},object:function(t){var l=this,e=Object.entries(t.properties||{}),n=e.map(function(r,i){var s,f=O(r,2),m=f[0],h=f[1];return o.createElement("span",{key:m},o.createElement("span",null,m),!((s=t.required)!==null&&s!==void 0&&s.includes(m))&&o.createElement(u,null,"?"),o.createElement(u,null,":"),h.type==="object"?o.createElement("span",null,"object"):l.toNode(h),i<e.length-1&&o.createElement(u,null,";"))});return o.createElement("span",null,o.createElement(u,null,"{"),n,o.createElement(u,null,"}"))},array:function(t){var l=o.createElement("span",null,"any");if(t.items){var e=this.getValidClassName(t.items);l=e??this.toNode(t.items)}return o.createElement("span",null,l,o.createElement(u,null,"["),o.createElement(u,null,"]"))},element:function(t){return o.createElement("span",null,o.createElement(u,null,"<"),o.createElement("span",null,t.componentName),o.createElement(u,null,">"))},function:function(t){var l=this,e=t.signature;if(!e)return o.createElement("span",null,"Function");var n="oneOf"in e?e.oneOf:[e];return n.map(function(r,i){return o.createElement("span",{key:"".concat(i)},r.isAsync?o.createElement(u,null,"async"):"",o.createElement(u,null,"("),r.arguments.map(function(s,f){return o.createElement("span",{key:"".concat(i).concat(f)},o.createElement("span",null,s.key),s.hasQuestionToken&&o.createElement(u,null,"?"),o.createElement(u,null,":"),l.toNode(s.schema?s.schema:v(s)),f<r.arguments.length-1&&o.createElement(u,null,","))}),o.createElement(u,null,")"),o.createElement(u,null,"=>"),l.toNode(r.returnType),i<n.length-1&&o.createElement(u,null,"|"))})},dom:function(t){return o.createElement("span",null,t.className||"DOM")},enum:function(t){var l=t.enum.map(function(e){return JSON.stringify(e)});return o.createElement("span",null,l.map(function(e,n){return o.createElement("span",{key:n},o.createElement("span",null,e),n<l.length-1&&o.createElement(u,null,"|"))}))},oneOf:function(t){var l=this;return t.oneOf.map(function(e,n){return o.createElement("span",{key:n},l.getValidClassName(e)||l.toNode(e),n<t.oneOf.length-1&&o.createElement(u,null,"|"))})},reference:function(t){var l=this,e=t.typeParameters||[],n=e.map(function(r,i){return o.createElement("span",{key:i},l.toNode(r),i<e.length-1&&o.createElement(u,null,","))});return o.createElement(o.Fragment,null,o.createElement("a",{className:"dumi-default-api-link",href:t.externalUrl,target:"_blank",rel:"noreferrer"},t.name),n.length?o.createElement(o.Fragment,null,o.createElement(u,null,"<"),n,o.createElement(u,null,">")):"")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?o.createElement(E,t):null}},j=function(t){var l=useState(function(){return S.toNode(t)}),e=O(l,2),n=e[0],r=e[1];return useEffect(function(){r(S.toNode(t))},[t]),React.createElement("code",{className:"dumi-default-api-type"},n)};function L(a){var t={};return Object.entries(a).forEach(function(l){var e,n,r=O(l,2),i=r[0],s=r[1],f=(e=s.tags)===null||e===void 0?void 0:e.modifierTags,m=(n=s.tags)===null||n===void 0?void 0:n.blockTags;f==null||f.forEach(function(h){(h==="alpha"||h==="beta"||h==="experimental")&&(t[i]=[h])}),m==null||m.forEach(function(h){var R=h.tag,x=h.content;if(R==="deprecated"||R==="since"){var H=x.map(function($){return $.text}).join("");t[i]=[R,H]}})}),t}var T=function(t){var l=t.name,e=t.info,n=useIntl(),r=O(e,2),i=r[0],s=r[1],f=I({className:"dumi-default-api-release-modifer"},"data-release",i);s&&i==="deprecated"&&(f["data-dumi-tooltip"]=s);var m=i==="since"?"".concat(s,"+"):n.formatMessage({id:"api.component.release.".concat(i)});return React.createElement("span",{className:"dumi-default-api-release"},React.createElement("span",{className:"dumi-default-api-release-name","data-release":i},l),React.createElement("span",f,i==="deprecated"?m:React.createElement(Badge,{type:"info"},m)))},D=function(t){var l=useRouteMeta(),e=l.frontmatter,n=useAtomAssets(),r=n.components,i=t.id||e.atomId,s=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var f=r==null?void 0:r[i],m={},h=(t.type||"props").toLowerCase();if(f){var R,x="".concat(h,"Config");m=((R=f[x])===null||R===void 0?void 0:R.properties)||{}}var H=useMemo(function(){return L(m)},[m]);return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),t.type==="props"&&React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,Object.keys(m).length?Object.entries(m).map(function($){var U,z=O($,2),K=z[0],V=z[1];return React.createElement("tr",{key:K},React.createElement("td",null,H[K]?React.createElement(T,{name:K,info:H[K]}):K),React.createElement("td",null,V.description||"--"),React.createElement("td",null,React.createElement(j,V)),t.type==="props"&&React.createElement("td",null,React.createElement("code",null,(U=f.propsConfig.required)!==null&&U!==void 0&&U.includes(K)?s.formatMessage({id:"api.component.required"}):JSON.stringify(V.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i}))))))},B=null},35532:function(N,M,p){"use strict";var C=p(67294);function o(){return o=Object.assign?Object.assign.bind():function(b){for(var O=1;O<arguments.length;O++){var w=arguments[O];for(var g in w)Object.prototype.hasOwnProperty.call(w,g)&&(b[g]=w[g])}return b},o.apply(this,arguments)}var _=function(O){return React.createElement("span",o({className:"dumi-default-badge"},O))},k=null},16795:function(N,M,p){"use strict";var C=p(36096),o=p(24422),_=p(45598),k=p(67294);function b(g){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},b(g)}function O(g){var y=g.children,F=toArray(y).filter(function(A){var P;return b(A)==="object"&&typeof A.type=="function"&&((P=A.type)===null||P===void 0?void 0:P.name)===SourceCode.name}),W=F.map(function(A,P){var I,c,d=(I=A.props)!==null&&I!==void 0?I:{},u=d.lang,v=d.title;return{key:String((c=A.key)!==null&&c!==void 0?c:P),label:v||u||"txt",children:A}});return React.createElement(Tabs,{className:"dumi-default-code-group",items:W})}var w=null},67915:function(N,M,p){"use strict";p.d(M,{Z:function(){return I}});var C=p(93096),o=p.n(C),_=p(67294),k=["children"];function b(c,d){return F(c)||y(c,d)||w(c,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(c,d){if(c){if(typeof c=="string")return g(c,d);var u=Object.prototype.toString.call(c).slice(8,-1);if(u==="Object"&&c.constructor&&(u=c.constructor.name),u==="Map"||u==="Set")return Array.from(c);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(c,d)}}function g(c,d){(d==null||d>c.length)&&(d=c.length);for(var u=0,v=new Array(d);u<d;u++)v[u]=c[u];return v}function y(c,d){var u=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(u!=null){var v,E,S,j,L=[],T=!0,D=!1;try{if(S=(u=u.call(c)).next,d===0){if(Object(u)!==u)return;T=!1}else for(;!(T=(v=S.call(u)).done)&&(L.push(v.value),L.length!==d);T=!0);}catch(B){D=!0,E=B}finally{try{if(!T&&u.return!=null&&(j=u.return(),Object(j)!==j))return}finally{if(D)throw E}}return L}}function F(c){if(Array.isArray(c))return c}function W(c,d){if(c==null)return{};var u=A(c,d),v,E;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(c);for(E=0;E<S.length;E++)v=S[E],!(d.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(c,v)&&(u[v]=c[v])}return u}function A(c,d){if(c==null)return{};var u={},v=Object.keys(c),E,S;for(S=0;S<v.length;S++)E=v[S],!(d.indexOf(E)>=0)&&(u[E]=c[E]);return u}var P=function(d){var u=d.children,v=W(d,k),E=(0,_.useRef)(null),S=(0,_.useState)(!1),j=b(S,2),L=j[0],T=j[1],D=(0,_.useState)(!1),B=b(D,2),a=B[0],t=B[1];return(0,_.useEffect)(function(){var l=E.current;if(l){var e=o()(function(){T(l.scrollLeft>0),t(l.scrollLeft<l.scrollWidth-l.offsetWidth)},100);return e(),l.addEventListener("scroll",e),window.addEventListener("resize",e),function(){l.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}},[]),_.createElement("div",{className:"dumi-default-table"},_.createElement("div",{className:"dumi-default-table-content",ref:E,"data-left-folded":L||void 0,"data-right-folded":a||void 0},_.createElement("table",v,u)))},I=P},66313:function(N,M,p){"use strict";var C=p(70593),o=p(67294);function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_(e)}function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?k(Object(r),!0).forEach(function(i){O(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function O(e,n,r){return n=w(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){var n=g(e,"string");return _(n)==="symbol"?n:String(n)}function g(e,n){if(_(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||"default");if(_(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function y(e,n){return A(e)||W(e,n)||c(e,n)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var i,s,f,m,h=[],R=!0,x=!1;try{if(f=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;R=!1}else for(;!(R=(i=f.call(r)).done)&&(h.push(i.value),h.length!==n);R=!0);}catch(H){x=!0,s=H}finally{try{if(!R&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(x)throw s}}return h}}function A(e){if(Array.isArray(e))return e}function P(e){return u(e)||d(e)||c(e)||I()}function I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(e,n){if(e){if(typeof e=="string")return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,n)}}function d(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u(e){if(Array.isArray(e))return v(e)}function v(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function E(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(e).forEach(function(i,s){var f="".concat(n?"".concat(n,"-"):"").concat(s);switch(i==null?void 0:i.type){case"ul":{var m,h=((m=r[r.length-1])===null||m===void 0?void 0:m.children)||r,R=E(i.props.children||[],f);h.push.apply(h,P(R));break}case"li":{var x=E(i.props.children,f);r.push({title:[].concat(i.props.children).filter(function(H){return H.type!=="ul"}),key:f,children:x,isLeaf:!x.length});break}default:}}),r}var S=function(n){var r=useState(E(n)),i=y(r,2),s=i[0],f=i[1];return useEffect(function(){f(E(n))},[n]),s},j=function(n){var r=n.isLeaf,i=n.expanded;return r?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):i?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},L=function(n){var r=n.isLeaf,i=n.expanded;return r?React.createElement("span",{className:"tree-switcher-leaf-line"}):i?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},T=function(){return{height:0,opacity:0}},D=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},B=function(n){return{height:n?n.offsetHeight:0}},a=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},t={motionName:"ant-motion-collapse",onAppearStart:T,onEnterStart:T,onAppearActive:D,onEnterActive:D,onLeaveStart:B,onLeaveActive:T,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500},l=function(e){var n=S(e.children),r=createRef(),i=function(f,m){var h=m.isLeaf;h||f.shiftKey||f.metaKey||f.ctrlKey||r.current.onNodeExpand(f,m)};return React.createElement(Tree,{className:"dumi-default-tree",icon:j,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:b(b({},t),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:L})}},45598:function(N,M,p){"use strict";var C,o=p(64836).default;C={value:!0},C=b;var _=o(p(67294)),k=p(11805);function b(O){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=[];return _.default.Children.forEach(O,function(y){y==null&&!w.keepEmpty||(Array.isArray(y)?g=g.concat(b(y)):(0,k.isFragment)(y)&&y.props?g=g.concat(b(y.props.children,w)):g.push(y))}),g}},64836:function(N){function M(p){return p&&p.__esModule?p:{default:p}}N.exports=M,N.exports.__esModule=!0,N.exports.default=N.exports}}]);
