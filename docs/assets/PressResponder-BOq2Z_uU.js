import{a as c,b as d}from"./focusSafely-BjFYYYEp.js";import{g as b,a as i}from"./utils-DJbZa_IK.js";import{R as f,r as t}from"./index-DVXBtNgz.js";const p=f.forwardRef(({children:a,...o},r)=>{let s=t.useRef(!1),e=t.useContext(c);r=b(r||(e==null?void 0:e.ref));let n=i(e||{},{...o,ref:r,register(){s.current=!0,e&&e.register()}});return d(e,r),t.useEffect(()=>{s.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),s.current=!0)},[]),f.createElement(c.Provider,{value:n},a)});function x({children:a}){let o=t.useMemo(()=>({register:()=>{}}),[]);return f.createElement(c.Provider,{value:o},a)}export{p as $,x as a};
