import{a as b,b as h,d as C}from"./utils-9Msfu4Q8.js";import{r as p,R as T}from"./index-DVXBtNgz.js";import{c as D}from"./focusSafely-Cv_PksxV.js";import{$ as E,a as F,b as H}from"./openLink-D2-6eagY.js";import{$ as g}from"./useFocusable-BlmBqszO.js";import{b as y,$ as L,a as R}from"./useFocusRing-DXKnJiZy.js";function S(e,s){let{elementType:i="a",onPress:l,onPressStart:n,onPressEnd:f,onClick:a,isDisabled:d,...o}=e,t={};i!=="a"&&(t={role:"link",tabIndex:d?void 0:0});let{focusableProps:c}=g(e,s),{pressProps:$,isPressed:m}=y({onPress:l,onPressStart:n,onPressEnd:f,isDisabled:d,ref:s}),x=D(o,{labelable:!0}),v=b(c,$),P=E(),k=F(e);return{isPressed:m,linkProps:b(x,k,{...v,...t,"aria-disabled":d||void 0,"aria-current":e["aria-current"],onClick:r=>{var u;(u=$.onClick)===null||u===void 0||u.call($,r),a&&(a(r),console.warn("onClick is deprecated, please use onPress")),!P.isNative&&r.currentTarget instanceof HTMLAnchorElement&&r.currentTarget.href&&!r.isDefaultPrevented()&&H(r.currentTarget,r)&&e.href&&(r.preventDefault(),P.open(r.currentTarget,r,e.href,e.routerOptions))}})}}const V=p.createContext(null);function w(e,s){[e,s]=h(e,s,V);let i=e.href?"a":"span",{linkProps:l,isPressed:n}=S({...e,elementType:i},s),{hoverProps:f,isHovered:a}=L(e),{focusProps:d,isFocused:o,isFocusVisible:t}=R(),c=C({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:n,isHovered:a,isFocused:o,isFocusVisible:t}});return T.createElement(i,{ref:s,slot:e.slot||void 0,...b(c,l,f,d),"data-focused":o||void 0,"data-hovered":a||void 0,"data-pressed":n||void 0,"data-focus-visible":t||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},c.children)}const j=p.forwardRef(w);export{j as $};
