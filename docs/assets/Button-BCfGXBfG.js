import{a as u,e as g,b as y,d as E}from"./utils-Bc7mYRVy.js";import{c as p}from"./focusSafely-ZnAb2dR5.js";import{r as T,R as k}from"./index-DVXBtNgz.js";import{$ as w}from"./useFocusable-DnIHujbf.js";import{b as H,a as O,$ as S}from"./useFocusRing-Dauh53Lh.js";function V(e,d){let{elementType:a="button",isDisabled:s,onPress:t,onPressStart:i,onPressEnd:r,onPressUp:o,onPressChange:c,preventFocusOnPress:n,allowFocusWhenDisabled:b,onClick:$,href:m,target:x,rel:h,type:P="button"}=e,f;a==="button"?f={type:P,disabled:s}:f={role:"button",tabIndex:s?void 0:0,href:a==="a"&&s?void 0:m,target:a==="a"?x:void 0,type:a==="input"?P:void 0,disabled:a==="input"?s:void 0,"aria-disabled":!s||a==="input"?void 0:s,rel:a==="a"?h:void 0};let{pressProps:v,isPressed:F}=H({onPressStart:i,onPressEnd:r,onPressChange:c,onPress:t,onPressUp:o,isDisabled:s,preventFocusOnPress:n,ref:d}),{focusableProps:l}=w(e,d);b&&(l.tabIndex=s?-1:l.tabIndex);let C=u(l,v,p(e,{labelable:!0}));return{isPressed:F,buttonProps:u(f,C,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:D=>{$&&($(D),console.warn("onClick is deprecated, please use onPress"))}})}}const B=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),I=T.createContext({});function N(e,d){[e,d]=y(e,d,I);let a=e,{buttonProps:s,isPressed:t}=V(e,d),{focusProps:i,isFocused:r,isFocusVisible:o}=O(e),{hoverProps:c,isHovered:n}=S(e),b=E({...e,values:{isHovered:n,isPressed:t,isFocused:r,isFocusVisible:o,isDisabled:e.isDisabled||!1},defaultClassName:"react-aria-Button"});return k.createElement("button",{...p(e,{propNames:B}),...u(s,i,c),...b,ref:d,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-pressed":a.isPressed||t||void 0,"data-hovered":n||void 0,"data-focused":r||void 0,"data-focus-visible":o||void 0})}const L=g(N);export{L as $,I as a,V as b};