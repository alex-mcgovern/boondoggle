import{j as e}from"./jsx-runtime-_e34SzbC.js";import{f as l}from"./index-BQtJ4s0_.js";import{r as d}from"./index-DVXBtNgz.js";import{T as r}from"./index-C__XuISX.js";import{A as f}from"./index-D1g3cU7i.js";function m(){const o=l.person.fullName();return e.jsxs("div",{children:[e.jsx(f,{name:o,size:32}),e.jsxs("div",{children:[e.jsx("div",{children:o}),e.jsx("div",{children:l.internet.email()})]})]})}const C={args:{},component:r.Root,parameters:{layout:"padded"},render:o=>e.jsx(e.Fragment,{children:e.jsxs(r.Root,{"aria-label":"Files",...o,children:[e.jsxs(r.Header,{children:[e.jsx(r.Column,{allowsSorting:!0,isRowHeader:!0,width:"2fr",children:"User"}),e.jsx(r.Column,{width:"1fr",children:"Job type"}),e.jsx(r.Column,{width:"1fr",children:"Job area"})]}),e.jsx(r.Body,{children:Array.from({length:5}).map((a,t)=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:e.jsx(m,{})}),e.jsx(r.Cell,{children:l.person.jobType()}),e.jsx(r.Cell,{children:l.person.jobArea()})]},t))})]})}),title:"Components/Table"},g={},b={render:o=>e.jsx(e.Fragment,{children:e.jsxs(r.Root,{"aria-label":"Files",...o,children:[e.jsxs(r.Header,{children:[e.jsx(r.Column,{isRowHeader:!0,width:300,children:"User"}),e.jsx(r.Column,{width:150,children:"Job type"}),e.jsx(r.Column,{width:150,children:"Job area"})]}),e.jsx(r.Body,{children:Array.from({length:5}).map((a,t)=>e.jsxs(r.Row,{href:l.internet.url(),children:[e.jsx(r.Cell,{children:e.jsx(m,{})}),e.jsx(r.Cell,{children:l.person.jobArea()}),e.jsx(r.Cell,{children:l.person.jobTitle()})]},t))})]})})};function w(o){const[a,t]=d.useState(()=>Array.from({length:5}).map(()=>({email:l.internet.email(),name:l.person.fullName()}))),[u,c]=d.useState();console.debug("debug  users:",a);const h=()=>(c({column:"name",direction:"ascending"}),t(n=>[...n].sort((s,i)=>s.name.localeCompare(i.name)))),j=()=>(c({column:"name",direction:"descending"}),t(n=>[...n].sort((s,i)=>s.name.localeCompare(i.name)))),x=()=>(c({column:"email",direction:"ascending"}),t(n=>[...n].sort((s,i)=>s.email.localeCompare(i.email)))),p=()=>(c({column:"email",direction:"descending"}),t(n=>[...n].sort((s,i)=>s.email.localeCompare(i.email))));return e.jsx(r.ResizableContainer,{children:e.jsxs(r.Root,{"aria-label":"Files",...o,onSortChange:({column:n,direction:s})=>{switch(n){case"name":return s==="ascending"?h():j();case"email":return s==="ascending"?x():p();default:return null}},sortDescriptor:u,children:[e.jsxs(r.Header,{children:[e.jsx(r.Column,{allowsSorting:!0,id:"name",isRowHeader:!0,children:"Name"}),e.jsx(r.Column,{allowsSorting:!0,id:"email",children:"Email"})]}),e.jsx(r.Body,{children:a.map((n,s)=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:n.name}),e.jsx(r.Cell,{children:n.email})]},s))})]})})}const R={render:w},D=Object.freeze(Object.defineProperty({__proto__:null,AllowsSorting:R,Default:g,RowsAsLinks:b,default:C},Symbol.toStringTag,{value:"Module"}));export{g as D,D as s};