import{a as o}from"./utils-DJbZa_IK.js";import{c as C}from"./focusSafely-BjFYYYEp.js";import{$ as O}from"./useFormReset-YLDGm2ha.js";import{$ as R}from"./useFocusable-RfJY7Cc8.js";import{b as f}from"./useFocusRing-ONODwrZO.js";import{$ as I}from"./useControlledState-DO5k2rCg.js";function z(e,a,i){let{isDisabled:l=!1,isReadOnly:s=!1,value:d,name:r,children:b,"aria-label":$,"aria-labelledby":u,validationState:n="valid",isInvalid:c}=e,p=t=>{t.stopPropagation(),a.setSelected(t.target.checked)},m=b!=null,P=$!=null||u!=null;!m&&!P&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:S,isPressed:v}=f({isDisabled:l}),{pressProps:g,isPressed:y}=f({isDisabled:l||s,onPress(){a.toggle()}}),{focusableProps:h}=R(e,i),x=o(S,h),D=C(e,{labelable:!0});return O(i,a.isSelected,a.setSelected),{labelProps:o(g,{onClick:t=>t.preventDefault()}),inputProps:o(D,{"aria-invalid":c||n==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:p,disabled:l,...d==null?{}:{value:d},name:r,type:"checkbox",...x}),isSelected:a.isSelected,isPressed:v||y,isDisabled:l,isReadOnly:s,isInvalid:c||n==="invalid"}}function B(e={}){let{isReadOnly:a}=e,[i,l]=I(e.isSelected,e.defaultSelected||!1,e.onChange);function s(r){a||l(r)}function d(){a||l(!i)}return{isSelected:i,setSelected:s,toggle:d}}export{z as $,B as a};