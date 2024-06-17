import{j as o}from"./jsx-runtime-_e34SzbC.js";import{f as s}from"./index-BQtJ4s0_.js";import{f as l}from"./faTimes-CxILx_mS.js";import{c as a}from"./clsx-B-dksMZM.js";import{r as n}from"./index-DVXBtNgz.js";import{a as m,c,$ as d}from"./Dialog-Bdg8D4i-.js";import{$ as p}from"./Heading-D56MqPoS.js";import{$ as f,a as g}from"./Modal-BTn1bPzJ.js";import{B as t}from"./index-B9OU0ySR.js";import{I as x}from"./index-BOD-x3x9.js";import"./utils-QLlwGfKe.js";import"./index-BAqkEV4U.js";import"./RSPContexts-D2_oAKli.js";import"./OverlayArrow-C7u8HHrZ.js";import"./platform-Dv8lzYqa.js";import"./useResizeObserver-B8nJL-Cs.js";import"./context-BNGJTqTl.js";import"./useControlledState-DO5k2rCg.js";import"./focusSafely-N6uhGZIJ.js";import"./PressResponder-BDsKhYT7.js";import"./FocusScope-D2-yyncp.js";import"./getScrollParent-yMl4gzwT.js";import"./isScrollable-Bts8_1NI.js";import"./useLabels-D0svGtYj.js";import"./useLocalizedStringFormatter-wEL_tslA.js";import"./VisuallyHidden-KsiBT5-Z.js";import"./Button-B4zfvGBi.js";import"./useFocusable-D0fSjH-e.js";import"./useFocusRing-DDn0T9K6.js";import"./openLink-D2-6eagY.js";import"./Link-BVd7meNa.js";import"./index-CYjD5YP1.js";function u({width:e="sm",...i}){return o.jsx(m,{...i,className:a(i.className,"dialog",e)})}function h(e){return o.jsx("header",{className:"dialog-header",...e})}function j({children:e}){return o.jsx(p,{className:"dialog-title",slot:"title",children:e})}function $(){const{close:e}=n.useContext(c);return o.jsx(t,{appearance:"ghost","aria-label":"Close",className:"ml-auto",name:"close",onPress:e,size:"sm",square:!0,type:"button",children:o.jsx(x,{icon:l.faTimes})})}function D({children:e}){return o.jsx("div",{className:"dialog-content",children:e})}function b({children:e}){return o.jsx("footer",{className:"dialog-footer",children:e})}function N(e){return o.jsx(f,{...e,className:a(e.className,"dialog-modal")})}function y(e){return o.jsx(g,{...e,className:a(e.className,"dialog-modal-overlay")})}function C(e){return o.jsx(d,{...e})}const r={CloseButton:$,Content:D,Footer:b,Header:h,Modal:N,ModalOverlay:y,Root:u,Title:j,Trigger:C};try{r.displayName="Dialog",r.__docgenInfo={description:"Dialog components built with React Aria Dialog component.",displayName:"Dialog",props:{}}}catch{}const to={args:{children:o.jsxs(o.Fragment,{children:[o.jsx(t,{children:"Open dialog"}),o.jsx(r.ModalOverlay,{children:o.jsx(r.Modal,{children:o.jsxs(r.Root,{children:[o.jsx(r.Header,{children:o.jsx(r.Title,{children:"Hello there"})}),o.jsx(r.Content,{children:o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:["A modal dialog component powered by"," ",o.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/Dialog.html",children:"React Aria Components"})]}),Array.from({length:10},()=>o.jsx("p",{children:s.lorem.paragraphs(1)},s.string.alphanumeric(4)))]})}),o.jsx(r.Footer,{children:o.jsx(t,{onPress:()=>{alert("Confirmed"),close()},type:"submit",children:"Confirm"})})]})})})]})},component:r.Trigger,title:"Components/Dialog"},ao={};export{ao as Default,to as default};