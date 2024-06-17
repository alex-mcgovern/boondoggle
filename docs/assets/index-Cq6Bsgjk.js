import{j as b}from"./jsx-runtime-_e34SzbC.js";import{f as L}from"./faAnglesUpDown-C7hgz2VU.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as h,R as u}from"./index-DVXBtNgz.js";import{a as j,$ as z}from"./Button-B4zfvGBi.js";import{n as G,o as J,h as Q}from"./SelectionManager-CGmekqre.js";import{b as R,e as X,o as Y,$ as N,r as A,q as Z,n as ee,c as M,s as te,k as H}from"./utils-QLlwGfKe.js";import{a as ae}from"./FieldError-RByZL9Bv.js";import{$ as le}from"./Form-BnTBccM9.js";import{$ as ne}from"./intlStrings-BDKHkSgr.js";import{a as ie}from"./Label-BuSsJeIu.js";import{$ as re,a as oe,L as se}from"./index-PdRueoqb.js";import{c as de,j as ue}from"./Dialog-Bdg8D4i-.js";import{a as O}from"./Text-Bv8JiQ2q.js";import{c as I,g as ce,i as me}from"./focusSafely-N6uhGZIJ.js";import{$ as fe}from"./useResizeObserver-B8nJL-Cs.js";import{a as pe,b as he,$ as be}from"./useField-BcuuhgyM.js";import{a as ye}from"./OverlayArrow-C7u8HHrZ.js";import{$ as ve}from"./useSingleSelectListState-Bxftuc_K.js";import{a as ge}from"./useFocusRing-DDn0T9K6.js";import{$ as $e}from"./ListKeyboardDelegate-xBcl24u2.js";import{$ as qe}from"./useCollator-DFL7MZQz.js";import{$ as Ve}from"./useMenuTrigger-wQBszpYy.js";import{$ as Se}from"./useFormReset-Ez7gb77e.js";import{a as xe}from"./VisuallyHidden-KsiBT5-Z.js";import{$ as we}from"./useLocalizedStringFormatter-wEL_tslA.js";import{u as Pe,a as Fe}from"./index.esm-L49qWB8P.js";import{F as Ke}from"./index-CtECsIbV.js";import{I as Ee}from"./index-aWqW-nqu.js";import{P as Te}from"./index-BMSSM7Ln.js";const W=new WeakMap;function Ce(e,t,o){let{keyboardDelegate:n,isDisabled:l,isRequired:c,name:s,validationBehavior:d="aria"}=e,a=qe({usage:"search",sensitivity:"base"}),i=h.useMemo(()=>n||new $e(t.collection,t.disabledKeys,null,a),[n,t.collection,t.disabledKeys,a]),{menuTriggerProps:m,menuProps:r}=Ve({isDisabled:l,type:"listbox"},t,o),f=p=>{switch(p.key){case"ArrowLeft":{p.preventDefault();let g=t.selectedKey!=null?i.getKeyAbove(t.selectedKey):i.getFirstKey();g&&t.setSelectedKey(g);break}case"ArrowRight":{p.preventDefault();let g=t.selectedKey!=null?i.getKeyBelow(t.selectedKey):i.getFirstKey();g&&t.setSelectedKey(g);break}}},{typeSelectProps:v}=G({keyboardDelegate:i,selectionManager:t.selectionManager,onTypeSelect(p){t.setSelectedKey(p)}}),{isInvalid:V,validationErrors:S,validationDetails:P}=t.displayValidation,{labelProps:F,fieldProps:q,descriptionProps:K,errorMessageProps:$}=pe({...e,labelElementType:"span",isInvalid:V,errorMessage:e.errorMessage||S});v.onKeyDown=v.onKeyDownCapture,delete v.onKeyDownCapture;let E=I(e,{labelable:!0}),y=R(v,m,q),x=X();return W.set(t,{isDisabled:l,isRequired:c,name:s,validationBehavior:d}),{labelProps:{...F,onClick:()=>{e.isDisabled||(o.current.focus(),ce("keyboard"))}},triggerProps:R(E,{...y,isDisabled:l,onKeyDown:Y(y.onKeyDown,f,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[x,y["aria-labelledby"],y["aria-label"]&&!y["aria-labelledby"]?y.id:null].filter(Boolean).join(" "),onFocus(p){t.isFocused||(e.onFocus&&e.onFocus(p),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(p){t.isOpen||(e.onBlur&&e.onBlur(p),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:x},menuProps:{...r,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:p=>{p.currentTarget.contains(p.relatedTarget)||(e.onBlur&&e.onBlur(p),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[q["aria-labelledby"],y["aria-label"]&&!q["aria-labelledby"]?y.id:null].filter(Boolean).join(" ")},descriptionProps:K,errorMessageProps:$,isInvalid:V,validationErrors:S,validationDetails:P}}function Ie(e,t,o){let n=W.get(t)||{},{autoComplete:l,name:c=n.name,isDisabled:s=n.isDisabled}=e,{validationBehavior:d,isRequired:a}=n,i=me(),{visuallyHiddenProps:m}=xe();Se(e.selectRef,t.selectedKey,t.setSelectedKey),he({validationBehavior:d,focus:()=>o.current.focus()},t,e.selectRef);var r;return{containerProps:{...m,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{type:"text",tabIndex:i==null||t.isFocused||t.isOpen?-1:0,style:{fontSize:16},onFocus:()=>o.current.focus(),disabled:s},selectProps:{tabIndex:-1,autoComplete:l,disabled:s,required:d==="native"&&a,name:c,value:(r=t.selectedKey)!==null&&r!==void 0?r:"",onChange:f=>t.setSelectedKey(f.target.value)}}}function De(e){let{state:t,triggerRef:o,label:n,name:l,isDisabled:c}=e,s=h.useRef(null),{containerProps:d,inputProps:a,selectProps:i}=Ie({...e,selectRef:s},t,o);var m;return t.collection.size<=300?u.createElement("div",{...d,"data-testid":"hidden-select-container"},u.createElement("input",a),u.createElement("label",null,n,u.createElement("select",{...i,ref:s},u.createElement("option",null),[...t.collection.getKeys()].map(r=>{let f=t.collection.getItem(r);if(f.type==="item")return u.createElement("option",{key:f.key,value:f.key},f.textValue)})))):l?u.createElement("input",{type:"hidden",autoComplete:i.autoComplete,name:l,disabled:c,value:(m=t.selectedKey)!==null&&m!==void 0?m:""}):null}function Re(e){let t=ye(e),[o,n]=h.useState(null),l=ve({...e,onSelectionChange:a=>{e.onSelectionChange!=null&&e.onSelectionChange(a),t.close(),c.commitValidation()}}),c=be({...e,value:l.selectedKey}),[s,d]=h.useState(!1);return{...c,...l,...t,focusStrategy:o,open(a=null){l.collection.size!==0&&(n(a),t.open())},toggle(a=null){l.collection.size!==0&&(n(a),t.toggle())},isFocused:s,setFocused:d}}function He(e){return e&&e.__esModule?e.default:e}const w=h.createContext(null),T=h.createContext(null);function Be(e,t){[e,t]=N(e,t,w);let{validationBehavior:o}=A(le)||{};var n,l;let c=(l=(n=e.validationBehavior)!==null&&n!==void 0?n:o)!==null&&l!==void 0?l:"native",{collection:s,document:d}=J(),a=Re({...e,collection:s,children:void 0,validationBehavior:c}),{isFocusVisible:i,focusProps:m}=ge({within:!0}),r=h.useRef(null),[f,v]=Z(),{labelProps:V,triggerProps:S,valueProps:P,menuProps:F,descriptionProps:q,errorMessageProps:K,...$}=Ce({...ee(e),label:v,validationBehavior:c},a,r),[E,y]=h.useState(null),x=h.useCallback(()=>{r.current&&y(r.current.offsetWidth+"px")},[r]);fe({ref:r,onResize:x});let p=h.useMemo(()=>({isOpen:a.isOpen,isFocused:a.isFocused,isFocusVisible:i,isDisabled:e.isDisabled||!1,isInvalid:$.isInvalid||!1,isRequired:e.isRequired||!1}),[a.isOpen,a.isFocused,i,e.isDisabled,$.isInvalid,e.isRequired]),g=M({...e,values:p,defaultClassName:"react-aria-Select"}),D=I(e);return delete D.id,u.createElement(u.Fragment,null,u.createElement(te,null,u.createElement(H,{values:[[w,e],[T,a],[Q,d]]},g.children)),u.createElement(H,{values:[[w,e],[T,a],[U,P],[ie,{...V,ref:f,elementType:"span"}],[j,{...S,ref:r,isPressed:a.isOpen}],[de,a],[ue,{trigger:"Select",triggerRef:r,placement:"bottom start",style:{"--trigger-width":E}}],[re,F],[oe,a],[O,{slots:{description:q,errorMessage:K}}],[ae,$]]},u.createElement("div",{...D,...g,...m,ref:t,slot:e.slot||void 0,"data-focused":a.isFocused||void 0,"data-focus-visible":i||void 0,"data-open":a.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":$.isInvalid||void 0,"data-required":e.isRequired||void 0}),u.createElement(De,{state:a,triggerRef:r,label:v,name:e.name,isDisabled:e.isDisabled})))}const ke=h.forwardRef(Be),U=h.createContext(null);function _e(e,t){var o,n;[e,t]=N(e,t,U);let l=h.useContext(T),{placeholder:c}=A(w),s=l.selectedKey!=null?l.collection.getItem(l.selectedKey):null,d=s==null?void 0:s.rendered;typeof d=="function"&&(d=d({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"}));let a=we(He(ne),"react-aria-components");var i,m;let r=M({...e,defaultChildren:d||c||a.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(i=(o=l.selectedItem)===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,selectedText:(m=(n=l.selectedItem)===null||n===void 0?void 0:n.textValue)!==null&&m!==void 0?m:null,isPlaceholder:!s}}),f=I(e);return u.createElement("span",{ref:t,...f,...r,"data-placeholder":!s||void 0},u.createElement(O.Provider,{value:void 0},r.children))}const Ne=h.forwardRef(_e);function B({variant:e="default",...t}){return b.jsxs(z,{...t,className:_(t.className,"select-button",e),children:[b.jsx(Ne,{className:"select-value"}),b.jsx(Ee,{className:"select-icon",icon:L.faAnglesUpDown})]})}const C=h.forwardRef(({children:e,...t},o)=>b.jsx(ke,{...t,className:_(t.className,"select"),ref:o,children:n=>b.jsxs(b.Fragment,{children:[typeof e=="function"?e(n):e,b.jsx(Te,{placement:t.placement,children:b.jsx(se,{items:t.items})})]})}));function k({children:e,...t}){if(!t.name)throw new Error("FormSelect requires a name prop");const{control:o}=Pe(),{field:{disabled:n,name:l,onBlur:c,onChange:s,ref:d,value:a=""},fieldState:{error:i,invalid:m}}=Fe({control:o,defaultValue:t.selectedKey||t.defaultSelectedKey,name:t.name});return b.jsx(C,{...t,defaultSelectedKey:a,isDisabled:n,isInvalid:m,name:l,onBlur:c,onSelectionChange:r=>{var f;s(r),(f=t.onSelectionChange)==null||f.call(t,r)},ref:d,selectedKey:a,validationBehavior:"aria",children:()=>b.jsxs(b.Fragment,{children:[e,b.jsx(Ke,{children:i==null?void 0:i.message})]})})}try{B.displayName="SelectButton",B.__docgenInfo={description:"A `SelectButton` component, for use with a `Select` component. [Built with React Aria SelectButton component](https://react-spectrum.adobe.com/react-aria/Select.html#button)",displayName:"SelectButton",props:{form:{defaultValue:null,description:"The `<form>` element to associate the button with.\nThe value of this attribute must be the id of a `<form>` in the same document.",name:"form",required:!1,type:{name:"string"}},formAction:{defaultValue:null,description:`The URL that processes the information submitted by the button.
Overrides the action attribute of the button's form owner.`,name:"formAction",required:!1,type:{name:"string"}},formEncType:{defaultValue:null,description:"Indicates how to encode the form data that is submitted.",name:"formEncType",required:!1,type:{name:"string"}},formMethod:{defaultValue:null,description:"Indicates the HTTP method used to submit the form.",name:"formMethod",required:!1,type:{name:"string"}},formNoValidate:{defaultValue:null,description:"Indicates that the form is not to be validated when it is submitted.",name:"formNoValidate",required:!1,type:{name:"boolean"}},formTarget:{defaultValue:null,description:"Overrides the target attribute of the button's form owner.",name:"formTarget",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Submitted as a pair with the button's value as part of the form data.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value associated with the button's name when it's submitted with the form data.",name:"value",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the button is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!1,type:{name:"(e: PressEvent) => void"}},onPressStart:{defaultValue:null,description:"Handler that is called when a press interaction starts.",name:"onPressStart",required:!1,type:{name:"(e: PressEvent) => void"}},onPressEnd:{defaultValue:null,description:`Handler that is called when a press interaction ends, either
over the target or when the pointer leaves the target.`,name:"onPressEnd",required:!1,type:{name:"(e: PressEvent) => void"}},onPressChange:{defaultValue:null,description:"Handler that is called when the press state changes.",name:"onPressChange",required:!1,type:{name:"(isPressed: boolean) => void"}},onPressUp:{defaultValue:null,description:`Handler that is called when a press is released over the target, regardless of
whether it started on the target or not.`,name:"onPressUp",required:!1,type:{name:"(e: PressEvent) => void"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"'}},"aria-pressed":{defaultValue:null,description:'Indicates the current "pressed" state of toggle buttons.',name:"aria-pressed",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},type:{defaultValue:{value:"'button'"},description:"The behavior of the button when used in an HTML form.",name:"type",required:!1,type:{name:'"button" | "submit" | "reset"'}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ButtonRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ButtonRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ButtonRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},ref:{defaultValue:null,description:"React ref to the SelectButton element.",name:"ref",required:!1,type:{name:"ForwardedRef<HTMLButtonElement>"}},variant:{defaultValue:{value:"default"},description:'The variant of the select button.\n- `"borderless"` - A select button with no border.\n- `"default"` - A select button with a border.',name:"variant",required:!1,type:{name:'"default" | "borderless"'}}}}}catch{}try{k.displayName="FormSelect",k.__docgenInfo={description:"A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.\n\n[React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)",displayName:"FormSelect",props:{name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: SelectRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:'"native" | "aria"'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: Key) => true | ValidationError"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: SelectRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: SelectRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"(key: Key) => void"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},items:{defaultValue:null,description:"The items to display in the select popover.",name:"items",required:!0,type:{name:"Iterable<IterableListBoxItem<string>>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"The placement of the select popover.",name:"placement",required:!1,type:{name:"Placement"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{C.displayName="Select",C.__docgenInfo={description:'A select displays a collapsible list of options and allows a user to select one of them. [Built with React Aria Select component](https://react-spectrum.adobe.com/react-aria/Select.html)\n\n## Install\n\n```sh\nnpm i boondoggle\n```\n\n## Usage\n\n```ts\nimport { Select } from "boondoggle";\n```',displayName:"Select",props:{name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: SelectRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:'"native" | "aria"'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: Key) => true | ValidationError"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: SelectRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: SelectRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"(key: Key) => void"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},items:{defaultValue:null,description:"The items to display in the select popover.",name:"items",required:!0,type:{name:"Iterable<IterableListBoxItem<string>>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"The placement of the select popover.",name:"placement",required:!1,type:{name:"Placement"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}export{C as S,B as a};
