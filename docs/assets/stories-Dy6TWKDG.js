import{j as e}from"./jsx-runtime-_e34SzbC.js";import{f as p}from"./index-BQtJ4s0_.js";import{f as _}from"./faBars-8QYMZFxN.js";import{f as u,a as M,$ as y}from"./faTimes-t09ZZosi.js";import{r as x}from"./index-DVXBtNgz.js";import{$ as j,a as N}from"./Dialog-PMfATrcZ.js";import{$}from"./Heading-BfX4NUPJ.js";import{B as i}from"./index-BSz7dwCe.js";import{I as f}from"./index-CrDZOx4x.js";function n({children:a,close:t,title:o}){return e.jsxs("header",{className:"mobile-menu-header",children:[a,o?e.jsx($,{className:"mobile-menu-title",slot:"title",children:o}):null,e.jsx(i,{appearance:"ghost","aria-label":"Close",className:"ml-auto",name:"close",onPress:t,square:!0,type:"button",children:e.jsx(f,{icon:u.faTimes})})]})}function r({children:a}){return e.jsx("div",{className:"mobile-menu-content",children:a})}function l({children:a}){return e.jsx("footer",{className:"mobile-menu-footer",children:a})}function s({children:a,dialogTriggerProps:t,modalOverlayProps:o,modalProps:b}){const[c,h]=x.useState(t==null?void 0:t.isOpen);return e.jsxs(j,{...t,isOpen:c,onOpenChange:m=>{var d;h(m),(d=t==null?void 0:t.onOpenChange)==null||d.call(t,m)},children:[e.jsx(i,{appearance:"ghost",square:!0,children:e.jsx(f,{icon:c?u.faTimes:_.faBars})}),e.jsx(M,{className:"mobile-menu-overlay",...o,children:e.jsx(y,{className:"mobile-menu-modal",...b,children:e.jsx(N,{className:"mobile-menu",children:a})})})]})}try{n.displayName="MobileMenuHeader",n.__docgenInfo={description:"Wrapper to render the dialog header.",displayName:"MobileMenuHeader",props:{close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="ScrollableMobileMenuContent",r.__docgenInfo={description:"Wrapper to render scrollable content within the dialog.",displayName:"ScrollableMobileMenuContent",props:{}}}catch{}try{l.displayName="MobileMenuFooter",l.__docgenInfo={description:"Wrapper to pin content to the bottom of the dialog.",displayName:"MobileMenuFooter",props:{}}}catch{}try{s.displayName="MobileMenu",s.__docgenInfo={description:"A pre-composed mobile menu component.",displayName:"MobileMenu",props:{dialogTriggerProps:{defaultValue:null,description:"",name:"dialogTriggerProps",required:!1,type:{name:'Omit<DialogTriggerProps, "children">'}},modalOverlayProps:{defaultValue:null,description:"",name:"modalOverlayProps",required:!1,type:{name:'Omit<any, "className">'}},modalProps:{defaultValue:null,description:"",name:"modalProps",required:!1,type:{name:'Omit<any, "className">'}}}}}catch{}const O={args:{children:({close:a})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{close:a,title:"MobileMenu Title"}),e.jsx(r,{children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["A modal MobileMenu component powered by"," ",e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/MobileMenu.html",children:"React Aria Components"})]}),Array.from({length:10},()=>e.jsx("p",{children:p.lorem.paragraphs(1)},p.string.alphanumeric(4)))]})}),e.jsx(l,{children:e.jsx(i,{onPress:()=>{alert("Confirmed"),a()},children:"Confirm"})})]}),modalOverlayProps:{isDismissable:!0}},component:s,title:"Components/MobileMenu"},C={},H=Object.freeze(Object.defineProperty({__proto__:null,Default:C,default:O},Symbol.toStringTag,{value:"Module"}));export{C as D,s as M,H as s};
