"use strict";(self.webpackChunkboondoggle=self.webpackChunkboondoggle||[]).push([[3022],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@fortawesome/pro-solid-svg-icons/faAngleDown.js":(__unused_webpack_module,exports)=>{var aliases=[8964],svgPathData="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";exports.DF={prefix:"fas",iconName:"angle-down",icon:[448,512,aliases,"f107",svgPathData]},exports.gc=exports.DF},"./mocks/LOREM.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>LOREM});const LOREM={button:"Do the thing",dateFormatted:"02/06/1993",dateISO:"1993-02-06T00:00:00.000Z",email:()=>"john.smith@email.com",errorMessage:suffix=>"Error ipsum"+(suffix?`-${suffix}`:""),id:suffix=>"lorem-ipsum"+(suffix?`-${suffix}`:""),label:suffix=>"Label ipsum"+(suffix?`-${suffix}`:""),labelDate:suffix=>"Date label"+(suffix?`-${suffix}`:""),labelDescription:suffix=>"Description label"+(suffix?`-${suffix}`:""),labelDropdown:suffix=>"Dropdown label"+(suffix?`-${suffix}`:""),labelEmail:suffix=>"Email label"+(suffix?`-${suffix}`:""),labelRadioButtons:suffix=>"Radio buttons label"+(suffix?`-${suffix}`:""),labelSlider:suffix=>"Slider label"+(suffix?`-${suffix}`:""),link:"Go to the thing",name:suffix=>"element"+(suffix?`-${suffix}`:""),placeholder:suffix=>"Placeholder ipsum"+(suffix?`-${suffix}`:""),select:"Select a thing",text_lg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_md:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",text_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",text_xxs:"Lorem ipsum",title_xl:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl."}},"./src/collapsible/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var faAngleDown=__webpack_require__("./node_modules/@fortawesome/pro-solid-svg-icons/faAngleDown.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react.useRef)(callback);return(0,react.useEffect)((()=>{callbackRef.current=callback})),(0,react.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react.useRef)(value),handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return(0,react.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return[value1,(0,react.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react.useLayoutEffect:()=>{};function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?$6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef,children.ref):children.ref}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react.useState)(),stylesRef=(0,react.useRef)({}),prevPresentRef=(0,react.useRef)(present),prevAnimationNameRef=(0,react.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),$9f79659886946c16$export$e5c5a5f917a5871c((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),$9f79659886946c16$export$e5c5a5f917a5871c((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react.Children.only(children),ref=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence";const $1746a345f3d73bb7$var$useReactId=react_namespaceObject["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react.useState($1746a345f3d73bb7$var$useReactId());return $9f79659886946c16$export$e5c5a5f917a5871c((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}const[$409067139f391064$var$createCollapsibleContext,$409067139f391064$export$952b32dcbe73087a]=function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react.useMemo)((()=>context),Object.values(context));return(0,react.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}("Collapsible"),[$409067139f391064$var$CollapsibleProvider,$409067139f391064$var$useCollapsibleContext]=$409067139f391064$var$createCollapsibleContext("Collapsible"),$409067139f391064$export$6eb0f7ddcda6131f=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=$71cd76cc60e0454e$export$6f32135080cb4c3({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react.createElement)($409067139f391064$var$CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:$1746a345f3d73bb7$export$f680877a34711e37(),open,onOpenToggle:(0,react.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen])},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({"data-state":$409067139f391064$var$getState(open),"data-disabled":disabled?"":void 0},collapsibleProps,{ref:forwardedRef})))})),$409067139f391064$export$c135dce7b15bbbdc=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled},triggerProps,{ref:forwardedRef,onClick:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick,context.onOpenToggle)}))})),$409067139f391064$export$aadde00976f34151=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b,{present:forceMount||context.open},(({present})=>(0,react.createElement)($409067139f391064$var$CollapsibleContentImpl,(0,esm_extends.Z)({},contentProps,{ref:forwardedRef,present}))))})),$409067139f391064$var$CollapsibleContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=(0,react.useState)(present),ref=(0,react.useRef)(null),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,ref),heightRef=(0,react.useRef)(0),height=heightRef.current,widthRef=(0,react.useRef)(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=(0,react.useRef)(isOpen),originalStylesRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),$9f79659886946c16$export$e5c5a5f917a5871c((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen},contentProps,{ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style}}),isOpen&&children)}));function $409067139f391064$var$getState(open){return open?"open":"closed"}const $409067139f391064$export$be92b6f5f03c0fe9=$409067139f391064$export$6eb0f7ddcda6131f,$409067139f391064$export$41fb9f06171c75f4=$409067139f391064$export$c135dce7b15bbbdc,$409067139f391064$export$7c6e2c02157bb7d2=$409067139f391064$export$aadde00976f34151;__webpack_require__('src/index.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/index.css.ts.vanilla.css","source":"#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"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js');var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),webpack_plugin_extracted=__webpack_require__('./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/collapsible/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBueW5oNXgwIHsKICBmcm9tIHsKICAgIGhlaWdodDogMDsKICB9CiAgdG8gewogICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCk7CiAgfQp9CkBrZXlmcmFtZXMgbnluaDV4MSB7CiAgZnJvbSB7CiAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0KTsKICB9CiAgdG8gewogICAgaGVpZ2h0OiAwOwogIH0KfQoubnluaDV4MiB7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubnluaDV4MltkYXRhLXN0YXRlPSJjbG9zZWQiXSB7CiAgYW5pbWF0aW9uOiBueW5oNXgxIHZhcigtLV8xcDJucWd3M2gpIHZhcigtLV8xcDJucWd3MWkpIGZvcndhcmRzOwp9Ci5ueW5oNXgyW2RhdGEtc3RhdGU9Im9wZW4iXSB7CiAgYW5pbWF0aW9uOiBueW5oNXgwIHZhcigtLV8xcDJucWd3M2gpIHZhcigtLV8xcDJucWd3MWkpIGZvcndhcmRzOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(webpack_plugin_extracted.Z,options);webpack_plugin_extracted.Z&&webpack_plugin_extracted.Z.locals&&webpack_plugin_extracted.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Collapsible({children,isOpen,onOpenChange,triggerNode}){const[localOpenState,setLocalOpenState]=(0,react.useState)(isOpen),handleOpenChange=(0,react.useCallback)((openState=>{setLocalOpenState(openState),onOpenChange&&onOpenChange(openState)}),[onOpenChange]);return(0,jsx_runtime.jsxs)($409067139f391064$export$be92b6f5f03c0fe9,{onOpenChange:handleOpenChange,open:localOpenState,children:[(0,jsx_runtime.jsx)($409067139f391064$export$41fb9f06171c75f4,{asChild:!0,children:triggerNode}),(0,jsx_runtime.jsx)($409067139f391064$export$7c6e2c02157bb7d2,{className:"nynh5x2",children})]})}Collapsible.displayName="Collapsible";try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"An unstyled, primitive component for creating a collapsible UI element.",displayName:"Collapsible",props:{children:{defaultValue:null,description:"Dialog content",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},isOpen:{defaultValue:null,description:"Allow collapsible to act as a controlled component",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Function called with new state when state changes.",name:"onOpenChange",required:!1,type:{name:"(openState: boolean) => void"}},triggerNode:{defaultValue:null,description:"Element to use as Dialog trigger. Note: Must accept a ref.",name:"triggerNode",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapsible/index.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"src/collapsible/index.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}var LOREM_mock=__webpack_require__("./mocks/LOREM.mock.ts"),icon=__webpack_require__("./src/icon/index.tsx"),index_css=__webpack_require__("./src/sprinkles/index.css.ts");const stories={component:Collapsible,title:"Collapsible"},TriggerNode=(0,jsx_runtime.jsxs)("button",{className:(0,index_css.Kj)({alignItems:"center",color:"text_high_contrast",display:"flex",width:"100%"}),type:"button",children:["Open collapsible",(0,jsx_runtime.jsx)(icon.J,{icon:faAngleDown.gc,marginLeft:"auto"})]}),Template=({...rest})=>(0,jsx_runtime.jsx)(Collapsible,{...rest,triggerNode:TriggerNode});Template.displayName="Template";const Default={args:{children:LOREM_mock.m.title_xl},render:Template}},'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/collapsible/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBueW5oNXgwIHsKICBmcm9tIHsKICAgIGhlaWdodDogMDsKICB9CiAgdG8gewogICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCk7CiAgfQp9CkBrZXlmcmFtZXMgbnluaDV4MSB7CiAgZnJvbSB7CiAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0KTsKICB9CiAgdG8gewogICAgaGVpZ2h0OiAwOwogIH0KfQoubnluaDV4MiB7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubnluaDV4MltkYXRhLXN0YXRlPSJjbG9zZWQiXSB7CiAgYW5pbWF0aW9uOiBueW5oNXgxIHZhcigtLV8xcDJucWd3M2gpIHZhcigtLV8xcDJucWd3MWkpIGZvcndhcmRzOwp9Ci5ueW5oNXgyW2RhdGEtc3RhdGU9Im9wZW4iXSB7CiAgYW5pbWF0aW9uOiBueW5oNXgwIHZhcigtLV8xcDJucWd3M2gpIHZhcigtLV8xcDJucWd3MWkpIGZvcndhcmRzOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@keyframes nynh5x0 {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--radix-collapsible-content-height);\n  }\n}\n@keyframes nynh5x1 {\n  from {\n    height: var(--radix-collapsible-content-height);\n  }\n  to {\n    height: 0;\n  }\n}\n.nynh5x2 {\n  overflow: hidden;\n}\n.nynh5x2[data-state="closed"] {\n  animation: nynh5x1 var(--_1p2nqgw3h) var(--_1p2nqgw1i) forwards;\n}\n.nynh5x2[data-state="open"] {\n  animation: nynh5x0 var(--_1p2nqgw3h) var(--_1p2nqgw1i) forwards;\n}',"",{version:3,sources:["webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js"],names:[],mappings:"AAAA;EACE;IACE,SAAS;EACX;EACA;IACE,+CAA+C;EACjD;AACF;AACA;EACE;IACE,+CAA+C;EACjD;EACA;IACE,SAAS;EACX;AACF;AACA;EACE,gBAAgB;AAClB;AACA;EACE,+DAA+D;AACjE;AACA;EACE,+DAA+D;AACjE",sourcesContent:['@keyframes nynh5x0 {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--radix-collapsible-content-height);\n  }\n}\n@keyframes nynh5x1 {\n  from {\n    height: var(--radix-collapsible-content-height);\n  }\n  to {\n    height: 0;\n  }\n}\n.nynh5x2 {\n  overflow: hidden;\n}\n.nynh5x2[data-state="closed"] {\n  animation: nynh5x1 var(--_1p2nqgw3h) var(--_1p2nqgw1i) forwards;\n}\n.nynh5x2[data-state="open"] {\n  animation: nynh5x0 var(--_1p2nqgw3h) var(--_1p2nqgw1i) forwards;\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);