import{j as e}from"./jsx-runtime-_e34SzbC.js";import{useMDXComponents as s}from"./index-BB7QKzG5.js";import{M as d,D as a,C as o,A as c}from"./index-CZkcHL_A.js";import{T as i}from"./index-CHdEoj5K.js";import{s as l,D as h,I as p,C as m,a as x,b as u,V as j,L as f}from"./stories-BDH-QMSj.js";import"./index-DVXBtNgz.js";import"./iframe-6eE603z8.js";import"../sb-preview/runtime.js";import"./chunk-ZHZY55TS-CJLUcfRJ.js";import"./index-BAqkEV4U.js";import"./index-7BBFQWZf.js";import"./index-CHFuvV5_.js";import"./index-DrFu-skq.js";import"./faTimesCircle-IogQNgi9.js";import"./clsx-B-dksMZM.js";import"./Button-CCYCZxsW.js";import"./utils-DJbZa_IK.js";import"./focusSafely-BjFYYYEp.js";import"./platform-Dv8lzYqa.js";import"./useFocusable-RfJY7Cc8.js";import"./useFocusRing-ONODwrZO.js";import"./openLink-D2-6eagY.js";import"./FieldError-DztlAQZG.js";import"./Text-Dje1MlzB.js";import"./Form-BnTBccM9.js";import"./Input-CL8PycDY.js";import"./Label-Dze1OFf_.js";import"./useTextField-B8Q-4duf.js";import"./useFormReset-YLDGm2ha.js";import"./useControlledState-DO5k2rCg.js";import"./useField-necAhpoZ.js";import"./useLabels-BxyvzJhL.js";import"./index.esm-oJwJgW9d.js";import"./index-DO0WJq5b.js";import"./index-BbIWUphv.js";import"./i18n-BYVObd3f.js";import"./index-CrDZOx4x.js";import"./index-CYjD5YP1.js";import"./index-CpvI2iDZ.js";import"./index-CSv3mcIl.js";import"./OverlayArrow-Cysrqfca.js";import"./useResizeObserver-B8nJL-Cs.js";import"./context-bfltU5m3.js";import"./index-DZ6V6TFu.js";import"./index-eSV9w_QA.js";import"./Group-64kkNqPz.js";import"./index-nqHrWZbE.js";import"./index-BDgd1pPj.js";import"./index-Cqq-gcUh.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(t.h1,{id:"textfield",children:"TextField"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"TextField"}),` is built with composition in mind — meaning that you need to combine
it withother components like `,e.jsx(t.code,{children:"Label"}),", ",e.jsx(t.code,{children:"Input"}),", ",e.jsx(t.code,{children:"FieldError"}),`, etc. to create a
complete form field.`]}),`
`,e.jsx(o,{sourceState:"shown",of:h}),`
`,e.jsx(t.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(t.p,{children:["You can mark the field as invalid by passing the ",e.jsx(t.code,{children:"isInvalid"}),` prop. This will
apply the red `,e.jsx(t.code,{children:"color"})," to the field."]}),`
`,e.jsxs(t.p,{children:[`Additionally, you can provide an error message to be displayed below the field
using the `,e.jsx(t.code,{children:"FieldError"})," component."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": The ",e.jsx(t.code,{children:"FieldError"}),` may also be used without any children, in the context
of a `,e.jsx(t.code,{children:"Form"}),` component, in which case you can pass an object of errors to the
`,e.jsx(t.code,{children:"Form"}),"."]}),`
`,e.jsx(o,{sourceState:"shown",of:p}),`
`,e.jsx(t.h3,{id:"adding-a-copy-button",children:'Adding a "copy" button'}),`
`,e.jsxs(t.p,{children:[`A useful feature is a dedicated "copy" button that allows the user to copy the
value of the field to the clipboard. This can be achieved by composing the
`,e.jsx(t.code,{children:"TextField"})," with a ",e.jsx(t.code,{children:"TextFieldCopyButton"}),` component. Under the hood, the
`,e.jsx(t.code,{children:"TextFieldCopyButton"})," leverages the ",e.jsx(t.code,{children:"slot"}),` pattern from React Aria.
`,e.jsx(t.a,{href:"https://react-spectrum.adobe.com/react-aria/advanced.html#slots",rel:"nofollow",children:"(documentation)"}),"."]}),`
`,e.jsx(t.p,{children:"This interaction will trigger user feedback in the form of a toast message."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Due to the fact that a html ",e.jsx(t.code,{children:"<input>"}),` doesn't support any child
elements, the button is rendered as a sibling to the input, and wrapped with a
`,e.jsx(t.code,{children:"Group"})," component. In this scenario, the ",e.jsx(t.code,{children:"Input"})," can be passed ",e.jsx(t.code,{children:"unstyled"}),` to
remove the border and related styles.`]}),`
`,e.jsx(o,{sourceState:"shown",of:m}),`
`,e.jsx(t.h3,{id:"adding-a-clear-button",children:'Adding a "clear" button'}),`
`,e.jsxs(t.p,{children:[`If you need to allow the user to clear the value of the field, you can compose
the `,e.jsx(t.code,{children:"TextField"})," with a ",e.jsx(t.code,{children:"TextFieldClearButton"}),` component. Under the hood, the
`,e.jsx(t.code,{children:"TextFieldClearButton"})," leverages the ",e.jsx(t.code,{children:"slot"}),` pattern from React Aria.
`,e.jsx(t.a,{href:"https://react-spectrum.adobe.com/react-aria/advanced.html#slots",rel:"nofollow",children:"(documentation)"}),"."]}),`
`,e.jsx(o,{sourceState:"shown",of:x}),`
`,e.jsx(t.h3,{id:"adding-a-description",children:"Adding a description"}),`
`,e.jsxs(t.p,{children:["To add a description to the field, you can use the ",e.jsx(t.code,{children:"FieldDescription"})," component."]}),`
`,e.jsx(o,{sourceState:"shown",of:u}),`
`,e.jsx(t.h3,{id:"adding-a-toggle-visiblity-button",children:'Adding a "toggle visiblity" button'}),`
`,e.jsxs(t.p,{children:[`For password fields, or other secret fields, you can compose an input with a
button to toggle visibility. Under the hood, the `,e.jsx(t.code,{children:"TextFieldVisibilityButton"}),`
leverages the `,e.jsx(t.code,{children:"slot"}),` pattern from React Aria.
`,e.jsx(t.a,{href:"https://react-spectrum.adobe.com/react-aria/advanced.html#slots",rel:"nofollow",children:"(documentation)"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Due to the fact that a html ",e.jsx(t.code,{children:"<input>"}),` doesn't support any child
elements, the button is rendered as a sibling to the input, and wrapped with a
`,e.jsx(t.code,{children:"Group"})," component. In this scenario, the ",e.jsx(t.code,{children:"Input"})," can be passed ",e.jsx(t.code,{children:"unstyled"}),` to
remove the border and related styles.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," This implementation uses the ",e.jsx(t.code,{children:"password"}),` type for the input to leverage
native masking of the value, meaning password managers will pick this up as a
password field.`]}),`
`,e.jsx(o,{sourceState:"shown",of:j}),`
`,e.jsx(t.h3,{id:"adding-a-tooltip",children:"Adding a tooltip"}),`
`,e.jsxs(t.p,{children:[`A common UI pattern is to provide additional information about a field, such as
formatting requirements or examples. This can be done by adding a `,e.jsx(t.code,{children:"Tooltip"}),`
component to the label.`]}),`
`,e.jsx(o,{sourceState:"shown",of:f}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:i})]})}function me(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{me as default};
