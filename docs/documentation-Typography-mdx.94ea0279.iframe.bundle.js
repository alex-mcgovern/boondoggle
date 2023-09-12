"use strict";(self.webpackChunk_alex_mcgovern_boondoggle_design=self.webpackChunk_alex_mcgovern_boondoggle_design||[]).push([[553],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./documentation/Typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./mocks/LOREM.mock.ts"),_src_components_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/box/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Documentation/Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h1",children:["H1 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h2",children:["H2 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h3",children:["H3 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h4",children:["H4 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h5",children:["H5 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"h6",children:["H6 ",_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_5__.m.text_xxs]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_box__WEBPACK_IMPORTED_MODULE_4__.x,{as:"p",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque libero\nassumenda et! Porro consequuntur ipsum ab omnis voluptatibus mollitia repellendus\nnecessitatibus, maiores ipsa nulla quod unde consectetur eligendi iusto!"})})]})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./mocks/LOREM.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>LOREM});const LOREM={button:"Do the thing",dateFormatted:"02/06/1993",dateISO:"1993-02-06T00:00:00.000Z",email:()=>"john.smith@email.com",errorMessage:suffix=>"Error ipsum"+(suffix?`-${suffix}`:""),id:suffix=>"lorem-ipsum"+(suffix?`-${suffix}`:""),label:suffix=>"Label ipsum"+(suffix?`-${suffix}`:""),labelDate:suffix=>"Date label"+(suffix?`-${suffix}`:""),labelDescription:suffix=>"Description label"+(suffix?`-${suffix}`:""),labelDropdown:suffix=>"Dropdown label"+(suffix?`-${suffix}`:""),labelEmail:suffix=>"Email label"+(suffix?`-${suffix}`:""),labelRadioButtons:suffix=>"Radio buttons label"+(suffix?`-${suffix}`:""),labelSlider:suffix=>"Slider label"+(suffix?`-${suffix}`:""),link:"Go to the thing",name:suffix=>"Name ipsum"+(suffix?`-${suffix}`:""),placeholder:suffix=>"Placeholder ipsum"+(suffix?`-${suffix}`:""),select:"Select a thing",text_lg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_md:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",text_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_xxs:"Lorem ipsum",title_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl."}},"./src/components/box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var _dessert_box_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@dessert-box/react/dist/dessert-box-react.esm.js"),_styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/utils/get_sprinkles.css.ts");const Box=(0,_dessert_box_react__WEBPACK_IMPORTED_MODULE_1__.dO)({atoms:_styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_0__.eD});try{Box.displayName="Box",Box.__docgenInfo={description:"Polymorphic `Box` component that allows customisation with\nVanilla Extract Sprinkles API.\n\n- https://github.com/TheMightyPenguin/dessert-box\n- https://vanilla-extract.style/documentation/packages/sprinkles/",displayName:"Box",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'"start" | "end" | "center" | "stretch" | "baseline"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:'"square" | "extraWide" | "tall" | "wide"'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'"inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "button_active" | "button_default" | "button_tint" | "focus_ring" | ... 4 more ... | "tint_default"'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'"border_active" | "border_default"'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:'"border_active" | "border_default"'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:'"border_active" | "border_default"'}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:'"50%" | "lg" | "md" | "pill" | "sm"'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:'"border_active" | "border_default"'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:'"border_active" | "border_default"'}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:'"0"'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:'"lg" | "md" | "sm"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "button_active" | "button_default" | "button_tint" | "focus_ring" | ... 4 more ... | "tint_default"'}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:'"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:'"0" | "1"'}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:'"0" | "1"'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap"'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:'"0"'}},isolation:{defaultValue:null,description:"",name:"isolation",required:!1,type:{name:'"isolate"'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"start" | "end" | "center" | "space-around" | "space-between" | "stretch"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:'"0"'}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 21 more ... | "col_12"'}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:'"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:'"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 21 more ... | "col_12"'}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:'"hidden" | "auto" | "visible" | "scroll"'}},overflowY:{defaultValue:null,description:"",name:"overflowY",required:!1,type:{name:'"hidden" | "auto" | "visible" | "scroll"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:'"0"'}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:'"right" | "left" | "center"'}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:'"none" | "line-through" | "underline"'}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:'"capitalize" | "lowercase" | "uppercase"'}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:'"0"'}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:'"normal" | "nowrap"'}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:'"1" | "-1"'}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:'"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"hidden" | "auto" | "visible" | "scroll"'}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'"start" | "end" | "center" | "stretch"'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 32 more ...; "min-content": CSSVarFunction; }, { ...; }>>'}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; ... 6 more ...; space_32: string; }, CSSVarFunction>, { ...; }>>'}},__alignItems:{defaultValue:null,description:"",name:"__alignItems",required:!1,type:{name:'{} | "start" | "end" | "center" | "stretch" | "baseline"'}},__aspectRatio:{defaultValue:null,description:"",name:"__aspectRatio",required:!1,type:{name:'{} | "square" | "extraWide" | "tall" | "wide"'}},__background:{defaultValue:null,description:"",name:"__background",required:!1,type:{name:'{} | "inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "button_active" | "button_default" | "button_tint" | "focus_ring" | ... 4 more ... | "tint_default"'}},__border:{defaultValue:null,description:"",name:"__border",required:!1,type:{name:'{} | "border_active" | "border_default"'}},__borderBottom:{defaultValue:null,description:"",name:"__borderBottom",required:!1,type:{name:'{} | "border_active" | "border_default"'}},__borderLeft:{defaultValue:null,description:"",name:"__borderLeft",required:!1,type:{name:'{} | "border_active" | "border_default"'}},__borderRadius:{defaultValue:null,description:"",name:"__borderRadius",required:!1,type:{name:'{} | "50%" | "lg" | "md" | "pill" | "sm"'}},__borderRight:{defaultValue:null,description:"",name:"__borderRight",required:!1,type:{name:'{} | "border_active" | "border_default"'}},__borderTop:{defaultValue:null,description:"",name:"__borderTop",required:!1,type:{name:'{} | "border_active" | "border_default"'}},__bottom:{defaultValue:null,description:"",name:"__bottom",required:!1,type:{name:'{} | "0"'}},__boxShadow:{defaultValue:null,description:"",name:"__boxShadow",required:!1,type:{name:'{} | "lg" | "md" | "sm"'}},__color:{defaultValue:null,description:"",name:"__color",required:!1,type:{name:'{} | "inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "button_active" | "button_default" | "button_tint" | "focus_ring" | ... 4 more ... | "tint_default"'}},__flex:{defaultValue:null,description:"",name:"__flex",required:!1,type:{name:'{} | "0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"'}},__flexGrow:{defaultValue:null,description:"",name:"__flexGrow",required:!1,type:{name:'{} | "0" | "1"'}},__flexShrink:{defaultValue:null,description:"",name:"__flexShrink",required:!1,type:{name:'{} | "0" | "1"'}},__flexWrap:{defaultValue:null,description:"",name:"__flexWrap",required:!1,type:{name:'{} | "wrap" | "nowrap"'}},__fontSize:{defaultValue:null,description:"",name:"__fontSize",required:!1,type:{name:'{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},__fontWeight:{defaultValue:null,description:"",name:"__fontWeight",required:!1,type:{name:'{} | "bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"'}},__height:{defaultValue:null,description:"",name:"__height",required:!1,type:{name:'{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},__inset:{defaultValue:null,description:"",name:"__inset",required:!1,type:{name:'{} | "0"'}},__isolation:{defaultValue:null,description:"",name:"__isolation",required:!1,type:{name:'{} | "isolate"'}},__justifyContent:{defaultValue:null,description:"",name:"__justifyContent",required:!1,type:{name:'{} | "start" | "end" | "center" | "space-around" | "space-between" | "stretch"'}},__left:{defaultValue:null,description:"",name:"__left",required:!1,type:{name:'{} | "0"'}},__lineHeight:{defaultValue:null,description:"",name:"__lineHeight",required:!1,type:{name:'{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},__margin:{defaultValue:null,description:"",name:"__margin",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__marginBottom:{defaultValue:null,description:"",name:"__marginBottom",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__marginLeft:{defaultValue:null,description:"",name:"__marginLeft",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__marginRight:{defaultValue:null,description:"",name:"__marginRight",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__marginTop:{defaultValue:null,description:"",name:"__marginTop",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__maxHeight:{defaultValue:null,description:"",name:"__maxHeight",required:!1,type:{name:'{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},__maxWidth:{defaultValue:null,description:"",name:"__maxWidth",required:!1,type:{name:'{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 21 more ... | "col_12"'}},__minHeight:{defaultValue:null,description:"",name:"__minHeight",required:!1,type:{name:'{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | ... 11 more ... | "space_32"'}},__minWidth:{defaultValue:null,description:"",name:"__minWidth",required:!1,type:{name:'{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 21 more ... | "col_12"'}},__overflowX:{defaultValue:null,description:"",name:"__overflowX",required:!1,type:{name:'{} | "hidden" | "auto" | "visible" | "scroll"'}},__overflowY:{defaultValue:null,description:"",name:"__overflowY",required:!1,type:{name:'{} | "hidden" | "auto" | "visible" | "scroll"'}},__right:{defaultValue:null,description:"",name:"__right",required:!1,type:{name:'{} | "0"'}},__textAlign:{defaultValue:null,description:"",name:"__textAlign",required:!1,type:{name:'{} | "right" | "left" | "center"'}},__textDecoration:{defaultValue:null,description:"",name:"__textDecoration",required:!1,type:{name:'{} | "none" | "line-through" | "underline"'}},__textTransform:{defaultValue:null,description:"",name:"__textTransform",required:!1,type:{name:'{} | "capitalize" | "lowercase" | "uppercase"'}},__top:{defaultValue:null,description:"",name:"__top",required:!1,type:{name:'{} | "0"'}},__whiteSpace:{defaultValue:null,description:"",name:"__whiteSpace",required:!1,type:{name:'{} | "normal" | "nowrap"'}},__zIndex:{defaultValue:null,description:"",name:"__zIndex",required:!1,type:{name:'{} | "1" | "-1"'}},__fontStyle:{defaultValue:null,description:"",name:"__fontStyle",required:!1,type:{name:'{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body_lg" | "body_md" | "body_sm" | "body_xl" | "body_xs" | "h0" | "root"'}},__marginX:{defaultValue:null,description:"",name:"__marginX",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__marginY:{defaultValue:null,description:"",name:"__marginY",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__overflow:{defaultValue:null,description:"",name:"__overflow",required:!1,type:{name:'{} | "hidden" | "auto" | "visible" | "scroll"'}},__placeItems:{defaultValue:null,description:"",name:"__placeItems",required:!1,type:{name:'{} | "start" | "end" | "center" | "stretch"'}},__display:{defaultValue:null,description:"",name:"__display",required:!1,type:{name:'{} | "table" | "none" | "flex" | "grid" | "block" | "inline" | "table-cell" | "inline-block" | "inline-flex"'}},__flexDirection:{defaultValue:null,description:"",name:"__flexDirection",required:!1,type:{name:'{} | "column" | "column-reverse" | "row" | "row-reverse"'}},__gap:{defaultValue:null,description:"",name:"__gap",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__gridTemplateColumns:{defaultValue:null,description:"",name:"__gridTemplateColumns",required:!1,type:{name:'{} | "1_2" | "1_3" | "1x" | "2_1" | "2x" | "3_1" | "3x" | "4x" | "5_7" | "5x" | "6x" | "7_5" | "7x"'}},__padding:{defaultValue:null,description:"",name:"__padding",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__paddingBottom:{defaultValue:null,description:"",name:"__paddingBottom",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__paddingLeft:{defaultValue:null,description:"",name:"__paddingLeft",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__paddingRight:{defaultValue:null,description:"",name:"__paddingRight",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__paddingTop:{defaultValue:null,description:"",name:"__paddingTop",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__position:{defaultValue:null,description:"",name:"__position",required:!1,type:{name:'{} | "absolute" | "relative" | "static" | "sticky"'}},__width:{defaultValue:null,description:"",name:"__width",required:!1,type:{name:'{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 21 more ... | "col_12"'}},__paddingX:{defaultValue:null,description:"",name:"__paddingX",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},__paddingY:{defaultValue:null,description:"",name:"__paddingY",required:!1,type:{name:'{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12" | "space_14" | "space_16" | "space_20" | "space_24" | "space_32"'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"React.ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}}}]);