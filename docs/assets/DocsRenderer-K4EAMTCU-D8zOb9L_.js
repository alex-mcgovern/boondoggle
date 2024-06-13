function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BB7QKzG5.js","./index-DVXBtNgz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-BYgq0MWQ.js";import{R as e,r as c}from"./index-DVXBtNgz.js";import{r as l,u}from"./react-18-c1HGMdzG.js";import{e as h,f as E,H as d,g as x}from"./index-BqVe177J.js";import"../sb-preview/runtime.js";import"./index-BAqkEV4U.js";import"./chunk-ZHZY55TS-CJLUcfRJ.js";import"./index-7BBFQWZf.js";import"./index-CHFuvV5_.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},f=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},H=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-BB7QKzG5.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(f,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{H as DocsRenderer,_ as defaultComponents};
