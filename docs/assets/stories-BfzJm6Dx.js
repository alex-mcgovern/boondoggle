import{j as n}from"./jsx-runtime-_e34SzbC.js";import{$ as Z,a as A,b as L,c as U}from"./useDateFormatter-D4e0yEgx.js";import{r as c,R as I}from"./index-DVXBtNgz.js";import{a as K}from"./Button-CCYCZxsW.js";import{$ as z,C as G}from"./index-B9jIfSlk.js";import{b as O,a as J,$ as Q,p as X,o as Y,k as ee,d as ae,n as te}from"./utils-DJbZa_IK.js";import{$ as le,a as ne,b as ie,c as re,d as oe,e as B,f as de,g as se,D as E}from"./index-C9hZ_4Dw.js";import{c as ue,d as ce,e as fe,a as me}from"./Dialog-PMfATrcZ.js";import{a as he,$ as pe}from"./FieldError-DztlAQZG.js";import{$ as be}from"./Form-BnTBccM9.js";import{a as ve}from"./Group-64kkNqPz.js";import{a as ye}from"./Label-Dze1OFf_.js";import{a as ge}from"./Text-Dje1MlzB.js";import{c as _,$ as $e}from"./focusSafely-BjFYYYEp.js";import{$ as Ve}from"./useResizeObserver-B8nJL-Cs.js";import{a as De,d as Pe,$ as qe}from"./useField-necAhpoZ.js";import{a as xe}from"./OverlayArrow-Cysrqfca.js";import{$ as Ce}from"./useControlledState-DO5k2rCg.js";import{b as we}from"./FocusScope-BWCvgq0Q.js";import{$ as Te}from"./useDescription-DbzbvyyX.js";import{$ as Fe}from"./context-bfltU5m3.js";import{$ as ke}from"./useLocalizedStringFormatter-JAxdz5_z.js";import{a as Se}from"./useFocusRing-ONODwrZO.js";import{u as Oe,a as Re}from"./index.esm-oJwJgW9d.js";import{F as Ie}from"./index-DtvM2cex.js";import{I as Be}from"./index-DiMb0VE6.js";import{P as We}from"./index-DZha8g2Z.js";import{G as M}from"./index-Be1YUZoi.js";import{L as H}from"./index-qNk3i0w2.js";function Ee(e){return e&&e.__esModule?e.default:e}function _e(e,t,a){let d=O(),s=O(),i=O(),l=ke(Ee(ie),"@react-aria/datepicker"),{isInvalid:r,validationErrors:m,validationDetails:f}=t.displayValidation,{labelProps:p,fieldProps:o,descriptionProps:b,errorMessageProps:v}=De({...e,labelElementType:"span",isInvalid:r,errorMessage:e.errorMessage||m}),x=le(t,a),y=o["aria-labelledby"]||o.id,{locale:D}=Fe(),P=t.formatValue(D,{month:"long"}),C=P?l.format("selectedDateDescription",{date:P}):"",g=Te(C),q=[g["aria-describedby"],o["aria-describedby"]].filter(Boolean).join(" ")||void 0,$=_(e),w=c.useMemo(()=>we(a),[a]),{focusWithinProps:T}=$e({...e,isDisabled:t.isOpen,onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:J($,x,o,g,T,{role:"group","aria-disabled":e.isDisabled||null,"aria-labelledby":y,"aria-describedby":q,onKeyDown(h){t.isOpen||e.onKeyDown&&e.onKeyDown(h)},onKeyUp(h){t.isOpen||e.onKeyUp&&e.onKeyUp(h)}}),labelProps:{...p,onClick:()=>{w.focusFirst()}},fieldProps:{...o,id:i,[ne]:"presentation","aria-describedby":q,value:t.value,onChange:t.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[Pe]:t,autoFocus:e.autoFocus,name:e.name},descriptionProps:b,errorMessageProps:v,buttonProps:{...g,id:d,"aria-haspopup":"dialog","aria-label":l.format("calendar"),"aria-labelledby":`${d} ${y}`,"aria-describedby":q,"aria-expanded":t.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>t.setOpen(!0)},dialogProps:{id:s,"aria-labelledby":`${d} ${y}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,isInvalid:t.isInvalid,errorMessage:typeof e.errorMessage=="function"?e.errorMessage(t.displayValidation):e.errorMessage||t.displayValidation.validationErrors.join(" ")},isInvalid:r,validationErrors:m,validationDetails:f}}function Me(e){let t=xe(e),[a,d]=Ce(e.value,e.defaultValue||null,e.onChange),s=a||e.placeholderValue,[i,l]=re(s,e.granularity),r=a!=null?a.toDate(l??"UTC"):null,m=i==="hour"||i==="minute"||i==="second";var f;let p=(f=e.shouldCloseOnSelect)!==null&&f!==void 0?f:!0,[o,b]=c.useState(null),[v,x]=c.useState(null);if(a&&(o=a,"hour"in a&&(v=a)),s&&!(i in s))throw new Error("Invalid granularity "+i+" for value "+s.toString());let y=(a==null?void 0:a.calendar.identifier)==="gregory"&&a.era==="BC",D=c.useMemo(()=>({granularity:i,timeZone:l,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:y}),[i,e.hourCycle,e.shouldForceLeadingZeros,l,e.hideTimeZone,y]),{minValue:P,maxValue:C,isDateUnavailable:g}=e,q=c.useMemo(()=>oe(a,P,C,g,D),[a,P,C,g,D]),$=qe({...e,value:a,builtinValidation:q}),w=$.displayValidation.isInvalid,T=e.validationState||(w?"invalid":null),h=(u,V)=>{d("timeZone"in V?V.set(A(u)):L(u,V)),b(null),x(null),$.commitValidation()};return{...$,value:a,setValue:d,dateValue:o,timeValue:v,setDateValue:u=>{let V=typeof p=="function"?p():p;m?v||V?h(u,v||B(e.placeholderValue)):b(u):(d(u),$.commitValidation()),V&&t.setOpen(!1)},setTimeValue:u=>{o&&u?h(o,u):x(u)},granularity:i,hasTime:m,...t,setOpen(u){!u&&!a&&o&&m&&h(o,v||B(e.placeholderValue)),t.setOpen(u)},validationState:T,isInvalid:w,formatValue(u,V){if(!r)return"";let N=de(V,D);return new Z(u,N).format(r)}}}const He=c.createContext(null),je=c.createContext(null);function Ne(e,t){[e,t]=Q(e,t,He);let{validationBehavior:a}=X(be)||{};var d,s;let i=(s=(d=e.validationBehavior)!==null&&d!==void 0?d:a)!==null&&s!==void 0?s:"native",l=Me({...e,validationBehavior:i}),r=c.useRef(null),[m,f]=Y(),{groupProps:p,labelProps:o,fieldProps:b,buttonProps:v,dialogProps:x,calendarProps:y,descriptionProps:D,errorMessageProps:P,...C}=_e({...ee(e),label:f,validationBehavior:i},l,r),[g,q]=c.useState(null),$=c.useCallback(()=>{r.current&&q(r.current.offsetWidth+"px")},[]);Ve({ref:r,onResize:$});let{focusProps:w,isFocused:T,isFocusVisible:h}=Se({within:!0}),R=ae({...e,values:{state:l,isFocusWithin:T,isFocusVisible:h,isDisabled:e.isDisabled||!1,isInvalid:l.isInvalid,isOpen:l.isOpen},defaultClassName:"react-aria-DatePicker"}),S=_(e);return delete S.id,I.createElement(te,{values:[[je,l],[ve,{...p,ref:r,isInvalid:l.isInvalid}],[se,b],[K,{...v,isPressed:l.isOpen}],[ye,{...o,ref:m,elementType:"span"}],[z,y],[ue,l],[ce,{trigger:"DatePicker",triggerRef:r,placement:"bottom start",style:{"--trigger-width":g}}],[fe,x],[ge,{slots:{description:D,errorMessage:P}}],[he,C]]},I.createElement("div",{...w,...S,...R,ref:t,slot:e.slot||void 0,"data-focus-within":T||void 0,"data-invalid":l.isInvalid||void 0,"data-focus-visible":h||void 0,"data-disabled":e.isDisabled||void 0,"data-open":l.isOpen||void 0}))}const Ze=c.forwardRef(Ne);var j={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",a="calendar",d=448,s=512,i=[128197,128198],l="f133",r="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z";e.definition={prefix:t,iconName:a,icon:[d,s,i,l,r]},e.faCalendar=e.definition,e.prefix=t,e.iconName=a,e.width=d,e.height=s,e.ligatures=i,e.unicode=l,e.svgPathData=r,e.aliases=i})(j);function F(){return n.jsx(Ie,{children:n.jsx(Be,{icon:j.faCalendar})})}const k=c.forwardRef((e,t)=>n.jsx(Ze,{...e,ref:t,children:a=>n.jsxs(n.Fragment,{children:[typeof e.children=="function"?e.children(a):e.children,n.jsx(We,{className:"p2",placement:"bottom end",children:n.jsx(me,{children:n.jsx(G,{})})})]})}));function W({children:e,defaultValue:t,...a}){if(!a.name)throw new Error("FormDatePicker requires a name prop");const{control:d}=Oe(),{field:{disabled:s,onChange:i,ref:l,value:r,...m},fieldState:{error:f,invalid:p}}=Re({control:d,defaultValue:t,disabled:a.isDisabled,name:a.name});return n.jsx(k,{...a,...m,isDisabled:s,isInvalid:p,onChange:o=>{var b;i(o),(b=a.onChange)==null||b.call(a,o)},ref:l,validationBehavior:"aria",value:r,children:()=>n.jsxs(n.Fragment,{children:[e,n.jsx(pe,{children:f==null?void 0:f.message})]})})}try{F.displayName="DatePickerButton",F.__docgenInfo={description:"Button for triggering the DatePicker.",displayName:"DatePickerButton",props:{}}}catch{}try{W.displayName="FormDatePicker",W.__docgenInfo={description:"A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.\n\n[React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)",displayName:"FormDatePicker",props:{onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: CalendarDate | ZonedDateTime) => true | ValidationError"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"PageBehavior"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: CalendarDate | ZonedDateTime) => void"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"12 | 24"}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"Granularity"}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:'"native" | "aria"'}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{k.displayName="DatePicker",k.__docgenInfo={description:`A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
[Built with React Aria DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html)

## Install

\`\`\`sh
npm i boondoggle
\`\`\`

## Usage

\`\`\`ts
import { DatePicker, DatePickerButton } from "boondoggle";
\`\`\``,displayName:"DatePicker",props:{onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: CalendarDate | ZonedDateTime) => true | ValidationError"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"PageBehavior"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: CalendarDate | ZonedDateTime) => void"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"CalendarDate | ZonedDateTime"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"12 | 24"}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"Granularity"}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:'"native" | "aria"'}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}const Ae={component:k,title:"Components/DatePicker"},Le={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(H,{children:"Date/time"}),n.jsxs(M,{children:[n.jsx(E,{unstyled:!0}),n.jsx(F,{})]})]})}},Ue={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(H,{children:"Date/time"}),n.jsxs(M,{children:[n.jsx(E,{unstyled:!0}),n.jsx(F,{})]})]}),defaultValue:U(new Date().toISOString())}},Pa=Object.freeze(Object.defineProperty({__proto__:null,Default:Le,WithTime:Ue,default:Ae},Symbol.toStringTag,{value:"Module"}));export{k as D,Le as a,Pa as s};
