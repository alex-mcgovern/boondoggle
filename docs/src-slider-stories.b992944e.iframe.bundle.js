"use strict";(self.webpackChunkboondoggle=self.webpackChunkboondoggle||[]).push([[6959],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@fortawesome/pro-solid-svg-icons/faCircleExclamation.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});var aliases=["exclamation-circle"],svgPathData="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z";exports.definition={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,aliases,"f06a",svgPathData]},exports.faCircleExclamation=exports.definition,exports.prefix="fas",exports.iconName="circle-exclamation",exports.width=512,exports.height=512,exports.ligatures=aliases,exports.unicode="f06a",exports.svgPathData=svgPathData,exports.aliases=aliases},"./node_modules/@fortawesome/pro-solid-svg-icons/faCircleInfo.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});var aliases=["info-circle"],svgPathData="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";exports.definition={prefix:"fas",iconName:"circle-info",icon:[512,512,aliases,"f05a",svgPathData]},exports.faCircleInfo=exports.definition,exports.prefix="fas",exports.iconName="circle-info",exports.width=512,exports.height=512,exports.ligatures=aliases,exports.unicode="f05a",exports.svgPathData=svgPathData,exports.aliases=aliases},"./node_modules/@fortawesome/pro-solid-svg-icons/faExclamationCircle.js":(__unused_webpack_module,exports,__webpack_require__)=>{var source=__webpack_require__("./node_modules/@fortawesome/pro-solid-svg-icons/faCircleExclamation.js");exports.DF={prefix:source.prefix,iconName:source.iconName,icon:[source.width,source.height,source.aliases,source.unicode,source.svgPathData]},exports.RL=exports.DF,source.prefix,source.iconName,source.width,source.height,source.aliases,source.unicode,source.svgPathData,source.aliases},"./node_modules/@fortawesome/pro-solid-svg-icons/faInfoCircle.js":(__unused_webpack_module,exports,__webpack_require__)=>{var source=__webpack_require__("./node_modules/@fortawesome/pro-solid-svg-icons/faCircleInfo.js");exports.DF={prefix:source.prefix,iconName:source.iconName,icon:[source.width,source.height,source.aliases,source.unicode,source.svgPathData]},exports.sq=exports.DF,source.prefix,source.iconName,source.width,source.height,source.aliases,source.unicode,source.svgPathData,source.aliases},"./mocks/LOREM.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>LOREM});const LOREM={button:"Do the thing",dateFormatted:"02/06/1993",dateISO:"1993-02-06T00:00:00.000Z",email:()=>"john.smith@email.com",errorMessage:suffix=>"Error ipsum"+(suffix?`-${suffix}`:""),id:suffix=>"lorem-ipsum"+(suffix?`-${suffix}`:""),label:suffix=>"Label ipsum"+(suffix?`-${suffix}`:""),labelDate:suffix=>"Date label"+(suffix?`-${suffix}`:""),labelDescription:suffix=>"Description label"+(suffix?`-${suffix}`:""),labelDropdown:suffix=>"Dropdown label"+(suffix?`-${suffix}`:""),labelEmail:suffix=>"Email label"+(suffix?`-${suffix}`:""),labelRadioButtons:suffix=>"Radio buttons label"+(suffix?`-${suffix}`:""),labelSlider:suffix=>"Slider label"+(suffix?`-${suffix}`:""),link:"Go to the thing",name:suffix=>"element"+(suffix?`-${suffix}`:""),placeholder:suffix=>"Placeholder ipsum"+(suffix?`-${suffix}`:""),select:"Select a thing",text_lg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_md:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",text_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_xxs:"Lorem ipsum",title_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl."}},"./src/field-error-message/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>FieldErrorMessage});var _fortawesome_pro_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fortawesome/pro-solid-svg-icons/faExclamationCircle.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/box/index.tsx"),_index_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.css.ts"),_v2_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/v2-icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FieldErrorMessage({className:userClassName,message,...rest}){return message&&message?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_0__.x,{alignItems:"center",className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(userClassName,_index_css__WEBPACK_IMPORTED_MODULE_1__.gx.red),color:"text_low_contrast",display:"flex",fontStyle:"bodySm",gap:"space_1",marginY:"space_1",role:"alert",...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_v2_icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:_fortawesome_pro_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_5__.RL}),message]}):null}try{FieldErrorMessage.displayName="FieldErrorMessage",FieldErrorMessage.__docgenInfo={description:"Renders an inline error message for a form field.",displayName:"FieldErrorMessage",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:'"square" | "extraWide" | "tall" | "wide"'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'"inherit" | "background" | "black" | "transparent" | "white" | "text_low_contrast" | "text_high_contrast" | "backdrop" | "border_rule" | "border_element" | "border_element_active" | ... 7 more ... | "focus_ring"'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:'"50%" | "lg" | "md" | "pill" | "sm"'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'"0"'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:'"lg" | "md" | "sm"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"inherit" | "background" | "black" | "white" | "currentColor" | "text_low_contrast" | "text_high_contrast" | "backdrop" | "border_rule" | "border_element" | "border_element_active" | ... 7 more ... | "focus_ring"'}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:'"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'"0" | "1"'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'"0" | "1"'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"nowrap" | "wrap"'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'"0"'}},isolation:{defaultValue:null,description:"",name:"isolation",required:!1,type:{name:'"isolate"'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"space-around" | "space-between" | "stretch" | "center" | "end" | "start"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'"0"'}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 7 more ... | "main_sm"'}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 7 more ... | "main_sm"'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'"0"'}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'"left" | "right" | "center"'}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"string"}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:'"none" | "line-through" | "underline"'}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:'"capitalize" | "lowercase" | "uppercase"'}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'"0"'}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:'"normal" | "nowrap"'}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:'"1" | "-1"'}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'"stretch" | "center" | "end" | "start"'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 18 more ...; "min-content": CSSVarFunction; }, { ...; }>>'}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},message:{defaultValue:null,description:"The error message shown to the user.",name:"message",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/field-error-message/index.tsx#FieldErrorMessage"]={docgenInfo:FieldErrorMessage.__docgenInfo,name:"FieldErrorMessage",path:"src/field-error-message/index.tsx#FieldErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/field-label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FieldLabel});var _fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fortawesome/pro-solid-svg-icons/faInfoCircle.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/box/index.tsx"),_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tooltip/index.tsx"),_v2_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/v2-icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FieldLabel({htmlFor,isLabelVisible=!0,label,labelTooltip,...rest}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_box__WEBPACK_IMPORTED_MODULE_0__.x,{alignItems:"center",as:"label",color:"text_low_contrast",display:!0===isLabelVisible?"flex":"none",fontSize:"bodyMd",fontWeight:"normal",gap:"space_1",htmlFor,marginBottom:"space_1",...rest,children:[label,labelTooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tooltip__WEBPACK_IMPORTED_MODULE_1__.u,{placement:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_1__.aJ,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_v2_icon__WEBPACK_IMPORTED_MODULE_2__.J,{color:"text_low_contrast",icon:_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_4__.sq})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_1__._v,{children:labelTooltip})]})]})}FieldLabel.displayName="FieldLabel";try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"HTML label element for use with a form field or other labelled element.",displayName:"FieldLabel",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:'"stretch" | "center" | "end" | "start" | "baseline"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:'"square" | "extraWide" | "tall" | "wide"'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'"inherit" | "background" | "black" | "transparent" | "white" | "text_low_contrast" | "text_high_contrast" | "backdrop" | "border_rule" | "border_element" | "border_element_active" | ... 7 more ... | "focus_ring"'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:'"border_rule" | "border_element" | "border_element_active"'}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:'"50%" | "lg" | "md" | "pill" | "sm"'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'"0"'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:'"lg" | "md" | "sm"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"inherit" | "background" | "black" | "white" | "currentColor" | "text_low_contrast" | "text_high_contrast" | "backdrop" | "border_rule" | "border_element" | "border_element_active" | ... 7 more ... | "focus_ring"'}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:'"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'"0" | "1"'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'"0" | "1"'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"nowrap" | "wrap"'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'"0"'}},isolation:{defaultValue:null,description:"",name:"isolation",required:!1,type:{name:'"isolate"'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"space-around" | "space-between" | "stretch" | "center" | "end" | "start"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'"0"'}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 7 more ... | "main_sm"'}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25dvh" | "50dvh" | "75%" | "75dvh" | "90dvh" | "100%" | "100dvh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"'}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 7 more ... | "main_sm"'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'"0"'}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'"left" | "right" | "center"'}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"string"}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:'"none" | "line-through" | "underline"'}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:'"capitalize" | "lowercase" | "uppercase"'}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'"0"'}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:'"normal" | "nowrap"'}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:'"1" | "-1"'}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:'"bodyLg" | "bodyMd" | "bodySm" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "root"'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"auto" | "hidden" | "visible" | "scroll"'}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'"stretch" | "center" | "end" | "start"'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 18 more ...; "min-content": CSSVarFunction; }, { ...; }>>'}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>'}},htmlFor:{defaultValue:null,description:"The `id` of the element being labelled.",name:"htmlFor",required:!0,type:{name:"string"}},isLabelVisible:{defaultValue:{value:"true"},description:"Whether the label should be visible.",name:"isLabelVisible",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The string to use as the label.",name:"label",required:!0,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"The string to render when the user hovers on the tooltip trigger for this element.",name:"labelTooltip",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/field-label/index.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"src/field-label/index.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/slider/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/slider/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={args:{name:__webpack_require__("./mocks/LOREM.mock.ts").m.name()},component:___WEBPACK_IMPORTED_MODULE_0__.i,title:"Components/V1/Slider"},Default={}},'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/slot-wrapper/styles.css.ts.vanilla.css","source":"LnN0eWxlc19zbG90Q1NTX19samk5eHUxIHsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_slotCSS__lji9xu1 {\n  pointer-events: none;\n}","",{version:3,sources:["webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js"],names:[],mappings:"AAAA;EACE,oBAAoB;AACtB",sourcesContent:[".styles_slotCSS__lji9xu1 {\n  pointer-events: none;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);