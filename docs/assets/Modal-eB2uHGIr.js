import{h as v,a as b,b as D,$ as p,i as g,j as O,d as R,k as S,l as M}from"./utils-Bc7mYRVy.js";import{d as L,e as z,f as N,g as I,c as x,h as A,i as B}from"./Dialog-me1LxMT9.js";import{c as w}from"./focusSafely-ZnAb2dR5.js";import{r as s,R as c}from"./index-DVXBtNgz.js";import{a as T}from"./OverlayArrow-aEix7Tre.js";let r=typeof document<"u"&&window.visualViewport;function U(){let t=v(),[e,n]=s.useState(()=>t?{width:0,height:0}:E());return s.useEffect(()=>{let i=()=>{n(a=>{let d=E();return d.width===a.width&&d.height===a.height?a:d})};return r?r.addEventListener("resize",i):window.addEventListener("resize",i),()=>{r?r.removeEventListener("resize",i):window.removeEventListener("resize",i)}},[]),e}function E(){return{width:r&&(r==null?void 0:r.width)||window.innerWidth,height:r&&(r==null?void 0:r.height)||window.innerHeight}}function _(t,e,n){let{overlayProps:i,underlayProps:a}=L({...t,isOpen:e.isOpen,onClose:e.close},n);return z({isDisabled:!e.isOpen}),N(),s.useEffect(()=>{if(e.isOpen)return I([n.current])},[e.isOpen,n]),{modalProps:b(i),underlayProps:a}}const K=s.createContext(null),m=s.createContext(null);function V(t,e){if(s.useContext(m))return c.createElement(h,{...t,modalRef:e},t.children);let{isDismissable:i,isKeyboardDismissDisabled:a,isOpen:d,defaultOpen:o,onOpenChange:l,children:$,isEntering:f,isExiting:u,UNSTABLE_portalContainer:C,shouldCloseOnInteractOutside:y,...P}=t;return c.createElement(W,{isDismissable:i,isKeyboardDismissDisabled:a,isOpen:d,defaultOpen:o,onOpenChange:l,isEntering:f,isExiting:u,UNSTABLE_portalContainer:C,shouldCloseOnInteractOutside:y},c.createElement(h,{...P,modalRef:e},$))}const Q=s.forwardRef(V);function j(t,e){[t,e]=D(t,e,K);let n=s.useContext(x),i=T(t),a=t.isOpen!=null||t.defaultOpen!=null||!n?i:n,d=p(e),o=s.useRef(null),l=g(d,a.isOpen),$=g(o,a.isOpen),f=l||$||t.isExiting||!1,u=v();return!a.isOpen&&!f||u?null:c.createElement(k,{...t,state:a,isExiting:f,overlayRef:d,modalRef:o})}const W=s.forwardRef(j);function k({UNSTABLE_portalContainer:t,...e}){let n=e.modalRef,{state:i}=e,{modalProps:a,underlayProps:d}=_(e,i,n),o=O(e.overlayRef)||e.isEntering||!1,l=R({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:o,isExiting:e.isExiting,state:i}}),$=U(),f={...l.style,"--visual-viewport-height":$.height+"px"};return c.createElement(A,{isExiting:e.isExiting,portalContainer:t},c.createElement("div",{...b(w(e),d),...l,style:f,ref:e.overlayRef,"data-entering":o||void 0,"data-exiting":e.isExiting||void 0},c.createElement(S,{values:[[m,{modalProps:a,modalRef:n,isExiting:e.isExiting,isDismissable:e.isDismissable}],[x,i]]},l.children)))}function h(t){let{modalProps:e,modalRef:n,isExiting:i,isDismissable:a}=s.useContext(m),d=s.useContext(x),o=s.useMemo(()=>M(t.modalRef,n),[t.modalRef,n]),l=p(o),$=O(l),f=R({...t,defaultClassName:"react-aria-Modal",values:{isEntering:$,isExiting:i,state:d}});return c.createElement("div",{...b(w(t),e),...f,ref:l,"data-entering":$||void 0,"data-exiting":i||void 0},a&&c.createElement(B,{onDismiss:d.close}),f.children)}export{Q as $,W as a};