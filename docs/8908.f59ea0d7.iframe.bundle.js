"use strict";(self.webpackChunk_alex_mcgovern_boondoggle_design=self.webpackChunk_alex_mcgovern_boondoggle_design||[]).push([[8908],{"./node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}__webpack_require__.d(__webpack_exports__,{M:()=>$e42e1063c40fb3ef$export$b9ecd428b558ff10})},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WV:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react-dom/index.js"),__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"));const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.g7:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{})},"./node_modules/@radix-ui/react-slider/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e6:()=>$faa2e61a3361514f$export$9a58ef0d7ad3278c,fC:()=>$faa2e61a3361514f$export$be92b6f5f03c0fe9,bU:()=>$faa2e61a3361514f$export$6521433ed15a34db,fQ:()=>$faa2e61a3361514f$export$13921ac0cc260818});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value,[min,max]){return Math.min(max,Math.max(min,value))}var dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");const $f631663db3294ace$var$DirectionContext=(0,react.createContext)(void 0);var react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");var react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");const $faa2e61a3361514f$var$PAGE_KEYS=["PageUp","PageDown"],$faa2e61a3361514f$var$ARROW_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$faa2e61a3361514f$var$BACK_KEYS={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[$faa2e61a3361514f$var$Collection,$faa2e61a3361514f$var$useCollection,$faa2e61a3361514f$var$createCollectionScope]=function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,react_context_dist.b)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return react.createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,context.collectionRef);return react.createElement(react_slot_dist.g7,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react.createElement(react_slot_dist.g7,{"data-radix-collection-item":"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}("Slider"),[$faa2e61a3361514f$var$createSliderContext,$faa2e61a3361514f$export$ef72632d7b901f97]=(0,react_context_dist.b)("Slider",[$faa2e61a3361514f$var$createCollectionScope]),[$faa2e61a3361514f$var$SliderProvider,$faa2e61a3361514f$var$useSliderContext]=$faa2e61a3361514f$var$createSliderContext("Slider"),$faa2e61a3361514f$export$472062a354075cee=(0,react.forwardRef)(((props,forwardedRef)=>{const{name,min=0,max=100,step=1,orientation="horizontal",disabled=!1,minStepsBetweenThumbs=0,defaultValue=[min],value:value1,onValueChange=()=>{},onValueCommit=()=>{},inverted=!1,...sliderProps}=props,[slider,setSlider]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setSlider(node))),thumbRefs=(0,react.useRef)(new Set),valueIndexToChangeRef=(0,react.useRef)(0),isHorizontal="horizontal"===orientation,isFormControl=!slider||Boolean(slider.closest("form")),SliderOrientation=isHorizontal?$faa2e61a3361514f$var$SliderHorizontal:$faa2e61a3361514f$var$SliderVertical,[values=[],setValues]=(0,react_use_controllable_state_dist.T)({prop:value1,defaultProp:defaultValue,onChange:value=>{var _thumbs$valueIndexToC;null===(_thumbs$valueIndexToC=[...thumbRefs.current][valueIndexToChangeRef.current])||void 0===_thumbs$valueIndexToC||_thumbs$valueIndexToC.focus(),onValueChange(value)}}),valuesBeforeSlideStartRef=(0,react.useRef)(values);function updateValues(value,atIndex,{commit}={commit:!1}){const decimalCount=function $faa2e61a3361514f$var$getDecimalCount(value){return(String(value).split(".")[1]||"").length}(step),snapToStep=function $faa2e61a3361514f$var$roundValue(value,decimalCount){const rounder=Math.pow(10,decimalCount);return Math.round(value*rounder)/rounder}(Math.round((value-min)/step)*step+min,decimalCount),nextValue=$ae6933e535247d3d$export$7d15b64cf5a3a4c4(snapToStep,[min,max]);setValues(((prevValues=[])=>{const nextValues=function $faa2e61a3361514f$var$getNextSortedValues(prevValues=[],nextValue,atIndex){const nextValues=[...prevValues];return nextValues[atIndex]=nextValue,nextValues.sort(((a,b)=>a-b))}(prevValues,nextValue,atIndex);if(function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values,minStepsBetweenValues){if(minStepsBetweenValues>0){const stepsBetweenValues=function $faa2e61a3361514f$var$getStepsBetweenValues(values){return values.slice(0,-1).map(((value,index)=>values[index+1]-value))}(values);return Math.min(...stepsBetweenValues)>=minStepsBetweenValues}return!0}(nextValues,minStepsBetweenThumbs*step)){valueIndexToChangeRef.current=nextValues.indexOf(nextValue);const hasChanged=String(nextValues)!==String(prevValues);return hasChanged&&commit&&onValueCommit(nextValues),hasChanged?nextValues:prevValues}return prevValues}))}return(0,react.createElement)($faa2e61a3361514f$var$SliderProvider,{scope:props.__scopeSlider,disabled,min,max,valueIndexToChangeRef,thumbs:thumbRefs.current,values,orientation},(0,react.createElement)($faa2e61a3361514f$var$Collection.Provider,{scope:props.__scopeSlider},(0,react.createElement)($faa2e61a3361514f$var$Collection.Slot,{scope:props.__scopeSlider},(0,react.createElement)(SliderOrientation,(0,esm_extends.Z)({"aria-disabled":disabled,"data-disabled":disabled?"":void 0},sliderProps,{ref:composedRefs,onPointerDown:(0,dist.M)(sliderProps.onPointerDown,(()=>{disabled||(valuesBeforeSlideStartRef.current=values)})),min,max,inverted,onSlideStart:disabled?void 0:function handleSlideStart(value){const closestIndex=function $faa2e61a3361514f$var$getClosestValueIndex(values,nextValue){if(1===values.length)return 0;const distances=values.map((value=>Math.abs(value-nextValue))),closestDistance=Math.min(...distances);return distances.indexOf(closestDistance)}(values,value);updateValues(value,closestIndex)},onSlideMove:disabled?void 0:function handleSlideMove(value){updateValues(value,valueIndexToChangeRef.current)},onSlideEnd:disabled?void 0:function handleSlideEnd(){const prevValue=valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];values[valueIndexToChangeRef.current]!==prevValue&&onValueCommit(values)},onHomeKeyDown:()=>!disabled&&updateValues(min,0,{commit:!0}),onEndKeyDown:()=>!disabled&&updateValues(max,values.length-1,{commit:!0}),onStepKeyDown:({event,direction:stepDirection})=>{if(!disabled){const multiplier=$faa2e61a3361514f$var$PAGE_KEYS.includes(event.key)||event.shiftKey&&$faa2e61a3361514f$var$ARROW_KEYS.includes(event.key)?10:1,atIndex=valueIndexToChangeRef.current;updateValues(values[atIndex]+step*multiplier*stepDirection,atIndex,{commit:!0})}}})))),isFormControl&&values.map(((value,index)=>(0,react.createElement)($faa2e61a3361514f$var$BubbleInput,{key:index,name:name?name+(values.length>1?"[]":""):void 0,value}))))})),[$faa2e61a3361514f$var$SliderOrientationProvider,$faa2e61a3361514f$var$useSliderOrientationContext]=$faa2e61a3361514f$var$createSliderContext("Slider",{startEdge:"left",endEdge:"right",size:"width",direction:1}),$faa2e61a3361514f$var$SliderHorizontal=(0,react.forwardRef)(((props,forwardedRef)=>{const{min,max,dir,inverted,onSlideStart,onSlideMove,onSlideEnd,onStepKeyDown,...sliderProps}=props,[slider,setSlider]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setSlider(node))),rectRef=(0,react.useRef)(),direction=function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}(dir),isDirectionLTR="ltr"===direction,isSlidingFromLeft=isDirectionLTR&&!inverted||!isDirectionLTR&&inverted;function getValueFromPointer(pointerPosition){const rect=rectRef.current||slider.getBoundingClientRect(),value=$faa2e61a3361514f$var$linearScale([0,rect.width],isSlidingFromLeft?[min,max]:[max,min]);return rectRef.current=rect,value(pointerPosition-rect.left)}return(0,react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:isSlidingFromLeft?"left":"right",endEdge:isSlidingFromLeft?"right":"left",direction:isSlidingFromLeft?1:-1,size:"width"},(0,react.createElement)($faa2e61a3361514f$var$SliderImpl,(0,esm_extends.Z)({dir:direction,"data-orientation":"horizontal"},sliderProps,{ref:composedRefs,style:{...sliderProps.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:event=>{const value=getValueFromPointer(event.clientX);null==onSlideStart||onSlideStart(value)},onSlideMove:event=>{const value=getValueFromPointer(event.clientX);null==onSlideMove||onSlideMove(value)},onSlideEnd:()=>{rectRef.current=void 0,null==onSlideEnd||onSlideEnd()},onStepKeyDown:event=>{const isBackKey=$faa2e61a3361514f$var$BACK_KEYS[isSlidingFromLeft?"from-left":"from-right"].includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})))})),$faa2e61a3361514f$var$SliderVertical=(0,react.forwardRef)(((props,forwardedRef)=>{const{min,max,inverted,onSlideStart,onSlideMove,onSlideEnd,onStepKeyDown,...sliderProps}=props,sliderRef=(0,react.useRef)(null),ref=(0,react_compose_refs_dist.e)(forwardedRef,sliderRef),rectRef=(0,react.useRef)(),isSlidingFromBottom=!inverted;function getValueFromPointer(pointerPosition){const rect=rectRef.current||sliderRef.current.getBoundingClientRect(),value=$faa2e61a3361514f$var$linearScale([0,rect.height],isSlidingFromBottom?[max,min]:[min,max]);return rectRef.current=rect,value(pointerPosition-rect.top)}return(0,react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:isSlidingFromBottom?"bottom":"top",endEdge:isSlidingFromBottom?"top":"bottom",size:"height",direction:isSlidingFromBottom?1:-1},(0,react.createElement)($faa2e61a3361514f$var$SliderImpl,(0,esm_extends.Z)({"data-orientation":"vertical"},sliderProps,{ref,style:{...sliderProps.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:event=>{const value=getValueFromPointer(event.clientY);null==onSlideStart||onSlideStart(value)},onSlideMove:event=>{const value=getValueFromPointer(event.clientY);null==onSlideMove||onSlideMove(value)},onSlideEnd:()=>{rectRef.current=void 0,null==onSlideEnd||onSlideEnd()},onStepKeyDown:event=>{const isBackKey=$faa2e61a3361514f$var$BACK_KEYS[isSlidingFromBottom?"from-bottom":"from-top"].includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})))})),$faa2e61a3361514f$var$SliderImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,onSlideStart,onSlideMove,onSlideEnd,onHomeKeyDown,onEndKeyDown,onStepKeyDown,...sliderProps}=props,context=$faa2e61a3361514f$var$useSliderContext("Slider",__scopeSlider);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({},sliderProps,{ref:forwardedRef,onKeyDown:(0,dist.M)(props.onKeyDown,(event=>{"Home"===event.key?(onHomeKeyDown(event),event.preventDefault()):"End"===event.key?(onEndKeyDown(event),event.preventDefault()):$faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)&&(onStepKeyDown(event),event.preventDefault())})),onPointerDown:(0,dist.M)(props.onPointerDown,(event=>{const target=event.target;target.setPointerCapture(event.pointerId),event.preventDefault(),context.thumbs.has(target)?target.focus():onSlideStart(event)})),onPointerMove:(0,dist.M)(props.onPointerMove,(event=>{event.target.hasPointerCapture(event.pointerId)&&onSlideMove(event)})),onPointerUp:(0,dist.M)(props.onPointerUp,(event=>{const target=event.target;target.hasPointerCapture(event.pointerId)&&(target.releasePointerCapture(event.pointerId),onSlideEnd(event))}))}))})),$faa2e61a3361514f$export$105594979f116971=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,...trackProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderTrack",__scopeSlider);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-disabled":context.disabled?"":void 0,"data-orientation":context.orientation},trackProps,{ref:forwardedRef}))})),$faa2e61a3361514f$export$a5cf38a7a000fe77=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,...rangeProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderRange",__scopeSlider),orientation=$faa2e61a3361514f$var$useSliderOrientationContext("SliderRange",__scopeSlider),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),valuesCount=context.values.length,percentages=context.values.map((value=>$faa2e61a3361514f$var$convertValueToPercentage(value,context.min,context.max))),offsetStart=valuesCount>1?Math.min(...percentages):0,offsetEnd=100-Math.max(...percentages);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0},rangeProps,{ref:composedRefs,style:{...props.style,[orientation.startEdge]:offsetStart+"%",[orientation.endEdge]:offsetEnd+"%"}}))})),$faa2e61a3361514f$export$2c1b491743890dec=(0,react.forwardRef)(((props,forwardedRef)=>{const getItems=$faa2e61a3361514f$var$useCollection(props.__scopeSlider),[thumb,setThumb]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setThumb(node))),index=(0,react.useMemo)((()=>thumb?getItems().findIndex((item=>item.ref.current===thumb)):-1),[getItems,thumb]);return(0,react.createElement)($faa2e61a3361514f$var$SliderThumbImpl,(0,esm_extends.Z)({},props,{ref:composedRefs,index}))})),$faa2e61a3361514f$var$SliderThumbImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,index,...thumbProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderThumb",__scopeSlider),orientation=$faa2e61a3361514f$var$useSliderOrientationContext("SliderThumb",__scopeSlider),[thumb,setThumb]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setThumb(node))),size=function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react.useState)(void 0);return(0,react_use_layout_effect_dist.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}(thumb),value=context.values[index],percent=void 0===value?0:$faa2e61a3361514f$var$convertValueToPercentage(value,context.min,context.max),label=function $faa2e61a3361514f$var$getLabel(index,totalValues){return totalValues>2?`Value ${index+1} of ${totalValues}`:2===totalValues?["Minimum","Maximum"][index]:void 0}(index,context.values.length),orientationSize=null==size?void 0:size[orientation.size],thumbInBoundsOffset=orientationSize?function $faa2e61a3361514f$var$getThumbInBoundsOffset(width,left,direction){const halfWidth=width/2,offset=$faa2e61a3361514f$var$linearScale([0,50],[0,halfWidth]);return(halfWidth-offset(left)*direction)*direction}(orientationSize,percent,orientation.direction):0;return(0,react.useEffect)((()=>{if(thumb)return context.thumbs.add(thumb),()=>{context.thumbs.delete(thumb)}}),[thumb,context.thumbs]),(0,react.createElement)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[orientation.startEdge]:`calc(${percent}% + ${thumbInBoundsOffset}px)`}},(0,react.createElement)($faa2e61a3361514f$var$Collection.ItemSlot,{scope:props.__scopeSlider},(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({role:"slider","aria-label":props["aria-label"]||label,"aria-valuemin":context.min,"aria-valuenow":value,"aria-valuemax":context.max,"aria-orientation":context.orientation,"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0,tabIndex:context.disabled?void 0:0},thumbProps,{ref:composedRefs,style:void 0===value?{display:"none"}:props.style,onFocus:(0,dist.M)(props.onFocus,(()=>{context.valueIndexToChangeRef.current=index}))}))))})),$faa2e61a3361514f$var$BubbleInput=props=>{const{value,...inputProps}=props,ref=(0,react.useRef)(null),prevValue=function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react.useRef)({value,previous:value});return(0,react.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}(value);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setValue=Object.getOwnPropertyDescriptor(inputProto,"value").set;if(prevValue!==value&&setValue){const event=new Event("input",{bubbles:!0});setValue.call(input,value),input.dispatchEvent(event)}}),[prevValue,value]),(0,react.createElement)("input",(0,esm_extends.Z)({style:{display:"none"}},inputProps,{ref,defaultValue:value}))};function $faa2e61a3361514f$var$convertValueToPercentage(value,min,max){return $ae6933e535247d3d$export$7d15b64cf5a3a4c4(100/(max-min)*(value-min),[0,100])}function $faa2e61a3361514f$var$linearScale(input,output){return value=>{if(input[0]===input[1]||output[0]===output[1])return output[0];const ratio=(output[1]-output[0])/(input[1]-input[0]);return output[0]+ratio*(value-input[0])}}const $faa2e61a3361514f$export$be92b6f5f03c0fe9=$faa2e61a3361514f$export$472062a354075cee,$faa2e61a3361514f$export$13921ac0cc260818=$faa2e61a3361514f$export$105594979f116971,$faa2e61a3361514f$export$9a58ef0d7ad3278c=$faa2e61a3361514f$export$a5cf38a7a000fe77,$faa2e61a3361514f$export$6521433ed15a34db=$faa2e61a3361514f$export$2c1b491743890dec},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react=__webpack_require__("./node_modules/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react.useRef)(callback);return(0,react.useEffect)((()=>{callbackRef.current=callback})),(0,react.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react.useRef)(value),handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return(0,react.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return[value1,(0,react.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/slider/styles.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA6VUzU7jMBC+9yl8o5EwUihQKELaA0/A7m2FLNeeNAbH0x3bJSzqu+O4TSpApctyijwef39j58SHZwteeGs00B1iEAIfJk08LdnLiLGAUdVcqmDQzZhDB9epGj0Q92BBhb64Hp3sh/qtZZAcyYALsoO6OarT6i+mpT26z0w1mEWd4FaSxpz7pVTGLfIXxIUQ5eOV/XN1caqLr3OtgIJRA1NloeXaEGxdKbSxcZ2vJ6ND/V8SfpFUj72GSaaZp8qCMDrdI86RUqvQUMlok+JyQufttDorrntVqf9pxspD+N/Ns9yZuTxo5nCgn8R2iKmOzbxnms6MH89qTOjFngSDcUF0t3EFQ3yQ49tky9Mskd7lnRGH9vPcriL5rnGJCRHon5RVqKLnK+PN3MJWIbbc11J3U+s525+5wBs9eFeZE2OwxkGa77JlHhPN9kwGFpRSG1TKgu11FUNA9+EWTXO8PxrQRrLxkqAC8pxARwWaN9i/YL7ZAqe2Hj7znRvSX4Ck82aDsBtKP5Nh8zZSviApEqSwm/xDwUB6OH5j56unuzjWo/UrVcTtjbEEAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_sliderRoot__oj3mu21 {\n  touch-action: none;\n  user-select: none;\n}\n.styles_sliderRoot__oj3mu21[data-orientation='horizontal'] {\n  height: var(--spacing-space_6__1k9lq962d);\n}\n.styles_sliderRoot__oj3mu21[data-orientation='vertical'] {\n  flex-direction: column;\n  width: var(--spacing-space_6__1k9lq962d);\n}\n.styles_sliderTrack__oj3mu23 {\n  background: var(--border_default__13r5x7f4);\n  flex-grow: 1;\n}\n.styles_sliderTrack__oj3mu23[data-orientation='horizontal'] {\n  height: var(--spacing-space_1__1k9lq9628);\n}\n.styles_sliderTrack__oj3mu23[data-orientation='vertical'] {\n  width: var(--spacing-space_1__1k9lq9628);\n}\n.styles_sliderThumb__oj3mu27:is(:hover) {\n  background: var(--tint_active__13r5x7fe);\n  border-color: var(--border_hover__13r5x7f5);\n  cursor: pointer;\n}\n.styles_sliderThumb__oj3mu27:is(:focus-visible) {\n  box-shadow: var(--boxShadow-md__1k9lq96c);\n  outline: 1px solid var(--focus_ring__13r5x7fa) ;\n  border-color: var(--button_default__13r5x7f7);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .styles_sliderThumb__oj3mu27 {\n    transition: background var(--transitionDuration-short__1k9lq962j) ease, border-color var(--transitionDuration-short__1k9lq962j) ease;\n  }\n}","",{version:3,sources:["webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;AACA;EACE,2CAA2C;EAC3C,YAAY;AACd;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,wCAAwC;EACxC,2CAA2C;EAC3C,eAAe;AACjB;AACA;EACE,yCAAyC;EACzC,+CAA+C;EAC/C,6CAA6C;AAC/C;AACA;EACE;IACE,oIAAoI;EACtI;AACF",sourcesContent:[".styles_sliderRoot__oj3mu21 {\n  touch-action: none;\n  user-select: none;\n}\n.styles_sliderRoot__oj3mu21[data-orientation='horizontal'] {\n  height: var(--spacing-space_6__1k9lq962d);\n}\n.styles_sliderRoot__oj3mu21[data-orientation='vertical'] {\n  flex-direction: column;\n  width: var(--spacing-space_6__1k9lq962d);\n}\n.styles_sliderTrack__oj3mu23 {\n  background: var(--border_default__13r5x7f4);\n  flex-grow: 1;\n}\n.styles_sliderTrack__oj3mu23[data-orientation='horizontal'] {\n  height: var(--spacing-space_1__1k9lq9628);\n}\n.styles_sliderTrack__oj3mu23[data-orientation='vertical'] {\n  width: var(--spacing-space_1__1k9lq9628);\n}\n.styles_sliderThumb__oj3mu27:is(:hover) {\n  background: var(--tint_active__13r5x7fe);\n  border-color: var(--border_hover__13r5x7f5);\n  cursor: pointer;\n}\n.styles_sliderThumb__oj3mu27:is(:focus-visible) {\n  box-shadow: var(--boxShadow-md__1k9lq96c);\n  outline: 1px solid var(--focus_ring__13r5x7fa) ;\n  border-color: var(--button_default__13r5x7f7);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .styles_sliderThumb__oj3mu27 {\n    transition: background var(--transitionDuration-short__1k9lq962j) ease, border-color var(--transitionDuration-short__1k9lq962j) ease;\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);