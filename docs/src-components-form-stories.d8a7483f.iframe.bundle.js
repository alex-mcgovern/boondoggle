"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[2200],
	{
		"./src/components/form/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithDefaultValues: () => WithDefaultValues,
					WithOptionalFields: () => WithOptionalFields,
					default: () => stories,
				});
			var esm = __webpack_require__(
					"./node_modules/@storybook/jest/dist/esm/index.js",
				),
				components_form = __webpack_require__(
					"./src/components/form/index.tsx",
				),
				zod = __webpack_require__(
					"./node_modules/@hookform/resolvers/zod/dist/zod.mjs",
				),
				lib = __webpack_require__("./node_modules/zod/lib/index.mjs"),
				LOREM_mock = __webpack_require__("./mocks/LOREM.mock.ts"),
				input_currency = __webpack_require__(
					"./test/mock_data/input_currency.tsx",
				),
				form_input = __webpack_require__(
					"./src/components/form_input/index.tsx",
				),
				form_input_currency = __webpack_require__(
					"./src/components/form_input_currency/index.tsx",
				),
				form_input_date = __webpack_require__(
					"./src/components/form_input_date/index.tsx",
				),
				form_radio_button_card_group = __webpack_require__(
					"./src/components/form_radio_button_card_group/index.tsx",
				),
				form_select_single = __webpack_require__(
					"./src/components/form_select_single/index.tsx",
				),
				form_slider = __webpack_require__(
					"./src/components/form_slider/index.tsx",
				),
				form_submit_button = __webpack_require__(
					"./src/components/form_submit_button/index.tsx",
				),
				form_text_area = __webpack_require__(
					"./src/components/form_text_area/index.tsx",
				),
				radio_button_cards_mock = __webpack_require__(
					"./src/components/radio_button_card_group/__mocks__/radio_button_cards.mock.tsx",
				),
				select_mock = __webpack_require__(
					"./src/components/select/__mocks__/select.mock.tsx",
				),
				jsx_runtime = __webpack_require__(
					"./node_modules/react/jsx-runtime.js",
				);
			const mockFormSchema = lib.Ry({
					amount: lib.oQ.number().min(1),
					date: lib.Z_().regex(/^\d{4}-\d{2}-\d{2}$/),
					description: lib.Z_().min(1).max(20),
					email: lib.Z_().email().min(2),
					radio: lib.Z_().min(1),
					select: lib.Z_().min(1),
					value: lib.oQ.number().min(1),
				}),
				mockFormSchemaOptional = mockFormSchema.partial(),
				WRAPPER_PROPS = { marginBottom: "space_6" },
				mockForm = ({
					handleErrors = async () => {},
					handleSubmit = async () => {},
					withDefaultValues = !1,
					withOptionalFields = !1,
				}) => ({
					children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
						children: [
							(0, jsx_runtime.jsx)(form_input.y, {
								defaultValue: withDefaultValues
									? LOREM_mock.m.email()
									: void 0,
								label: LOREM_mock.m.labelEmail(),
								name: "email",
								placeholder: "Enter your email address",
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(form_input_date.t, {
								label: "Date",
								name: "date",
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(form_input_currency.a, {
								currencySelectItems: input_currency.m,
								currencySelectLabel: "Currency",
								defaultValue: withDefaultValues ? 100 : void 0,
								initialCurrency: "USD",
								isCurrencyEditable: !0,
								label: "Value",
								locale: "en-US",
								name: "value",
								onCurrencyChange: () => {},
								placeholder: "Enter a value",
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(form_text_area.l, {
								defaultValue: withDefaultValues
									? LOREM_mock.m.text_xxs
									: void 0,
								label: LOREM_mock.m.labelDescription(),
								name: "description",
								placeholder: "Enter your description",
								required: !1,
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(form_select_single.m, {
								defaultValue: withDefaultValues
									? (0, select_mock.St)({})[0].value
									: void 0,
								items: (0, select_mock.St)({}),
								label: LOREM_mock.m.labelDropdown(),
								name: "select",
								placeholder:
									"Select an option from the dropdown",
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(form_slider.A, {
								defaultValue: withDefaultValues ? [50] : void 0,
								id: "amount",
								label: LOREM_mock.m.labelSlider(),
								name: "amount",
								placeholder: "Enter an amount",
								wrapperProps: WRAPPER_PROPS,
							}),
							(0, jsx_runtime.jsx)(
								form_radio_button_card_group.X,
								{
									defaultValue: withDefaultValues
										? radio_button_cards_mock.y[0].value
										: void 0,
									errorMessage: "Select an option",
									id: "radio",
									items: radio_button_cards_mock.y,
									label: LOREM_mock.m.labelRadioButtons(),
									name: "radio",
									wrapperProps: WRAPPER_PROPS,
								},
							),
							(0, jsx_runtime.jsx)(form_submit_button.Z, {
								width: "100%",
								children: "Submit",
							}),
						],
					}),
					handleErrors,
					handleSubmit,
					name: LOREM_mock.m.name(),
					resolver: (0, zod.F)(
						withOptionalFields
							? mockFormSchemaOptional
							: mockFormSchema,
					),
				});
			try {
				(mockForm.displayName = "mockForm"),
					(mockForm.__docgenInfo = {
						description: "",
						displayName: "mockForm",
						props: {
							handleErrors: {
								defaultValue: { value: "async () => {}" },
								description:
									"Function that will be called when form validation errors occur.",
								name: "handleErrors",
								required: !1,
								type: {
									name: "((errors: FieldErrors) => Promise<void>) | ((errors: FieldErrors) => void)",
								},
							},
							handleSubmit: {
								defaultValue: { value: "async () => {}" },
								description:
									"Function that will be called when the form is submitted.",
								name: "handleSubmit",
								required: !1,
								type: {
									name: "((fieldValues: FieldValues) => Promise<void>) | ((fieldValues: FieldValues) => void)",
								},
							},
							withDefaultValues: {
								defaultValue: { value: "false" },
								description:
									"Whether to populate the form fields with default values or not.",
								name: "withDefaultValues",
								required: !1,
								type: { name: "boolean" },
							},
							withOptionalFields: {
								defaultValue: { value: "false" },
								description:
									"Whether to make fields optional or required.",
								name: "withOptionalFields",
								required: !1,
								type: { name: "boolean" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/form/__mocks__/mock_form.mock.tsx#mockForm"
						] = {
							docgenInfo: mockForm.__docgenInfo,
							name: "mockForm",
							path: "src/components/form/__mocks__/mock_form.mock.tsx#mockForm",
						});
			} catch (__react_docgen_typescript_loader_error) {}
			const handleSubmit = esm.e.fn(),
				handleErrors = esm.e.fn();
			handleSubmit.mockImplementation(async (fieldValues) =>
				alert(
					`Form submitted successfully \n ${JSON.stringify(
						fieldValues,
						null,
						2,
					)}`,
				),
			),
				handleErrors.mockImplementation(async (errors) =>
					alert(
						`Form validation error \n ${JSON.stringify(
							errors,
							null,
							2,
						)}`,
					),
				);
			const stories = {
					component: components_form.l,
					title: "Components/Form",
				},
				Default = { args: mockForm({ handleErrors, handleSubmit }) },
				WithDefaultValues = {
					args: mockForm({
						handleErrors,
						handleSubmit,
						withDefaultValues: !0,
						withOptionalFields: !0,
					}),
				},
				WithOptionalFields = {
					args: mockForm({
						handleErrors,
						handleSubmit,
						withOptionalFields: !0,
					}),
				};
		},
		"./src/components/radio_button_card_group/__mocks__/radio_button_cards.mock.tsx":
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.d(__webpack_exports__, {
					y: () => RADIO_BUTTON_CARDS_MOCK,
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
						__webpack_require__(
							"./node_modules/react/jsx-runtime.js",
						);
				const RADIO_BUTTON_CARDS_MOCK = [
					{
						adornment: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_1__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.glO,
								size: "xl",
							},
						),
						body: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_md,
						title: "Radio item 1",
						value: "radio_item_1",
					},
					{
						adornment: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_1__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.O8f,
								size: "xl",
							},
						),
						body: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_md,
						title: "Radio item 2",
						value: "radio_item_2",
					},
					{
						adornment: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_1__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.Kak,
								size: "xl",
							},
						),
						body: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_0__.m
							.text_md,
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
	},
]);
