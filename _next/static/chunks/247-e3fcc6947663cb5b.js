(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,n=o(2648).Z,l=o(1598).Z,i=o(7273).Z,a=l(o(7294)),u=n(o(3121)),s=o(2675),c=o(139),f=o(8730);o(7238);var d=n(o(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:o,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:h,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:_,onLoadingCompleteRef:C,setBlurComplete:E,setShowAltText:j,onLoad:S,onError:x}=e,M=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},M,o,{width:l,height:n,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:h,style:r({},c,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,v,g,_,C,E,b))},[v,g,_,C,E,x,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,_,C,E,b)},onError:e=>{j(!0),"blur"===g&&E(!0),x&&x(e)}})))}),y=a.forwardRef((e,t)=>{let o,n;var l,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:_,className:C,quality:E,width:j,height:S,fill:x,style:M,onLoad:k,onLoadingComplete:O,placeholder:P="empty",blurDataURL:R,layout:z,objectFit:I,objectPosition:L,lazyBoundary:T,lazyRoot:A}=e,N=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(f.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[D]),U=N,W=U.loader||d.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:o}=t,r=i(t,["config"]);return e(r)}}if(z){"fill"===z&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(M=r({},M,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!y&&(y=t)}let q="",F=h(j),G=h(S);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(o=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,q=e.src,!x){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let H=!w&&("lazy"===_||void 0===_);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,H=!1),B.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[K,V]=a.useState(!1),[J,$]=a.useState(!1),Q=h(E),X=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},J?{}:{color:"transparent"},M),Y="blur"===P&&R&&!K?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:F,heightInt:G,blurWidth:o,blurHeight:n,blurDataURL:R}),'")')}:{},ee=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:l,sizes:i,loader:a}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(o);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:l,kind:"x"}}(t,n,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,r)=>"".concat(a({config:t,src:o,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:a({config:t,src:o,quality:l,width:u[c]})}}({config:B,src:m,unoptimized:b,width:F,quality:Q,sizes:y,loader:W}),et=m,eo={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin},er=a.useRef(k);a.useEffect(()=>{er.current=k},[k]);let en=a.useRef(O);a.useEffect(()=>{en.current=O},[O]);let el=r({isLazy:H,imgAttributes:ee,heightInt:G,widthInt:F,qualityInt:Q,className:C,imgStyle:X,blurStyle:Y,loading:_,config:B,fill:x,unoptimized:b,placeholder:P,loader:W,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:V,setShowAltText:$},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},el,{ref:t})),w?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},eo))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,l=r(o(7294)),i=o(1003),a=o(7795),u=o(4465),s=o(2692),c=o(8245),f=o(9246),d=o(227),p=o(3468);let g=new Set;function h(e,t,o,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let o,r;let{href:a,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:_,scroll:C,locale:E,onClick:j,onMouseEnter:S,onTouchStart:x,legacyBehavior:M=!1}=e,k=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,M&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let O=!1!==y,P=l.default.useContext(s.RouterContext),R=l.default.useContext(c.AppRouterContext),z=null!=P?P:R,I=!P,{href:L,as:T}=l.default.useMemo(()=>{if(!P){let e=m(a);return{href:e,as:g?m(g):e}}let[e,t]=i.resolveHref(P,a,!0);return{href:e,as:g?i.resolveHref(P,g):t||e}},[P,a,g]),A=l.default.useRef(L),N=l.default.useRef(T);M&&(r=l.default.Children.only(o));let D=M?r&&"object"==typeof r&&r.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(N.current!==T||A.current!==L)&&(W(),N.current=T,A.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,L,W,B]);l.default.useEffect(()=>{z&&U&&O&&h(z,L,T,{locale:E})},[T,L,U,E,O,null==P?void 0:P.locale,z]);let q={ref:Z,onClick(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,o,r,n,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:a,locale:s,scroll:u}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,z,L,T,w,_,C,E,I,O)},onMouseEnter(e){M||"function"!=typeof S||S(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(O||!I)&&h(z,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof x||x(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(O||!I)&&h(z,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(T,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=t||p.addBasePath(u.addLocale(T,e,null==P?void 0:P.defaultLocale))}return M?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},k,q),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=i.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},a.push(o),i.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return r}}else if(!c){let e=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(e)}},[s,o,t,c,d.current]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=o(7294),n=o(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:l}=e,i=r||t,a=n||o,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},9008:function(e,t,o){e.exports=o(3121)},5675:function(e,t,o){o(9749)},1664:function(e,t,o){e.exports=o(1551)}}]);