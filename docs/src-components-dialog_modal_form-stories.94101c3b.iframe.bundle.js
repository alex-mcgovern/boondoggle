"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[1001],
	{
		"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				F: () => $6ed0406888f73fc4$export$43e446d32b3d21af,
				e: () => $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				"./node_modules/react/index.js",
			);
			function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
				return (node) =>
					refs.forEach((ref) =>
						(function $6ed0406888f73fc4$var$setRef(ref, value) {
							"function" == typeof ref
								? ref(value)
								: null != ref && (ref.current = value);
						})(ref, node),
					);
			}
			function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
				return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
					$6ed0406888f73fc4$export$43e446d32b3d21af(...refs),
					refs,
				);
			}
		},
		"./node_modules/@radix-ui/react-slot/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				g7: () => $5e63c961fc1ce211$export$8c6ed5c666ac1360,
			});
			var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						"./node_modules/@babel/runtime/helpers/esm/extends.js",
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs",
					);
			const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0,
			react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
				(props, forwardedRef) => {
					const { children, ...slotProps } = props,
						childrenArray =
							react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(
								children,
							),
						slottable = childrenArray.find(
							$5e63c961fc1ce211$var$isSlottable,
						);
					if (slottable) {
						const newElement = slottable.props.children,
							newChildren = childrenArray.map((child) =>
								child === slottable
									? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
											newElement,
									  ) > 1
										? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(
												null,
										  )
										: (0,
										  react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(
												newElement,
										  )
										? newElement.props.children
										: null
									: child,
							);
						return (0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							$5e63c961fc1ce211$var$SlotClone,
							(0,
							_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)(
								{},
								slotProps,
								{ ref: forwardedRef },
							),
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(
								newElement,
							)
								? (0,
								  react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
										newElement,
										void 0,
										newChildren,
								  )
								: null,
						);
					}
					return (0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						$5e63c961fc1ce211$var$SlotClone,
						(0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)(
							{},
							slotProps,
							{ ref: forwardedRef },
						),
						children,
					);
				},
			);
			$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
			const $5e63c961fc1ce211$var$SlotClone = (0,
			react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
				(props, forwardedRef) => {
					const { children, ...slotProps } = props;
					return (0,
					react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)
						? (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
								children,
								{
									...$5e63c961fc1ce211$var$mergeProps(
										slotProps,
										children.props,
									),
									ref: forwardedRef
										? (0,
										  _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(
												forwardedRef,
												children.ref,
										  )
										: children.ref,
								},
						  )
						: react__WEBPACK_IMPORTED_MODULE_0__.Children.count(
								children,
						  ) > 1
						? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
						: null;
				},
			);
			$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
			const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) =>
				(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
					react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
					null,
					children,
				);
			function $5e63c961fc1ce211$var$isSlottable(child) {
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(
						child,
					) &&
					child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
				);
			}
			function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
				const overrideProps = { ...childProps };
				for (const propName in childProps) {
					const slotPropValue = slotProps[propName],
						childPropValue = childProps[propName];
					/^on[A-Z]/.test(propName)
						? slotPropValue && childPropValue
							? (overrideProps[propName] = (...args) => {
									childPropValue(...args),
										slotPropValue(...args);
							  })
							: slotPropValue &&
							  (overrideProps[propName] = slotPropValue)
						: "style" === propName
						? (overrideProps[propName] = {
								...slotPropValue,
								...childPropValue,
						  })
						: "className" === propName &&
						  (overrideProps[propName] = [
								slotPropValue,
								childPropValue,
						  ]
								.filter(Boolean)
								.join(" "));
				}
				return { ...slotProps, ...overrideProps };
			}
		},
		"./src/components/dialog_modal_form/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				B: () => DialogModalForm,
			});
			var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__(
						"./node_modules/@radix-ui/react-slot/dist/index.mjs",
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				react_hook_form__WEBPACK_IMPORTED_MODULE_13__ =
					__webpack_require__(
						"./node_modules/react-hook-form/dist/index.esm.mjs",
					),
				_lib_handle_hook_form_errors__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__(
						"./src/lib/handle_hook_form_errors/index.ts",
					),
				_lib_use_dialog_modal_state__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						"./src/lib/use_dialog_modal_state/index.ts",
					),
				_styles_color_palette_css__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./src/styles/color_palette.css.ts"),
				_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					"./src/components/box/index.tsx",
				),
				_dialog_modal_actions__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						"./src/components/dialog_modal_actions/index.tsx",
					),
				_dialog_modal_content__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						"./src/components/dialog_modal_content/index.tsx",
					),
				_dialog_modal_error_message__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						"./src/components/dialog_modal_error_message/index.tsx",
					),
				_dialog_modal_header__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						"./src/components/dialog_modal_header/index.tsx",
					),
				_dialog_modal_inner__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						"./src/components/dialog_modal_inner/index.tsx",
					),
				_dialog_modal_outer__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						"./src/components/dialog_modal_outer/index.tsx",
					),
				_form_submit_button__WEBPACK_IMPORTED_MODULE_10__ =
					__webpack_require__(
						"./src/components/form_submit_button/index.tsx",
					),
				_loader_full_screen__WEBPACK_IMPORTED_MODULE_11__ =
					__webpack_require__(
						"./src/components/loader_full_screen/index.tsx",
					),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function BaseDialogModalForm(
				{
					alert,
					children,
					formSubmitButtonText,
					handleSubmit: initHandleSubmission,
					isError,
					isLoading,
					onClickTryAgain,
					resolver,
					strErrorDescription,
					strErrorTitle,
					strTryAgain,
					title,
					triggerNode,
					width,
					wrapperProps,
				},
				ref,
			) {
				const { closeDialog, dialogRef, toggleIsOpen, triggerRef } = (0,
					_lib_use_dialog_modal_state__WEBPACK_IMPORTED_MODULE_1__.i)(
						{ ref },
					),
					formMethods = (0,
					react_hook_form__WEBPACK_IMPORTED_MODULE_13__.cI)({
						resolver,
					}),
					{ reset } = formMethods,
					handleSubmit = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						async (fieldValues) => {
							Promise.resolve(
								initHandleSubmission(fieldValues),
							).then(() => {
								reset();
							});
						},
						[initHandleSubmission, reset],
					);
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
					react_hook_form__WEBPACK_IMPORTED_MODULE_13__.RV,
					{
						...formMethods,
						children: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
							_box__WEBPACK_IMPORTED_MODULE_3__.x,
							{
								className:
									_styles_color_palette_css__WEBPACK_IMPORTED_MODULE_2__
										.gx.default,
								position: "relative",
								...wrapperProps,
								children: [
									triggerNode &&
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
											_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_14__.g7,
											{
												onClick: toggleIsOpen,
												ref: triggerRef,
												children: triggerNode,
											},
										),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
										_dialog_modal_outer__WEBPACK_IMPORTED_MODULE_9__.D,
										{
											dialogRef,
											children: (0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(
												_dialog_modal_inner__WEBPACK_IMPORTED_MODULE_8__.p,
												{
													as: "form",
													onSubmit:
														formMethods.handleSubmit(
															handleSubmit,
															_lib_handle_hook_form_errors__WEBPACK_IMPORTED_MODULE_15__.y,
														),
													width,
													children: [
														(0,
														react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
															_dialog_modal_header__WEBPACK_IMPORTED_MODULE_7__.Q,
															{
																closeDialog,
																title,
															},
														),
														!isLoading &&
															isError &&
															strErrorDescription &&
															strErrorTitle &&
															(0,
															react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
																_dialog_modal_error_message__WEBPACK_IMPORTED_MODULE_6__.D,
																{
																	description:
																		strErrorDescription,
																	title: strErrorTitle,
																},
															),
														!isError &&
															isLoading &&
															(0,
															react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
																_loader_full_screen__WEBPACK_IMPORTED_MODULE_11__.G,
																{},
															),
														!isError &&
															!isLoading &&
															(0,
															react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
																_dialog_modal_content__WEBPACK_IMPORTED_MODULE_5__.t,
																{
																	alert,
																	children,
																},
															),
														(0,
														react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
															_dialog_modal_actions__WEBPACK_IMPORTED_MODULE_4__.U,
															{
																actions: (0,
																react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(
																	_form_submit_button__WEBPACK_IMPORTED_MODULE_10__.Z,
																	{
																		children:
																			formSubmitButtonText,
																	},
																),
																closeDialog,
																isError,
																isLoading,
																onClickTryAgain,
																shouldCloseOnAction: !1,
																strTryAgain,
															},
														),
													],
												},
											),
										},
									),
								],
							},
						),
					},
				);
			}
			BaseDialogModalForm.displayName = "BaseDialogModalForm";
			const DialogModalForm = (0,
			react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(BaseDialogModalForm);
			try {
				(DialogModalForm.displayName = "DialogModalForm"),
					(DialogModalForm.__docgenInfo = {
						description: "",
						displayName: "DialogModalForm",
						props: {
							alert: {
								defaultValue: null,
								description:
									"Alert component that will be rendered above the form.",
								name: "alert",
								required: !1,
								type: { name: "ReactNode" },
							},
							children: {
								defaultValue: null,
								description:
									"Form field components. They will be able to access `react-hook-form`'s form context.",
								name: "children",
								required: !0,
								type: { name: "ReactNode | ReactNode[]" },
							},
							formSubmitButtonText: {
								defaultValue: null,
								description:
									"Text that will be rendered inside the form submit button.",
								name: "formSubmitButtonText",
								required: !0,
								type: { name: "string" },
							},
							handleSubmit: {
								defaultValue: null,
								description:
									"Function that will be called when the form is submitted.",
								name: "handleSubmit",
								required: !0,
								type: {
									name: "((fieldValues: TFieldValues) => Promise<void>) | ((fieldValues: TFieldValues) => void)",
								},
							},
							isError: {
								defaultValue: null,
								description:
									"Whether the dialog modal is in an error state.",
								name: "isError",
								required: !1,
								type: { name: "boolean" },
							},
							isLoading: {
								defaultValue: null,
								description:
									"Whether the dialog modal is loading.",
								name: "isLoading",
								required: !1,
								type: { name: "boolean" },
							},
							onClickTryAgain: {
								defaultValue: null,
								description:
									'Function to call when the "Try again" button is clicked.',
								name: "onClickTryAgain",
								required: !1,
								type: {
									name: "(() => unknown) | (() => Promise<unknown>)",
								},
							},
							resolver: {
								defaultValue: null,
								description:
									"Custom resolver for `react-hook-form`.",
								name: "resolver",
								required: !1,
								type: { name: "Resolver<TFieldValues, any>" },
							},
							strErrorDescription: {
								defaultValue: null,
								description: "Description of the error.",
								name: "strErrorDescription",
								required: !1,
								type: { name: "string" },
							},
							strErrorTitle: {
								defaultValue: null,
								description: "Title of the error.",
								name: "strErrorTitle",
								required: !1,
								type: { name: "string" },
							},
							strTryAgain: {
								defaultValue: null,
								description: 'Text for the "Try again" button.',
								name: "strTryAgain",
								required: !1,
								type: { name: "string" },
							},
							title: {
								defaultValue: null,
								description: "Title of the dialog modal.",
								name: "title",
								required: !0,
								type: { name: "string" },
							},
							triggerNode: {
								defaultValue: null,
								description:
									"Node that will trigger the dialog modal when clicked.",
								name: "triggerNode",
								required: !1,
								type: { name: "ReactNode" },
							},
							width: {
								defaultValue: null,
								description: "Width of the dialog modal.",
								name: "width",
								required: !0,
								type: { name: '"lg" | "sm"' },
							},
							wrapperProps: {
								defaultValue: null,
								description:
									"Props that will be passed to the wrapper `Box` component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							ref: {
								defaultValue: null,
								description:
									"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
								name: "ref",
								required: !1,
								type: { name: "Ref<HTMLDialogElement>" },
							},
							key: {
								defaultValue: null,
								description: "",
								name: "key",
								required: !1,
								type: { name: "Key" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/dialog_modal_form/index.tsx#DialogModalForm"
						] = {
							docgenInfo: DialogModalForm.__docgenInfo,
							name: "DialogModalForm",
							path: "src/components/dialog_modal_form/index.tsx#DialogModalForm",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/dialog_modal_form/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					WidthLg: () => WidthLg,
					WidthSm: () => WidthSm,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__(
						"./node_modules/@hookform/resolvers/zod/dist/zod.mjs",
					),
				_storybook_jest__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						"./node_modules/@storybook/jest/dist/esm/index.js",
					),
				zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					"./node_modules/zod/lib/index.mjs",
				),
				___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					"./src/components/dialog_modal_form/index.tsx",
				),
				_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./mocks/LOREM.mock.ts"),
				_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					"./src/components/button/index.tsx",
				),
				_form_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					"./src/components/form_input/index.tsx",
				),
				_form_radio_button_group__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						"./src/components/form_radio_button_group/index.tsx",
					),
				_form_select_single__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						"./src/components/form_select_single/index.tsx",
					),
				_form_text_area__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						"./src/components/form_text_area/index.tsx",
					),
				_radio_button_group_mocks__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						"./src/components/radio_button_group/mocks.tsx",
					),
				_select_mocks_select_mock__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						"./src/components/select/__mocks__/select.mock.tsx",
					),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			const mockFormSchema = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({
					description: zod__WEBPACK_IMPORTED_MODULE_11__.z
						.string()
						.min(1),
					email: zod__WEBPACK_IMPORTED_MODULE_11__.z
						.string()
						.email()
						.min(2),
					radio: zod__WEBPACK_IMPORTED_MODULE_11__.z.string().min(1),
					select: zod__WEBPACK_IMPORTED_MODULE_11__.z.string().min(1),
				}),
				handleFormSubmissionMock =
					_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.e.fn(
						async (fieldValues) =>
							alert(
								`Form submitted successfully \n ${JSON.stringify(
									fieldValues,
									null,
									2,
								)}`,
							),
					),
				FORM_FIELD_WRAPPER_PROPS = { marginBottom: "space_6" },
				__WEBPACK_DEFAULT_EXPORT__ = {
					component: ___WEBPACK_IMPORTED_MODULE_1__.B,
					title: "Components/DialogModalForm",
				},
				Template = ({ ...rest }) =>
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
						___WEBPACK_IMPORTED_MODULE_1__.B,
						{ ...rest },
					);
			Template.displayName = "Template";
			const WidthSm = {
					args: {
						children: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_input__WEBPACK_IMPORTED_MODULE_4__.y,
										{
											errorMessage:
												"Enter a valid email address",
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelEmail(),
											name: "email",
											placeholder:
												"Enter your email address",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_text_area__WEBPACK_IMPORTED_MODULE_7__.l,
										{
											errorMessage:
												"Enter a valid description",
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelDescription(),
											name: "description",
											placeholder:
												"Enter your description",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_select_single__WEBPACK_IMPORTED_MODULE_6__.m,
										{
											errorMessage: "Select an option",
											items: (0,
											_select_mocks_select_mock__WEBPACK_IMPORTED_MODULE_9__.St)(
												{},
											),
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelDropdown(),
											name: "select",
											placeholder:
												"Select an option from the dropdown",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_radio_button_group__WEBPACK_IMPORTED_MODULE_5__.z,
										{
											errorMessage: "Select an option",
											id: "select",
											items: _radio_button_group_mocks__WEBPACK_IMPORTED_MODULE_8__.$,
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelDropdown(),
											name: "radio",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
								],
							},
						),
						formSubmitButtonText: "Submit",
						handleSubmit: handleFormSubmissionMock,
						resolver: (0,
						_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_12__.F)(
							mockFormSchema,
						),
						title: "Dialog modal form",
						triggerNode: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
							_button__WEBPACK_IMPORTED_MODULE_3__.z,
							{ name: "dialog_trigger", children: "Open dialog" },
						),
					},
					render: Template,
				},
				WidthLg = {
					args: {
						children: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_input__WEBPACK_IMPORTED_MODULE_4__.y,
										{
											errorMessage:
												"Enter a valid email address",
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelEmail(),
											name: "email",
											placeholder:
												"Enter your email address",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_text_area__WEBPACK_IMPORTED_MODULE_7__.l,
										{
											errorMessage:
												"Enter a valid description",
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelDescription(),
											name: "description",
											placeholder:
												"Enter your description",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
										_form_select_single__WEBPACK_IMPORTED_MODULE_6__.m,
										{
											errorMessage: "Select an option",
											items: (0,
											_select_mocks_select_mock__WEBPACK_IMPORTED_MODULE_9__.St)(
												{},
											),
											label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.labelDropdown(),
											name: "select",
											placeholder:
												"Select an option from the dropdown",
											wrapperProps:
												FORM_FIELD_WRAPPER_PROPS,
										},
									),
								],
							},
						),
						formSubmitButtonText: "Submit",
						handleSubmit: handleFormSubmissionMock,
						resolver: (0,
						_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_12__.F)(
							mockFormSchema,
						),
						title: "Dialog modal form",
						triggerNode: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
							_button__WEBPACK_IMPORTED_MODULE_3__.z,
							{ name: "dialog_trigger", children: "Open dialog" },
						),
						width: "lg",
					},
					render: Template,
				};
		},
		"./src/components/form_input/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { y: () => FormInput });
			var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						"./node_modules/react-hook-form/dist/index.esm.mjs",
					),
				_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./src/components/input/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function FormInput({
				defaultValue,
				invalid,
				name,
				onChange,
				wrapperProps = { marginBottom: "space_6" },
				...rest
			}) {
				const { control } = (0,
					react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Gc)(),
					{
						field: {
							onBlur,
							onChange: reactHookFormOnChange,
							ref,
							value: controlledValue = "",
						},
						fieldState: { error },
					} = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.bc)({
						control,
						defaultValue,
						name,
					});
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
					_input__WEBPACK_IMPORTED_MODULE_0__.I,
					{
						errorMessage: error?.message,
						invalid: invalid || !!error,
						name,
						onBlur,
						onChange: (e) => {
							onChange?.(e), reactHookFormOnChange(e);
						},
						ref,
						value: controlledValue,
						wrapperProps,
						...rest,
					},
				);
			}
			FormInput.displayName = "FormInput";
			try {
				(FormInput.displayName = "FormInput"),
					(FormInput.__docgenInfo = {
						description: "",
						displayName: "FormInput",
						props: {
							autoComplete: {
								defaultValue: null,
								description: "",
								name: "autoComplete",
								required: !1,
								type: { name: "string" },
							},
							disabled: {
								defaultValue: null,
								description: "",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							value: {
								defaultValue: null,
								description: "",
								name: "value",
								required: !1,
								type: {
									name: "string | number | readonly string[]",
								},
							},
							onChange: {
								defaultValue: null,
								description: "",
								name: "onChange",
								required: !1,
								type: {
									name: "ChangeEventHandler<HTMLInputElement>",
								},
							},
							defaultValue: {
								defaultValue: null,
								description: "",
								name: "defaultValue",
								required: !1,
								type: {
									name: "string | number | readonly string[]",
								},
							},
							autoFocus: {
								defaultValue: null,
								description: "",
								name: "autoFocus",
								required: !1,
								type: { name: "boolean" },
							},
							className: {
								defaultValue: null,
								description: "",
								name: "className",
								required: !1,
								type: { name: "string" },
							},
							inputMode: {
								defaultValue: null,
								description:
									"Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute",
								name: "inputMode",
								required: !1,
								type: {
									name: '"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"',
								},
							},
							onFocus: {
								defaultValue: null,
								description: "",
								name: "onFocus",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLInputElement>",
								},
							},
							onBlur: {
								defaultValue: null,
								description: "",
								name: "onBlur",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLInputElement>",
								},
							},
							onClick: {
								defaultValue: null,
								description: "",
								name: "onClick",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLInputElement>",
								},
							},
							onMouseLeave: {
								defaultValue: null,
								description: "",
								name: "onMouseLeave",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLInputElement>",
								},
							},
							onMouseOver: {
								defaultValue: null,
								description: "",
								name: "onMouseOver",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLInputElement>",
								},
							},
							type: {
								defaultValue: null,
								description: "",
								name: "type",
								required: !1,
								type: { name: "HTMLInputTypeAttribute" },
							},
							alignItems: {
								defaultValue: null,
								description: "",
								name: "alignItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch" | "baseline"',
								},
							},
							aspectRatio: {
								defaultValue: null,
								description: "",
								name: "aspectRatio",
								required: !1,
								type: {
									name: '"square" | "extraWide" | "tall" | "wide"',
								},
							},
							background: {
								defaultValue: null,
								description: "",
								name: "background",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							border: {
								defaultValue: null,
								description: "",
								name: "border",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderBottom: {
								defaultValue: null,
								description: "",
								name: "borderBottom",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderLeft: {
								defaultValue: null,
								description: "",
								name: "borderLeft",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderRadius: {
								defaultValue: null,
								description: "",
								name: "borderRadius",
								required: !1,
								type: {
									name: '"50%" | "lg" | "md" | "pill" | "sm"',
								},
							},
							borderRight: {
								defaultValue: null,
								description: "",
								name: "borderRight",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderTop: {
								defaultValue: null,
								description: "",
								name: "borderTop",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							bottom: {
								defaultValue: null,
								description: "",
								name: "bottom",
								required: !1,
								type: { name: '"0"' },
							},
							boxShadow: {
								defaultValue: null,
								description: "",
								name: "boxShadow",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							color: {
								defaultValue: null,
								description: "",
								name: "color",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							flex: {
								defaultValue: null,
								description: "",
								name: "flex",
								required: !1,
								type: {
									name: '"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"',
								},
							},
							flexGrow: {
								defaultValue: null,
								description: "",
								name: "flexGrow",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexShrink: {
								defaultValue: null,
								description: "",
								name: "flexShrink",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexWrap: {
								defaultValue: null,
								description: "",
								name: "flexWrap",
								required: !1,
								type: { name: '"wrap" | "nowrap"' },
							},
							fontSize: {
								defaultValue: null,
								description: "",
								name: "fontSize",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							fontWeight: {
								defaultValue: null,
								description: "",
								name: "fontWeight",
								required: !1,
								type: {
									name: '"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"',
								},
							},
							height: {
								defaultValue: null,
								description: "",
								name: "height",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							inset: {
								defaultValue: null,
								description: "",
								name: "inset",
								required: !1,
								type: { name: '"0"' },
							},
							isolation: {
								defaultValue: null,
								description: "",
								name: "isolation",
								required: !1,
								type: { name: '"isolate"' },
							},
							justifyContent: {
								defaultValue: null,
								description: "",
								name: "justifyContent",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "space-around" | "space-between" | "stretch"',
								},
							},
							left: {
								defaultValue: null,
								description: "",
								name: "left",
								required: !1,
								type: { name: '"0"' },
							},
							lineHeight: {
								defaultValue: null,
								description: "",
								name: "lineHeight",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							margin: {
								defaultValue: null,
								description: "",
								name: "margin",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginBottom: {
								defaultValue: null,
								description: "",
								name: "marginBottom",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginLeft: {
								defaultValue: null,
								description: "",
								name: "marginLeft",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginRight: {
								defaultValue: null,
								description: "",
								name: "marginRight",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginTop: {
								defaultValue: null,
								description: "",
								name: "marginTop",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							maxHeight: {
								defaultValue: null,
								description: "",
								name: "maxHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							maxWidth: {
								defaultValue: null,
								description: "",
								name: "maxWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							minHeight: {
								defaultValue: null,
								description: "",
								name: "minHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							minWidth: {
								defaultValue: null,
								description: "",
								name: "minWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							overflowX: {
								defaultValue: null,
								description: "",
								name: "overflowX",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							overflowY: {
								defaultValue: null,
								description: "",
								name: "overflowY",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							right: {
								defaultValue: null,
								description: "",
								name: "right",
								required: !1,
								type: { name: '"0"' },
							},
							textAlign: {
								defaultValue: null,
								description: "",
								name: "textAlign",
								required: !1,
								type: { name: '"right" | "left" | "center"' },
							},
							textDecoration: {
								defaultValue: null,
								description: "",
								name: "textDecoration",
								required: !1,
								type: {
									name: '"none" | "line-through" | "underline"',
								},
							},
							textTransform: {
								defaultValue: null,
								description: "",
								name: "textTransform",
								required: !1,
								type: {
									name: '"capitalize" | "lowercase" | "uppercase"',
								},
							},
							top: {
								defaultValue: null,
								description: "",
								name: "top",
								required: !1,
								type: { name: '"0"' },
							},
							whiteSpace: {
								defaultValue: null,
								description: "",
								name: "whiteSpace",
								required: !1,
								type: { name: '"normal" | "nowrap"' },
							},
							zIndex: {
								defaultValue: null,
								description: "",
								name: "zIndex",
								required: !1,
								type: { name: '"1" | "-1"' },
							},
							fontStyle: {
								defaultValue: null,
								description: "",
								name: "fontStyle",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							marginX: {
								defaultValue: null,
								description: "",
								name: "marginX",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginY: {
								defaultValue: null,
								description: "",
								name: "marginY",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							overflow: {
								defaultValue: null,
								description: "",
								name: "overflow",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							placeItems: {
								defaultValue: null,
								description: "",
								name: "placeItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch"',
								},
							},
							display: {
								defaultValue: null,
								description: "",
								name: "display",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							flexDirection: {
								defaultValue: null,
								description: "",
								name: "flexDirection",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							gap: {
								defaultValue: null,
								description: "",
								name: "gap",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							gridTemplateColumns: {
								defaultValue: null,
								description: "",
								name: "gridTemplateColumns",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							padding: {
								defaultValue: null,
								description: "",
								name: "padding",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingBottom: {
								defaultValue: null,
								description: "",
								name: "paddingBottom",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingLeft: {
								defaultValue: null,
								description: "",
								name: "paddingLeft",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingRight: {
								defaultValue: null,
								description: "",
								name: "paddingRight",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingTop: {
								defaultValue: null,
								description: "",
								name: "paddingTop",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							position: {
								defaultValue: null,
								description: "",
								name: "position",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							width: {
								defaultValue: null,
								description: "",
								name: "width",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 30 more ...; "min-content": CSSVarFunction; }, { ...; }>>',
								},
							},
							paddingX: {
								defaultValue: null,
								description: "",
								name: "paddingX",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingY: {
								defaultValue: null,
								description: "",
								name: "paddingY",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							colorOverlay: {
								defaultValue: null,
								description:
									"Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.",
								name: "colorOverlay",
								required: !1,
								type: {
									name: '"blue" | "green" | "grey" | "red" | "default" | "amber"',
								},
							},
							description: {
								defaultValue: null,
								description:
									"Description shown under the field (when there is no error message).",
								name: "description",
								required: !1,
								type: { name: "ReactNode" },
							},
							hideLastpass: {
								defaultValue: null,
								description:
									"Whether to hide the Lastpass icon or not.",
								name: "hideLastpass",
								required: !1,
								type: { name: "boolean" },
							},
							name: {
								defaultValue: null,
								description:
									"Unique name for the element.\nHTML element id\n@important Should be a *snake_case* string.\n@important This will be used as the HTML element ID.",
								name: "name",
								required: !0,
								type: { name: "string" },
							},
							addonLeft: {
								defaultValue: null,
								description:
									"Addon to be rendered on the left side of the field.",
								name: "addonLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							addonRight: {
								defaultValue: null,
								description:
									"Addon to be rendered on the right side of the field.",
								name: "addonRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							isClearable: {
								defaultValue: null,
								description:
									"Whether the input is clearable or not.",
								name: "isClearable",
								required: !1,
								type: { name: "true" },
							},
							readOnly: {
								defaultValue: null,
								description:
									"Whether the input is read-only or not.",
								name: "readOnly",
								required: !1,
								type: { name: "boolean" },
							},
							strClear: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered.",
								name: "strClear",
								required: !1,
								type: { name: "string" },
							},
							isCopyable: {
								defaultValue: null,
								description:
									"Whether the input is copyable or not.",
								name: "isCopyable",
								required: !1,
								type: { name: "true" },
							},
							strCopied: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered after copying.",
								name: "strCopied",
								required: !1,
								type: { name: "string" },
							},
							strCopy: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered before copying.",
								name: "strCopy",
								required: !1,
								type: { name: "string" },
							},
							isVisibilityToggleable: {
								defaultValue: null,
								description:
									"Whether the input field value visibility can be toggled or not.",
								name: "isVisibilityToggleable",
								required: !1,
								type: { name: "true" },
							},
							isVisible: {
								defaultValue: null,
								description:
									"Whether the input field value is visible or not.",
								name: "isVisible",
								required: !1,
								type: { name: "boolean" },
							},
							strHide: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered when value is hidden.",
								name: "strHide",
								required: !1,
								type: { name: "string" },
							},
							strShow: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered when value is visible.",
								name: "strShow",
								required: !1,
								type: { name: "string" },
							},
							isLabelVisible: {
								defaultValue: null,
								description:
									"Whether the label is visible or not.",
								name: "isLabelVisible",
								required: !1,
								type: { name: "boolean" },
							},
							label: {
								defaultValue: null,
								description: "Text for HTML label element",
								name: "label",
								required: !1,
								type: { name: "string" },
							},
							labelProps: {
								defaultValue: null,
								description: "Props for FieldLabel component",
								name: "labelProps",
								required: !1,
								type: {
									name: 'Omit<FieldLabelProps, "label">',
								},
							},
							labelTooltip: {
								defaultValue: null,
								description: "Optional tooltip for label",
								name: "labelTooltip",
								required: !1,
								type: { name: "string" },
							},
							placeholder: {
								defaultValue: null,
								description:
									"Placeholder shown on empty field.",
								name: "placeholder",
								required: !1,
								type: { name: "string" },
							},
							size: {
								defaultValue: null,
								description:
									"Consistent size option shared across multiple components.",
								name: "size",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							slotLeft: {
								defaultValue: null,
								description:
									"React node(s) rendered on the left-hand side.",
								name: "slotLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							slotRight: {
								defaultValue: null,
								description:
									"React node(s) rendered on the right-hand side.",
								name: "slotRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							errorMessage: {
								defaultValue: null,
								description:
									"Message shown when field fails validation.",
								name: "errorMessage",
								required: !1,
								type: { name: "ReactNode" },
							},
							invalid: {
								defaultValue: null,
								description:
									"Whether the value of the field fails validation.",
								name: "invalid",
								required: !1,
								type: { name: "boolean" },
							},
							wrapperProps: {
								defaultValue: {
									value: '{ marginBottom: "space_6" }',
								},
								description: "Props for the wrapper component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							hasBorder: {
								defaultValue: null,
								description:
									"Whether to render the input with a border.",
								name: "hasBorder",
								required: !1,
								type: { name: "boolean" },
							},
							outerRef: {
								defaultValue: null,
								description:
									"A ref to the outer element. (e.g. for positioning an element along with the input)",
								name: "outerRef",
								required: !1,
								type: { name: "ForwardedRef<HTMLDivElement>" },
							},
							selectionRange: {
								defaultValue: null,
								description: "",
								name: "selectionRange",
								required: !1,
								type: {
									name: "{ end: number; start: number; }",
								},
							},
							validate: {
								defaultValue: null,
								description: "Function to validate field value",
								name: "validate",
								required: !1,
								type: {
									name: "Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>",
								},
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form_input/index.tsx#FormInput"
						] = {
							docgenInfo: FormInput.__docgenInfo,
							name: "FormInput",
							path: "src/components/form_input/index.tsx#FormInput",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/form_radio_button_group/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				z: () => FormRadioButtonGroup,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				react_hook_form__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/react-hook-form/dist/index.esm.mjs",
					),
				_radio_button_group__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						"./src/components/radio_button_group/index.tsx",
					),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function FormRadioButtonGroup({
				defaultValue,
				invalid,
				name,
				onChange: onChangeParent,
				wrapperProps = { marginBottom: "space_6" },
				...rest
			}) {
				const { control } = (0,
					react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Gc)(),
					{
						field: {
							onBlur,
							onChange,
							ref,
							value: controlledValue = "",
						},
						fieldState: { error },
					} = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.bc)({
						control,
						defaultValue,
						name,
					}),
					handleChange = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						(value) => {
							onChange(value), onChangeParent?.(value);
						},
						[onChange, onChangeParent],
					);
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_radio_button_group__WEBPACK_IMPORTED_MODULE_1__.S,
					{
						defaultValue,
						errorMessage: error?.message,
						inputProps: { onBlur },
						invalid: invalid || !!error,
						name,
						onChange: handleChange,
						ref,
						value: controlledValue,
						wrapperProps,
						...rest,
					},
				);
			}
			FormRadioButtonGroup.displayName = "FormRadioButtonGroup";
			try {
				(FormRadioButtonGroup.displayName = "FormRadioButtonGroup"),
					(FormRadioButtonGroup.__docgenInfo = {
						description: "",
						displayName: "FormRadioButtonGroup",
						props: {
							alignItems: {
								defaultValue: null,
								description: "",
								name: "alignItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch" | "baseline"',
								},
							},
							aspectRatio: {
								defaultValue: null,
								description: "",
								name: "aspectRatio",
								required: !1,
								type: {
									name: '"square" | "extraWide" | "tall" | "wide"',
								},
							},
							background: {
								defaultValue: null,
								description: "",
								name: "background",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							border: {
								defaultValue: null,
								description: "",
								name: "border",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderBottom: {
								defaultValue: null,
								description: "",
								name: "borderBottom",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderLeft: {
								defaultValue: null,
								description: "",
								name: "borderLeft",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderRadius: {
								defaultValue: null,
								description: "",
								name: "borderRadius",
								required: !1,
								type: {
									name: '"50%" | "lg" | "md" | "pill" | "sm"',
								},
							},
							borderRight: {
								defaultValue: null,
								description: "",
								name: "borderRight",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderTop: {
								defaultValue: null,
								description: "",
								name: "borderTop",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							bottom: {
								defaultValue: null,
								description: "",
								name: "bottom",
								required: !1,
								type: { name: '"0"' },
							},
							boxShadow: {
								defaultValue: null,
								description: "",
								name: "boxShadow",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							color: {
								defaultValue: null,
								description: "",
								name: "color",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							flex: {
								defaultValue: null,
								description: "",
								name: "flex",
								required: !1,
								type: {
									name: '"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"',
								},
							},
							flexGrow: {
								defaultValue: null,
								description: "",
								name: "flexGrow",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexShrink: {
								defaultValue: null,
								description: "",
								name: "flexShrink",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexWrap: {
								defaultValue: null,
								description: "",
								name: "flexWrap",
								required: !1,
								type: { name: '"wrap" | "nowrap"' },
							},
							fontSize: {
								defaultValue: null,
								description: "",
								name: "fontSize",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							fontWeight: {
								defaultValue: null,
								description: "",
								name: "fontWeight",
								required: !1,
								type: {
									name: '"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"',
								},
							},
							height: {
								defaultValue: null,
								description: "",
								name: "height",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							inset: {
								defaultValue: null,
								description: "",
								name: "inset",
								required: !1,
								type: { name: '"0"' },
							},
							isolation: {
								defaultValue: null,
								description: "",
								name: "isolation",
								required: !1,
								type: { name: '"isolate"' },
							},
							justifyContent: {
								defaultValue: null,
								description: "",
								name: "justifyContent",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "space-around" | "space-between" | "stretch"',
								},
							},
							left: {
								defaultValue: null,
								description: "",
								name: "left",
								required: !1,
								type: { name: '"0"' },
							},
							lineHeight: {
								defaultValue: null,
								description: "",
								name: "lineHeight",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							margin: {
								defaultValue: null,
								description: "",
								name: "margin",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginBottom: {
								defaultValue: null,
								description: "",
								name: "marginBottom",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginLeft: {
								defaultValue: null,
								description: "",
								name: "marginLeft",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginRight: {
								defaultValue: null,
								description: "",
								name: "marginRight",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginTop: {
								defaultValue: null,
								description: "",
								name: "marginTop",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							maxHeight: {
								defaultValue: null,
								description: "",
								name: "maxHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							maxWidth: {
								defaultValue: null,
								description: "",
								name: "maxWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							minHeight: {
								defaultValue: null,
								description: "",
								name: "minHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							minWidth: {
								defaultValue: null,
								description: "",
								name: "minWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							overflowX: {
								defaultValue: null,
								description: "",
								name: "overflowX",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							overflowY: {
								defaultValue: null,
								description: "",
								name: "overflowY",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							right: {
								defaultValue: null,
								description: "",
								name: "right",
								required: !1,
								type: { name: '"0"' },
							},
							textAlign: {
								defaultValue: null,
								description: "",
								name: "textAlign",
								required: !1,
								type: { name: '"right" | "left" | "center"' },
							},
							textDecoration: {
								defaultValue: null,
								description: "",
								name: "textDecoration",
								required: !1,
								type: {
									name: '"none" | "line-through" | "underline"',
								},
							},
							textTransform: {
								defaultValue: null,
								description: "",
								name: "textTransform",
								required: !1,
								type: {
									name: '"capitalize" | "lowercase" | "uppercase"',
								},
							},
							top: {
								defaultValue: null,
								description: "",
								name: "top",
								required: !1,
								type: { name: '"0"' },
							},
							whiteSpace: {
								defaultValue: null,
								description: "",
								name: "whiteSpace",
								required: !1,
								type: { name: '"normal" | "nowrap"' },
							},
							zIndex: {
								defaultValue: null,
								description: "",
								name: "zIndex",
								required: !1,
								type: { name: '"1" | "-1"' },
							},
							fontStyle: {
								defaultValue: null,
								description: "",
								name: "fontStyle",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							marginX: {
								defaultValue: null,
								description: "",
								name: "marginX",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginY: {
								defaultValue: null,
								description: "",
								name: "marginY",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							overflow: {
								defaultValue: null,
								description: "",
								name: "overflow",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							placeItems: {
								defaultValue: null,
								description: "",
								name: "placeItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch"',
								},
							},
							display: {
								defaultValue: null,
								description: "",
								name: "display",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							flexDirection: {
								defaultValue: null,
								description: "",
								name: "flexDirection",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							gap: {
								defaultValue: null,
								description: "",
								name: "gap",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							gridTemplateColumns: {
								defaultValue: null,
								description: "",
								name: "gridTemplateColumns",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							padding: {
								defaultValue: null,
								description: "",
								name: "padding",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingBottom: {
								defaultValue: null,
								description: "",
								name: "paddingBottom",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingLeft: {
								defaultValue: null,
								description: "",
								name: "paddingLeft",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingRight: {
								defaultValue: null,
								description: "",
								name: "paddingRight",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingTop: {
								defaultValue: null,
								description: "",
								name: "paddingTop",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							position: {
								defaultValue: null,
								description: "",
								name: "position",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							width: {
								defaultValue: null,
								description: "",
								name: "width",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 30 more ...; "min-content": CSSVarFunction; }, { ...; }>>',
								},
							},
							paddingX: {
								defaultValue: null,
								description: "",
								name: "paddingX",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingY: {
								defaultValue: null,
								description: "",
								name: "paddingY",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							wrapperProps: {
								defaultValue: {
									value: '{ marginBottom: "space_6" }',
								},
								description: "Props for the wrapper component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							errorMessage: {
								defaultValue: null,
								description:
									"Message shown when field fails validation.",
								name: "errorMessage",
								required: !1,
								type: { name: "ReactNode" },
							},
							invalid: {
								defaultValue: null,
								description:
									"Whether the value of the field fails validation.",
								name: "invalid",
								required: !1,
								type: { name: "boolean" },
							},
							name: {
								defaultValue: null,
								description:
									"Unique name for the element.\nHTML element id\n@important Should be a *snake_case* string.\n@important This will be used as the HTML element ID.",
								name: "name",
								required: !0,
								type: { name: "string" },
							},
							description: {
								defaultValue: null,
								description:
									"Description shown under the field (when there is no error message).",
								name: "description",
								required: !1,
								type: { name: "ReactNode" },
							},
							isLabelVisible: {
								defaultValue: null,
								description:
									"Whether the label is visible or not.",
								name: "isLabelVisible",
								required: !1,
								type: { name: "boolean" },
							},
							label: {
								defaultValue: null,
								description: "Text for HTML label element",
								name: "label",
								required: !1,
								type: { name: "string" },
							},
							labelProps: {
								defaultValue: null,
								description: "Props for FieldLabel component",
								name: "labelProps",
								required: !1,
								type: {
									name: 'Omit<FieldLabelProps, "label">',
								},
							},
							labelTooltip: {
								defaultValue: null,
								description: "Optional tooltip for label",
								name: "labelTooltip",
								required: !1,
								type: { name: "string" },
							},
							defaultValue: {
								defaultValue: null,
								description: "",
								name: "defaultValue",
								required: !1,
								type: { name: "string | number" },
							},
							id: {
								defaultValue: null,
								description: "",
								name: "id",
								required: !0,
								type: { name: "string" },
							},
							inputProps: {
								defaultValue: null,
								description: "",
								name: "inputProps",
								required: !1,
								type: { name: "RadioButtonInputProps" },
							},
							items: {
								defaultValue: null,
								description: "",
								name: "items",
								required: !0,
								type: { name: "RadioButtonShape[]" },
							},
							onChange: {
								defaultValue: null,
								description: "",
								name: "onChange",
								required: !1,
								type: { name: "(value: string) => void" },
							},
							required: {
								defaultValue: null,
								description: "",
								name: "required",
								required: !1,
								type: { name: "boolean" },
							},
							value: {
								defaultValue: null,
								description: "",
								name: "value",
								required: !1,
								type: { name: "string" },
							},
							validate: {
								defaultValue: null,
								description: "Function to validate field value",
								name: "validate",
								required: !1,
								type: {
									name: "Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>",
								},
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form_radio_button_group/index.tsx#FormRadioButtonGroup"
						] = {
							docgenInfo: FormRadioButtonGroup.__docgenInfo,
							name: "FormRadioButtonGroup",
							path: "src/components/form_radio_button_group/index.tsx#FormRadioButtonGroup",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/form_select_single/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				m: () => FormSelectSingle,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				react_hook_form__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/react-hook-form/dist/index.esm.mjs",
					),
				_select_flattenSelectItems__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						"./src/components/select/flattenSelectItems.ts",
					),
				_select_select_single__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						"./src/components/select/select_single/index.tsx",
					),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function FormSelectSingle({
				defaultValue,
				items,
				name,
				onChange: onChangeParent,
				wrapperProps = { marginBottom: "space_6" },
				...rest
			}) {
				const { control } = (0,
					react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Gc)(),
					{
						field: { onChange, ref },
						fieldState: { error },
					} = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.bc)({
						control,
						defaultValue,
						name,
					}),
					handleChange = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						(selection) => {
							onChange(selection?.value),
								onChangeParent?.(selection);
						},
						[onChange, onChangeParent],
					),
					defaultItem = (function getDefaultValueItem({
						items,
						value,
					}) {
						return items.find(
							(item) =>
								item.value.toString() === value?.toString(),
						);
					})({
						items: (0,
						_select_flattenSelectItems__WEBPACK_IMPORTED_MODULE_4__.y)(
							items,
						),
						value: defaultValue,
					});
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_select_select_single__WEBPACK_IMPORTED_MODULE_1__.N,
					{
						errorMessage: error?.message,
						initialSelectedItem: defaultItem,
						invalid: !!error,
						items,
						name,
						onChange: handleChange,
						ref,
						wrapperProps,
						...rest,
					},
				);
			}
			FormSelectSingle.displayName = "FormSelectSingle";
			try {
				(FormSelectSingle.displayName = "FormSelectSingle"),
					(FormSelectSingle.__docgenInfo = {
						description: "",
						displayName: "FormSelectSingle",
						props: {
							isClearable: {
								defaultValue: null,
								description:
									"Whether the input is clearable or not.",
								name: "isClearable",
								required: !1,
								type: { name: "true" },
							},
							strClear: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered.\nThe tooltip text to show when the item is filterable.",
								name: "strClear",
								required: !1,
								type: { name: "string" },
							},
							name: {
								defaultValue: null,
								description:
									"Unique name for the element.\nHTML element id\n@important Should be a *snake_case* string.\n@important This will be used as the HTML element ID.",
								name: "name",
								required: !0,
								type: { name: "string" },
							},
							placeholder: {
								defaultValue: null,
								description:
									"Placeholder shown on empty field.",
								name: "placeholder",
								required: !1,
								type: { name: "string" },
							},
							size: {
								defaultValue: null,
								description:
									"Consistent size option shared across multiple components.",
								name: "size",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							slotLeft: {
								defaultValue: null,
								description:
									"React node(s) rendered on the left-hand side.",
								name: "slotLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							slotRight: {
								defaultValue: null,
								description:
									"React node(s) rendered on the right-hand side.",
								name: "slotRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							description: {
								defaultValue: null,
								description:
									"Description shown under the field (when there is no error message).",
								name: "description",
								required: !1,
								type: { name: "ReactNode" },
							},
							disabled: {
								defaultValue: null,
								description:
									"Whether the component is disabled.",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							addonLeft: {
								defaultValue: null,
								description:
									"Addon to be rendered on the left side of the field.",
								name: "addonLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							addonRight: {
								defaultValue: null,
								description:
									"Addon to be rendered on the right side of the field.",
								name: "addonRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							errorMessage: {
								defaultValue: null,
								description:
									"Message shown when field fails validation.",
								name: "errorMessage",
								required: !1,
								type: { name: "ReactNode" },
							},
							invalid: {
								defaultValue: null,
								description:
									"Whether the value of the field fails validation.",
								name: "invalid",
								required: !1,
								type: { name: "boolean" },
							},
							wrapperProps: {
								defaultValue: {
									value: '{ marginBottom: "space_6" }',
								},
								description: "Props for the wrapper component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							isLabelVisible: {
								defaultValue: null,
								description:
									"Whether the label is visible or not.",
								name: "isLabelVisible",
								required: !1,
								type: { name: "boolean" },
							},
							label: {
								defaultValue: null,
								description: "Text for HTML label element",
								name: "label",
								required: !1,
								type: { name: "string" },
							},
							labelProps: {
								defaultValue: null,
								description: "Props for FieldLabel component",
								name: "labelProps",
								required: !1,
								type: {
									name: 'Omit<FieldLabelProps, "label">',
								},
							},
							labelTooltip: {
								defaultValue: null,
								description: "Optional tooltip for label",
								name: "labelTooltip",
								required: !1,
								type: { name: "string" },
							},
							isFilterable: {
								defaultValue: null,
								description: "Whether the item is filterable.",
								name: "isFilterable",
								required: !1,
								type: { name: "true" },
							},
							initialSelectedItem: {
								defaultValue: null,
								description:
									"Item to be preselected when the component mounts.",
								name: "initialSelectedItem",
								required: !1,
								type: {
									name: "SelectItemShape<TValue, TItemData>",
								},
							},
							inputProps: {
								defaultValue: null,
								description:
									"Props to customise the input element.",
								name: "inputProps",
								required: !1,
								type: {
									name: 'Partial<Omit<InputProps, "label" | "id" | "size" | "width" | "isLabelVisible" | "labelTooltip" | "labelProps" | "isVisibilityToggleable" | "isVisible" | "strHide" | "strShow" | ... 4 more ... | "strCopied">>',
								},
							},
							isOpen: {
								defaultValue: null,
								description:
									"Prop to toggle the open state of the dropdown.",
								name: "isOpen",
								required: !1,
								type: { name: "boolean" },
							},
							itemToString: {
								defaultValue: null,
								description:
									"Function to convert an item to a string.",
								name: "itemToString",
								required: !1,
								type: {
									name: "(item: SelectItemShape<TValue, TItemData>) => string",
								},
							},
							items: {
								defaultValue: null,
								description:
									"The items to render in the dropdown.",
								name: "items",
								required: !0,
								type: {
									name: "FlatSelectItems<TValue, TItemData> | GroupedSelectItems<TValue, TItemData>",
								},
							},
							onChange: {
								defaultValue: null,
								description:
									"Function called with the new selected item when the selection changes.",
								name: "onChange",
								required: !1,
								type: {
									name: "(selection: SelectItemShape<TValue, TItemData>) => void",
								},
							},
							onIsOpenChange: {
								defaultValue: null,
								description:
									"Function called with the new open state when the dropdown is opened or closed.",
								name: "onIsOpenChange",
								required: !1,
								type: {
									name: "(changes: UseComboboxStateChange<SelectItemShape<TValue, TItemData>>) => void",
								},
							},
							shouldClearFilterOnSelection: {
								defaultValue: null,
								description:
									"Whether the select should reset when an item is selected.",
								name: "shouldClearFilterOnSelection",
								required: !1,
								type: { name: "boolean" },
							},
							validate: {
								defaultValue: null,
								description: "Function to validate field value",
								name: "validate",
								required: !1,
								type: {
									name: "Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>",
								},
							},
							defaultValue: {
								defaultValue: null,
								description: "",
								name: "defaultValue",
								required: !1,
								type: { name: "string | number" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form_select_single/index.tsx#FormSelectSingle"
						] = {
							docgenInfo: FormSelectSingle.__docgenInfo,
							name: "FormSelectSingle",
							path: "src/components/form_select_single/index.tsx#FormSelectSingle",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/form_submit_button/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Z: () => FormSubmitButton,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					"./src/components/button/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			const FormSubmitButton = (0,
			react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
				({ children, ...rest }, ref) =>
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
						_button__WEBPACK_IMPORTED_MODULE_1__.z,
						{
							name: "submit",
							ref,
							size: "md",
							type: "submit",
							...rest,
							children,
						},
					),
			);
			try {
				(FormSubmitButton.displayName = "FormSubmitButton"),
					(FormSubmitButton.__docgenInfo = {
						description: "",
						displayName: "FormSubmitButton",
						props: {
							ref: {
								defaultValue: null,
								description:
									"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
								name: "ref",
								required: !1,
								type: { name: "Ref<HTMLButtonElement>" },
							},
							key: {
								defaultValue: null,
								description: "",
								name: "key",
								required: !1,
								type: { name: "Key" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form_submit_button/index.tsx#FormSubmitButton"
						] = {
							docgenInfo: FormSubmitButton.__docgenInfo,
							name: "FormSubmitButton",
							path: "src/components/form_submit_button/index.tsx#FormSubmitButton",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/form_text_area/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				l: () => FormTextArea,
			});
			var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						"./node_modules/react-hook-form/dist/index.esm.mjs",
					),
				_text_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./src/components/text_area/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function FormTextArea({
				defaultValue,
				name,
				wrapperProps = { marginBottom: "space_6" },
				...rest
			}) {
				const { control } = (0,
					react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Gc)(),
					{
						field: {
							onBlur,
							onChange,
							ref,
							value: controlledValue = "",
						},
						fieldState: { error },
					} = (0, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.bc)({
						control,
						defaultValue,
						name,
					});
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
					_text_area__WEBPACK_IMPORTED_MODULE_0__.K,
					{
						errorMessage: error?.message,
						invalid: !!error,
						name,
						onBlur,
						onChange,
						ref,
						value: controlledValue,
						wrapperProps,
						...rest,
					},
				);
			}
			FormTextArea.displayName = "FormTextArea";
			try {
				(FormTextArea.displayName = "FormTextArea"),
					(FormTextArea.__docgenInfo = {
						description: "",
						displayName: "FormTextArea",
						props: {
							title: {
								defaultValue: null,
								description: "",
								name: "title",
								required: !1,
								type: { name: "string" },
							},
							name: {
								defaultValue: null,
								description:
									"Unique name for the element.\nHTML element id\n@important Should be a *snake_case* string.\n@important This will be used as the HTML element ID.",
								name: "name",
								required: !1,
								type: { name: "string" },
							},
							form: {
								defaultValue: null,
								description: "",
								name: "form",
								required: !1,
								type: { name: "string" },
							},
							slot: {
								defaultValue: null,
								description: "",
								name: "slot",
								required: !1,
								type: { name: "string" },
							},
							style: {
								defaultValue: null,
								description: "",
								name: "style",
								required: !1,
								type: { name: "CSSProperties" },
							},
							key: {
								defaultValue: null,
								description: "",
								name: "key",
								required: !1,
								type: { name: "Key" },
							},
							autoComplete: {
								defaultValue: null,
								description: "",
								name: "autoComplete",
								required: !1,
								type: { name: "string" },
							},
							cols: {
								defaultValue: null,
								description: "",
								name: "cols",
								required: !1,
								type: { name: "number" },
							},
							dirName: {
								defaultValue: null,
								description: "",
								name: "dirName",
								required: !1,
								type: { name: "string" },
							},
							disabled: {
								defaultValue: null,
								description: "",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							maxLength: {
								defaultValue: null,
								description: "",
								name: "maxLength",
								required: !1,
								type: { name: "number" },
							},
							minLength: {
								defaultValue: null,
								description: "",
								name: "minLength",
								required: !1,
								type: { name: "number" },
							},
							placeholder: {
								defaultValue: null,
								description:
									"Placeholder shown on empty field.",
								name: "placeholder",
								required: !1,
								type: { name: "string" },
							},
							readOnly: {
								defaultValue: null,
								description:
									"Whether the input is read-only or not.",
								name: "readOnly",
								required: !1,
								type: { name: "boolean" },
							},
							required: {
								defaultValue: null,
								description: "",
								name: "required",
								required: !1,
								type: { name: "boolean" },
							},
							rows: {
								defaultValue: null,
								description: "",
								name: "rows",
								required: !1,
								type: { name: "number" },
							},
							value: {
								defaultValue: null,
								description: "",
								name: "value",
								required: !1,
								type: {
									name: "string | number | readonly string[]",
								},
							},
							wrap: {
								defaultValue: null,
								description: "",
								name: "wrap",
								required: !1,
								type: { name: "string" },
							},
							onChange: {
								defaultValue: null,
								description: "",
								name: "onChange",
								required: !1,
								type: {
									name: "ChangeEventHandler<HTMLTextAreaElement>",
								},
							},
							defaultChecked: {
								defaultValue: null,
								description: "",
								name: "defaultChecked",
								required: !1,
								type: { name: "boolean" },
							},
							defaultValue: {
								defaultValue: null,
								description: "",
								name: "defaultValue",
								required: !1,
								type: {
									name: "string | number | readonly string[]",
								},
							},
							suppressContentEditableWarning: {
								defaultValue: null,
								description: "",
								name: "suppressContentEditableWarning",
								required: !1,
								type: { name: "boolean" },
							},
							suppressHydrationWarning: {
								defaultValue: null,
								description: "",
								name: "suppressHydrationWarning",
								required: !1,
								type: { name: "boolean" },
							},
							accessKey: {
								defaultValue: null,
								description: "",
								name: "accessKey",
								required: !1,
								type: { name: "string" },
							},
							autoFocus: {
								defaultValue: null,
								description: "",
								name: "autoFocus",
								required: !1,
								type: { name: "boolean" },
							},
							className: {
								defaultValue: null,
								description: "",
								name: "className",
								required: !1,
								type: { name: "string" },
							},
							contentEditable: {
								defaultValue: null,
								description: "",
								name: "contentEditable",
								required: !1,
								type: { name: '"inherit" | Booleanish' },
							},
							contextMenu: {
								defaultValue: null,
								description: "",
								name: "contextMenu",
								required: !1,
								type: { name: "string" },
							},
							dir: {
								defaultValue: null,
								description: "",
								name: "dir",
								required: !1,
								type: { name: "string" },
							},
							draggable: {
								defaultValue: null,
								description: "",
								name: "draggable",
								required: !1,
								type: { name: "Booleanish" },
							},
							hidden: {
								defaultValue: null,
								description: "",
								name: "hidden",
								required: !1,
								type: { name: "boolean" },
							},
							lang: {
								defaultValue: null,
								description: "",
								name: "lang",
								required: !1,
								type: { name: "string" },
							},
							nonce: {
								defaultValue: null,
								description: "",
								name: "nonce",
								required: !1,
								type: { name: "string" },
							},
							spellCheck: {
								defaultValue: null,
								description: "",
								name: "spellCheck",
								required: !1,
								type: { name: "Booleanish" },
							},
							tabIndex: {
								defaultValue: null,
								description: "",
								name: "tabIndex",
								required: !1,
								type: { name: "number" },
							},
							translate: {
								defaultValue: null,
								description: "",
								name: "translate",
								required: !1,
								type: { name: '"yes" | "no"' },
							},
							radioGroup: {
								defaultValue: null,
								description: "",
								name: "radioGroup",
								required: !1,
								type: { name: "string" },
							},
							role: {
								defaultValue: null,
								description: "",
								name: "role",
								required: !1,
								type: { name: "AriaRole" },
							},
							about: {
								defaultValue: null,
								description: "",
								name: "about",
								required: !1,
								type: { name: "string" },
							},
							content: {
								defaultValue: null,
								description: "",
								name: "content",
								required: !1,
								type: { name: "string" },
							},
							datatype: {
								defaultValue: null,
								description: "",
								name: "datatype",
								required: !1,
								type: { name: "string" },
							},
							inlist: {
								defaultValue: null,
								description: "",
								name: "inlist",
								required: !1,
								type: { name: "any" },
							},
							prefix: {
								defaultValue: null,
								description: "",
								name: "prefix",
								required: !1,
								type: { name: "string" },
							},
							property: {
								defaultValue: null,
								description: "",
								name: "property",
								required: !1,
								type: { name: "string" },
							},
							rel: {
								defaultValue: null,
								description: "",
								name: "rel",
								required: !1,
								type: { name: "string" },
							},
							resource: {
								defaultValue: null,
								description: "",
								name: "resource",
								required: !1,
								type: { name: "string" },
							},
							rev: {
								defaultValue: null,
								description: "",
								name: "rev",
								required: !1,
								type: { name: "string" },
							},
							typeof: {
								defaultValue: null,
								description: "",
								name: "typeof",
								required: !1,
								type: { name: "string" },
							},
							vocab: {
								defaultValue: null,
								description: "",
								name: "vocab",
								required: !1,
								type: { name: "string" },
							},
							autoCapitalize: {
								defaultValue: null,
								description: "",
								name: "autoCapitalize",
								required: !1,
								type: { name: "string" },
							},
							autoCorrect: {
								defaultValue: null,
								description: "",
								name: "autoCorrect",
								required: !1,
								type: { name: "string" },
							},
							autoSave: {
								defaultValue: null,
								description: "",
								name: "autoSave",
								required: !1,
								type: { name: "string" },
							},
							itemProp: {
								defaultValue: null,
								description: "",
								name: "itemProp",
								required: !1,
								type: { name: "string" },
							},
							itemScope: {
								defaultValue: null,
								description: "",
								name: "itemScope",
								required: !1,
								type: { name: "boolean" },
							},
							itemType: {
								defaultValue: null,
								description: "",
								name: "itemType",
								required: !1,
								type: { name: "string" },
							},
							itemID: {
								defaultValue: null,
								description: "",
								name: "itemID",
								required: !1,
								type: { name: "string" },
							},
							itemRef: {
								defaultValue: null,
								description: "",
								name: "itemRef",
								required: !1,
								type: { name: "string" },
							},
							results: {
								defaultValue: null,
								description: "",
								name: "results",
								required: !1,
								type: { name: "number" },
							},
							security: {
								defaultValue: null,
								description: "",
								name: "security",
								required: !1,
								type: { name: "string" },
							},
							unselectable: {
								defaultValue: null,
								description: "",
								name: "unselectable",
								required: !1,
								type: { name: '"on" | "off"' },
							},
							inputMode: {
								defaultValue: null,
								description:
									"Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute",
								name: "inputMode",
								required: !1,
								type: {
									name: '"search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"',
								},
							},
							is: {
								defaultValue: null,
								description:
									"Specify that a standard HTML element should behave like a defined custom built-in element\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is",
								name: "is",
								required: !1,
								type: { name: "string" },
							},
							"aria-activedescendant": {
								defaultValue: null,
								description:
									"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
								name: "aria-activedescendant",
								required: !1,
								type: { name: "string" },
							},
							"aria-atomic": {
								defaultValue: null,
								description:
									"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
								name: "aria-atomic",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-autocomplete": {
								defaultValue: null,
								description:
									"Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
								name: "aria-autocomplete",
								required: !1,
								type: {
									name: '"none" | "both" | "inline" | "list"',
								},
							},
							"aria-busy": {
								defaultValue: null,
								description:
									"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.",
								name: "aria-busy",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-checked": {
								defaultValue: null,
								description:
									'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
								name: "aria-checked",
								required: !1,
								type: {
									name: 'boolean | "mixed" | "false" | "true"',
								},
							},
							"aria-colcount": {
								defaultValue: null,
								description:
									"Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
								name: "aria-colcount",
								required: !1,
								type: { name: "number" },
							},
							"aria-colindex": {
								defaultValue: null,
								description:
									"Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
								name: "aria-colindex",
								required: !1,
								type: { name: "number" },
							},
							"aria-colspan": {
								defaultValue: null,
								description:
									"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
								name: "aria-colspan",
								required: !1,
								type: { name: "number" },
							},
							"aria-controls": {
								defaultValue: null,
								description:
									"Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
								name: "aria-controls",
								required: !1,
								type: { name: "string" },
							},
							"aria-current": {
								defaultValue: null,
								description:
									"Indicates the element that represents the current item within a container or set of related elements.",
								name: "aria-current",
								required: !1,
								type: {
									name: 'boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date"',
								},
							},
							"aria-describedby": {
								defaultValue: null,
								description:
									"Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
								name: "aria-describedby",
								required: !1,
								type: { name: "string" },
							},
							"aria-details": {
								defaultValue: null,
								description:
									"Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
								name: "aria-details",
								required: !1,
								type: { name: "string" },
							},
							"aria-disabled": {
								defaultValue: null,
								description:
									"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
								name: "aria-disabled",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-dropeffect": {
								defaultValue: null,
								description:
									"Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
								name: "aria-dropeffect",
								required: !1,
								type: {
									name: '"link" | "none" | "copy" | "move" | "execute" | "popup"',
								},
							},
							"aria-errormessage": {
								defaultValue: null,
								description:
									"Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
								name: "aria-errormessage",
								required: !1,
								type: { name: "string" },
							},
							"aria-expanded": {
								defaultValue: null,
								description:
									"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
								name: "aria-expanded",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-flowto": {
								defaultValue: null,
								description:
									"Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
								name: "aria-flowto",
								required: !1,
								type: { name: "string" },
							},
							"aria-grabbed": {
								defaultValue: null,
								description:
									'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
								name: "aria-grabbed",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-haspopup": {
								defaultValue: null,
								description:
									"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
								name: "aria-haspopup",
								required: !1,
								type: {
									name: 'boolean | "dialog" | "menu" | "grid" | "listbox" | "false" | "true" | "tree"',
								},
							},
							"aria-hidden": {
								defaultValue: null,
								description:
									"Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
								name: "aria-hidden",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-invalid": {
								defaultValue: null,
								description:
									"Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
								name: "aria-invalid",
								required: !1,
								type: {
									name: 'boolean | "false" | "true" | "grammar" | "spelling"',
								},
							},
							"aria-keyshortcuts": {
								defaultValue: null,
								description:
									"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
								name: "aria-keyshortcuts",
								required: !1,
								type: { name: "string" },
							},
							"aria-label": {
								defaultValue: null,
								description:
									"Defines a string value that labels the current element.\n@see aria-labelledby.",
								name: "aria-label",
								required: !1,
								type: { name: "string" },
							},
							"aria-labelledby": {
								defaultValue: null,
								description:
									"Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
								name: "aria-labelledby",
								required: !1,
								type: { name: "string" },
							},
							"aria-level": {
								defaultValue: null,
								description:
									"Defines the hierarchical level of an element within a structure.",
								name: "aria-level",
								required: !1,
								type: { name: "number" },
							},
							"aria-live": {
								defaultValue: null,
								description:
									"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
								name: "aria-live",
								required: !1,
								type: {
									name: '"off" | "assertive" | "polite"',
								},
							},
							"aria-modal": {
								defaultValue: null,
								description:
									"Indicates whether an element is modal when displayed.",
								name: "aria-modal",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-multiline": {
								defaultValue: null,
								description:
									"Indicates whether a text box accepts multiple lines of input or only a single line.",
								name: "aria-multiline",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-multiselectable": {
								defaultValue: null,
								description:
									"Indicates that the user may select more than one item from the current selectable descendants.",
								name: "aria-multiselectable",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-orientation": {
								defaultValue: null,
								description:
									"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
								name: "aria-orientation",
								required: !1,
								type: { name: '"horizontal" | "vertical"' },
							},
							"aria-owns": {
								defaultValue: null,
								description:
									"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
								name: "aria-owns",
								required: !1,
								type: { name: "string" },
							},
							"aria-placeholder": {
								defaultValue: null,
								description:
									"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
								name: "aria-placeholder",
								required: !1,
								type: { name: "string" },
							},
							"aria-posinset": {
								defaultValue: null,
								description:
									"Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
								name: "aria-posinset",
								required: !1,
								type: { name: "number" },
							},
							"aria-pressed": {
								defaultValue: null,
								description:
									'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
								name: "aria-pressed",
								required: !1,
								type: {
									name: 'boolean | "mixed" | "false" | "true"',
								},
							},
							"aria-readonly": {
								defaultValue: null,
								description:
									"Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
								name: "aria-readonly",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-relevant": {
								defaultValue: null,
								description:
									"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
								name: "aria-relevant",
								required: !1,
								type: {
									name: '"text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
								},
							},
							"aria-required": {
								defaultValue: null,
								description:
									"Indicates that user input is required on the element before a form may be submitted.",
								name: "aria-required",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-roledescription": {
								defaultValue: null,
								description:
									"Defines a human-readable, author-localized description for the role of an element.",
								name: "aria-roledescription",
								required: !1,
								type: { name: "string" },
							},
							"aria-rowcount": {
								defaultValue: null,
								description:
									"Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
								name: "aria-rowcount",
								required: !1,
								type: { name: "number" },
							},
							"aria-rowindex": {
								defaultValue: null,
								description:
									"Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
								name: "aria-rowindex",
								required: !1,
								type: { name: "number" },
							},
							"aria-rowspan": {
								defaultValue: null,
								description:
									"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
								name: "aria-rowspan",
								required: !1,
								type: { name: "number" },
							},
							"aria-selected": {
								defaultValue: null,
								description:
									'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
								name: "aria-selected",
								required: !1,
								type: { name: "Booleanish" },
							},
							"aria-setsize": {
								defaultValue: null,
								description:
									"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
								name: "aria-setsize",
								required: !1,
								type: { name: "number" },
							},
							"aria-sort": {
								defaultValue: null,
								description:
									"Indicates if items in a table or grid are sorted in ascending or descending order.",
								name: "aria-sort",
								required: !1,
								type: {
									name: '"none" | "ascending" | "descending" | "other"',
								},
							},
							"aria-valuemax": {
								defaultValue: null,
								description:
									"Defines the maximum allowed value for a range widget.",
								name: "aria-valuemax",
								required: !1,
								type: { name: "number" },
							},
							"aria-valuemin": {
								defaultValue: null,
								description:
									"Defines the minimum allowed value for a range widget.",
								name: "aria-valuemin",
								required: !1,
								type: { name: "number" },
							},
							"aria-valuenow": {
								defaultValue: null,
								description:
									"Defines the current value for a range widget.\n@see aria-valuetext.",
								name: "aria-valuenow",
								required: !1,
								type: { name: "number" },
							},
							"aria-valuetext": {
								defaultValue: null,
								description:
									"Defines the human readable text alternative of aria-valuenow for a range widget.",
								name: "aria-valuetext",
								required: !1,
								type: { name: "string" },
							},
							dangerouslySetInnerHTML: {
								defaultValue: null,
								description: "",
								name: "dangerouslySetInnerHTML",
								required: !1,
								type: {
									name: "{ __html: string | TrustedHTML; }",
								},
							},
							onCopy: {
								defaultValue: null,
								description: "",
								name: "onCopy",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onCopyCapture: {
								defaultValue: null,
								description: "",
								name: "onCopyCapture",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onCut: {
								defaultValue: null,
								description: "",
								name: "onCut",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onCutCapture: {
								defaultValue: null,
								description: "",
								name: "onCutCapture",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onPaste: {
								defaultValue: null,
								description: "",
								name: "onPaste",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onPasteCapture: {
								defaultValue: null,
								description: "",
								name: "onPasteCapture",
								required: !1,
								type: {
									name: "ClipboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionEnd: {
								defaultValue: null,
								description: "",
								name: "onCompositionEnd",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionEndCapture: {
								defaultValue: null,
								description: "",
								name: "onCompositionEndCapture",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionStart: {
								defaultValue: null,
								description: "",
								name: "onCompositionStart",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionStartCapture: {
								defaultValue: null,
								description: "",
								name: "onCompositionStartCapture",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionUpdate: {
								defaultValue: null,
								description: "",
								name: "onCompositionUpdate",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onCompositionUpdateCapture: {
								defaultValue: null,
								description: "",
								name: "onCompositionUpdateCapture",
								required: !1,
								type: {
									name: "CompositionEventHandler<HTMLTextAreaElement>",
								},
							},
							onFocus: {
								defaultValue: null,
								description: "",
								name: "onFocus",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLTextAreaElement>",
								},
							},
							onFocusCapture: {
								defaultValue: null,
								description: "",
								name: "onFocusCapture",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLTextAreaElement>",
								},
							},
							onBlur: {
								defaultValue: null,
								description: "",
								name: "onBlur",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLTextAreaElement>",
								},
							},
							onBlurCapture: {
								defaultValue: null,
								description: "",
								name: "onBlurCapture",
								required: !1,
								type: {
									name: "FocusEventHandler<HTMLTextAreaElement>",
								},
							},
							onChangeCapture: {
								defaultValue: null,
								description: "",
								name: "onChangeCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onBeforeInput: {
								defaultValue: null,
								description: "",
								name: "onBeforeInput",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onBeforeInputCapture: {
								defaultValue: null,
								description: "",
								name: "onBeforeInputCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onInput: {
								defaultValue: null,
								description: "",
								name: "onInput",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onInputCapture: {
								defaultValue: null,
								description: "",
								name: "onInputCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onReset: {
								defaultValue: null,
								description: "",
								name: "onReset",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onResetCapture: {
								defaultValue: null,
								description: "",
								name: "onResetCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onSubmit: {
								defaultValue: null,
								description: "",
								name: "onSubmit",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onSubmitCapture: {
								defaultValue: null,
								description: "",
								name: "onSubmitCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onInvalid: {
								defaultValue: null,
								description: "",
								name: "onInvalid",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onInvalidCapture: {
								defaultValue: null,
								description: "",
								name: "onInvalidCapture",
								required: !1,
								type: {
									name: "FormEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoad: {
								defaultValue: null,
								description: "",
								name: "onLoad",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadCapture: {
								defaultValue: null,
								description: "",
								name: "onLoadCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onError: {
								defaultValue: null,
								description: "",
								name: "onError",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onErrorCapture: {
								defaultValue: null,
								description: "",
								name: "onErrorCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyDown: {
								defaultValue: null,
								description: "",
								name: "onKeyDown",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyDownCapture: {
								defaultValue: null,
								description: "",
								name: "onKeyDownCapture",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyPress: {
								defaultValue: null,
								description: "@deprecated",
								name: "onKeyPress",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyPressCapture: {
								defaultValue: null,
								description: "@deprecated",
								name: "onKeyPressCapture",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyUp: {
								defaultValue: null,
								description: "",
								name: "onKeyUp",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onKeyUpCapture: {
								defaultValue: null,
								description: "",
								name: "onKeyUpCapture",
								required: !1,
								type: {
									name: "KeyboardEventHandler<HTMLTextAreaElement>",
								},
							},
							onAbort: {
								defaultValue: null,
								description: "",
								name: "onAbort",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onAbortCapture: {
								defaultValue: null,
								description: "",
								name: "onAbortCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onCanPlay: {
								defaultValue: null,
								description: "",
								name: "onCanPlay",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onCanPlayCapture: {
								defaultValue: null,
								description: "",
								name: "onCanPlayCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onCanPlayThrough: {
								defaultValue: null,
								description: "",
								name: "onCanPlayThrough",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onCanPlayThroughCapture: {
								defaultValue: null,
								description: "",
								name: "onCanPlayThroughCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onDurationChange: {
								defaultValue: null,
								description: "",
								name: "onDurationChange",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onDurationChangeCapture: {
								defaultValue: null,
								description: "",
								name: "onDurationChangeCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEmptied: {
								defaultValue: null,
								description: "",
								name: "onEmptied",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEmptiedCapture: {
								defaultValue: null,
								description: "",
								name: "onEmptiedCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEncrypted: {
								defaultValue: null,
								description: "",
								name: "onEncrypted",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEncryptedCapture: {
								defaultValue: null,
								description: "",
								name: "onEncryptedCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEnded: {
								defaultValue: null,
								description: "",
								name: "onEnded",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onEndedCapture: {
								defaultValue: null,
								description: "",
								name: "onEndedCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadedData: {
								defaultValue: null,
								description: "",
								name: "onLoadedData",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadedDataCapture: {
								defaultValue: null,
								description: "",
								name: "onLoadedDataCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadedMetadata: {
								defaultValue: null,
								description: "",
								name: "onLoadedMetadata",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadedMetadataCapture: {
								defaultValue: null,
								description: "",
								name: "onLoadedMetadataCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadStart: {
								defaultValue: null,
								description: "",
								name: "onLoadStart",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onLoadStartCapture: {
								defaultValue: null,
								description: "",
								name: "onLoadStartCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPause: {
								defaultValue: null,
								description: "",
								name: "onPause",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPauseCapture: {
								defaultValue: null,
								description: "",
								name: "onPauseCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPlay: {
								defaultValue: null,
								description: "",
								name: "onPlay",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPlayCapture: {
								defaultValue: null,
								description: "",
								name: "onPlayCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPlaying: {
								defaultValue: null,
								description: "",
								name: "onPlaying",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onPlayingCapture: {
								defaultValue: null,
								description: "",
								name: "onPlayingCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onProgress: {
								defaultValue: null,
								description: "",
								name: "onProgress",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onProgressCapture: {
								defaultValue: null,
								description: "",
								name: "onProgressCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onRateChange: {
								defaultValue: null,
								description: "",
								name: "onRateChange",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onRateChangeCapture: {
								defaultValue: null,
								description: "",
								name: "onRateChangeCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onResize: {
								defaultValue: null,
								description: "",
								name: "onResize",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onResizeCapture: {
								defaultValue: null,
								description: "",
								name: "onResizeCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSeeked: {
								defaultValue: null,
								description: "",
								name: "onSeeked",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSeekedCapture: {
								defaultValue: null,
								description: "",
								name: "onSeekedCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSeeking: {
								defaultValue: null,
								description: "",
								name: "onSeeking",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSeekingCapture: {
								defaultValue: null,
								description: "",
								name: "onSeekingCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onStalled: {
								defaultValue: null,
								description: "",
								name: "onStalled",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onStalledCapture: {
								defaultValue: null,
								description: "",
								name: "onStalledCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSuspend: {
								defaultValue: null,
								description: "",
								name: "onSuspend",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSuspendCapture: {
								defaultValue: null,
								description: "",
								name: "onSuspendCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onTimeUpdate: {
								defaultValue: null,
								description: "",
								name: "onTimeUpdate",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onTimeUpdateCapture: {
								defaultValue: null,
								description: "",
								name: "onTimeUpdateCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onVolumeChange: {
								defaultValue: null,
								description: "",
								name: "onVolumeChange",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onVolumeChangeCapture: {
								defaultValue: null,
								description: "",
								name: "onVolumeChangeCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onWaiting: {
								defaultValue: null,
								description: "",
								name: "onWaiting",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onWaitingCapture: {
								defaultValue: null,
								description: "",
								name: "onWaitingCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onAuxClick: {
								defaultValue: null,
								description: "",
								name: "onAuxClick",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onAuxClickCapture: {
								defaultValue: null,
								description: "",
								name: "onAuxClickCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onClick: {
								defaultValue: null,
								description: "",
								name: "onClick",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onClickCapture: {
								defaultValue: null,
								description: "",
								name: "onClickCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onContextMenu: {
								defaultValue: null,
								description: "",
								name: "onContextMenu",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onContextMenuCapture: {
								defaultValue: null,
								description: "",
								name: "onContextMenuCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onDoubleClick: {
								defaultValue: null,
								description: "",
								name: "onDoubleClick",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onDoubleClickCapture: {
								defaultValue: null,
								description: "",
								name: "onDoubleClickCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onDrag: {
								defaultValue: null,
								description: "",
								name: "onDrag",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragCapture: {
								defaultValue: null,
								description: "",
								name: "onDragCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragEnd: {
								defaultValue: null,
								description: "",
								name: "onDragEnd",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragEndCapture: {
								defaultValue: null,
								description: "",
								name: "onDragEndCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragEnter: {
								defaultValue: null,
								description: "",
								name: "onDragEnter",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragEnterCapture: {
								defaultValue: null,
								description: "",
								name: "onDragEnterCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragExit: {
								defaultValue: null,
								description: "",
								name: "onDragExit",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragExitCapture: {
								defaultValue: null,
								description: "",
								name: "onDragExitCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragLeave: {
								defaultValue: null,
								description: "",
								name: "onDragLeave",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragLeaveCapture: {
								defaultValue: null,
								description: "",
								name: "onDragLeaveCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragOver: {
								defaultValue: null,
								description: "",
								name: "onDragOver",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragOverCapture: {
								defaultValue: null,
								description: "",
								name: "onDragOverCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragStart: {
								defaultValue: null,
								description: "",
								name: "onDragStart",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDragStartCapture: {
								defaultValue: null,
								description: "",
								name: "onDragStartCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDrop: {
								defaultValue: null,
								description: "",
								name: "onDrop",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onDropCapture: {
								defaultValue: null,
								description: "",
								name: "onDropCapture",
								required: !1,
								type: {
									name: "DragEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseDown: {
								defaultValue: null,
								description: "",
								name: "onMouseDown",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseDownCapture: {
								defaultValue: null,
								description: "",
								name: "onMouseDownCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseEnter: {
								defaultValue: null,
								description: "",
								name: "onMouseEnter",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseLeave: {
								defaultValue: null,
								description: "",
								name: "onMouseLeave",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseMove: {
								defaultValue: null,
								description: "",
								name: "onMouseMove",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseMoveCapture: {
								defaultValue: null,
								description: "",
								name: "onMouseMoveCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseOut: {
								defaultValue: null,
								description: "",
								name: "onMouseOut",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseOutCapture: {
								defaultValue: null,
								description: "",
								name: "onMouseOutCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseOver: {
								defaultValue: null,
								description: "",
								name: "onMouseOver",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseOverCapture: {
								defaultValue: null,
								description: "",
								name: "onMouseOverCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseUp: {
								defaultValue: null,
								description: "",
								name: "onMouseUp",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onMouseUpCapture: {
								defaultValue: null,
								description: "",
								name: "onMouseUpCapture",
								required: !1,
								type: {
									name: "MouseEventHandler<HTMLTextAreaElement>",
								},
							},
							onSelect: {
								defaultValue: null,
								description: "",
								name: "onSelect",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onSelectCapture: {
								defaultValue: null,
								description: "",
								name: "onSelectCapture",
								required: !1,
								type: {
									name: "ReactEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchCancel: {
								defaultValue: null,
								description: "",
								name: "onTouchCancel",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchCancelCapture: {
								defaultValue: null,
								description: "",
								name: "onTouchCancelCapture",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchEnd: {
								defaultValue: null,
								description: "",
								name: "onTouchEnd",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchEndCapture: {
								defaultValue: null,
								description: "",
								name: "onTouchEndCapture",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchMove: {
								defaultValue: null,
								description: "",
								name: "onTouchMove",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchMoveCapture: {
								defaultValue: null,
								description: "",
								name: "onTouchMoveCapture",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchStart: {
								defaultValue: null,
								description: "",
								name: "onTouchStart",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onTouchStartCapture: {
								defaultValue: null,
								description: "",
								name: "onTouchStartCapture",
								required: !1,
								type: {
									name: "TouchEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerDown: {
								defaultValue: null,
								description: "",
								name: "onPointerDown",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerDownCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerDownCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerMove: {
								defaultValue: null,
								description: "",
								name: "onPointerMove",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerMoveCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerMoveCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerUp: {
								defaultValue: null,
								description: "",
								name: "onPointerUp",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerUpCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerUpCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerCancel: {
								defaultValue: null,
								description: "",
								name: "onPointerCancel",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerCancelCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerCancelCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerEnter: {
								defaultValue: null,
								description: "",
								name: "onPointerEnter",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerEnterCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerEnterCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerLeave: {
								defaultValue: null,
								description: "",
								name: "onPointerLeave",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerLeaveCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerLeaveCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerOver: {
								defaultValue: null,
								description: "",
								name: "onPointerOver",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerOverCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerOverCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerOut: {
								defaultValue: null,
								description: "",
								name: "onPointerOut",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onPointerOutCapture: {
								defaultValue: null,
								description: "",
								name: "onPointerOutCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onGotPointerCapture: {
								defaultValue: null,
								description: "",
								name: "onGotPointerCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onGotPointerCaptureCapture: {
								defaultValue: null,
								description: "",
								name: "onGotPointerCaptureCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onLostPointerCapture: {
								defaultValue: null,
								description: "",
								name: "onLostPointerCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onLostPointerCaptureCapture: {
								defaultValue: null,
								description: "",
								name: "onLostPointerCaptureCapture",
								required: !1,
								type: {
									name: "PointerEventHandler<HTMLTextAreaElement>",
								},
							},
							onScroll: {
								defaultValue: null,
								description: "",
								name: "onScroll",
								required: !1,
								type: {
									name: "UIEventHandler<HTMLTextAreaElement>",
								},
							},
							onScrollCapture: {
								defaultValue: null,
								description: "",
								name: "onScrollCapture",
								required: !1,
								type: {
									name: "UIEventHandler<HTMLTextAreaElement>",
								},
							},
							onWheel: {
								defaultValue: null,
								description: "",
								name: "onWheel",
								required: !1,
								type: {
									name: "WheelEventHandler<HTMLTextAreaElement>",
								},
							},
							onWheelCapture: {
								defaultValue: null,
								description: "",
								name: "onWheelCapture",
								required: !1,
								type: {
									name: "WheelEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationStart: {
								defaultValue: null,
								description: "",
								name: "onAnimationStart",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationStartCapture: {
								defaultValue: null,
								description: "",
								name: "onAnimationStartCapture",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationEnd: {
								defaultValue: null,
								description: "",
								name: "onAnimationEnd",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationEndCapture: {
								defaultValue: null,
								description: "",
								name: "onAnimationEndCapture",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationIteration: {
								defaultValue: null,
								description: "",
								name: "onAnimationIteration",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onAnimationIterationCapture: {
								defaultValue: null,
								description: "",
								name: "onAnimationIterationCapture",
								required: !1,
								type: {
									name: "AnimationEventHandler<HTMLTextAreaElement>",
								},
							},
							onTransitionEnd: {
								defaultValue: null,
								description: "",
								name: "onTransitionEnd",
								required: !1,
								type: {
									name: "TransitionEventHandler<HTMLTextAreaElement>",
								},
							},
							onTransitionEndCapture: {
								defaultValue: null,
								description: "",
								name: "onTransitionEndCapture",
								required: !1,
								type: {
									name: "TransitionEventHandler<HTMLTextAreaElement>",
								},
							},
							alignItems: {
								defaultValue: null,
								description: "",
								name: "alignItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch" | "baseline"',
								},
							},
							aspectRatio: {
								defaultValue: null,
								description: "",
								name: "aspectRatio",
								required: !1,
								type: {
									name: '"square" | "extraWide" | "tall" | "wide"',
								},
							},
							background: {
								defaultValue: null,
								description: "",
								name: "background",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							border: {
								defaultValue: null,
								description: "",
								name: "border",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderBottom: {
								defaultValue: null,
								description: "",
								name: "borderBottom",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderLeft: {
								defaultValue: null,
								description: "",
								name: "borderLeft",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderRadius: {
								defaultValue: null,
								description: "",
								name: "borderRadius",
								required: !1,
								type: {
									name: '"50%" | "lg" | "md" | "pill" | "sm"',
								},
							},
							borderRight: {
								defaultValue: null,
								description: "",
								name: "borderRight",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderTop: {
								defaultValue: null,
								description: "",
								name: "borderTop",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							bottom: {
								defaultValue: null,
								description: "",
								name: "bottom",
								required: !1,
								type: { name: '"0"' },
							},
							boxShadow: {
								defaultValue: null,
								description: "",
								name: "boxShadow",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							color: {
								defaultValue: null,
								description: "",
								name: "color",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							flex: {
								defaultValue: null,
								description: "",
								name: "flex",
								required: !1,
								type: {
									name: '"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"',
								},
							},
							flexGrow: {
								defaultValue: null,
								description: "",
								name: "flexGrow",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexShrink: {
								defaultValue: null,
								description: "",
								name: "flexShrink",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexWrap: {
								defaultValue: null,
								description: "",
								name: "flexWrap",
								required: !1,
								type: { name: '"wrap" | "nowrap"' },
							},
							fontSize: {
								defaultValue: null,
								description: "",
								name: "fontSize",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							fontWeight: {
								defaultValue: null,
								description: "",
								name: "fontWeight",
								required: !1,
								type: {
									name: '"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"',
								},
							},
							height: {
								defaultValue: null,
								description: "",
								name: "height",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							inset: {
								defaultValue: null,
								description: "",
								name: "inset",
								required: !1,
								type: { name: '"0"' },
							},
							isolation: {
								defaultValue: null,
								description: "",
								name: "isolation",
								required: !1,
								type: { name: '"isolate"' },
							},
							justifyContent: {
								defaultValue: null,
								description: "",
								name: "justifyContent",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "space-around" | "space-between" | "stretch"',
								},
							},
							left: {
								defaultValue: null,
								description: "",
								name: "left",
								required: !1,
								type: { name: '"0"' },
							},
							lineHeight: {
								defaultValue: null,
								description: "",
								name: "lineHeight",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							margin: {
								defaultValue: null,
								description: "",
								name: "margin",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginBottom: {
								defaultValue: null,
								description: "",
								name: "marginBottom",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginLeft: {
								defaultValue: null,
								description: "",
								name: "marginLeft",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginRight: {
								defaultValue: null,
								description: "",
								name: "marginRight",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginTop: {
								defaultValue: null,
								description: "",
								name: "marginTop",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							maxHeight: {
								defaultValue: null,
								description: "",
								name: "maxHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							maxWidth: {
								defaultValue: null,
								description: "",
								name: "maxWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							minHeight: {
								defaultValue: null,
								description: "",
								name: "minHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							minWidth: {
								defaultValue: null,
								description: "",
								name: "minWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							overflowX: {
								defaultValue: null,
								description: "",
								name: "overflowX",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							overflowY: {
								defaultValue: null,
								description: "",
								name: "overflowY",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							right: {
								defaultValue: null,
								description: "",
								name: "right",
								required: !1,
								type: { name: '"0"' },
							},
							textAlign: {
								defaultValue: null,
								description: "",
								name: "textAlign",
								required: !1,
								type: { name: '"right" | "left" | "center"' },
							},
							textDecoration: {
								defaultValue: null,
								description: "",
								name: "textDecoration",
								required: !1,
								type: {
									name: '"none" | "line-through" | "underline"',
								},
							},
							textTransform: {
								defaultValue: null,
								description: "",
								name: "textTransform",
								required: !1,
								type: {
									name: '"capitalize" | "lowercase" | "uppercase"',
								},
							},
							top: {
								defaultValue: null,
								description: "",
								name: "top",
								required: !1,
								type: { name: '"0"' },
							},
							whiteSpace: {
								defaultValue: null,
								description: "",
								name: "whiteSpace",
								required: !1,
								type: { name: '"normal" | "nowrap"' },
							},
							zIndex: {
								defaultValue: null,
								description: "",
								name: "zIndex",
								required: !1,
								type: { name: '"1" | "-1"' },
							},
							fontStyle: {
								defaultValue: null,
								description: "",
								name: "fontStyle",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							marginX: {
								defaultValue: null,
								description: "",
								name: "marginX",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginY: {
								defaultValue: null,
								description: "",
								name: "marginY",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							overflow: {
								defaultValue: null,
								description: "",
								name: "overflow",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							placeItems: {
								defaultValue: null,
								description: "",
								name: "placeItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch"',
								},
							},
							display: {
								defaultValue: null,
								description: "",
								name: "display",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							flexDirection: {
								defaultValue: null,
								description: "",
								name: "flexDirection",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							gap: {
								defaultValue: null,
								description: "",
								name: "gap",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							gridTemplateColumns: {
								defaultValue: null,
								description: "",
								name: "gridTemplateColumns",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							padding: {
								defaultValue: null,
								description: "",
								name: "padding",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingBottom: {
								defaultValue: null,
								description: "",
								name: "paddingBottom",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingLeft: {
								defaultValue: null,
								description: "",
								name: "paddingLeft",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingRight: {
								defaultValue: null,
								description: "",
								name: "paddingRight",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingTop: {
								defaultValue: null,
								description: "",
								name: "paddingTop",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							position: {
								defaultValue: null,
								description: "",
								name: "position",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							width: {
								defaultValue: null,
								description: "",
								name: "width",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 30 more ...; "min-content": CSSVarFunction; }, { ...; }>>',
								},
							},
							paddingX: {
								defaultValue: null,
								description: "",
								name: "paddingX",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingY: {
								defaultValue: null,
								description: "",
								name: "paddingY",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							colorOverlay: {
								defaultValue: null,
								description:
									"Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.",
								name: "colorOverlay",
								required: !1,
								type: {
									name: '"blue" | "green" | "grey" | "red" | "default" | "amber"',
								},
							},
							description: {
								defaultValue: null,
								description:
									"Description shown under the field (when there is no error message).",
								name: "description",
								required: !1,
								type: { name: "ReactNode" },
							},
							hideLastpass: {
								defaultValue: null,
								description:
									"Whether to hide the Lastpass icon or not.",
								name: "hideLastpass",
								required: !1,
								type: { name: "boolean" },
							},
							isVisibilityToggleable: {
								defaultValue: null,
								description:
									"Whether the input field value visibility can be toggled or not.",
								name: "isVisibilityToggleable",
								required: !1,
								type: { name: "true" },
							},
							isVisible: {
								defaultValue: null,
								description:
									"Whether the input field value is visible or not.",
								name: "isVisible",
								required: !1,
								type: { name: "boolean" },
							},
							strHide: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered when value is hidden.",
								name: "strHide",
								required: !1,
								type: { name: "string" },
							},
							strShow: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered when value is visible.",
								name: "strShow",
								required: !1,
								type: { name: "string" },
							},
							isLabelVisible: {
								defaultValue: null,
								description:
									"Whether the label is visible or not.",
								name: "isLabelVisible",
								required: !1,
								type: { name: "boolean" },
							},
							label: {
								defaultValue: null,
								description: "Text for HTML label element",
								name: "label",
								required: !1,
								type: { name: "string" },
							},
							labelProps: {
								defaultValue: null,
								description: "Props for FieldLabel component",
								name: "labelProps",
								required: !1,
								type: {
									name: 'Omit<FieldLabelProps, "label">',
								},
							},
							labelTooltip: {
								defaultValue: null,
								description: "Optional tooltip for label",
								name: "labelTooltip",
								required: !1,
								type: { name: "string" },
							},
							size: {
								defaultValue: null,
								description:
									"Consistent size option shared across multiple components.",
								name: "size",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							slotLeft: {
								defaultValue: null,
								description:
									"React node(s) rendered on the left-hand side.",
								name: "slotLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							slotRight: {
								defaultValue: null,
								description:
									"React node(s) rendered on the right-hand side.",
								name: "slotRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							errorMessage: {
								defaultValue: null,
								description:
									"Message shown when field fails validation.",
								name: "errorMessage",
								required: !1,
								type: { name: "ReactNode" },
							},
							invalid: {
								defaultValue: null,
								description:
									"Whether the value of the field fails validation.",
								name: "invalid",
								required: !1,
								type: { name: "boolean" },
							},
							wrapperProps: {
								defaultValue: {
									value: '{ marginBottom: "space_6" }',
								},
								description: "Props for the wrapper component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							validate: {
								defaultValue: null,
								description: "Function to validate field value",
								name: "validate",
								required: !1,
								type: {
									name: "Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>",
								},
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form_text_area/index.tsx#FormTextArea"
						] = {
							docgenInfo: FormTextArea.__docgenInfo,
							name: "FormTextArea",
							path: "src/components/form_text_area/index.tsx#FormTextArea",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/radio_button_group/mocks.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				$: () => RADIO_BUTTONS_MOCK,
			});
			var _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__("./mocks/LOREM.mock.ts");
			const RADIO_BUTTONS_MOCK = [
				{
					description:
						_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_xxs,
					title: "Radio item 1",
					value: "radio_item_1",
				},
				{
					description:
						_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_xxs,
					title: "Radio item 2",
					value: "radio_item_2",
				},
				{
					description:
						_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_xxs,
					title: "Radio item 3",
					value: "radio_item_3",
				},
			];
		},
		"./src/components/select/__mocks__/select.mock.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				KZ: () => mockSelectItemsGrouped,
				St: () => mockSelectItems,
				XB: () => mockSelectItemsActions,
			});
			var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/@fortawesome/pro-solid-svg-icons/index.mjs",
					),
				_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__("./mocks/LOREM.mock.ts"),
				_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					"./src/components/icon/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			const mockSelectItems = ({ as, disabled, onClick, withIcon }) => [
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "United Kingdom",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "uk",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "France",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "fr",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Germany",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "de",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Spain",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "es",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "The United Kingdom of Great Britain and Northern Ireland",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "gb",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Italy",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "it",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Portugal",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "pt",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "United States",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "us",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Canada",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "ca",
					},
					{
						as,
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						disabled,
						label: "Australia",
						onClick,
						slotLeft: withIcon
							? [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_1__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
										},
									),
							  ]
							: void 0,
						value: "au",
					},
				],
				mockSelectItemsActions = () => [
					{
						as: "button",
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						label: "View details",
						onClick: () => alert("clicked"),
						value: "view_details",
					},
					{
						as: "button",
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						label: "Edit",
						onClick: () => alert("clicked"),
						value: "edit",
					},
					{
						as: "button",
						colorOverlay: "red",
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
								.text_xxs,
						label: "Delete",
						onClick: () => alert("clicked"),
						value: "delete",
					},
				],
				mockSelectItemsGrouped = ({
					as,
					disabled,
					onClick,
					withIcon,
				}) => [
					{
						items: [
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "United Kingdom",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "uk",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "France",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "fr",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Germany",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "de",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Spain",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "es",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "The United Kingdom of Great Britain and Northern Ireland",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "gb",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Italy",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "it",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Portugal",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "pt",
							},
						],
						title: "Europe",
					},
					{
						items: [
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "United States",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "us",
							},
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Canada",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "ca",
							},
						],
						title: "North America",
					},
					{
						items: [
							{
								as,
								description:
									_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__
										.m.text_xxs,
								disabled,
								label: "Australia",
								onClick,
								slotLeft: withIcon
									? [
											(0,
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
												_icon__WEBPACK_IMPORTED_MODULE_1__.J,
												{
													icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.g4A,
												},
											),
									  ]
									: void 0,
								value: "au",
							},
						],
						title: "APAC",
					},
				];
			try {
				(mockSelectItems.displayName = "mockSelectItems"),
					(mockSelectItems.__docgenInfo = {
						description: "",
						displayName: "mockSelectItems",
						props: {
							as: {
								defaultValue: null,
								description:
									"The element type to render the select items as",
								name: "as",
								required: !1,
								type: { name: "React.ComponentProps<TType>" },
							},
							disabled: {
								defaultValue: null,
								description: "Whether the items are disabled",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							onClick: {
								defaultValue: null,
								description:
									"Whether to render the select items as buttons",
								name: "onClick",
								required: !1,
								type: { name: "() => void" },
							},
							withIcon: {
								defaultValue: null,
								description:
									"Whether to include an icon in the select items",
								name: "withIcon",
								required: !1,
								type: { name: "boolean" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/select/__mocks__/select.mock.tsx#mockSelectItems"
						] = {
							docgenInfo: mockSelectItems.__docgenInfo,
							name: "mockSelectItems",
							path: "src/components/select/__mocks__/select.mock.tsx#mockSelectItems",
						});
			} catch (__react_docgen_typescript_loader_error) {}
			try {
				(mockSelectItemsGrouped.displayName = "mockSelectItemsGrouped"),
					(mockSelectItemsGrouped.__docgenInfo = {
						description: "",
						displayName: "mockSelectItemsGrouped",
						props: {
							as: {
								defaultValue: null,
								description:
									"The element type to render the select items as",
								name: "as",
								required: !1,
								type: { name: "React.ComponentProps<TType>" },
							},
							disabled: {
								defaultValue: null,
								description: "Whether the items are disabled",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							onClick: {
								defaultValue: null,
								description:
									"Whether to render the select items as buttons",
								name: "onClick",
								required: !1,
								type: { name: "() => void" },
							},
							withIcon: {
								defaultValue: null,
								description:
									"Whether to include an icon in the select items",
								name: "withIcon",
								required: !1,
								type: { name: "boolean" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/select/__mocks__/select.mock.tsx#mockSelectItemsGrouped"
						] = {
							docgenInfo: mockSelectItemsGrouped.__docgenInfo,
							name: "mockSelectItemsGrouped",
							path: "src/components/select/__mocks__/select.mock.tsx#mockSelectItemsGrouped",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/select/select_single/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				N: () => SelectSingle,
			});
			var floating_ui_react = __webpack_require__(
					"./node_modules/@floating-ui/react/dist/floating-ui.react.mjs",
				),
				floating_ui_core = __webpack_require__(
					"./node_modules/@floating-ui/core/dist/floating-ui.core.mjs",
				),
				floating_ui_dom = __webpack_require__(
					"./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs",
				),
				pro_solid_svg_icons = __webpack_require__(
					"./node_modules/@fortawesome/pro-solid-svg-icons/index.mjs",
				),
				downshift_esm = __webpack_require__(
					"./node_modules/downshift/dist/downshift.esm.js",
				),
				react = __webpack_require__("./node_modules/react/index.js"),
				common_types = __webpack_require__("./src/common-types.ts"),
				use_forward_ref = __webpack_require__(
					"./src/hooks/use_forward_ref.ts",
				),
				box = __webpack_require__("./src/components/box/index.tsx"),
				icon = __webpack_require__("./src/components/icon/index.tsx"),
				input = __webpack_require__("./src/components/input/index.tsx"),
				SelectItemList = __webpack_require__(
					"./src/components/select/SelectItemList.tsx",
				),
				filterSelectItems = __webpack_require__(
					"./src/components/select/filterSelectItems.ts",
				),
				flattenSelectItems = __webpack_require__(
					"./src/components/select/flattenSelectItems.ts",
				),
				isFlatSelectItems = __webpack_require__(
					"./src/components/select/isFlatSelectItems.ts",
				),
				isGroupedSelectItems = __webpack_require__(
					"./src/components/select/isGroupedSelectItems.ts",
				);
			var getIsSelected = __webpack_require__(
					"./src/components/select/getIsSelected.ts",
				),
				get_slot_right = __webpack_require__(
					"./src/components/select/lib/get_slot_right/index.tsx",
				),
				select_input_styles_css = __webpack_require__(
					"./src/components/select/shared/select_input.styles.css.ts",
				),
				jsx_runtime = __webpack_require__(
					"./node_modules/react/jsx-runtime.js",
				);
			function SelectSingleBase(
				{
					addonLeft,
					addonRight,
					description,
					disabled,
					errorMessage,
					initialSelectedItem,
					inputProps,
					invalid,
					isClearable,
					isFilterable,
					isLabelVisible,
					isOpen: controlledIsOpen,
					itemToString = (item) => item?.label || "",
					items: initialItems,
					label,
					labelTooltip,
					name,
					onChange,
					onIsOpenChange,
					placeholder,
					shouldClearFilterOnSelection,
					size,
					slotLeft,
					slotRight = (0, jsx_runtime.jsx)(icon.J, {
						icon: pro_solid_svg_icons.gc2,
					}),
					strClear,
					wrapperProps,
				},
				initialRef,
			) {
				const ref = (0, use_forward_ref.Z)(initialRef),
					initialItem = (function getInitialSelectedItem({
						initialSelectedItem,
						items,
					}) {
						return (
							initialSelectedItem ||
							((0, isFlatSelectItems.e)(items)
								? items.find((item) => item.isSelected)
								: (0, isGroupedSelectItems.K)(items)
								? items.reduce(
										(prevSelectedItem, group) =>
											prevSelectedItem ||
											group.items.find(
												(item) => item.isSelected,
											),
										void 0,
								  )
								: void 0)
						);
					})({ initialSelectedItem, items: initialItems }),
					[inputValue, setInputValue] = (0, react.useState)(
						initialItem?.label || "",
					),
					items = isFilterable
						? (0, filterSelectItems.S)({
								inputValue,
								items: initialItems,
						  })
						: initialItems,
					{
						getInputProps,
						getItemProps,
						getLabelProps,
						getMenuProps,
						highlightedIndex,
						isOpen,
						reset,
						selectedItem,
					} = (0, downshift_esm.Kb)({
						initialSelectedItem: initialItem,
						inputValue,
						isItemDisabled: (item) => item.disabled,
						isOpen: controlledIsOpen,
						items: (0, flattenSelectItems.y)(items),
						itemToString,
						onInputValueChange: (changes) => {
							setInputValue(changes.inputValue || "");
						},
						onIsOpenChange,
						onSelectedItemChange: (changes) => {
							onChange?.(changes.selectedItem || void 0),
								shouldClearFilterOnSelection &&
									setInputValue("");
						},
						onStateChange(changes) {
							changes.type ===
								downshift_esm.Kb.stateChangeTypes
									.InputKeyDownEnter &&
								changes.selectedItem?.onClick?.();
						},
						stateReducer: (_, { changes, type }) => {
							switch (type) {
								case downshift_esm.Kb.stateChangeTypes
									.InputBlur:
								case downshift_esm.Kb.stateChangeTypes
									.InputKeyDownEnter:
								case downshift_esm.Kb.stateChangeTypes
									.ItemClick:
									return {
										...changes,
										...(shouldClearFilterOnSelection && {
											inputValue: "",
										}),
									};
								default:
									return changes;
							}
						},
					}),
					getIsItemSelected = (0, react.useCallback)(
						(item) => (0, getIsSelected.x)({ item, selectedItem }),
						[selectedItem],
					),
					{ floatingStyles, refs } = (0, floating_ui_react.YF)({
						middleware: [
							(0, floating_ui_core.cv)(4),
							(0, floating_ui_core.RR)({
								crossAxis: !0,
								fallbackAxisSideDirection: "start",
							}),
						],
						open: isOpen,
						placement: "bottom-start",
						whileElementsMounted: floating_ui_dom.Me,
					});
				return (0, jsx_runtime.jsxs)(box.x, {
					position: "relative",
					children: [
						(0, jsx_runtime.jsx)(input.I, {
							addonLeft,
							addonRight,
							description,
							errorMessage,
							outerRef: refs.setReference,
							size,
							slotLeft: selectedItem?.slotLeft || slotLeft,
							slotRight: (0, get_slot_right.w)({
								isClearable:
									(!!isFilterable && !!inputValue) ||
									(!!isClearable && !!initialItem) ||
									(!!isClearable && !!selectedItem),
								reset,
								slotRight,
								strClear,
							}),
							wrapperProps,
							...getInputProps({
								className: select_input_styles_css.C,
								disabled,
								id: name,
								invalid,
								placeholder,
								readOnly: !isFilterable,
								ref,
								value: inputValue,
								...(0, common_types.Hf)({
									isLabelVisible,
									label,
									labelProps: getLabelProps({
										htmlFor: name,
									}),
									labelTooltip,
									name,
								}),
								...inputProps,
							}),
						}),
						(0, jsx_runtime.jsx)(SelectItemList.A, {
							getIsItemSelected,
							getItemProps,
							getMenuProps,
							getSelectedItemProps: void 0,
							highlightedIndex,
							isMulti: !1,
							isOpen,
							items,
							ref: isOpen ? refs.setFloating : void 0,
							size,
							style: floatingStyles,
						}),
					],
				});
			}
			SelectSingleBase.displayName = "SelectSingleBase";
			const SelectSingle = (0, react.forwardRef)(SelectSingleBase);
			try {
				(SelectSingle.displayName = "SelectSingle"),
					(SelectSingle.__docgenInfo = {
						description: "",
						displayName: "SelectSingle",
						props: {
							isClearable: {
								defaultValue: null,
								description:
									"Whether the input is clearable or not.",
								name: "isClearable",
								required: !1,
								type: { name: "true" },
							},
							strClear: {
								defaultValue: null,
								description:
									"The tooltip text to display when the button is hovered.\nThe tooltip text to show when the item is filterable.",
								name: "strClear",
								required: !1,
								type: { name: "string" },
							},
							name: {
								defaultValue: null,
								description:
									"Unique name for the element.\nHTML element id\n@important Should be a *snake_case* string.\n@important This will be used as the HTML element ID.",
								name: "name",
								required: !0,
								type: { name: "string" },
							},
							placeholder: {
								defaultValue: null,
								description:
									"Placeholder shown on empty field.",
								name: "placeholder",
								required: !1,
								type: { name: "string" },
							},
							size: {
								defaultValue: null,
								description:
									"Consistent size option shared across multiple components.",
								name: "size",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							slotLeft: {
								defaultValue: null,
								description:
									"React node(s) rendered on the left-hand side.",
								name: "slotLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							slotRight: {
								defaultValue: null,
								description:
									"React node(s) rendered on the right-hand side.",
								name: "slotRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							description: {
								defaultValue: null,
								description:
									"Description shown under the field (when there is no error message).",
								name: "description",
								required: !1,
								type: { name: "ReactNode" },
							},
							disabled: {
								defaultValue: null,
								description:
									"Whether the component is disabled.",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							addonLeft: {
								defaultValue: null,
								description:
									"Addon to be rendered on the left side of the field.",
								name: "addonLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							addonRight: {
								defaultValue: null,
								description:
									"Addon to be rendered on the right side of the field.",
								name: "addonRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							errorMessage: {
								defaultValue: null,
								description:
									"Message shown when field fails validation.",
								name: "errorMessage",
								required: !1,
								type: { name: "ReactNode" },
							},
							invalid: {
								defaultValue: null,
								description:
									"Whether the value of the field fails validation.",
								name: "invalid",
								required: !1,
								type: { name: "boolean" },
							},
							wrapperProps: {
								defaultValue: null,
								description: "Props for the wrapper component.",
								name: "wrapperProps",
								required: !1,
								type: { name: "BoxProps" },
							},
							isLabelVisible: {
								defaultValue: null,
								description:
									"Whether the label is visible or not.",
								name: "isLabelVisible",
								required: !1,
								type: { name: "boolean" },
							},
							label: {
								defaultValue: null,
								description: "Text for HTML label element",
								name: "label",
								required: !1,
								type: { name: "string" },
							},
							labelProps: {
								defaultValue: null,
								description: "Props for FieldLabel component",
								name: "labelProps",
								required: !1,
								type: {
									name: 'Omit<FieldLabelProps, "label">',
								},
							},
							labelTooltip: {
								defaultValue: null,
								description: "Optional tooltip for label",
								name: "labelTooltip",
								required: !1,
								type: { name: "string" },
							},
							isFilterable: {
								defaultValue: null,
								description: "Whether the item is filterable.",
								name: "isFilterable",
								required: !1,
								type: { name: "true" },
							},
							initialSelectedItem: {
								defaultValue: null,
								description:
									"Item to be preselected when the component mounts.",
								name: "initialSelectedItem",
								required: !1,
								type: {
									name: "SelectItemShape<TValue, TItemData>",
								},
							},
							inputProps: {
								defaultValue: null,
								description:
									"Props to customise the input element.",
								name: "inputProps",
								required: !1,
								type: {
									name: 'Partial<Omit<InputProps, "label" | "id" | "size" | "width" | "isLabelVisible" | "labelTooltip" | "labelProps" | "isVisibilityToggleable" | "isVisible" | "strHide" | "strShow" | ... 4 more ... | "strCopied">>',
								},
							},
							isOpen: {
								defaultValue: null,
								description:
									"Prop to toggle the open state of the dropdown.",
								name: "isOpen",
								required: !1,
								type: { name: "boolean" },
							},
							itemToString: {
								defaultValue: null,
								description:
									"Function to convert an item to a string.",
								name: "itemToString",
								required: !1,
								type: {
									name: "(item: SelectItemShape<TValue, TItemData>) => string",
								},
							},
							items: {
								defaultValue: null,
								description:
									"The items to render in the dropdown.",
								name: "items",
								required: !0,
								type: {
									name: "FlatSelectItems<TValue, TItemData> | GroupedSelectItems<TValue, TItemData>",
								},
							},
							onChange: {
								defaultValue: null,
								description:
									"Function called with the new selected item when the selection changes.",
								name: "onChange",
								required: !1,
								type: {
									name: "(selection: SelectItemShape<TValue, TItemData>) => void",
								},
							},
							onIsOpenChange: {
								defaultValue: null,
								description:
									"Function called with the new open state when the dropdown is opened or closed.",
								name: "onIsOpenChange",
								required: !1,
								type: {
									name: "(changes: UseComboboxStateChange<SelectItemShape<TValue, TItemData>>) => void",
								},
							},
							shouldClearFilterOnSelection: {
								defaultValue: null,
								description:
									"Whether the select should reset when an item is selected.",
								name: "shouldClearFilterOnSelection",
								required: !1,
								type: { name: "boolean" },
							},
							ref: {
								defaultValue: null,
								description:
									"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
								name: "ref",
								required: !1,
								type: { name: "Ref<HTMLInputElement>" },
							},
							key: {
								defaultValue: null,
								description: "",
								name: "key",
								required: !1,
								type: { name: "Key" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/select/select_single/index.tsx#SelectSingle"
						] = {
							docgenInfo: SelectSingle.__docgenInfo,
							name: "SelectSingle",
							path: "src/components/select/select_single/index.tsx#SelectSingle",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/lib/handle_hook_form_errors/index.ts": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				y: () => handleHookFormErrors,
			});
			const handleHookFormErrors = (errors) => {
				Object.entries(errors).forEach(([field, error]) => {});
			};
		},
	},
]);
