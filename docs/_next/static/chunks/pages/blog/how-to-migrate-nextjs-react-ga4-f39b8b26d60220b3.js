(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{9260:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/how-to-migrate-nextjs-react-ga4",function(){return n(7711)}])},7711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(5893),o=n(9008),r=n.n(o),i=(n(7294),n(6254)),s=n(8186),l=n(8328),c=n(4801),d=n(2970),h=n(232),g=n(5399),p=n(7945),u=n(7879),x=n(2867),f=n(6431),j=n(7260),y=n(9381),w=n(3035),m=n(6277);const A=(0,y.G)((function(e,t){const n=(0,w.m)("Code",e),{className:o,...r}=(0,f.L)(e);return(0,a.jsx)(m.m.code,{ref:t,className:(0,j.cx)("chakra-code",e.className),...r,__css:{display:"inline-block",...n}})}));A.displayName="Code";var G=n(63),v=n(1127),b=n(6151),k=function(){return(0,a.jsxs)(G.Z,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"How to Migrate Next.js or React Project Using react-ga to GA4?"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("link",{rel:"canonical",href:"https://andreysafonov.com/blog/how-to-migrate-nextjs-react-ga4"}),(0,a.jsx)("meta",{name:"Description",content:"In this blog we will go over how to transition your Next.js web app to GA4 using react-ga4."}),(0,a.jsx)("meta",{name:"author",content:"Andrey Safonov"})]}),(0,a.jsx)(v.Z,{}),(0,a.jsx)(i.W,{maxW:"5xl",p:"12",children:(0,a.jsxs)(s.g,{paddingTop:"40px",spacing:"2",alignItems:"flex-start",children:[(0,a.jsxs)(l.a,{mb:4,children:[(0,a.jsx)(c.g,{children:(0,a.jsx)(d.A,{href:"/",children:"Home"})}),(0,a.jsx)(c.g,{children:(0,a.jsx)(d.A,{href:"/blog",children:"Blog"})}),(0,a.jsx)(c.g,{children:(0,a.jsx)(d.A,{href:"#",children:"Migrate Next.js Project using react-ga to GA4"})})]}),(0,a.jsx)(h.X,{as:"h1",children:"How to Migrate Next.js or React Project using react-ga to GA4?"}),(0,a.jsx)(g.x,{as:"p",fontSize:"sm",children:"May 27th, 2023"}),(0,a.jsx)(p.E,{objectFit:"cover",src:"/blog/next-js-ga4.jpeg",alt:"Next.js logo and Google Analytics logo from Wiki Commons",padding:10}),(0,a.jsxs)(g.x,{as:"p",fontSize:"lg",children:["In this blog, we will go over how you can migrate from Google Universal Analytics to Google Analytics 4 in your Next.js web app if you are using ",(0,a.jsx)(u.r,{href:"https://www.npmjs.com/package/react-ga",style:{textDecoration:"underline"},children:"react-ga"}),". Google UA will stop working on July 1st, 2023 so it is a good idea to do it beforehand. ",(0,a.jsx)(u.r,{href:"https://www.npmjs.com/package/react-ga",style:{textDecoration:"underline"},children:"react-ga"})," is a popular package that has been used to make Google Analytics a breeze in React apps. ",(0,a.jsx)(u.r,{href:"https://www.npmjs.com/package/react-ga4",style:{textDecoration:"underline"},children:"react-ga4"})," adds support for GA4. Now it is worth mentioning that react-ga4 was not written by the same creators as react-ga. There is also a license change from react-ga to react-ga4. react-ga is distributed under Apache 2.0, whereas react-ga4 is under MIT."]}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"In this guide, you will learn:"}),(0,a.jsxs)(x.QI,{pt:3,fontSize:"lg",children:[(0,a.jsx)(x.HC,{children:(0,a.jsx)(u.r,{href:"#get-ga4-property",style:{textDecoration:"underline"},children:"How to get your GA4 property"})}),(0,a.jsx)(x.HC,{children:(0,a.jsx)(u.r,{href:"#setup-reactga4",style:{textDecoration:"underline"},children:"How to setup react-ga4"})}),(0,a.jsx)(x.HC,{children:(0,a.jsx)(u.r,{href:"#install-reactga4",style:{textDecoration:"underline"},children:"How to switch react-ga to react-ga4"})}),(0,a.jsx)(x.HC,{children:(0,a.jsx)(u.r,{href:"#add-ga4-property",style:{textDecoration:"underline"},children:"How to add GA4 property to react-ga4"})}),(0,a.jsx)(x.HC,{children:(0,a.jsx)(u.r,{href:"#receive-ga4-data",style:{textDecoration:"underline"},children:"How to start receiving data in Google Analytics"})})]}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"I will assume that you already have the Next.js app and react-ga configured. This guide is also applicable to a React app as well."}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:(0,a.jsx)("a",{id:"get-ga4-property",children:"Get GA4 Property"})}),(0,a.jsxs)(g.x,{as:"p",fontSize:"lg",children:["To get your GA4 property, you can do so by logging into your ",(0,a.jsx)(u.r,{href:"https://analytics.google.com/analytics/web/",style:{textDecoration:"underline"},children:"Google Analytics"}),". If you have not set up your GA4, you will have a whole bunch of warnings, banners, and popups telling you to do so. You can follow any of them to get to the setup assistant. If for some reason you are not getting any of the popups, you can follow the official ",(0,a.jsx)(u.r,{href:"https://support.google.com/analytics/answer/9744165",style:{textDecoration:"underline"},children:"guide by Google"}),"."]}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"You will need a measurement ID that will look like this: G-XXXXXXXXXX. Save it, you will need it for the next step."}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:(0,a.jsx)("a",{id:"setup-reactga4",children:"Setup react-ga4 in your Next.js project"})}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"If you have not set up react-ga or react-ga4, you can follow along here. First, go ahead and install react-ga4."}),(0,a.jsx)(A,{children:"npm i react-ga4"}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Add a new file called `components/googleAnalytics.js` in your project and paste the following:"}),(0,a.jsx)(A,{display:"block",whiteSpace:"pre",width:"100%",children:'import ReactGA from "react-ga4"\n \nexport const initGA = () => {\n  ReactGA.initialize("G-XXXXXXX")\n}\n  \nexport const logPageView = () => {\n  ReactGA.send({ hitType: \'pageview\', \n  page: window.location.pathname, \n  title: window.document.title \n})\n}'}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Then create another file called `components/layout.js` in your project and paste the following:"}),(0,a.jsx)(A,{display:"block",whiteSpace:"pre",width:"100%",children:'import React, { useEffect } \nfrom "react";\nimport { initGA, logPageView } \nfrom "./googleAnalytics.js";\n\nconst Layout = (props) => {\n\nuseEffect(() => {\n  if (!window.GA_INITIALIZED) {\n    initGA();\n    window.GA_INITIALIZED = true;\n  }\n  logPageView();\n});\n\nreturn (\n  <div>{props.children}</div>\n);\n\n};\n\nexport default Layout;'}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Then you can wrap any page in the layout component to track it."}),(0,a.jsx)(A,{display:"block",whiteSpace:"pre",width:"100%",children:"import Layout from '../../components/layout';\n\nexport const myPage = () => {\n  return {\n    <Layout>\n      <div>Hello World<div/>\n    </Layout>\n  }\n}\n              "}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:(0,a.jsx)("a",{id:"install-reactga4",children:"Remove React-GA and Install React-GA4"})}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Run the following command to remove react-ga:"}),(0,a.jsx)(A,{children:"npm uninstall react-ga"}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Then install react-ga4:"}),(0,a.jsx)(A,{children:"npm install react-ga4"}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:(0,a.jsx)("a",{id:"add-ga4-property",children:"Add Your GA4 Property to React-GA4"})}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Wherever you have initialized your react-ga, open that file. For me, I created a separate file called googleAnalytics.js. Inside of the file swap the UA property in initialize call to the new measurement ID."}),(0,a.jsx)(A,{children:'ReactGA.initialize("G-XXXXXXX")'}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Then wherever you track the page view event, remove set and pageview calls and replace them with send function."}),(0,a.jsx)(A,{children:"ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: window.document.title })"}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:(0,a.jsx)("a",{id:"receive-ga4-data",children:"Start Receiving Data in Google Analytics"})}),(0,a.jsxs)(g.x,{as:"p",fontSize:"lg",children:["At this point, if you refresh the page a couple of times, you should start seeing data flow in ",(0,a.jsx)(u.r,{href:"https://analytics.google.com/analytics/web/",style:{textDecoration:"underline"},children:"Google Analytics"}),"."]}),(0,a.jsx)(g.x,{as:"p",fontSize:"lg",children:"Now you also want to ensure that GA scripts are allowed. I was using Brave which automatically blocks GA scripts and did not see the data reflected until I turned off the shields."}),(0,a.jsx)(h.X,{as:"h3",size:"md",pt:5,children:"Next Steps"}),(0,a.jsxs)(g.x,{as:"p",fontSize:"lg",children:["I hope you enjoyed this post. If you have any questions, reach out on my ",(0,a.jsx)(u.r,{href:"https://www.linkedin.com/in/andreysaf/",style:{textDecoration:"underline"},children:"LinkedIn"}),"."]})]})}),(0,a.jsx)(b.Z,{})]})}},7945:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var a=n(5893),o=n(3681),r=n(9381);const i=(0,r.G)((function(e,t){const{htmlWidth:n,htmlHeight:o,alt:r,...i}=e;return(0,a.jsx)("img",{width:n,height:o,ref:t,alt:r,...i})}));i.displayName="NativeImage";var s=n(5566),l=n(6277);const c=(0,r.G)((function(e,t){const{fallbackSrc:n,fallback:r,src:c,srcSet:d,align:h,fit:g,loading:p,ignoreFallback:u,crossOrigin:x,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:j,...y}=e,w=null!=p||u||!(void 0!==n||void 0!==r),m=(0,s.d)({...e,crossOrigin:x,ignoreFallback:w}),A=(0,s.z)(m,f),G={ref:t,objectFit:g,objectPosition:h,...w?y:(0,o.C)(y,["onError","onLoad"])};return A?r||(0,a.jsx)(l.m.img,{as:i,className:"chakra-image__placeholder",src:n,...G}):(0,a.jsx)(l.m.img,{as:i,src:c,srcSet:d,crossOrigin:x,loading:p,referrerPolicy:j,className:"chakra-image",...G})}));c.displayName="Image"},5566:function(e,t,n){"use strict";n.d(t,{d:function(){return r},z:function(){return i}});var a=n(4097),o=n(7294);function r(e){const{loading:t,src:n,srcSet:r,onLoad:i,onError:s,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[h,g]=(0,o.useState)("pending");(0,o.useEffect)((()=>{g(n?"loading":"pending")}),[n]);const p=(0,o.useRef)(),u=(0,o.useCallback)((()=>{if(!n)return;x();const e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{x(),g("loaded"),i?.(e)},e.onerror=e=>{x(),g("failed"),s?.(e)},p.current=e}),[n,l,r,c,i,s,t]),x=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.G)((()=>{if(!d)return"loading"===h&&u(),()=>{x()}}),[h,u,d]),d?"loaded":h}const i=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t}},function(e){e.O(0,[530,606,774,888,179],(function(){return t=9260,e(e.s=t);var t}));var t=e.O();_N_E=t}]);