import{j as s}from"./jsx-runtime-_e34SzbC.js";import{T as t,t as e}from"./index-CpvI2iDZ.js";import{B as r}from"./index-CxDnr947.js";const a={component:t,title:"Components/Toaster"},n={render:o=>s.jsxs(s.Fragment,{children:[s.jsx(t,{...o}),s.jsxs("div",{style:{display:"grid",gap:8,gridTemplateColumns:"repeat(3, 1fr)"},children:[s.jsx(r,{appearance:"secondary",onPress:()=>{e("This is a toast")},children:"Default toast"}),s.jsx(r,{appearance:"secondary",onPress:()=>{e.error("This is an error toast")},children:"Error toast"}),s.jsx(r,{appearance:"secondary",onPress:()=>{e.success("This is a success toast")},children:"Success toast"})]})]})},l=Object.freeze(Object.defineProperty({__proto__:null,Toaster:n,default:a},Symbol.toStringTag,{value:"Module"}));export{n as T,l as s};