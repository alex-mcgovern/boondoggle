import{j as o}from"./jsx-runtime-_e34SzbC.js";import{f as s}from"./index-BQtJ4s0_.js";import{f as l,$ as n,a as m}from"./faTimes-t09ZZosi.js";import{c as i}from"./clsx-B-dksMZM.js";import{r as c}from"./index-DVXBtNgz.js";import{a as d,c as p,$ as f}from"./Dialog-PMfATrcZ.js";import{$ as g}from"./Heading-BfX4NUPJ.js";import{B as t}from"./index-BSz7dwCe.js";import{I as x}from"./index-CrDZOx4x.js";import"./utils-DJbZa_IK.js";import"./index-BAqkEV4U.js";import"./focusSafely-BjFYYYEp.js";import"./platform-Dv8lzYqa.js";import"./OverlayArrow-Cysrqfca.js";import"./useResizeObserver-B8nJL-Cs.js";import"./context-bfltU5m3.js";import"./useControlledState-DO5k2rCg.js";import"./RSPContexts-D2_oAKli.js";import"./PressResponder-BOq2Z_uU.js";import"./FocusScope-BWCvgq0Q.js";import"./getScrollParent-yMl4gzwT.js";import"./isScrollable-Bts8_1NI.js";import"./useLabels-BxyvzJhL.js";import"./useLocalizedStringFormatter-JAxdz5_z.js";import"./VisuallyHidden-GhPn1rIA.js";import"./Button-CCYCZxsW.js";import"./useFocusable-RfJY7Cc8.js";import"./useFocusRing-ONODwrZO.js";import"./openLink-D2-6eagY.js";import"./Link-ClNTdC6_.js";import"./index-CYjD5YP1.js";function u({width:e="sm",...a}){return o.jsx(d,{...a,className:i(a.className,"dialog",e)})}function h({title:e}){const{close:a}=c.useContext(p);return o.jsxs("header",{className:"dialog-header",children:[o.jsx(g,{className:"dialog-title",slot:"title",children:e}),o.jsx(t,{appearance:"ghost","aria-label":"Close",className:"ml-auto",name:"close",onPress:a,size:"sm",square:!0,type:"button",children:o.jsx(x,{icon:l.faTimes})})]})}function j({children:e}){return o.jsx("div",{className:"dialog-content",children:e})}function $({children:e}){return o.jsx("footer",{className:"dialog-footer",children:e})}function D(e){return o.jsx(n,{...e,className:i(e.className,"dialog-modal")})}function b(e){return o.jsx(m,{...e,className:i(e.className,"dialog-modal-overlay")})}function N(e){return o.jsx(f,{...e})}const r={Content:j,Footer:$,Header:h,Modal:D,ModalOverlay:b,Root:u,Trigger:N};try{r.displayName="Dialog",r.__docgenInfo={description:"Dialog components built with React Aria Dialog component.",displayName:"Dialog",props:{}}}catch{}const oo={args:{children:o.jsxs(o.Fragment,{children:[o.jsx(t,{children:"Open dialog"}),o.jsx(r.ModalOverlay,{children:o.jsx(r.Modal,{children:o.jsxs(r.Root,{children:[o.jsx(r.Header,{title:"Dialog Title"}),o.jsx(r.Content,{children:o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:["A modal dialog component powered by"," ",o.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/Dialog.html",children:"React Aria Components"})]}),Array.from({length:10},()=>o.jsx("p",{children:s.lorem.paragraphs(1)},s.string.alphanumeric(4)))]})}),o.jsx(r.Footer,{children:o.jsx(t,{onPress:()=>{alert("Confirmed"),close()},type:"submit",children:"Confirm"})})]})})})]})},component:r.Trigger,title:"Components/Dialog"},eo={};export{eo as Default,oo as default};