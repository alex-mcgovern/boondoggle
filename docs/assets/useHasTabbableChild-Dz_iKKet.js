import{$ as s}from"./FocusScope-D2-yyncp.js";import{r as u}from"./index-DVXBtNgz.js";import{f as c}from"./utils-QLlwGfKe.js";function f(e,t){let r=t==null?void 0:t.isDisabled,[d,i]=u.useState(!1);return c(()=>{if(e!=null&&e.current&&!r){let a=()=>{if(e.current){let l=s(e.current,{tabbable:!0});i(!!l.nextNode())}};a();let b=new MutationObserver(a);return b.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{b.disconnect()}}}),r?!1:d}export{f as $};
