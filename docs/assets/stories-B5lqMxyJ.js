import{j as e}from"./jsx-runtime-_e34SzbC.js";import{f as l}from"./index-BQtJ4s0_.js";import{T as r}from"./index-CteuCTZA.js";import{A as t}from"./index-CQcF5HP1.js";function o(){const s=l.person.fullName();return e.jsxs("div",{children:[e.jsx(t,{name:s,size:32}),e.jsxs("div",{children:[e.jsx("div",{children:s}),e.jsx("div",{children:l.internet.email()})]})]})}const d={args:{},component:r.Root,parameters:{layout:"padded"},render:s=>e.jsx(e.Fragment,{children:e.jsxs(r.Root,{"aria-label":"Files",...s,children:[e.jsxs(r.Header,{children:[e.jsx(r.Column,{allowsSorting:!0,isRowHeader:!0,width:"2fr",children:"User"}),e.jsx(r.Column,{width:"1fr",children:"Job type"}),e.jsx(r.Column,{width:"1fr",children:"Job area"})]}),e.jsx(r.Body,{children:Array.from({length:5}).map((i,n)=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:e.jsx(o,{})}),e.jsx(r.Cell,{children:l.person.jobType()}),e.jsx(r.Cell,{children:l.person.jobArea()})]},n))})]})}),title:"Components/Table"},a={},j={render:s=>e.jsx(e.Fragment,{children:e.jsxs(r.Root,{"aria-label":"Files",...s,children:[e.jsxs(r.Header,{children:[e.jsx(r.Column,{isRowHeader:!0,width:300,children:"User"}),e.jsx(r.Column,{width:150,children:"Job type"}),e.jsx(r.Column,{width:150,children:"Job area"})]}),e.jsx(r.Body,{children:Array.from({length:5}).map((i,n)=>e.jsxs(r.Row,{href:l.internet.url(),children:[e.jsx(r.Cell,{children:e.jsx(o,{})}),e.jsx(r.Cell,{children:l.person.jobArea()}),e.jsx(r.Cell,{children:l.person.jobTitle()})]},n))})]})})},u=Object.freeze(Object.defineProperty({__proto__:null,Default:a,RowsAsLinks:j,default:d},Symbol.toStringTag,{value:"Module"}));export{a as D,u as s};
