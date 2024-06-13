import{g as L,e as F,f as P,o as O,b as M,h as De,m as Oe,$ as B,i as Re,p as Te,j as Le,c as Se,k,t as Ie}from"./utils-QLlwGfKe.js";import{$ as Ne}from"./RSPContexts-D2_oAKli.js";import{f as Ae,b as Fe,a as H,c as Me}from"./OverlayArrow-C7u8HHrZ.js";import{e as Be,b as ke,f as S,c as R}from"./focusSafely-N6uhGZIJ.js";import{a as He,$ as We}from"./PressResponder-BDsKhYT7.js";import{r as $,R as p}from"./index-DVXBtNgz.js";import{d as _e,a as Ke}from"./FocusScope-D2-yyncp.js";import{Y as Ue}from"./index-BAqkEV4U.js";import{$ as W}from"./getScrollParent-yMl4gzwT.js";import{f as Ve}from"./platform-Dv8lzYqa.js";import{$ as je}from"./useLabels-D0svGtYj.js";import{$ as Ye}from"./useLocalizedStringFormatter-wEL_tslA.js";import{$ as qe}from"./VisuallyHidden-KsiBT5-Z.js";function ze(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:a}=e,c=$.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=L(i=>{n&&y(i,t)&&(a&&a(i),c.current.isPointerDown=!0)}),s=L(i=>{n&&n(i)});$.useEffect(()=>{let i=c.current;if(r)return;const d=t.current,o=Be(d);if(typeof PointerEvent<"u"){let b=f=>{i.isPointerDown&&y(f,t)&&s(f),i.isPointerDown=!1};return o.addEventListener("pointerdown",l,!0),o.addEventListener("pointerup",b,!0),()=>{o.removeEventListener("pointerdown",l,!0),o.removeEventListener("pointerup",b,!0)}}else{let b=m=>{i.ignoreEmulatedMouseEvents?i.ignoreEmulatedMouseEvents=!1:i.isPointerDown&&y(m,t)&&s(m),i.isPointerDown=!1},f=m=>{i.ignoreEmulatedMouseEvents=!0,i.isPointerDown&&y(m,t)&&s(m),i.isPointerDown=!1};return o.addEventListener("mousedown",l,!0),o.addEventListener("mouseup",b,!0),o.addEventListener("touchstart",l,!0),o.addEventListener("touchend",f,!0),()=>{o.removeEventListener("mousedown",l,!0),o.removeEventListener("mouseup",b,!0),o.removeEventListener("touchstart",l,!0),o.removeEventListener("touchend",f,!0)}}},[t,r,l,s])}function y(e,t){if(e.button>0)return!1;if(e.target){const n=e.target.ownerDocument;if(!n||!n.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}const x=[];function Ge(e,t){let{onClose:n,shouldCloseOnBlur:r,isOpen:a,isDismissable:c=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:s}=e;$.useEffect(()=>(a&&x.push(t),()=>{let u=x.indexOf(t);u>=0&&x.splice(u,1)}),[a,t]);let i=()=>{x[x.length-1]===t&&n&&n()},d=u=>{(!s||s(u.target))&&x[x.length-1]===t&&(u.stopPropagation(),u.preventDefault())},o=u=>{(!s||s(u.target))&&(x[x.length-1]===t&&(u.stopPropagation(),u.preventDefault()),i())},b=u=>{u.key==="Escape"&&!l&&!u.nativeEvent.isComposing&&(u.stopPropagation(),u.preventDefault(),i())};ze({ref:t,onInteractOutside:c&&a?o:null,onInteractOutsideStart:d});let{focusWithinProps:f}=ke({isDisabled:!r,onBlurWithin:u=>{!u.relatedTarget||_e(u.relatedTarget)||(!s||s(u.relatedTarget))&&n()}}),m=u=>{u.target===u.currentTarget&&u.preventDefault()};return{overlayProps:{onKeyDown:b,...f},underlayProps:{onPointerDown:m}}}function Je(e,t,n){let{type:r}=e,{isOpen:a}=t;$.useEffect(()=>{n&&n.current&&Ae.set(n.current,t.close)});let c;r==="menu"?c=!0:r==="listbox"&&(c="listbox");let l=F();return{triggerProps:{"aria-haspopup":c,"aria-expanded":a,"aria-controls":a?l:null,onPress:t.toggle},overlayProps:{id:l}}}const C=typeof document<"u"&&window.visualViewport,Ze=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let w=0,D;function Xe(e={}){let{isDisabled:t}=e;P(()=>{if(!t)return w++,w===1&&(Ve()?D=et():D=Qe()),()=>{w--,w===0&&D()}},[t])}function Qe(){return O(g(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),g(document.documentElement,"overflow","hidden"))}function et(){let e,t,n=d=>{e=W(d.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=g(e,"overscrollBehavior","contain"))},r=d=>{if(!e||e===document.documentElement||e===document.body){d.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&d.preventDefault()},a=d=>{let o=d.target;N(o)&&o!==document.activeElement&&(d.preventDefault(),s(),o.style.transform="translateY(-2000px)",o.focus(),requestAnimationFrame(()=>{o.style.transform=""})),t&&t()},c=d=>{let o=d.target;N(o)&&(s(),o.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{o.style.transform="",C&&(C.height<window.innerHeight?requestAnimationFrame(()=>{I(o)}):C.addEventListener("resize",()=>I(o),{once:!0}))}))},l=null,s=()=>{if(l)return;let d=()=>{window.scrollTo(0,0)},o=window.pageXOffset,b=window.pageYOffset;l=O(E(window,"scroll",d),g(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),g(document.documentElement,"overflow","hidden"),g(document.body,"marginTop",`-${b}px`),()=>{window.scrollTo(o,b)}),window.scrollTo(0,0)},i=O(E(document,"touchstart",n,{passive:!1,capture:!0}),E(document,"touchmove",r,{passive:!1,capture:!0}),E(document,"touchend",a,{passive:!1,capture:!0}),E(document,"focus",c,!0));return()=>{t==null||t(),l==null||l(),i()}}function g(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function I(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let n=W(e);if(n!==document.documentElement&&n!==document.body&&n!==e){let r=n.getBoundingClientRect().top,a=e.getBoundingClientRect().top;a>r+e.clientHeight&&(n.scrollTop+=a-r)}e=n.parentElement}}function N(e){return e instanceof HTMLInputElement&&!Ze.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var _={};_={dismiss:"تجاهل"};var K={};K={dismiss:"Отхвърляне"};var U={};U={dismiss:"Odstranit"};var V={};V={dismiss:"Luk"};var j={};j={dismiss:"Schließen"};var Y={};Y={dismiss:"Απόρριψη"};var q={};q={dismiss:"Dismiss"};var z={};z={dismiss:"Descartar"};var G={};G={dismiss:"Lõpeta"};var J={};J={dismiss:"Hylkää"};var Z={};Z={dismiss:"Rejeter"};var X={};X={dismiss:"התעלם"};var Q={};Q={dismiss:"Odbaci"};var ee={};ee={dismiss:"Elutasítás"};var te={};te={dismiss:"Ignora"};var re={};re={dismiss:"閉じる"};var ne={};ne={dismiss:"무시"};var oe={};oe={dismiss:"Atmesti"};var ae={};ae={dismiss:"Nerādīt"};var ie={};ie={dismiss:"Lukk"};var se={};se={dismiss:"Negeren"};var le={};le={dismiss:"Zignoruj"};var de={};de={dismiss:"Descartar"};var ce={};ce={dismiss:"Dispensar"};var ue={};ue={dismiss:"Revocare"};var fe={};fe={dismiss:"Пропустить"};var $e={};$e={dismiss:"Zrušiť"};var be={};be={dismiss:"Opusti"};var pe={};pe={dismiss:"Odbaci"};var me={};me={dismiss:"Avvisa"};var ve={};ve={dismiss:"Kapat"};var xe={};xe={dismiss:"Скасувати"};var ge={};ge={dismiss:"取消"};var Ee={};Ee={dismiss:"關閉"};var he={};he={"ar-AE":_,"bg-BG":K,"cs-CZ":U,"da-DK":V,"de-DE":j,"el-GR":Y,"en-US":q,"es-ES":z,"et-EE":G,"fi-FI":J,"fr-FR":Z,"he-IL":X,"hr-HR":Q,"hu-HU":ee,"it-IT":te,"ja-JP":re,"ko-KR":ne,"lt-LT":oe,"lv-LV":ae,"nb-NO":ie,"nl-NL":se,"pl-PL":le,"pt-BR":de,"pt-PT":ce,"ro-RO":ue,"ru-RU":fe,"sk-SK":$e,"sl-SI":be,"sr-SP":pe,"sv-SE":me,"tr-TR":ve,"uk-UA":xe,"zh-CN":ge,"zh-TW":Ee};function tt(e){return e&&e.__esModule?e.default:e}function A(e){let{onDismiss:t,...n}=e,r=Ye(tt(he),"@react-aria/overlays"),a=je(n,r.format("dismiss")),c=()=>{t&&t()};return p.createElement(qe,null,p.createElement("button",{...a,tabIndex:-1,onClick:c,style:{width:1,height:1}}))}let h=new WeakMap,v=[];function rt(e,t=document.body){let n=new Set(e),r=new Set,a=i=>{for(let f of i.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(f);let d=f=>{if(n.has(f)||r.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let m of n)if(f.contains(m))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:d}),b=d(i);if(b===NodeFilter.FILTER_ACCEPT&&c(i),b!==NodeFilter.FILTER_REJECT){let f=o.nextNode();for(;f!=null;)c(f),f=o.nextNode()}},c=i=>{var d;let o=(d=h.get(i))!==null&&d!==void 0?d:0;i.getAttribute("aria-hidden")==="true"&&o===0||(o===0&&i.setAttribute("aria-hidden","true"),r.add(i),h.set(i,o+1))};v.length&&v[v.length-1].disconnect(),a(t);let l=new MutationObserver(i=>{for(let d of i)if(!(d.type!=="childList"||d.addedNodes.length===0)&&![...n,...r].some(o=>o.contains(d.target))){for(let o of d.removedNodes)o instanceof Element&&(n.delete(o),r.delete(o));for(let o of d.addedNodes)(o instanceof HTMLElement||o instanceof SVGElement)&&(o.dataset.liveAnnouncer==="true"||o.dataset.reactAriaTopLayer==="true")?n.add(o):o instanceof Element&&a(o)}});l.observe(t,{childList:!0,subtree:!0});let s={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return v.push(s),()=>{l.disconnect();for(let i of r){let d=h.get(i);d===1?(i.removeAttribute("aria-hidden"),h.delete(i)):h.set(i,d-1)}s===v[v.length-1]?(v.pop(),v.length&&v[v.length-1].observe()):v.splice(v.indexOf(s),1)}}function nt(e,t){let{triggerRef:n,popoverRef:r,isNonModal:a,isKeyboardDismissDisabled:c,shouldCloseOnInteractOutside:l,...s}=e,{overlayProps:i,underlayProps:d}=Ge({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!a,isKeyboardDismissDisabled:c,shouldCloseOnInteractOutside:l},r),{overlayProps:o,arrowProps:b,placement:f}=Fe({...s,targetRef:n,overlayRef:r,isOpen:t.isOpen,onClose:a?t.close:null});return Xe({isDisabled:a||!t.isOpen}),P(()=>{if(t.isOpen&&!a&&r.current)return rt([r.current])},[a,t.isOpen,r]),{popoverProps:M(i,o),arrowProps:b,underlayProps:d,placement:f}}const ot=$.createContext({});function at(){var e;return(e=$.useContext(ot))!==null&&e!==void 0?e:{}}const ye=p.createContext(null);function it(e){let t=De(),{portalContainer:n=t?null:document.body,isExiting:r}=e,[a,c]=$.useState(!1),l=$.useMemo(()=>({contain:a,setContain:c}),[a,c]),{getContainer:s}=at();if(!e.portalContainer&&s&&(n=s()),!n)return null;let i=e.children;return e.disableFocusManagement||(i=p.createElement(Ke,{restoreFocus:!0,contain:a&&!r},i)),i=p.createElement(ye.Provider,{value:l},p.createElement(He,null,i)),Ue.createPortal(i,n)}function st(){let e=$.useContext(ye),t=e==null?void 0:e.setContain;P(()=>{t==null||t(!0)},[t])}function lt(e,t){let{role:n="dialog"}=e,r=Oe();r=e["aria-label"]?void 0:r;let a=$.useRef(!1);return $.useEffect(()=>{if(t.current&&!t.current.contains(document.activeElement)){S(t.current);let c=setTimeout(()=>{document.activeElement===t.current&&(a.current=!0,t.current&&(t.current.blur(),S(t.current)),a.current=!1)},500);return()=>{clearTimeout(c)}}},[t]),st(),{dialogProps:{...R(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||r,onBlur:c=>{a.current&&c.stopPropagation()}},titleProps:{id:r}}}const we=$.createContext(null);function dt(e,t){[e,t]=B(e,t,we);let n=$.useContext(T),r=H(e),a=e.isOpen!=null||e.defaultOpen!=null||!n?r:n,c=Re(t,a.isOpen)||e.isExiting||!1;if($.useContext(Te)){let s=e.children;return typeof s=="function"&&(s=s({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),p.createElement(p.Fragment,null,s)}return a&&!a.isOpen&&!c?null:p.createElement(ct,{...e,triggerRef:e.triggerRef,state:a,popoverRef:t,isExiting:c})}const Ct=$.forwardRef(dt);function ct({state:e,isExiting:t,UNSTABLE_portalContainer:n,...r}){let a=$.useRef(null),[c,l]=$.useState(0);P(()=>{a.current&&e.isOpen&&l(a.current.getBoundingClientRect().width)},[e.isOpen,a]);var s;let{popoverProps:i,underlayProps:d,arrowProps:o,placement:b}=nt({...r,offset:(s=r.offset)!==null&&s!==void 0?s:8,arrowSize:c},e),f=r.popoverRef,m=Le(f,!!b)||r.isEntering||!1,u=Se({...r,defaultClassName:"react-aria-Popover",values:{trigger:r.trigger||null,placement:b,isEntering:m,isExiting:t}}),Ce={...i.style,...u.style};return p.createElement(it,{isExiting:t,portalContainer:n},!r.isNonModal&&e.isOpen&&p.createElement("div",{"data-testid":"underlay",...d,style:{position:"fixed",inset:0}}),p.createElement("div",{...M(R(r),i),...u,ref:f,slot:r.slot||void 0,style:Ce,"data-trigger":r.trigger,"data-placement":b,"data-entering":m||void 0,"data-exiting":t||void 0},!r.isNonModal&&p.createElement(A,{onDismiss:e.close}),p.createElement(Me.Provider,{value:{...o,placement:b,ref:a}},u.children),p.createElement(A,{onDismiss:e.close})))}const Pe=$.createContext(null),T=$.createContext(null);function Dt(e){let t=H(e),n=$.useRef(null),{triggerProps:r,overlayProps:a}=Je({type:"dialog"},t,n);return r.id=F(),a["aria-labelledby"]=r.id,p.createElement(k,{values:[[T,t],[Pe,a],[we,{trigger:"DialogTrigger",triggerRef:n}]]},p.createElement(We,{...r,ref:n,isPressed:t.isOpen},e.children))}function ut(e,t){let n=e["aria-labelledby"];[e,t]=B(e,t,Pe);let{dialogProps:r,titleProps:a}=lt({...e,"aria-labelledby":n},t),c=$.useContext(T),l=e.children;typeof l=="function"&&(l=l({close:(c==null?void 0:c.close)||(()=>{})})),!r["aria-label"]&&!r["aria-labelledby"]&&(e["aria-labelledby"]?r["aria-labelledby"]=e["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));var s;return p.createElement("section",{...R(e),...r,ref:t,slot:e.slot||void 0,style:e.style,className:(s=e.className)!==null&&s!==void 0?s:"react-aria-Dialog"},p.createElement(k,{values:[[Ne,{slots:{[Ie]:{},title:{...a,level:2}}}]]},l))}const Ot=$.forwardRef(ut);export{Dt as $,Ot as a,Ct as b,T as c,Ge as d,Xe as e,st as f,rt as g,it as h,A as i,we as j,Pe as k,ze as l,Je as m};
