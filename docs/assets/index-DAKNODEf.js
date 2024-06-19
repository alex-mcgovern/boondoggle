import{j as va}from"./jsx-runtime-_e34SzbC.js";import{P as g}from"./index-CYjD5YP1.js";import{R as Ln}from"./index-DVXBtNgz.js";import{c as ba}from"./clsx-B-dksMZM.js";function fn(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function f(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?fn(Object(a),!0).forEach(function(t){k(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fn(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qe(e)}function ha(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mn(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function Va(e,n,a){return n&&mn(e.prototype,n),a&&mn(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function Ze(e,n){return Ea(e)||ka(e,n)||_n(e,n)||wa()}function ue(e){return Sa(e)||qa(e)||_n(e)||xa()}function Sa(e){if(Array.isArray(e))return De(e)}function Ea(e){if(Array.isArray(e))return e}function qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ka(e,n){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var t=[],r=!0,i=!1,l,o;try{for(a=a.call(e);!(r=(l=a.next()).done)&&(t.push(l.value),!(n&&t.length===n));r=!0);}catch(u){i=!0,o=u}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw o}}return t}}function _n(e,n){if(e){if(typeof e=="string")return De(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return De(e,n)}}function De(e,n){(n==null||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}function xa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(){},Qe={},zn={},Fn=null,jn={mark:cn,measure:cn};try{typeof window<"u"&&(Qe=window),typeof document<"u"&&(zn=document),typeof MutationObserver<"u"&&(Fn=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}var Ca=Qe.navigator||{},pn=Ca.userAgent,gn=pn===void 0?"":pn,L=Qe,b=zn,yn=Fn,me=jn;L.document;var R=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Un=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),ce,pe,ge,ye,ve,I="___FONT_AWESOME___",Ne=16,Yn="fa",Wn="svg-inline--fa",W="data-fa-i2svg",Le="data-fa-pseudo-element",Ga="data-fa-pseudo-element-pending",Je="data-prefix",en="data-icon",vn="fontawesome-i2svg",Aa="async",Pa=["HTML","HEAD","STYLE","SCRIPT"],$n=function(){try{return!0}catch{return!1}}(),v="classic",h="sharp",nn=[v,h];function se(e){return new Proxy(e,{get:function(a,t){return t in a?a[t]:a[v]}})}var te=se((ce={},k(ce,v,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),k(ce,h,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ce)),re=se((pe={},k(pe,v,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(pe,h,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pe)),ie=se((ge={},k(ge,v,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(ge,h,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ge)),Oa=se((ye={},k(ye,v,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(ye,h,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ye)),Ia=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Bn="fa-layers-text",Ha=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ta=se((ve={},k(ve,v,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(ve,h,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ve)),Xn=[1,2,3,4,5,6,7,8,9,10],Ra=Xn.concat([11,12,13,14,15,16,17,18,19,20]),Ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},le=new Set;Object.keys(re[v]).map(le.add.bind(le));Object.keys(re[h]).map(le.add.bind(le));var Da=[].concat(nn,ue(le),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",U.GROUP,U.SWAP_OPACITY,U.PRIMARY,U.SECONDARY]).concat(Xn.map(function(e){return"".concat(e,"x")})).concat(Ra.map(function(e){return"w-".concat(e)})),ne=L.FontAwesomeConfig||{};function Na(e){var n=b.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function La(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(b&&typeof b.querySelector=="function"){var _a=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_a.forEach(function(e){var n=Ze(e,2),a=n[0],t=n[1],r=La(Na(a));r!=null&&(ne[t]=r)})}var Kn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yn,replacementClass:Wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ne.familyPrefix&&(ne.cssPrefix=ne.familyPrefix);var Q=f(f({},Kn),ne);Q.autoReplaceSvg||(Q.observeMutations=!1);var c={};Object.keys(Kn).forEach(function(e){Object.defineProperty(c,e,{enumerable:!0,set:function(a){Q[e]=a,ae.forEach(function(t){return t(c)})},get:function(){return Q[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(n){Q.cssPrefix=n,ae.forEach(function(a){return a(c)})},get:function(){return Q.cssPrefix}});L.FontAwesomeConfig=c;var ae=[];function za(e){return ae.push(e),function(){ae.splice(ae.indexOf(e),1)}}var D=Ne,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fa(e){if(!(!e||!R)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var a=b.head.childNodes,t=null,r=a.length-1;r>-1;r--){var i=a[r],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(t=i)}return b.head.insertBefore(n,t),e}}var ja="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function oe(){for(var e=12,n="";e-- >0;)n+=ja[Math.random()*62|0];return n}function J(e){for(var n=[],a=(e||[]).length>>>0;a--;)n[a]=e[a];return n}function an(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Zn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(e){return Object.keys(e||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Zn(e[a]),'" ')},"").trim()}function Ce(e){return Object.keys(e||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tn(e){return e.size!==O.size||e.x!==O.x||e.y!==O.y||e.rotate!==O.rotate||e.flipX||e.flipY}function Ya(e){var n=e.transform,a=e.containerWidth,t=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),o="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(l," ").concat(o)},d={transform:"translate(".concat(t/2*-1," -256)")};return{outer:r,inner:u,path:d}}function Wa(e){var n=e.transform,a=e.width,t=a===void 0?Ne:a,r=e.height,i=r===void 0?Ne:r,l=e.startCentered,o=l===void 0?!1:l,u="";return o&&Un?u+="translate(".concat(n.x/D-t/2,"em, ").concat(n.y/D-i/2,"em) "):o?u+="translate(calc(-50% + ".concat(n.x/D,"em), calc(-50% + ").concat(n.y/D,"em)) "):u+="translate(".concat(n.x/D,"em, ").concat(n.y/D,"em) "),u+="scale(".concat(n.size/D*(n.flipX?-1:1),", ").concat(n.size/D*(n.flipY?-1:1),") "),u+="rotate(".concat(n.rotate,"deg) "),u}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qn(){var e=Yn,n=Wn,a=c.cssPrefix,t=c.replacementClass,r=$a;if(a!==e||t!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),l=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(l,"--".concat(a,"-")).replace(o,".".concat(t))}return r}var bn=!1;function Ie(){c.autoAddCss&&!bn&&(Fa(Qn()),bn=!0)}var Ba={mixout:function(){return{dom:{css:Qn,insertCss:Ie}}},hooks:function(){return{beforeDOMElementCreation:function(){Ie()},beforeI2svg:function(){Ie()}}}},H=L||{};H[I]||(H[I]={});H[I].styles||(H[I].styles={});H[I].hooks||(H[I].hooks={});H[I].shims||(H[I].shims=[]);var P=H[I],Jn=[],Xa=function e(){b.removeEventListener("DOMContentLoaded",e),ke=1,Jn.map(function(n){return n()})},ke=!1;R&&(ke=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),ke||b.addEventListener("DOMContentLoaded",Xa));function Ka(e){R&&(ke?setTimeout(e,0):Jn.push(e))}function de(e){var n=e.tag,a=e.attributes,t=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Zn(e):"<".concat(n," ").concat(Ua(t),">").concat(i.map(de).join(""),"</").concat(n,">")}function hn(e,n,a){if(e&&e[n]&&e[n][a])return{prefix:n,iconName:a,icon:e[n][a]}}var Za=function(n,a){return function(t,r,i,l){return n.call(a,t,r,i,l)}},He=function(n,a,t,r){var i=Object.keys(n),l=i.length,o=r!==void 0?Za(a,r):a,u,d,s;for(t===void 0?(u=1,s=n[i[0]]):(u=0,s=t);u<l;u++)d=i[u],s=o(s,n[d],d,n);return s};function Qa(e){for(var n=[],a=0,t=e.length;a<t;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<t){var i=e.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function _e(e){var n=Qa(e);return n.length===1?n[0].toString(16):null}function Ja(e,n){var a=e.length,t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&a>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Vn(e){return Object.keys(e).reduce(function(n,a){var t=e[a],r=!!t.icon;return r?n[t.iconName]=t.icon:n[a]=t,n},{})}function ze(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=a.skipHooks,r=t===void 0?!1:t,i=Vn(n);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(e,Vn(n)):P.styles[e]=f(f({},P.styles[e]||{}),i),e==="fas"&&ze("fa",n)}var be,he,Ve,B=P.styles,et=P.shims,nt=(be={},k(be,v,Object.values(ie[v])),k(be,h,Object.values(ie[h])),be),rn=null,ea={},na={},aa={},ta={},ra={},at=(he={},k(he,v,Object.keys(te[v])),k(he,h,Object.keys(te[h])),he);function tt(e){return~Da.indexOf(e)}function rt(e,n){var a=n.split("-"),t=a[0],r=a.slice(1).join("-");return t===e&&r!==""&&!tt(r)?r:null}var ia=function(){var n=function(i){return He(B,function(l,o,u){return l[u]=He(o,i,{}),l},{})};ea=n(function(r,i,l){if(i[3]&&(r[i[3]]=l),i[2]){var o=i[2].filter(function(u){return typeof u=="number"});o.forEach(function(u){r[u.toString(16)]=l})}return r}),na=n(function(r,i,l){if(r[l]=l,i[2]){var o=i[2].filter(function(u){return typeof u=="string"});o.forEach(function(u){r[u]=l})}return r}),ra=n(function(r,i,l){var o=i[2];return r[l]=l,o.forEach(function(u){r[u]=l}),r});var a="far"in B||c.autoFetchSvg,t=He(et,function(r,i){var l=i[0],o=i[1],u=i[2];return o==="far"&&!a&&(o="fas"),typeof l=="string"&&(r.names[l]={prefix:o,iconName:u}),typeof l=="number"&&(r.unicodes[l.toString(16)]={prefix:o,iconName:u}),r},{names:{},unicodes:{}});aa=t.names,ta=t.unicodes,rn=Ge(c.styleDefault,{family:c.familyDefault})};za(function(e){rn=Ge(e.styleDefault,{family:c.familyDefault})});ia();function ln(e,n){return(ea[e]||{})[n]}function it(e,n){return(na[e]||{})[n]}function Y(e,n){return(ra[e]||{})[n]}function la(e){return aa[e]||{prefix:null,iconName:null}}function lt(e){var n=ta[e],a=ln("fas",e);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function _(){return rn}var on=function(){return{prefix:null,iconName:null,rest:[]}};function Ge(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,t=a===void 0?v:a,r=te[t][e],i=re[t][e]||re[t][r],l=e in P.styles?e:null;return i||l||null}var Sn=(Ve={},k(Ve,v,Object.keys(ie[v])),k(Ve,h,Object.keys(ie[h])),Ve);function Ae(e){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,i=(n={},k(n,v,"".concat(c.cssPrefix,"-").concat(v)),k(n,h,"".concat(c.cssPrefix,"-").concat(h)),n),l=null,o=v;(e.includes(i[v])||e.some(function(d){return Sn[v].includes(d)}))&&(o=v),(e.includes(i[h])||e.some(function(d){return Sn[h].includes(d)}))&&(o=h);var u=e.reduce(function(d,s){var m=rt(c.cssPrefix,s);if(B[s]?(s=nt[o].includes(s)?Oa[o][s]:s,l=s,d.prefix=s):at[o].indexOf(s)>-1?(l=s,d.prefix=Ge(s,{family:o})):m?d.iconName=m:s!==c.replacementClass&&s!==i[v]&&s!==i[h]&&d.rest.push(s),!r&&d.prefix&&d.iconName){var p=l==="fa"?la(d.iconName):{},y=Y(d.prefix,d.iconName);p.prefix&&(l=null),d.iconName=p.iconName||y||d.iconName,d.prefix=p.prefix||d.prefix,d.prefix==="far"&&!B.far&&B.fas&&!c.autoFetchSvg&&(d.prefix="fas")}return d},on());return(e.includes("fa-brands")||e.includes("fab"))&&(u.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(u.prefix="fad"),!u.prefix&&o===h&&(B.fass||c.autoFetchSvg)&&(u.prefix="fass",u.iconName=Y(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||l==="fa")&&(u.prefix=_()||"fas"),u}var ot=function(){function e(){ha(this,e),this.definitions={}}return Va(e,[{key:"add",value:function(){for(var a=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var l=r.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(o){a.definitions[o]=f(f({},a.definitions[o]||{}),l[o]),ze(o,l[o]);var u=ie[v][o];u&&ze(u,l[o]),ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(i){var l=r[i],o=l.prefix,u=l.iconName,d=l.icon,s=d[2];a[o]||(a[o]={}),s.length>0&&s.forEach(function(m){typeof m=="string"&&(a[o][m]=d)}),a[o][u]=d}),a}}]),e}(),En=[],X={},Z={},ut=Object.keys(Z);function st(e,n){var a=n.mixoutsTo;return En=e,X={},Object.keys(Z).forEach(function(t){ut.indexOf(t)===-1&&delete Z[t]}),En.forEach(function(t){var r=t.mixout?t.mixout():{};if(Object.keys(r).forEach(function(l){typeof r[l]=="function"&&(a[l]=r[l]),qe(r[l])==="object"&&Object.keys(r[l]).forEach(function(o){a[l]||(a[l]={}),a[l][o]=r[l][o]})}),t.hooks){var i=t.hooks();Object.keys(i).forEach(function(l){X[l]||(X[l]=[]),X[l].push(i[l])})}t.provides&&t.provides(Z)}),a}function Fe(e,n){for(var a=arguments.length,t=new Array(a>2?a-2:0),r=2;r<a;r++)t[r-2]=arguments[r];var i=X[e]||[];return i.forEach(function(l){n=l.apply(null,[n].concat(t))}),n}function $(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),t=1;t<n;t++)a[t-1]=arguments[t];var r=X[e]||[];r.forEach(function(i){i.apply(null,a)})}function T(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,n):void 0}function je(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,a=e.prefix||_();if(n)return n=Y(a,n)||n,hn(oa.definitions,a,n)||hn(P.styles,a,n)}var oa=new ot,dt=function(){c.autoReplaceSvg=!1,c.observeMutations=!1,$("noAuto")},ft={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?($("beforeI2svg",n),T("pseudoElements2svg",n),T("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ka(function(){ct({autoReplaceSvgRoot:a}),$("watch",n)})}},mt={icon:function(n){if(n===null)return null;if(qe(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Y(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Ge(n[0]);return{prefix:t,iconName:Y(t,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(c.cssPrefix,"-"))>-1||n.match(Ia))){var r=Ae(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||_(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=_();return{prefix:i,iconName:Y(i,n)||n}}}},A={noAuto:dt,config:c,dom:ft,parse:mt,library:oa,findIconDefinition:je,toHtml:de},ct=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,t=a===void 0?b:a;(Object.keys(P.styles).length>0||c.autoFetchSvg)&&R&&c.autoReplaceSvg&&A.dom.i2svg({node:t})};function Pe(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return de(t)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var t=b.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function pt(e){var n=e.children,a=e.main,t=e.mask,r=e.attributes,i=e.styles,l=e.transform;if(tn(l)&&a.found&&!t.found){var o=a.width,u=a.height,d={x:o/u/2,y:.5};r.style=Ce(f(f({},i),{},{"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function gt(e){var n=e.prefix,a=e.iconName,t=e.children,r=e.attributes,i=e.symbol,l=i===!0?"".concat(n,"-").concat(c.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:l}),children:t}]}]}function un(e){var n=e.icons,a=n.main,t=n.mask,r=e.prefix,i=e.iconName,l=e.transform,o=e.symbol,u=e.title,d=e.maskId,s=e.titleId,m=e.extra,p=e.watchable,y=p===void 0?!1:p,E=t.found?t:a,w=E.width,V=E.height,C=r==="fak",S=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(function(M){return m.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(m.classes).join(" "),q={children:[],attributes:f(f({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(V)})},G=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/V*16*.0625,"em")}:{};y&&(q.attributes[W]=""),u&&(q.children.push({tag:"title",attributes:{id:q.attributes["aria-labelledby"]||"title-".concat(s||oe())},children:[u]}),delete q.attributes.title);var x=f(f({},q),{},{prefix:r,iconName:i,main:a,mask:t,maskId:d,transform:l,symbol:o,styles:f(f({},G),m.styles)}),F=t.found&&a.found?T("generateAbstractMask",x)||{children:[],attributes:{}}:T("generateAbstractIcon",x)||{children:[],attributes:{}},j=F.children,Oe=F.attributes;return x.children=j,x.attributes=Oe,o?gt(x):pt(x)}function qn(e){var n=e.content,a=e.width,t=e.height,r=e.transform,i=e.title,l=e.extra,o=e.watchable,u=o===void 0?!1:o,d=f(f(f({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});u&&(d[W]="");var s=f({},l.styles);tn(r)&&(s.transform=Wa({transform:r,startCentered:!0,width:a,height:t}),s["-webkit-transform"]=s.transform);var m=Ce(s);m.length>0&&(d.style=m);var p=[];return p.push({tag:"span",attributes:d,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function yt(e){var n=e.content,a=e.title,t=e.extra,r=f(f(f({},t.attributes),a?{title:a}:{}),{},{class:t.classes.join(" ")}),i=Ce(t.styles);i.length>0&&(r.style=i);var l=[];return l.push({tag:"span",attributes:r,children:[n]}),a&&l.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),l}var Te=P.styles;function Ue(e){var n=e[0],a=e[1],t=e.slice(4),r=Ze(t,1),i=r[0],l=null;return Array.isArray(i)?l={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(U.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(U.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(U.PRIMARY),fill:"currentColor",d:i[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:l}}var vt={found:!1,width:512,height:512};function bt(e,n){!$n&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Ye(e,n){var a=n;return n==="fa"&&c.styleDefault!==null&&(n=_()),new Promise(function(t,r){if(T("missingIconAbstract"),a==="fa"){var i=la(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Te[n]&&Te[n][e]){var l=Te[n][e];return t(Ue(l))}bt(e,n),t(f(f({},vt),{},{icon:c.showMissingIcons&&e?T("missingIconAbstract")||{}:{}}))})}var kn=function(){},We=c.measurePerformance&&me&&me.mark&&me.measure?me:{mark:kn,measure:kn},ee='FA "6.5.1"',ht=function(n){return We.mark("".concat(ee," ").concat(n," begins")),function(){return ua(n)}},ua=function(n){We.mark("".concat(ee," ").concat(n," ends")),We.measure("".concat(ee," ").concat(n),"".concat(ee," ").concat(n," begins"),"".concat(ee," ").concat(n," ends"))},sn={begin:ht,end:ua},Se=function(){};function xn(e){var n=e.getAttribute?e.getAttribute(W):null;return typeof n=="string"}function Vt(e){var n=e.getAttribute?e.getAttribute(Je):null,a=e.getAttribute?e.getAttribute(en):null;return n&&a}function St(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function Et(){if(c.autoReplaceSvg===!0)return Ee.replace;var e=Ee[c.autoReplaceSvg];return e||Ee.replace}function qt(e){return b.createElementNS("http://www.w3.org/2000/svg",e)}function kt(e){return b.createElement(e)}function sa(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,t=a===void 0?e.tag==="svg"?qt:kt:a;if(typeof e=="string")return b.createTextNode(e);var r=t(e.tag);Object.keys(e.attributes||[]).forEach(function(l){r.setAttribute(l,e.attributes[l])});var i=e.children||[];return i.forEach(function(l){r.appendChild(sa(l,{ceFn:t}))}),r}function xt(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ee={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(sa(r),a)}),a.getAttribute(W)===null&&c.keepOriginalSource){var t=b.createComment(xt(a));a.parentNode.replaceChild(t,a)}else a.remove()},nest:function(n){var a=n[0],t=n[1];if(~an(a).indexOf(c.replacementClass))return Ee.replace(n);var r=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var i=t[0].attributes.class.split(" ").reduce(function(o,u){return u===c.replacementClass||u.match(r)?o.toSvg.push(u):o.toNode.push(u),o},{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var l=t.map(function(o){return de(o)}).join(`
`);a.setAttribute(W,""),a.innerHTML=l}};function wn(e){e()}function da(e,n){var a=typeof n=="function"?n:Se;if(e.length===0)a();else{var t=wn;c.mutateApproach===Aa&&(t=L.requestAnimationFrame||wn),t(function(){var r=Et(),i=sn.begin("mutate");e.map(r),i(),a()})}}var dn=!1;function fa(){dn=!0}function $e(){dn=!1}var xe=null;function Cn(e){if(yn&&c.observeMutations){var n=e.treeCallback,a=n===void 0?Se:n,t=e.nodeCallback,r=t===void 0?Se:t,i=e.pseudoElementsCallback,l=i===void 0?Se:i,o=e.observeMutationsRoot,u=o===void 0?b:o;xe=new yn(function(d){if(!dn){var s=_();J(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xn(m.addedNodes[0])&&(c.searchPseudoElements&&l(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&c.searchPseudoElements&&l(m.target.parentNode),m.type==="attributes"&&xn(m.target)&&~Ma.indexOf(m.attributeName))if(m.attributeName==="class"&&Vt(m.target)){var p=Ae(an(m.target)),y=p.prefix,E=p.iconName;m.target.setAttribute(Je,y||s),E&&m.target.setAttribute(en,E)}else St(m.target)&&r(m.target)})}}),R&&xe.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wt(){xe&&xe.disconnect()}function Ct(e){var n=e.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(t,r){var i=r.split(":"),l=i[0],o=i.slice(1);return l&&o.length>0&&(t[l]=o.join(":").trim()),t},{})),a}function Gt(e){var n=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",r=Ae(an(e));return r.prefix||(r.prefix=_()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&t.length>0&&(r.iconName=it(r.prefix,e.innerText)||ln(r.prefix,_e(e.innerText))),!r.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function At(e){var n=J(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),t=e.getAttribute("data-fa-title-id");return c.autoA11y&&(a?n["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(t||oe()):(n["aria-hidden"]="true",n.focusable="false")),n}function Pt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Gt(e),t=a.iconName,r=a.prefix,i=a.rest,l=At(e),o=Fe("parseNodeAttributes",{},e),u=n.styleParser?Ct(e):[];return f({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:u,attributes:l}},o)}var Ot=P.styles;function ma(e){var n=c.autoReplaceSvg==="nest"?Gn(e,{styleParser:!1}):Gn(e);return~n.extra.classes.indexOf(Bn)?T("generateLayersText",e,n):T("generateSvgReplacementMutation",e,n)}var z=new Set;nn.map(function(e){z.add("fa-".concat(e))});Object.keys(te[v]).map(z.add.bind(z));Object.keys(te[h]).map(z.add.bind(z));z=ue(z);function An(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=b.documentElement.classList,t=function(m){return a.add("".concat(vn,"-").concat(m))},r=function(m){return a.remove("".concat(vn,"-").concat(m))},i=c.autoFetchSvg?z:nn.map(function(s){return"fa-".concat(s)}).concat(Object.keys(Ot));i.includes("fa")||i.push("fa");var l=[".".concat(Bn,":not([").concat(W,"])")].concat(i.map(function(s){return".".concat(s,":not([").concat(W,"])")})).join(", ");if(l.length===0)return Promise.resolve();var o=[];try{o=J(e.querySelectorAll(l))}catch{}if(o.length>0)t("pending"),r("complete");else return Promise.resolve();var u=sn.begin("onTree"),d=o.reduce(function(s,m){try{var p=ma(m);p&&s.push(p)}catch(y){$n||y.name==="MissingIcon"&&console.error(y)}return s},[]);return new Promise(function(s,m){Promise.all(d).then(function(p){da(p,function(){t("active"),t("complete"),r("pending"),typeof n=="function"&&n(),u(),s()})}).catch(function(p){u(),m(p)})})}function It(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ma(e).then(function(a){a&&da([a],n)})}function Ht(e){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(n||{}).icon?n:je(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:je(r||{})),e(t,f(f({},a),{},{mask:r}))}}var Tt=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.transform,r=t===void 0?O:t,i=a.symbol,l=i===void 0?!1:i,o=a.mask,u=o===void 0?null:o,d=a.maskId,s=d===void 0?null:d,m=a.title,p=m===void 0?null:m,y=a.titleId,E=y===void 0?null:y,w=a.classes,V=w===void 0?[]:w,C=a.attributes,S=C===void 0?{}:C,q=a.styles,G=q===void 0?{}:q;if(n){var x=n.prefix,F=n.iconName,j=n.icon;return Pe(f({type:"icon"},n),function(){return $("beforeDOMElementCreation",{iconDefinition:n,params:a}),c.autoA11y&&(p?S["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(E||oe()):(S["aria-hidden"]="true",S.focusable="false")),un({icons:{main:Ue(j),mask:u?Ue(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:F,transform:f(f({},O),r),symbol:l,title:p,maskId:s,titleId:E,extra:{attributes:S,styles:G,classes:V}})})}},Rt={mixout:function(){return{icon:Ht(Tt)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=An,a.nodeCallback=It,a}}},provides:function(n){n.i2svg=function(a){var t=a.node,r=t===void 0?b:t,i=a.callback,l=i===void 0?function(){}:i;return An(r,l)},n.generateSvgReplacementMutation=function(a,t){var r=t.iconName,i=t.title,l=t.titleId,o=t.prefix,u=t.transform,d=t.symbol,s=t.mask,m=t.maskId,p=t.extra;return new Promise(function(y,E){Promise.all([Ye(r,o),s.iconName?Ye(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var V=Ze(w,2),C=V[0],S=V[1];y([a,un({icons:{main:C,mask:S},prefix:o,iconName:r,transform:u,symbol:d,maskId:m,title:i,titleId:l,extra:p,watchable:!0})])}).catch(E)})},n.generateAbstractIcon=function(a){var t=a.children,r=a.attributes,i=a.main,l=a.transform,o=a.styles,u=Ce(o);u.length>0&&(r.style=u);var d;return tn(l)&&(d=T("generateAbstractTransformGrouping",{main:i,transform:l,containerWidth:i.width,iconWidth:i.width})),t.push(d||i.icon),{children:t,attributes:r}}}},Mt={mixout:function(){return{layer:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.classes,i=r===void 0?[]:r;return Pe({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:a,params:t});var l=[];return a(function(o){Array.isArray(o)?o.map(function(u){l=l.concat(u.abstract)}):l=l.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers")].concat(ue(i)).join(" ")},children:l}]})}}}},Dt={mixout:function(){return{counter:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.title,i=r===void 0?null:r,l=t.classes,o=l===void 0?[]:l,u=t.attributes,d=u===void 0?{}:u,s=t.styles,m=s===void 0?{}:s;return Pe({type:"counter",content:a},function(){return $("beforeDOMElementCreation",{content:a,params:t}),yt({content:a.toString(),title:i,extra:{attributes:d,styles:m,classes:["".concat(c.cssPrefix,"-layers-counter")].concat(ue(o))}})})}}}},Nt={mixout:function(){return{text:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,i=r===void 0?O:r,l=t.title,o=l===void 0?null:l,u=t.classes,d=u===void 0?[]:u,s=t.attributes,m=s===void 0?{}:s,p=t.styles,y=p===void 0?{}:p;return Pe({type:"text",content:a},function(){return $("beforeDOMElementCreation",{content:a,params:t}),qn({content:a,transform:f(f({},O),i),title:o,extra:{attributes:m,styles:y,classes:["".concat(c.cssPrefix,"-layers-text")].concat(ue(d))}})})}}},provides:function(n){n.generateLayersText=function(a,t){var r=t.title,i=t.transform,l=t.extra,o=null,u=null;if(Un){var d=parseInt(getComputedStyle(a).fontSize,10),s=a.getBoundingClientRect();o=s.width/d,u=s.height/d}return c.autoA11y&&!r&&(l.attributes["aria-hidden"]="true"),Promise.resolve([a,qn({content:a.innerHTML,width:o,height:u,transform:i,title:r,extra:l,watchable:!0})])}}},Lt=new RegExp('"',"ug"),Pn=[1105920,1112319];function _t(e){var n=e.replace(Lt,""),a=Ja(n,0),t=a>=Pn[0]&&a<=Pn[1],r=n.length===2?n[0]===n[1]:!1;return{value:_e(r?n[0]:n),isSecondary:t||r}}function On(e,n){var a="".concat(Ga).concat(n.replace(":","-"));return new Promise(function(t,r){if(e.getAttribute(a)!==null)return t();var i=J(e.children),l=i.filter(function(j){return j.getAttribute(Le)===n})[0],o=L.getComputedStyle(e,n),u=o.getPropertyValue("font-family").match(Ha),d=o.getPropertyValue("font-weight"),s=o.getPropertyValue("content");if(l&&!u)return e.removeChild(l),t();if(u&&s!=="none"&&s!==""){var m=o.getPropertyValue("content"),p=~["Sharp"].indexOf(u[2])?h:v,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?re[p][u[2].toLowerCase()]:Ta[p][d],E=_t(m),w=E.value,V=E.isSecondary,C=u[0].startsWith("FontAwesome"),S=ln(y,w),q=S;if(C){var G=lt(w);G.iconName&&G.prefix&&(S=G.iconName,y=G.prefix)}if(S&&!V&&(!l||l.getAttribute(Je)!==y||l.getAttribute(en)!==q)){e.setAttribute(a,q),l&&e.removeChild(l);var x=Pt(),F=x.extra;F.attributes[Le]=n,Ye(S,y).then(function(j){var Oe=un(f(f({},x),{},{icons:{main:j,mask:on()},prefix:y,iconName:q,extra:F,watchable:!0})),M=b.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=Oe.map(function(ya){return de(ya)}).join(`
`),e.removeAttribute(a),t()}).catch(r)}else t()}else t()})}function zt(e){return Promise.all([On(e,"::before"),On(e,"::after")])}function Ft(e){return e.parentNode!==document.head&&!~Pa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Le)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function In(e){if(R)return new Promise(function(n,a){var t=J(e.querySelectorAll("*")).filter(Ft).map(zt),r=sn.begin("searchPseudoElements");fa(),Promise.all(t).then(function(){r(),$e(),n()}).catch(function(){r(),$e(),a()})})}var jt={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=In,a}}},provides:function(n){n.pseudoElements2svg=function(a){var t=a.node,r=t===void 0?b:t;c.searchPseudoElements&&In(r)}}},Hn=!1,Ut={mixout:function(){return{dom:{unwatch:function(){fa(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){Cn(Fe("mutationObserverCallbacks",{}))},noAuto:function(){wt()},watch:function(a){var t=a.observeMutationsRoot;Hn?$e():Cn(Fe("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Tn=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(t,r){var i=r.toLowerCase().split("-"),l=i[0],o=i.slice(1).join("-");if(l&&o==="h")return t.flipX=!0,t;if(l&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(l){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},a)},Yt={mixout:function(){return{parse:{transform:function(a){return Tn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,t){var r=t.getAttribute("data-fa-transform");return r&&(a.transform=Tn(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var t=a.main,r=a.transform,i=a.containerWidth,l=a.iconWidth,o={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(u," ").concat(d," ").concat(s)},p={transform:"translate(".concat(l/2*-1," -256)")},y={outer:o,inner:m,path:p};return{tag:"g",attributes:f({},y.outer),children:[{tag:"g",attributes:f({},y.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:f(f({},t.icon.attributes),y.path)}]}]}}}},Re={x:0,y:0,width:"100%",height:"100%"};function Rn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Wt(e){return e.tag==="g"?e.children:[e]}var $t={hooks:function(){return{parseNodeAttributes:function(a,t){var r=t.getAttribute("data-fa-mask"),i=r?Ae(r.split(" ").map(function(l){return l.trim()})):on();return i.prefix||(i.prefix=_()),a.mask=i,a.maskId=t.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var t=a.children,r=a.attributes,i=a.main,l=a.mask,o=a.maskId,u=a.transform,d=i.width,s=i.icon,m=l.width,p=l.icon,y=Ya({transform:u,containerWidth:m,iconWidth:d}),E={tag:"rect",attributes:f(f({},Re),{},{fill:"white"})},w=s.children?{children:s.children.map(Rn)}:{},V={tag:"g",attributes:f({},y.inner),children:[Rn(f({tag:s.tag,attributes:f(f({},s.attributes),y.path)},w))]},C={tag:"g",attributes:f({},y.outer),children:[V]},S="mask-".concat(o||oe()),q="clip-".concat(o||oe()),G={tag:"mask",attributes:f(f({},Re),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,C]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:q},children:Wt(p)},G]};return t.push(x,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(q,")"),mask:"url(#".concat(S,")")},Re)}),{children:t,attributes:r}}}},Bt={provides:function(n){var a=!1;L.matchMedia&&(a=L.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var t=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=f(f({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},l),{},{values:"1;0;0;0;0;1;"})}]}),a||t.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Xt={hooks:function(){return{parseNodeAttributes:function(a,t){var r=t.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Kt=[Ba,Rt,Mt,Dt,Nt,jt,Ut,Yt,$t,Bt,Xt];st(Kt,{mixoutsTo:A});A.noAuto;A.config;A.library;A.dom;var Be=A.parse;A.findIconDefinition;A.toHtml;var Zt=A.icon;A.layer;A.text;A.counter;function Mn(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function N(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Mn(Object(a),!0).forEach(function(t){K(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Mn(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},we(e)}function K(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function Qt(e,n){if(e==null)return{};var a={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}function Jt(e,n){if(e==null)return{};var a=Qt(e,n),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function Xe(e){return er(e)||nr(e)||ar(e)||tr()}function er(e){if(Array.isArray(e))return Ke(e)}function nr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ar(e,n){if(e){if(typeof e=="string")return Ke(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ke(e,n)}}function Ke(e,n){(n==null||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}function tr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e){var n,a=e.beat,t=e.fade,r=e.beatFade,i=e.bounce,l=e.shake,o=e.flash,u=e.spin,d=e.spinPulse,s=e.spinReverse,m=e.pulse,p=e.fixedWidth,y=e.inverse,E=e.border,w=e.listItem,V=e.flip,C=e.size,S=e.rotation,q=e.pull,G=(n={"fa-beat":a,"fa-fade":t,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":l,"fa-flash":o,"fa-spin":u,"fa-spin-reverse":s,"fa-spin-pulse":d,"fa-pulse":m,"fa-fw":p,"fa-inverse":y,"fa-border":E,"fa-li":w,"fa-flip":V===!0,"fa-flip-horizontal":V==="horizontal"||V==="both","fa-flip-vertical":V==="vertical"||V==="both"},K(n,"fa-".concat(C),typeof C<"u"&&C!==null),K(n,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),K(n,"fa-pull-".concat(q),typeof q<"u"&&q!==null),K(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(G).map(function(x){return G[x]?x:null}).filter(function(x){return x})}function ir(e){return e=e-0,e===e}function ca(e){return ir(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var lr=["style"];function or(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ur(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,a){var t=a.indexOf(":"),r=ca(a.slice(0,t)),i=a.slice(t+1).trim();return r.startsWith("webkit")?n[or(r)]=i:n[r]=i,n},{})}function pa(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var t=(n.children||[]).map(function(u){return pa(e,u)}),r=Object.keys(n.attributes||{}).reduce(function(u,d){var s=n.attributes[d];switch(d){case"class":u.attrs.className=s,delete n.attributes.class;break;case"style":u.attrs.style=ur(s);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?u.attrs[d.toLowerCase()]=s:u.attrs[ca(d)]=s}return u},{attrs:{}}),i=a.style,l=i===void 0?{}:i,o=Jt(a,lr);return r.attrs.style=N(N({},r.attrs.style),l),e.apply(void 0,[n.tag,N(N({},r.attrs),o)].concat(Xe(t)))}var ga=!1;try{ga=!0}catch{}function sr(){if(!ga&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dn(e){if(e&&we(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Be.icon)return Be.icon(e);if(e===null)return null;if(e&&we(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Me(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?K({},e,n):{}}var fe=Ln.forwardRef(function(e,n){var a=e.icon,t=e.mask,r=e.symbol,i=e.className,l=e.title,o=e.titleId,u=e.maskId,d=Dn(a),s=Me("classes",[].concat(Xe(rr(e)),Xe(i.split(" ")))),m=Me("transform",typeof e.transform=="string"?Be.transform(e.transform):e.transform),p=Me("mask",Dn(t)),y=Zt(d,N(N(N(N({},s),m),p),{},{symbol:r,title:l,titleId:o,maskId:u}));if(!y)return sr("Could not find icon",d),null;var E=y.abstract,w={ref:n};return Object.keys(e).forEach(function(V){fe.defaultProps.hasOwnProperty(V)||(w[V]=e[V])}),dr(E[0],w)});fe.displayName="FontAwesomeIcon";fe.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};fe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var dr=pa.bind(null,Ln.createElement);function Nn({className:e,color:n,icon:a,...t}){return va.jsx(fe,{className:ba("icon",e,n),icon:a,...t})}try{Nn.displayName="Icon",Nn.__docgenInfo={description:"A wrapper around the FontAwesome icon component.",displayName:"Icon",props:{string:{defaultValue:null,description:"",name:"string",required:!1,type:{name:"string | number"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"FaSymbol"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:`Identifies the element (or elements) that labels the current element.
@see aria-describedby.`,name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:`Identifies the element (or elements) that describes the object.
@see aria-labelledby`,name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:`Identifies the element that provides a detailed, extended description for the object.
@see aria-describedby.`,name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:`Identifies the element that provides an error message for the object.
@see aria-invalid
@see aria-describedby.`,name:"aria-errormessage",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<SVGSVGElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<SVGSVGElement>"}},className:{defaultValue:null,description:"An optional class name to apply to the icon.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<SVGSVGElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"'}},"aria-controls":{defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}},"aria-pressed":{defaultValue:null,description:`Indicates the current "pressed" state of toggle buttons.
@see aria-checked
@see aria-selected.`,name:"aria-pressed",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"SizeProp"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},suppressHydrationWarning:{defaultValue:null,description:"",name:"suppressHydrationWarning",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",name:"aria-atomic",required:!1,type:{name:"Booleanish"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:'"list" | "none" | "inline" | "both"'}},"aria-braillelabel":{defaultValue:null,description:`Defines a string value that labels the current element, which is intended to be converted into Braille.
@see aria-label.`,name:"aria-braillelabel",required:!1,type:{name:"string"}},"aria-brailleroledescription":{defaultValue:null,description:`Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
@see aria-roledescription.`,name:"aria-brailleroledescription",required:!1,type:{name:"string"}},"aria-busy":{defaultValue:null,description:"",name:"aria-busy",required:!1,type:{name:"Booleanish"}},"aria-checked":{defaultValue:null,description:`Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
@see aria-pressed
@see aria-selected.`,name:"aria-checked",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},"aria-colcount":{defaultValue:null,description:`Defines the total number of columns in a table, grid, or treegrid.
@see aria-colindex.`,name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:`Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
@see aria-colcount
@see aria-colspan.`,name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colindextext":{defaultValue:null,description:`Defines a human readable text alternative of aria-colindex.
@see aria-rowindextext.`,name:"aria-colindextext",required:!1,type:{name:"string"}},"aria-colspan":{defaultValue:null,description:`Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-colindex
@see aria-rowspan.`,name:"aria-colspan",required:!1,type:{name:"number"}},"aria-current":{defaultValue:null,description:"Indicates the element that represents the current item within a container or set of related elements.",name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},"aria-description":{defaultValue:null,description:`Defines a string value that describes or annotates the current element.
@see related aria-describedby.`,name:"aria-description",required:!1,type:{name:"string"}},"aria-disabled":{defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
@see aria-hidden
@see aria-readonly.`,name:"aria-disabled",required:!1,type:{name:"Booleanish"}},"aria-dropeffect":{defaultValue:null,description:`Indicates what functions can be performed when a dragged object is released on the drop target.
@deprecated in ARIA 1.1`,name:"aria-dropeffect",required:!1,type:{name:'"link" | "none" | "copy" | "execute" | "move" | "popup"'}},"aria-flowto":{defaultValue:null,description:`Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`,name:"aria-flowto",required:!1,type:{name:"string"}},"aria-grabbed":{defaultValue:null,description:`Indicates an element's "grabbed" state in a drag-and-drop operation.
@deprecated in ARIA 1.1`,name:"aria-grabbed",required:!1,type:{name:"Booleanish"}},"aria-hidden":{defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.
@see aria-disabled.`,name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-invalid":{defaultValue:null,description:`Indicates the entered value does not conform to the format expected by the application.
@see aria-errormessage.`,name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false" | "grammar" | "spelling"'}},"aria-keyshortcuts":{defaultValue:null,description:"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"Defines the hierarchical level of an element within a structure.",name:"aria-level",required:!1,type:{name:"number"}},"aria-live":{defaultValue:null,description:"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",name:"aria-live",required:!1,type:{name:'"off" | "assertive" | "polite"'}},"aria-modal":{defaultValue:null,description:"Indicates whether an element is modal when displayed.",name:"aria-modal",required:!1,type:{name:"Booleanish"}},"aria-multiline":{defaultValue:null,description:"Indicates whether a text box accepts multiple lines of input or only a single line.",name:"aria-multiline",required:!1,type:{name:"Booleanish"}},"aria-multiselectable":{defaultValue:null,description:"Indicates that the user may select more than one item from the current selectable descendants.",name:"aria-multiselectable",required:!1,type:{name:"Booleanish"}},"aria-orientation":{defaultValue:null,description:"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",name:"aria-orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},"aria-owns":{defaultValue:null,description:`Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
@see aria-controls.`,name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:`Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`,name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:`Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-setsize.`,name:"aria-posinset",required:!1,type:{name:"number"}},"aria-readonly":{defaultValue:null,description:`Indicates that the element is not editable, but is otherwise operable.
@see aria-disabled.`,name:"aria-readonly",required:!1,type:{name:"Booleanish"}},"aria-relevant":{defaultValue:null,description:`Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
@see aria-atomic.`,name:"aria-relevant",required:!1,type:{name:'"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"'}},"aria-required":{defaultValue:null,description:"Indicates that user input is required on the element before a form may be submitted.",name:"aria-required",required:!1,type:{name:"Booleanish"}},"aria-roledescription":{defaultValue:null,description:"Defines a human-readable, author-localized description for the role of an element.",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:`Defines the total number of rows in a table, grid, or treegrid.
@see aria-rowindex.`,name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:`Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
@see aria-rowcount
@see aria-rowspan.`,name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowindextext":{defaultValue:null,description:`Defines a human readable text alternative of aria-rowindex.
@see aria-colindextext.`,name:"aria-rowindextext",required:!1,type:{name:"string"}},"aria-rowspan":{defaultValue:null,description:`Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-rowindex
@see aria-colspan.`,name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-selected":{defaultValue:null,description:`Indicates the current "selected" state of various widgets.
@see aria-checked
@see aria-pressed.`,name:"aria-selected",required:!1,type:{name:"Booleanish"}},"aria-setsize":{defaultValue:null,description:`Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-posinset.`,name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"Indicates if items in a table or grid are sorted in ascending or descending order.",name:"aria-sort",required:!1,type:{name:'"none" | "ascending" | "descending" | "other"'}},"aria-valuemax":{defaultValue:null,description:"Defines the maximum allowed value for a range widget.",name:"aria-valuemax",required:!1,type:{name:"number"}},"aria-valuemin":{defaultValue:null,description:"Defines the minimum allowed value for a range widget.",name:"aria-valuemin",required:!1,type:{name:"number"}},"aria-valuenow":{defaultValue:null,description:`Defines the current value for a range widget.
@see aria-valuetext.`,name:"aria-valuenow",required:!1,type:{name:"number"}},"aria-valuetext":{defaultValue:null,description:"Defines the human readable text alternative of aria-valuenow for a range widget.",name:"aria-valuetext",required:!1,type:{name:"string"}},dangerouslySetInnerHTML:{defaultValue:null,description:"",name:"dangerouslySetInnerHTML",required:!1,type:{name:"{ __html: string | TrustedHTML; }"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onCopyCapture:{defaultValue:null,description:"",name:"onCopyCapture",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onCutCapture:{defaultValue:null,description:"",name:"onCutCapture",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onPasteCapture:{defaultValue:null,description:"",name:"onPasteCapture",required:!1,type:{name:"ClipboardEventHandler<SVGSVGElement>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onCompositionEndCapture:{defaultValue:null,description:"",name:"onCompositionEndCapture",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onCompositionStartCapture:{defaultValue:null,description:"",name:"onCompositionStartCapture",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onCompositionUpdateCapture:{defaultValue:null,description:"",name:"onCompositionUpdateCapture",required:!1,type:{name:"CompositionEventHandler<SVGSVGElement>"}},onFocusCapture:{defaultValue:null,description:"",name:"onFocusCapture",required:!1,type:{name:"FocusEventHandler<SVGSVGElement>"}},onBlurCapture:{defaultValue:null,description:"",name:"onBlurCapture",required:!1,type:{name:"FocusEventHandler<SVGSVGElement>"}},onChangeCapture:{defaultValue:null,description:"",name:"onChangeCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onBeforeInputCapture:{defaultValue:null,description:"",name:"onBeforeInputCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onInputCapture:{defaultValue:null,description:"",name:"onInputCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onResetCapture:{defaultValue:null,description:"",name:"onResetCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onSubmitCapture:{defaultValue:null,description:"",name:"onSubmitCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onInvalidCapture:{defaultValue:null,description:"",name:"onInvalidCapture",required:!1,type:{name:"FormEventHandler<SVGSVGElement>"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadCapture:{defaultValue:null,description:"",name:"onLoadCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onErrorCapture:{defaultValue:null,description:"",name:"onErrorCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},onKeyPress:{defaultValue:null,description:"@deprecated",name:"onKeyPress",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},onKeyPressCapture:{defaultValue:null,description:"@deprecated",name:"onKeyPressCapture",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<SVGSVGElement>"}},onAbort:{defaultValue:null,description:"",name:"onAbort",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onAbortCapture:{defaultValue:null,description:"",name:"onAbortCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onCanPlay:{defaultValue:null,description:"",name:"onCanPlay",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onCanPlayCapture:{defaultValue:null,description:"",name:"onCanPlayCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onCanPlayThrough:{defaultValue:null,description:"",name:"onCanPlayThrough",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onCanPlayThroughCapture:{defaultValue:null,description:"",name:"onCanPlayThroughCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onDurationChange:{defaultValue:null,description:"",name:"onDurationChange",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onDurationChangeCapture:{defaultValue:null,description:"",name:"onDurationChangeCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEmptied:{defaultValue:null,description:"",name:"onEmptied",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEmptiedCapture:{defaultValue:null,description:"",name:"onEmptiedCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEncrypted:{defaultValue:null,description:"",name:"onEncrypted",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEncryptedCapture:{defaultValue:null,description:"",name:"onEncryptedCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEnded:{defaultValue:null,description:"",name:"onEnded",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onEndedCapture:{defaultValue:null,description:"",name:"onEndedCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadedData:{defaultValue:null,description:"",name:"onLoadedData",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadedDataCapture:{defaultValue:null,description:"",name:"onLoadedDataCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadedMetadata:{defaultValue:null,description:"",name:"onLoadedMetadata",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadedMetadataCapture:{defaultValue:null,description:"",name:"onLoadedMetadataCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadStart:{defaultValue:null,description:"",name:"onLoadStart",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onLoadStartCapture:{defaultValue:null,description:"",name:"onLoadStartCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPauseCapture:{defaultValue:null,description:"",name:"onPauseCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPlayCapture:{defaultValue:null,description:"",name:"onPlayCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPlaying:{defaultValue:null,description:"",name:"onPlaying",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onPlayingCapture:{defaultValue:null,description:"",name:"onPlayingCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onProgressCapture:{defaultValue:null,description:"",name:"onProgressCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onRateChange:{defaultValue:null,description:"",name:"onRateChange",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onRateChangeCapture:{defaultValue:null,description:"",name:"onRateChangeCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onResizeCapture:{defaultValue:null,description:"",name:"onResizeCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSeeked:{defaultValue:null,description:"",name:"onSeeked",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSeekedCapture:{defaultValue:null,description:"",name:"onSeekedCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSeeking:{defaultValue:null,description:"",name:"onSeeking",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSeekingCapture:{defaultValue:null,description:"",name:"onSeekingCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onStalled:{defaultValue:null,description:"",name:"onStalled",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onStalledCapture:{defaultValue:null,description:"",name:"onStalledCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSuspend:{defaultValue:null,description:"",name:"onSuspend",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onSuspendCapture:{defaultValue:null,description:"",name:"onSuspendCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onTimeUpdate:{defaultValue:null,description:"",name:"onTimeUpdate",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onTimeUpdateCapture:{defaultValue:null,description:"",name:"onTimeUpdateCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onVolumeChange:{defaultValue:null,description:"",name:"onVolumeChange",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onVolumeChangeCapture:{defaultValue:null,description:"",name:"onVolumeChangeCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onWaiting:{defaultValue:null,description:"",name:"onWaiting",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onWaitingCapture:{defaultValue:null,description:"",name:"onWaitingCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragCapture:{defaultValue:null,description:"",name:"onDragCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragEndCapture:{defaultValue:null,description:"",name:"onDragEndCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragEnterCapture:{defaultValue:null,description:"",name:"onDragEnterCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragExitCapture:{defaultValue:null,description:"",name:"onDragExitCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragLeaveCapture:{defaultValue:null,description:"",name:"onDragLeaveCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragOverCapture:{defaultValue:null,description:"",name:"onDragOverCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDragStartCapture:{defaultValue:null,description:"",name:"onDragStartCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onDropCapture:{defaultValue:null,description:"",name:"onDropCapture",required:!1,type:{name:"DragEventHandler<SVGSVGElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},onSelectCapture:{defaultValue:null,description:"",name:"onSelectCapture",required:!1,type:{name:"ReactEventHandler<SVGSVGElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<SVGSVGElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<SVGSVGElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<SVGSVGElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<SVGSVGElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<SVGSVGElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<SVGSVGElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<SVGSVGElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<SVGSVGElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<SVGSVGElement>"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"string | number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string | number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string | number"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"string | number"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"string"}},crossOrigin:{defaultValue:null,description:"",name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},media:{defaultValue:null,description:"",name:"media",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"IconProp"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"string | Transform"}},accentHeight:{defaultValue:null,description:"",name:"accentHeight",required:!1,type:{name:"string | number"}},accumulate:{defaultValue:null,description:"",name:"accumulate",required:!1,type:{name:'"none" | "sum"'}},additive:{defaultValue:null,description:"",name:"additive",required:!1,type:{name:'"replace" | "sum"'}},alignmentBaseline:{defaultValue:null,description:"",name:"alignmentBaseline",required:!1,type:{name:'"inherit" | "alphabetic" | "hanging" | "ideographic" | "mathematical" | "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge"'}},allowReorder:{defaultValue:null,description:"",name:"allowReorder",required:!1,type:{name:'"yes" | "no"'}},alphabetic:{defaultValue:null,description:"",name:"alphabetic",required:!1,type:{name:"string | number"}},amplitude:{defaultValue:null,description:"",name:"amplitude",required:!1,type:{name:"string | number"}},arabicForm:{defaultValue:null,description:"",name:"arabicForm",required:!1,type:{name:'"terminal" | "initial" | "medial" | "isolated"'}},ascent:{defaultValue:null,description:"",name:"ascent",required:!1,type:{name:"string | number"}},attributeName:{defaultValue:null,description:"",name:"attributeName",required:!1,type:{name:"string"}},attributeType:{defaultValue:null,description:"",name:"attributeType",required:!1,type:{name:"string"}},autoReverse:{defaultValue:null,description:"",name:"autoReverse",required:!1,type:{name:"Booleanish"}},azimuth:{defaultValue:null,description:"",name:"azimuth",required:!1,type:{name:"string | number"}},baseFrequency:{defaultValue:null,description:"",name:"baseFrequency",required:!1,type:{name:"string | number"}},baselineShift:{defaultValue:null,description:"",name:"baselineShift",required:!1,type:{name:"string | number"}},baseProfile:{defaultValue:null,description:"",name:"baseProfile",required:!1,type:{name:"string | number"}},bbox:{defaultValue:null,description:"",name:"bbox",required:!1,type:{name:"string | number"}},begin:{defaultValue:null,description:"",name:"begin",required:!1,type:{name:"string | number"}},bias:{defaultValue:null,description:"",name:"bias",required:!1,type:{name:"string | number"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | number"}},calcMode:{defaultValue:null,description:"",name:"calcMode",required:!1,type:{name:"string | number"}},capHeight:{defaultValue:null,description:"",name:"capHeight",required:!1,type:{name:"string | number"}},clip:{defaultValue:null,description:"",name:"clip",required:!1,type:{name:"string | number"}},clipPath:{defaultValue:null,description:"",name:"clipPath",required:!1,type:{name:"string"}},clipPathUnits:{defaultValue:null,description:"",name:"clipPathUnits",required:!1,type:{name:"string | number"}},clipRule:{defaultValue:null,description:"",name:"clipRule",required:!1,type:{name:"string | number"}},colorInterpolation:{defaultValue:null,description:"",name:"colorInterpolation",required:!1,type:{name:"string | number"}},colorInterpolationFilters:{defaultValue:null,description:"",name:"colorInterpolationFilters",required:!1,type:{name:'"inherit" | "auto" | "sRGB" | "linearRGB"'}},colorProfile:{defaultValue:null,description:"",name:"colorProfile",required:!1,type:{name:"string | number"}},colorRendering:{defaultValue:null,description:"",name:"colorRendering",required:!1,type:{name:"string | number"}},contentScriptType:{defaultValue:null,description:"",name:"contentScriptType",required:!1,type:{name:"string | number"}},contentStyleType:{defaultValue:null,description:"",name:"contentStyleType",required:!1,type:{name:"string | number"}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"string | number"}},cx:{defaultValue:null,description:"",name:"cx",required:!1,type:{name:"string | number"}},cy:{defaultValue:null,description:"",name:"cy",required:!1,type:{name:"string | number"}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:"string"}},decelerate:{defaultValue:null,description:"",name:"decelerate",required:!1,type:{name:"string | number"}},descent:{defaultValue:null,description:"",name:"descent",required:!1,type:{name:"string | number"}},diffuseConstant:{defaultValue:null,description:"",name:"diffuseConstant",required:!1,type:{name:"string | number"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string | number"}},divisor:{defaultValue:null,description:"",name:"divisor",required:!1,type:{name:"string | number"}},dominantBaseline:{defaultValue:null,description:"",name:"dominantBaseline",required:!1,type:{name:"string | number"}},dur:{defaultValue:null,description:"",name:"dur",required:!1,type:{name:"string | number"}},dx:{defaultValue:null,description:"",name:"dx",required:!1,type:{name:"string | number"}},dy:{defaultValue:null,description:"",name:"dy",required:!1,type:{name:"string | number"}},edgeMode:{defaultValue:null,description:"",name:"edgeMode",required:!1,type:{name:"string | number"}},elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:"string | number"}},enableBackground:{defaultValue:null,description:"",name:"enableBackground",required:!1,type:{name:"string | number"}},exponent:{defaultValue:null,description:"",name:"exponent",required:!1,type:{name:"string | number"}},externalResourcesRequired:{defaultValue:null,description:"",name:"externalResourcesRequired",required:!1,type:{name:"Booleanish"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},fillOpacity:{defaultValue:null,description:"",name:"fillOpacity",required:!1,type:{name:"string | number"}},fillRule:{defaultValue:null,description:"",name:"fillRule",required:!1,type:{name:'"inherit" | "nonzero" | "evenodd"'}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"string"}},filterRes:{defaultValue:null,description:"",name:"filterRes",required:!1,type:{name:"string | number"}},filterUnits:{defaultValue:null,description:"",name:"filterUnits",required:!1,type:{name:"string | number"}},floodColor:{defaultValue:null,description:"",name:"floodColor",required:!1,type:{name:"string | number"}},floodOpacity:{defaultValue:null,description:"",name:"floodOpacity",required:!1,type:{name:"string | number"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:'Booleanish | "auto"'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontSizeAdjust:{defaultValue:null,description:"",name:"fontSizeAdjust",required:!1,type:{name:"string | number"}},fontStretch:{defaultValue:null,description:"",name:"fontStretch",required:!1,type:{name:"string | number"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"string | number"}},fontVariant:{defaultValue:null,description:"",name:"fontVariant",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string | number"}},fr:{defaultValue:null,description:"",name:"fr",required:!1,type:{name:"string | number"}},from:{defaultValue:null,description:"",name:"from",required:!1,type:{name:"string | number"}},fx:{defaultValue:null,description:"",name:"fx",required:!1,type:{name:"string | number"}},fy:{defaultValue:null,description:"",name:"fy",required:!1,type:{name:"string | number"}},g1:{defaultValue:null,description:"",name:"g1",required:!1,type:{name:"string | number"}},g2:{defaultValue:null,description:"",name:"g2",required:!1,type:{name:"string | number"}},glyphName:{defaultValue:null,description:"",name:"glyphName",required:!1,type:{name:"string | number"}},glyphOrientationHorizontal:{defaultValue:null,description:"",name:"glyphOrientationHorizontal",required:!1,type:{name:"string | number"}},glyphOrientationVertical:{defaultValue:null,description:"",name:"glyphOrientationVertical",required:!1,type:{name:"string | number"}},glyphRef:{defaultValue:null,description:"",name:"glyphRef",required:!1,type:{name:"string | number"}},gradientTransform:{defaultValue:null,description:"",name:"gradientTransform",required:!1,type:{name:"string"}},gradientUnits:{defaultValue:null,description:"",name:"gradientUnits",required:!1,type:{name:"string"}},hanging:{defaultValue:null,description:"",name:"hanging",required:!1,type:{name:"string | number"}},horizAdvX:{defaultValue:null,description:"",name:"horizAdvX",required:!1,type:{name:"string | number"}},horizOriginX:{defaultValue:null,description:"",name:"horizOriginX",required:!1,type:{name:"string | number"}},ideographic:{defaultValue:null,description:"",name:"ideographic",required:!1,type:{name:"string | number"}},imageRendering:{defaultValue:null,description:"",name:"imageRendering",required:!1,type:{name:"string | number"}},in2:{defaultValue:null,description:"",name:"in2",required:!1,type:{name:"string | number"}},in:{defaultValue:null,description:"",name:"in",required:!1,type:{name:"string"}},intercept:{defaultValue:null,description:"",name:"intercept",required:!1,type:{name:"string | number"}},k1:{defaultValue:null,description:"",name:"k1",required:!1,type:{name:"string | number"}},k2:{defaultValue:null,description:"",name:"k2",required:!1,type:{name:"string | number"}},k3:{defaultValue:null,description:"",name:"k3",required:!1,type:{name:"string | number"}},k4:{defaultValue:null,description:"",name:"k4",required:!1,type:{name:"string | number"}},k:{defaultValue:null,description:"",name:"k",required:!1,type:{name:"string | number"}},kernelMatrix:{defaultValue:null,description:"",name:"kernelMatrix",required:!1,type:{name:"string | number"}},kernelUnitLength:{defaultValue:null,description:"",name:"kernelUnitLength",required:!1,type:{name:"string | number"}},kerning:{defaultValue:null,description:"",name:"kerning",required:!1,type:{name:"string | number"}},keyPoints:{defaultValue:null,description:"",name:"keyPoints",required:!1,type:{name:"string | number"}},keySplines:{defaultValue:null,description:"",name:"keySplines",required:!1,type:{name:"string | number"}},keyTimes:{defaultValue:null,description:"",name:"keyTimes",required:!1,type:{name:"string | number"}},lengthAdjust:{defaultValue:null,description:"",name:"lengthAdjust",required:!1,type:{name:"string | number"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"string | number"}},lightingColor:{defaultValue:null,description:"",name:"lightingColor",required:!1,type:{name:"string | number"}},limitingConeAngle:{defaultValue:null,description:"",name:"limitingConeAngle",required:!1,type:{name:"string | number"}},local:{defaultValue:null,description:"",name:"local",required:!1,type:{name:"string | number"}},markerEnd:{defaultValue:null,description:"",name:"markerEnd",required:!1,type:{name:"string"}},markerHeight:{defaultValue:null,description:"",name:"markerHeight",required:!1,type:{name:"string | number"}},markerMid:{defaultValue:null,description:"",name:"markerMid",required:!1,type:{name:"string"}},markerStart:{defaultValue:null,description:"",name:"markerStart",required:!1,type:{name:"string"}},markerUnits:{defaultValue:null,description:"",name:"markerUnits",required:!1,type:{name:"string | number"}},markerWidth:{defaultValue:null,description:"",name:"markerWidth",required:!1,type:{name:"string | number"}},maskContentUnits:{defaultValue:null,description:"",name:"maskContentUnits",required:!1,type:{name:"string | number"}},maskUnits:{defaultValue:null,description:"",name:"maskUnits",required:!1,type:{name:"string | number"}},mathematical:{defaultValue:null,description:"",name:"mathematical",required:!1,type:{name:"string | number"}},numOctaves:{defaultValue:null,description:"",name:"numOctaves",required:!1,type:{name:"string | number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"string | number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"string | number"}},operator:{defaultValue:null,description:"",name:"operator",required:!1,type:{name:"string | number"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string | number"}},orient:{defaultValue:null,description:"",name:"orient",required:!1,type:{name:"string | number"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string | number"}},origin:{defaultValue:null,description:"",name:"origin",required:!1,type:{name:"string | number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string | number"}},overlinePosition:{defaultValue:null,description:"",name:"overlinePosition",required:!1,type:{name:"string | number"}},overlineThickness:{defaultValue:null,description:"",name:"overlineThickness",required:!1,type:{name:"string | number"}},paintOrder:{defaultValue:null,description:"",name:"paintOrder",required:!1,type:{name:"string | number"}},panose1:{defaultValue:null,description:"",name:"panose1",required:!1,type:{name:"string | number"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},pathLength:{defaultValue:null,description:"",name:"pathLength",required:!1,type:{name:"string | number"}},patternContentUnits:{defaultValue:null,description:"",name:"patternContentUnits",required:!1,type:{name:"string"}},patternTransform:{defaultValue:null,description:"",name:"patternTransform",required:!1,type:{name:"string | number"}},patternUnits:{defaultValue:null,description:"",name:"patternUnits",required:!1,type:{name:"string"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"string | number"}},points:{defaultValue:null,description:"",name:"points",required:!1,type:{name:"string"}},pointsAtX:{defaultValue:null,description:"",name:"pointsAtX",required:!1,type:{name:"string | number"}},pointsAtY:{defaultValue:null,description:"",name:"pointsAtY",required:!1,type:{name:"string | number"}},pointsAtZ:{defaultValue:null,description:"",name:"pointsAtZ",required:!1,type:{name:"string | number"}},preserveAlpha:{defaultValue:null,description:"",name:"preserveAlpha",required:!1,type:{name:"Booleanish"}},preserveAspectRatio:{defaultValue:null,description:"",name:"preserveAspectRatio",required:!1,type:{name:"string"}},primitiveUnits:{defaultValue:null,description:"",name:"primitiveUnits",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string | number"}},refX:{defaultValue:null,description:"",name:"refX",required:!1,type:{name:"string | number"}},refY:{defaultValue:null,description:"",name:"refY",required:!1,type:{name:"string | number"}},renderingIntent:{defaultValue:null,description:"",name:"renderingIntent",required:!1,type:{name:"string | number"}},repeatCount:{defaultValue:null,description:"",name:"repeatCount",required:!1,type:{name:"string | number"}},repeatDur:{defaultValue:null,description:"",name:"repeatDur",required:!1,type:{name:"string | number"}},requiredExtensions:{defaultValue:null,description:"",name:"requiredExtensions",required:!1,type:{name:"string | number"}},requiredFeatures:{defaultValue:null,description:"",name:"requiredFeatures",required:!1,type:{name:"string | number"}},restart:{defaultValue:null,description:"",name:"restart",required:!1,type:{name:"string | number"}},result:{defaultValue:null,description:"",name:"result",required:!1,type:{name:"string"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!1,type:{name:"string | number"}},rx:{defaultValue:null,description:"",name:"rx",required:!1,type:{name:"string | number"}},ry:{defaultValue:null,description:"",name:"ry",required:!1,type:{name:"string | number"}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"string | number"}},seed:{defaultValue:null,description:"",name:"seed",required:!1,type:{name:"string | number"}},shapeRendering:{defaultValue:null,description:"",name:"shapeRendering",required:!1,type:{name:"string | number"}},slope:{defaultValue:null,description:"",name:"slope",required:!1,type:{name:"string | number"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"string | number"}},specularConstant:{defaultValue:null,description:"",name:"specularConstant",required:!1,type:{name:"string | number"}},specularExponent:{defaultValue:null,description:"",name:"specularExponent",required:!1,type:{name:"string | number"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"string | number"}},spreadMethod:{defaultValue:null,description:"",name:"spreadMethod",required:!1,type:{name:"string"}},startOffset:{defaultValue:null,description:"",name:"startOffset",required:!1,type:{name:"string | number"}},stdDeviation:{defaultValue:null,description:"",name:"stdDeviation",required:!1,type:{name:"string | number"}},stemh:{defaultValue:null,description:"",name:"stemh",required:!1,type:{name:"string | number"}},stemv:{defaultValue:null,description:"",name:"stemv",required:!1,type:{name:"string | number"}},stitchTiles:{defaultValue:null,description:"",name:"stitchTiles",required:!1,type:{name:"string | number"}},stopColor:{defaultValue:null,description:"",name:"stopColor",required:!1,type:{name:"string"}},stopOpacity:{defaultValue:null,description:"",name:"stopOpacity",required:!1,type:{name:"string | number"}},strikethroughPosition:{defaultValue:null,description:"",name:"strikethroughPosition",required:!1,type:{name:"string | number"}},strikethroughThickness:{defaultValue:null,description:"",name:"strikethroughThickness",required:!1,type:{name:"string | number"}},stroke:{defaultValue:null,description:"",name:"stroke",required:!1,type:{name:"string"}},strokeDasharray:{defaultValue:null,description:"",name:"strokeDasharray",required:!1,type:{name:"string | number"}},strokeDashoffset:{defaultValue:null,description:"",name:"strokeDashoffset",required:!1,type:{name:"string | number"}},strokeLinecap:{defaultValue:null,description:"",name:"strokeLinecap",required:!1,type:{name:'"square" | "inherit" | "butt" | "round"'}},strokeLinejoin:{defaultValue:null,description:"",name:"strokeLinejoin",required:!1,type:{name:'"inherit" | "round" | "miter" | "bevel"'}},strokeMiterlimit:{defaultValue:null,description:"",name:"strokeMiterlimit",required:!1,type:{name:"string | number"}},strokeOpacity:{defaultValue:null,description:"",name:"strokeOpacity",required:!1,type:{name:"string | number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"string | number"}},surfaceScale:{defaultValue:null,description:"",name:"surfaceScale",required:!1,type:{name:"string | number"}},systemLanguage:{defaultValue:null,description:"",name:"systemLanguage",required:!1,type:{name:"string | number"}},tableValues:{defaultValue:null,description:"",name:"tableValues",required:!1,type:{name:"string | number"}},targetX:{defaultValue:null,description:"",name:"targetX",required:!1,type:{name:"string | number"}},targetY:{defaultValue:null,description:"",name:"targetY",required:!1,type:{name:"string | number"}},textAnchor:{defaultValue:null,description:"",name:"textAnchor",required:!1,type:{name:"string"}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"string | number"}},textLength:{defaultValue:null,description:"",name:"textLength",required:!1,type:{name:"string | number"}},textRendering:{defaultValue:null,description:"",name:"textRendering",required:!1,type:{name:"string | number"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string | number"}},u1:{defaultValue:null,description:"",name:"u1",required:!1,type:{name:"string | number"}},u2:{defaultValue:null,description:"",name:"u2",required:!1,type:{name:"string | number"}},underlinePosition:{defaultValue:null,description:"",name:"underlinePosition",required:!1,type:{name:"string | number"}},underlineThickness:{defaultValue:null,description:"",name:"underlineThickness",required:!1,type:{name:"string | number"}},unicode:{defaultValue:null,description:"",name:"unicode",required:!1,type:{name:"string | number"}},unicodeBidi:{defaultValue:null,description:"",name:"unicodeBidi",required:!1,type:{name:"string | number"}},unicodeRange:{defaultValue:null,description:"",name:"unicodeRange",required:!1,type:{name:"string | number"}},unitsPerEm:{defaultValue:null,description:"",name:"unitsPerEm",required:!1,type:{name:"string | number"}},vAlphabetic:{defaultValue:null,description:"",name:"vAlphabetic",required:!1,type:{name:"string | number"}},vectorEffect:{defaultValue:null,description:"",name:"vectorEffect",required:!1,type:{name:"string | number"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}},vertAdvY:{defaultValue:null,description:"",name:"vertAdvY",required:!1,type:{name:"string | number"}},vertOriginX:{defaultValue:null,description:"",name:"vertOriginX",required:!1,type:{name:"string | number"}},vertOriginY:{defaultValue:null,description:"",name:"vertOriginY",required:!1,type:{name:"string | number"}},vHanging:{defaultValue:null,description:"",name:"vHanging",required:!1,type:{name:"string | number"}},vIdeographic:{defaultValue:null,description:"",name:"vIdeographic",required:!1,type:{name:"string | number"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string"}},viewTarget:{defaultValue:null,description:"",name:"viewTarget",required:!1,type:{name:"string | number"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"string | number"}},vMathematical:{defaultValue:null,description:"",name:"vMathematical",required:!1,type:{name:"string | number"}},widths:{defaultValue:null,description:"",name:"widths",required:!1,type:{name:"string | number"}},wordSpacing:{defaultValue:null,description:"",name:"wordSpacing",required:!1,type:{name:"string | number"}},writingMode:{defaultValue:null,description:"",name:"writingMode",required:!1,type:{name:"string | number"}},x1:{defaultValue:null,description:"",name:"x1",required:!1,type:{name:"string | number"}},x2:{defaultValue:null,description:"",name:"x2",required:!1,type:{name:"string | number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"string | number"}},xChannelSelector:{defaultValue:null,description:"",name:"xChannelSelector",required:!1,type:{name:"string"}},xHeight:{defaultValue:null,description:"",name:"xHeight",required:!1,type:{name:"string | number"}},xlinkActuate:{defaultValue:null,description:"",name:"xlinkActuate",required:!1,type:{name:"string"}},xlinkArcrole:{defaultValue:null,description:"",name:"xlinkArcrole",required:!1,type:{name:"string"}},xlinkHref:{defaultValue:null,description:"",name:"xlinkHref",required:!1,type:{name:"string"}},xlinkRole:{defaultValue:null,description:"",name:"xlinkRole",required:!1,type:{name:"string"}},xlinkShow:{defaultValue:null,description:"",name:"xlinkShow",required:!1,type:{name:"string"}},xlinkTitle:{defaultValue:null,description:"",name:"xlinkTitle",required:!1,type:{name:"string"}},xlinkType:{defaultValue:null,description:"",name:"xlinkType",required:!1,type:{name:"string"}},xmlBase:{defaultValue:null,description:"",name:"xmlBase",required:!1,type:{name:"string"}},xmlLang:{defaultValue:null,description:"",name:"xmlLang",required:!1,type:{name:"string"}},xmlns:{defaultValue:null,description:"",name:"xmlns",required:!1,type:{name:"string"}},xmlnsXlink:{defaultValue:null,description:"",name:"xmlnsXlink",required:!1,type:{name:"string"}},xmlSpace:{defaultValue:null,description:"",name:"xmlSpace",required:!1,type:{name:"string"}},y1:{defaultValue:null,description:"",name:"y1",required:!1,type:{name:"string | number"}},y2:{defaultValue:null,description:"",name:"y2",required:!1,type:{name:"string | number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"string | number"}},yChannelSelector:{defaultValue:null,description:"",name:"yChannelSelector",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},zoomAndPan:{defaultValue:null,description:"",name:"zoomAndPan",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The FontAwesome icon definition to render.",name:"icon",required:!0,type:{name:"IconProp"}},maskId:{defaultValue:null,description:"",name:"maskId",required:!1,type:{name:"string"}},spin:{defaultValue:null,description:"",name:"spin",required:!1,type:{name:"boolean"}},spinPulse:{defaultValue:null,description:"",name:"spinPulse",required:!1,type:{name:"boolean"}},spinReverse:{defaultValue:null,description:"",name:"spinReverse",required:!1,type:{name:"boolean"}},pulse:{defaultValue:null,description:"",name:"pulse",required:!1,type:{name:"boolean"}},beat:{defaultValue:null,description:"",name:"beat",required:!1,type:{name:"boolean"}},fade:{defaultValue:null,description:"",name:"fade",required:!1,type:{name:"boolean"}},beatFade:{defaultValue:null,description:"",name:"beatFade",required:!1,type:{name:"boolean"}},bounce:{defaultValue:null,description:"",name:"bounce",required:!1,type:{name:"boolean"}},shake:{defaultValue:null,description:"",name:"shake",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"boolean"}},inverse:{defaultValue:null,description:"",name:"inverse",required:!1,type:{name:"boolean"}},listItem:{defaultValue:null,description:"",name:"listItem",required:!1,type:{name:"boolean"}},flip:{defaultValue:null,description:"",name:"flip",required:!1,type:{name:"FlipProp"}},pull:{defaultValue:null,description:"",name:"pull",required:!1,type:{name:"PullProp"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"RotateProp"}},titleId:{defaultValue:null,description:"",name:"titleId",required:!1,type:{name:"string"}},swapOpacity:{defaultValue:null,description:"",name:"swapOpacity",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color of the icon.",name:"color",required:!1,type:{name:"Color"}}}}}catch{}export{Nn as I};
