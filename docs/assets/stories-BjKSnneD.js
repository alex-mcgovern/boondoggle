import{j as n}from"./jsx-runtime-_e34SzbC.js";import{c as a}from"./clsx-B-dksMZM.js";import{$ as l}from"./Link-BVd7meNa.js";function t(e){return n.jsx(l,{...e,className:a(e.className,"text-link")})}try{t.displayName="TextLink",t.__docgenInfo={description:'A link allows a user to navigate to another page or resource within a web page or application. [Built with React Aria](https://react-spectrum.adobe.com/react-aria/Link.html)\n\n## Install\n\n```sh\nnpm i boondoggle\n```\n\n## Usage\n\n```ts\nimport { Link } from "boondoggle";\n```',displayName:"TextLink",props:{isDisabled:{defaultValue:null,description:"Whether the link is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!1,type:{name:"(e: PressEvent) => void"}},onPressStart:{defaultValue:null,description:"Handler that is called when a press interaction starts.",name:"onPressStart",required:!1,type:{name:"(e: PressEvent) => void"}},onPressEnd:{defaultValue:null,description:`Handler that is called when a press interaction ends, either
over the target or when the pointer leaves the target.`,name:"onPressEnd",required:!1,type:{name:"(e: PressEvent) => void"}},onPressChange:{defaultValue:null,description:"Handler that is called when the press state changes.",name:"onPressChange",required:!1,type:{name:"(isPressed: boolean) => void"}},onPressUp:{defaultValue:null,description:`Handler that is called when a press is released over the target, regardless of
whether it started on the target or not.`,name:"onPressUp",required:!1,type:{name:"(e: PressEvent) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},hrefLang:{defaultValue:null,description:"Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).",name:"hrefLang",required:!1,type:{name:"string"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"HTMLAttributeReferrerPolicy"}},routerOptions:{defaultValue:null,description:"Options for the configured client side router.",name:"routerOptions",required:!1,type:{name:"never"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: LinkRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: LinkRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: LinkRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const r={args:{},component:t,title:"Components/TextLink"},o={args:{children:"Click me",href:"/?path=/docs/components-textlink--docs"}},u=Object.freeze(Object.defineProperty({__proto__:null,Default:o,default:r},Symbol.toStringTag,{value:"Module"}));export{o as D,t as T,u as s};
