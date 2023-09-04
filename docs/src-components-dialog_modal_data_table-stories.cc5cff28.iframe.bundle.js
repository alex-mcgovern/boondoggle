"use strict";(self.webpackChunk_alex_mcgovern_boondoggle_design=self.webpackChunk_alex_mcgovern_boondoggle_design||[]).push([[2902],{"./src/components/dialog_modal_data_table/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IsFilterable:()=>IsFilterable,IsPaginated:()=>IsPaginated,IsSelectable:()=>IsSelectable,IsSelectableWithEnableMultiRowSelection:()=>IsSelectableWithEnableMultiRowSelection,KitchenSink:()=>KitchenSink,WidthLg:()=>WidthLg,WidthSm:()=>WidthSm,default:()=>stories});var index_module=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.module.js"),use_data_table_state=__webpack_require__("./src/lib/use_data_table_state/index.tsx"),use_dialog_modal_state=__webpack_require__("./src/lib/use_dialog_modal_state/index.ts"),color_palette_css=__webpack_require__("./src/styles/color_palette.css.ts"),box=__webpack_require__("./src/components/box/index.tsx"),data_table_actions_wrapper=__webpack_require__("./src/components/data_table_actions_wrapper/index.tsx"),data_table_control_pagination=__webpack_require__("./src/components/data_table_control_pagination/index.tsx"),data_table_filter_input=__webpack_require__("./src/components/data_table_filter_input/index.tsx"),data_table_info_page_count=__webpack_require__("./src/components/data_table_info_page_count/index.tsx"),data_table_layout_body=__webpack_require__("./src/components/data_table_layout_body/index.tsx"),data_table_layout_head=__webpack_require__("./src/components/data_table_layout_head/index.tsx"),dialog_modal_actions=__webpack_require__("./src/components/dialog_modal_actions/index.tsx"),dialog_modal_content=__webpack_require__("./src/components/dialog_modal_content/index.tsx"),dialog_modal_error_message=__webpack_require__("./src/components/dialog_modal_error_message/index.tsx"),dialog_modal_header=__webpack_require__("./src/components/dialog_modal_header/index.tsx"),dialog_modal_inner=__webpack_require__("./src/components/dialog_modal_inner/index.tsx"),dialog_modal_outer=__webpack_require__("./src/components/dialog_modal_outer/index.tsx"),loader_full_screen=__webpack_require__("./src/components/loader_full_screen/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DialogModalDataTable({actions,alert,columns:initColumns,data,dialogRef:parentDialogRef,enableMultiRowSelection=!1,isError,isFilterable,isLoading,isPaginated,isSelectable,isSortable,onClickTryAgain,onSelect,strErrorDescription,strErrorTitle,strFilterPlaceholder,strNext,strPage,strPrev,strResults,strTryAgain,title,triggerNode,width,wrapperProps}){const{closeDialog,dialogRef,toggleIsOpen,triggerRef}=(0,use_dialog_modal_state.i)({ref:parentDialogRef}),{setGlobalFilter,table}=(0,use_data_table_state.t)({data,enableMultiRowSelection,initColumns,isFilterable,isPaginated,isSelectable,isSortable,onSelect});return(0,jsx_runtime.jsxs)(box.x,{className:color_palette_css.gx.default,position:"relative",...wrapperProps,children:[triggerNode&&(0,jsx_runtime.jsx)(index_module.g7,{onClick:toggleIsOpen,ref:triggerRef,children:triggerNode}),(0,jsx_runtime.jsx)(dialog_modal_outer.D,{dialogRef,children:(0,jsx_runtime.jsxs)(dialog_modal_inner.p,{width,children:[(0,jsx_runtime.jsx)(dialog_modal_header.Q,{closeDialog,title}),!isLoading&&isError&&strErrorDescription&&strErrorTitle&&(0,jsx_runtime.jsx)(dialog_modal_error_message.D,{description:strErrorDescription,title:strErrorTitle}),!isError&&isLoading&&(0,jsx_runtime.jsx)(loader_full_screen.G,{}),!isError&&!isLoading&&(0,jsx_runtime.jsx)(data_table_actions_wrapper.H,{leftAction:isFilterable?(0,jsx_runtime.jsx)(data_table_filter_input.s,{placeholder:strFilterPlaceholder,setGlobalFilter}):null,rightActions:actions}),!isError&&!isLoading&&(0,jsx_runtime.jsx)(dialog_modal_content.t,{alert,hasPadding:!1,children:(0,jsx_runtime.jsxs)(box.x,{as:"table",width:"100%",children:[(0,jsx_runtime.jsx)(data_table_layout_head.T,{isSortable,isSticky:!0,table}),(0,jsx_runtime.jsx)(data_table_layout_body.Z,{table})]})}),(0,jsx_runtime.jsx)(dialog_modal_actions.U,{actions:isPaginated?(0,jsx_runtime.jsxs)(box.x,{alignItems:"center",display:"flex",gap:"space_2",children:[strPage&&strResults&&(0,jsx_runtime.jsx)(data_table_info_page_count.n,{strPage,strResults,table}),(0,jsx_runtime.jsx)(data_table_control_pagination.f,{strNext,strPrev,table})]}):void 0,closeDialog,isError,isLoading,onClickTryAgain,shouldCloseOnAction:!1,strTryAgain})]})})]})}DialogModalDataTable.displayName="DialogModalDataTable";try{DialogModalDataTable.displayName="DialogModalDataTable",DialogModalDataTable.__docgenInfo={description:"",displayName:"DialogModalDataTable",props:{isPaginated:{defaultValue:null,description:"Whether to show pagination",name:"isPaginated",required:!1,type:{name:"boolean"}},strNext:{defaultValue:null,description:"String to use for the next button",name:"strNext",required:!1,type:{name:"string"}},strPage:{defaultValue:null,description:"String to use for the page label",name:"strPage",required:!1,type:{name:"string"}},strPrev:{defaultValue:null,description:"String to use for the previous button",name:"strPrev",required:!1,type:{name:"string"}},strResults:{defaultValue:null,description:"String to use for the results label",name:"strResults",required:!1,type:{name:"string"}},strShow:{defaultValue:null,description:"String to use for the show label",name:"strShow",required:!1,type:{name:"string"}},enableMultiRowSelection:{defaultValue:{value:"false"},description:"Boolean to enable multi-row selection.",name:"enableMultiRowSelection",required:!1,type:{name:"boolean"}},isSelectable:{defaultValue:null,description:"Whether the table should allow rows to be selectable",name:"isSelectable",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"Function called on a new selection, with the current selection",name:"onSelect",required:!1,type:{name:"(selection: TData[]) => void"}},isFilterable:{defaultValue:null,description:"Whether the table should be filterable",name:"isFilterable",required:!1,type:{name:"boolean"}},strFilterPlaceholder:{defaultValue:null,description:"String to use for filter field placeholder",name:"strFilterPlaceholder",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Up to 2 react nodes to render as actions for the table",name:"actions",required:!1,type:{name:"ReactNode | [ReactNode?, ReactNode?]"}},alert:{defaultValue:null,description:"Alert component that will be rendered above the form.",name:"alert",required:!1,type:{name:"ReactNode"}},columns:{defaultValue:null,description:"Column definitions for the tabular data",name:"columns",required:!0,type:{name:"ColumnDef<TData, any>[]"}},data:{defaultValue:null,description:"An array of objects describing each row in the table",name:"data",required:!0,type:{name:"TData[]"}},dialogRef:{defaultValue:null,description:"React ref that will be passed to the dialog modal.",name:"dialogRef",required:!1,type:{name:"ForwardedRef<HTMLDialogElement>"}},isError:{defaultValue:null,description:"Whether the dialog modal is in an error state.",name:"isError",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Whether the dialog modal is loading.",name:"isLoading",required:!1,type:{name:"boolean"}},isSortable:{defaultValue:null,description:"Whether the table should be sortable and show sorting controls",name:"isSortable",required:!1,type:{name:"boolean"}},onClickTryAgain:{defaultValue:null,description:'Function to call when the "Try again" button is clicked.',name:"onClickTryAgain",required:!1,type:{name:"(() => unknown) | (() => Promise<unknown>)"}},strErrorDescription:{defaultValue:null,description:"Description of the error.",name:"strErrorDescription",required:!1,type:{name:"string"}},strErrorTitle:{defaultValue:null,description:"Title of the error.",name:"strErrorTitle",required:!1,type:{name:"string"}},strTryAgain:{defaultValue:null,description:'Text for the "Try again" button.',name:"strTryAgain",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title of the dialog modal.",name:"title",required:!0,type:{name:"string"}},triggerNode:{defaultValue:null,description:"Node that will trigger the dialog modal when clicked.",name:"triggerNode",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"Width of the dialog modal.",name:"width",required:!0,type:{name:'"lg" | "sm"'}},wrapperProps:{defaultValue:null,description:"Props that will be passed to the wrapper `Box` component.",name:"wrapperProps",required:!1,type:{name:"BoxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dialog_modal_data_table/index.tsx#DialogModalDataTable"]={docgenInfo:DialogModalDataTable.__docgenInfo,name:"DialogModalDataTable",path:"src/components/dialog_modal_data_table/index.tsx#DialogModalDataTable"})}catch(__react_docgen_typescript_loader_error){}var data_table_columns_mock=__webpack_require__("./mocks/data_table_columns.mock.tsx"),components_button=__webpack_require__("./src/components/button/index.tsx");const stories={args:{},component:DialogModalDataTable,parameters:{layout:"fullscreen"},title:"Components/DialogModalDataTable"},MOCK_DATA=Array.from({length:40},data_table_columns_mock.Kb),IsFilterable={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,isFilterable:!0,strFilterPlaceholder:"Filter",title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},IsPaginated={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,isPaginated:!0,strNext:"Next",strPage:"Page",strPrev:"Previous",strResults:"Results",strShow:"Show",title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},WidthSm={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},WidthLg={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},IsSelectable={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,isSelectable:!0,onSelect:rowSelection=>{alert(`Selected rows \n ${JSON.stringify(rowSelection,null,2)}`)},title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},IsSelectableWithEnableMultiRowSelection={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,enableMultiRowSelection:!0,isSelectable:!0,onSelect:rowSelection=>{alert(`Selected rows \n ${JSON.stringify(rowSelection,null,2)}`)},title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}},KitchenSink={args:{columns:data_table_columns_mock.zY,data:MOCK_DATA,isFilterable:!0,isPaginated:!0,isSelectable:!0,isSortable:!0,onSelect:rowSelection=>{alert(`Selected rows \n ${JSON.stringify(rowSelection,null,2)}`)},strFilterPlaceholder:"Filter",strNext:"Next",strPage:"Page",strPrev:"Previous",strResults:"Results",strShow:"Show",title:"Dialog modal data table",triggerNode:(0,jsx_runtime.jsx)(components_button.z,{name:"dialog_trigger",children:"Open dialog"}),width:"lg"}}}}]);