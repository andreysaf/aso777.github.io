_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{AFKX:function(e,t){},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("8Kt/"),o=a.n(i),l=a("v/A3"),c=a("v7Hm"),s=a("U6LL"),u=a("sKyC"),d=a("pr4h");var m=Object(s.a)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});d.a&&(m.displayName="Center");var v=a("wZsY"),p=a("hMXk"),f=a("x9W9"),b=a("epLR");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var y=Object(u.a)((e,t)=>{var{spacing:a="0.5rem",children:r,justify:i,direction:o,align:l,className:c,shouldWrapChildren:u}=e,d=g(e,["spacing","children","justify","direction","align","className","shouldWrapChildren"]),m=n.useMemo(()=>({"--chakra-wrap-spacing":e=>Object(f.c)(a,t=>Object(p.tokenToCSSVar)("space",t)(e)),"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:i,alignItems:l,flexDirection:o,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}),[a,i,l,o]),v=u?n.Children.map(r,(e,t)=>n.createElement(w,{key:t},e)):r;return n.createElement(s.a.div,h({ref:t,className:Object(b.c)("chakra-wrap",c)},d),n.createElement(s.a.ul,{className:"chakra-wrap__list",__css:m},v))});d.a&&(y.displayName="Wrap");var w=Object(u.a)((e,t)=>{var{className:a}=e,r=g(e,["className"]);return(n.createElement(s.a.li,h({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:Object(b.c)("chakra-wrap__listitem",a)},r)))});d.a&&(w.displayName="WrapItem");var j=a("yGVr"),O=a("5+Am"),E=a("4jWa"),C=a("CRla");function k(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var N=Object(u.a)((e,t)=>{var a=_({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},Object(O.d)().badge);return n.createElement(s.a.div,_({ref:t},e,{className:Object(b.c)("chakra-avatar__badge",e.className),__css:a}))});function x(e){var[t,a]=e.split(" ");return t&&a?""+t.charAt(0)+a.charAt(0):t.charAt(0)}d.a&&(N.displayName="AvatarBadge");var S=e=>{var{name:t,getInitials:a}=e,r=k(e,["name","getInitials"]),i=Object(O.d)();return n.createElement(s.a.div,_({role:"img","aria-label":t},r,{__css:i.label}),t?null==a?void 0:a(t):null)},I=e=>n.createElement(s.a.svg,_({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),n.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),n.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),A={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},T=Object(u.a)((e,t)=>{var a=Object(E.a)("Avatar",e),r=Object(C.b)(e),{src:i,name:o,showBorder:l,borderRadius:c="full",onError:u,getInitials:d=x,icon:m=n.createElement(I,null),iconLabel:v=" avatar",loading:p,children:f,borderColor:h}=r,g=k(r,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor"]),y=_({borderRadius:c,borderWidth:l?"2px":void 0},A,a.container);return h&&(y.borderColor=h),n.createElement(s.a.span,_({ref:t},g,{className:Object(b.c)("chakra-avatar",e.className),__css:y}),n.createElement(O.b,{value:a},n.createElement(L,{src:i,loading:p,onError:u,getInitials:d,name:o,borderRadius:c,icon:m,iconLabel:v}),f))});d.a&&(T.displayName="Avatar");var L=e=>{var{src:t,onError:a,getInitials:r,name:i,borderRadius:o,loading:l,iconLabel:c,icon:u=n.createElement(I,null)}=e,d=Object(j.a)({src:t,onError:a});return!t||!("loaded"===d)?i?n.createElement(S,{className:"chakra-avatar__initials",getInitials:r,name:i}):n.cloneElement(u,{role:"img","aria-label":c}):n.createElement(s.a.img,{src:t,alt:i,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:o}})};d.a&&(L.displayName="AvatarImage");var P=a("rGDf"),R=a("5pGj"),W=a("CafY"),q=a("hBto"),M=a("aIN1"),B=r.a.createElement;t.default=function(){var e=Object(l.a)({base:"xl",md:"2xl"}),t=Object(l.a)({base:"2xl",md:"4xl"}),a=Object(l.a)({base:"md",md:"xl"});return B(W.a,null,B(o.a,null,B("title",null,"Andrey Safonov - Head of Product, Technical Product Manager"),B("link",{rel:"icon",href:"/favicon.ico"}),B("meta",{name:"Description",content:"Andrey Safonov is a technical product manager and leads a team of product managers at PDFTron. BASc in Computer Engineering with minor in Business Management."})),B(q.a,null),B(c.a,{w:"100%",p:16},B(m,null,B(v.a,{spacing:6},B(y,null,B(w,{pl:4},B(T,{size:e,name:"Andrey Safonov",src:"/profile.jpg"}))),B(y,null,B(w,null,B(P.a,{as:"h1",size:t,pl:4},"Andrey Safonov"))),B(y,null,B(w,null,B(P.a,{as:"h2",size:a,pl:4},"Head of Product @PDFTron"))),B(y,null,B(w,null,B(R.a,null,"I am a technical product manager who started my career as a software engineer before transitioning to consulting, solution engineering, and then product. I enjoy working directly with customers to understand the underlying pain and building products that solve that pain."))),B(y,null,B(w,null,B(R.a,null,"My day-to-day is spent listening to users, prototyping with designers, designing APIs with developers, creating content with marketing and enabling the sales team to deliver great products at PDFTron.")))))),B(M.a,null))}},hMXk:function(e,t,a){"use strict";var n=a("0sYf");a.o(n,"tokenToCSSVar")&&a.d(t,"tokenToCSSVar",(function(){return n.tokenToCSSVar}));var r=a("AFKX");a.o(r,"tokenToCSSVar")&&a.d(t,"tokenToCSSVar",(function(){return r.tokenToCSSVar}))},"v/A3":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("5+Am"),r=a("pr4h"),i=a("BXwj"),o=a("x9W9");var l=a("yZps"),c=a("q1tI"),s=a.n(c);function u(e){return Object.entries(e).sort((e,t)=>Number.parseInt(e[1],10)>Number.parseInt(t[1],10)?1:-1).map((e,t,a)=>{var[n,r]=e,i=a[t+1],o=i?i[1]:void 0;return{minWidth:r,maxWidth:o,breakpoint:n,query:function(e,t){if(!(parseInt(e,10)>=0)&&!t)return"";var a="(min-width: "+v(e)+")";if(!t)return a;a&&(a+=" and ");return a+="(max-width: "+v(function(e){return m(e,e.endsWith("px")?-1:-.01)}(t))+")"}(r,o)}})}var d=/([0-9]+\.?[0-9]*)/,m=(e,t)=>"number"===typeof e?""+(e+t):e.replace(d,e=>""+(parseFloat(e)+t));function v(e){return Object(r.g)(e)?e+"px":e}function p(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){var a=function(e){var{breakpoints:t}=Object(n.e)(),a=Object(l.b)(),r=s.a.useMemo(()=>u(f({base:"0px"},t)),[t]),[i,o]=s.a.useState(()=>{if(e){var t=r.find(t=>{var{breakpoint:a}=t;return a===e});if(t)return p(t,["query"])}}),c=null==i?void 0:i.breakpoint,d=s.a.useCallback((e,t)=>{e.matches&&c!==t.breakpoint&&o(t)},[c]);return s.a.useEffect(()=>{var e=new Set;return r.forEach(t=>{var{query:n}=t,r=p(t,["query"]),i=a.window.matchMedia(n);d(i,r);var o=()=>{d(i,r)};return i.addListener(o),e.add({mediaQuery:i,handleChange:o}),()=>{i.removeListener(o)}}),()=>{e.forEach(e=>{var{mediaQuery:t,handleChange:a}=e;t.removeListener(a)}),e.clear()}},[r,t,d,a.window]),c}(t),c=Object(n.e)();if(a){var d=Object.keys(c.breakpoints);return function(e,t,a){void 0===a&&(a=o.b);var n=Object.keys(e).indexOf(t);if(-1!==n)return e[t];for(var r=a.indexOf(t);r>=0;){if(null!=e[a[r]]){n=r;break}r-=1}return-1!==n?e[a[n]]:void 0}(Object(r.c)(e)?Object(i.b)(Object.entries(Object(o.a)(e,d)).map(e=>{var[t,a]=e;return[t,a]})):e,a,d)}}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},yZps:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return v}));var n=a("epLR"),r=a("pr4h"),i=a("q1tI"),o=a.n(i),l={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]})},c=()=>{},s={window:{document:l,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:c,removeEventListener:c,getComputedStyle:()=>({getPropertyValue:()=>""}),matchMedia:()=>({matches:!1,addListener:c,removeListener:c}),requestAnimationFrame:e=>"undefined"===typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!==typeof setTimeout&&clearTimeout(e)},setTimeout:()=>0,clearTimeout:c,setInterval:()=>0,clearInterval:c},document:l},u=n.h?{window:window,document:document}:s,d=Object(i.createContext)(u);function m(){return Object(i.useContext)(d)}function v(e){var{children:t,environment:a}=e,[n,r]=Object(i.useState)(null),l=Object(i.useMemo)(()=>{var e,t=null==n?void 0:n.ownerDocument,r=null==n?void 0:n.ownerDocument.defaultView;return null!=(e=null!=a?a:t?{document:t,window:r}:void 0)?e:u},[n,a]),c=!n&&!a;return o.a.createElement(d.Provider,{value:l},t,c&&o.a.createElement("span",{ref:e=>{e&&r(e)}}))}r.a&&(d.displayName="EnvironmentContext"),r.a&&(v.displayName="EnvironmentProvider")}},[["vlRD",0,1,2,3]]]);