import{j as t}from"./jsx-runtime-_e34SzbC.js";import{$ as R,a as H,l as _,n as E,c as T,b as g}from"./utils-QLlwGfKe.js";import{c as N}from"./focusSafely-N6uhGZIJ.js";import{r as x,R as m}from"./index-DVXBtNgz.js";import{$ as D,a as I}from"./useToggleState-C9gfZWDv.js";import{a as F,$ as j}from"./useFocusRing-DDn0T9K6.js";import{$ as C}from"./VisuallyHidden-KsiBT5-Z.js";function O(e,a,d){let{labelProps:c,inputProps:s,isSelected:n,isPressed:u,isDisabled:f,isReadOnly:i}=D(e,a,d);return{labelProps:c,inputProps:{...s,role:"switch",checked:n},isSelected:n,isPressed:u,isDisabled:f,isReadOnly:i}}const L=x.createContext(null);function M(e,a){let{inputRef:d=null,...c}=e;[e,a]=R(c,a,L);let s=H(_(d,e.inputRef!==void 0?e.inputRef:null)),n=I(e),{labelProps:u,inputProps:f,isSelected:i,isDisabled:p,isReadOnly:h,isPressed:b}=O({...E(e),children:typeof e.children=="function"?!0:e.children},n,s),{isFocused:y,isFocusVisible:v,focusProps:P}=F(),V=e.isDisabled||e.isReadOnly,{hoverProps:q,isHovered:w}=j({...e,isDisabled:V}),S=T({...e,defaultClassName:"react-aria-Switch",values:{isSelected:i,isPressed:b,isHovered:w,isFocused:y,isFocusVisible:v,isDisabled:p,isReadOnly:h,state:n}}),$=N(e);return delete $.id,m.createElement("label",{...g($,u,q,S),ref:a,slot:e.slot||void 0,"data-selected":i||void 0,"data-pressed":b||void 0,"data-hovered":w||void 0,"data-focused":y||void 0,"data-focus-visible":v||void 0,"data-disabled":p||void 0,"data-readonly":h||void 0},m.createElement(C,{elementType:"span"},m.createElement("input",{...g(f,P),ref:s})),S.children)}const W=x.forwardRef(M);function r(e){return t.jsx("span",{className:"switch-label",children:e.children})}function o(){return t.jsx("div",{className:"switch-indicator"})}function l({...e}){return t.jsx(W,{className:"switch",...e})}try{r.displayName="SwitchLabel",r.__docgenInfo={description:`Labels a switch component.

This is a separate component to allow for
the fact that a switch is not a semantic html form  element, and so can't be labelled in the same way.`,displayName:"SwitchLabel",props:{}}}catch{}try{o.displayName="SwitchIndicator",o.__docgenInfo={description:"The indicator for a switch component. This is the actual visual toggle switch UI element.",displayName:"SwitchIndicator",props:{}}}catch{}try{l.displayName="Switch",l.__docgenInfo={description:'A switch allows a user to turn a setting on or off. [Built with React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)\n\n## Install\n\n```sh\nnpm i boondoggle\n```\n\n## Usage\n\n```ts\nimport { Switch } from "boondoggle";\n```',displayName:"Switch",props:{inputRef:{defaultValue:null,description:"A ref for the HTML input element.",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement>"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the Switch's selection state changes.",name:"onChange",required:!1,type:{name:"(isSelected: boolean) => void"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},defaultSelected:{defaultValue:null,description:"Whether the Switch should be selected (uncontrolled).",name:"defaultSelected",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"Whether the Switch should be selected (controlled).",name:"isSelected",required:!1,type:{name:"boolean"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: SwitchRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: SwitchRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: SwitchRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const A={component:l,title:"Components/Switch"},U={render:e=>t.jsxs(l,{...e,children:[t.jsx(r,{children:"Low power mode"}),t.jsx(o,{})]})},z={render:e=>t.jsxs(l,{...e,children:[t.jsx(o,{}),t.jsx(r,{children:"Low power mode"})]})},Y=Object.freeze(Object.defineProperty({__proto__:null,Default:U,Reversed:z,default:A},Symbol.toStringTag,{value:"Module"}));export{U as D,z as R,l as S,Y as s};
