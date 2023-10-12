"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[3535],
	{
		"./src/components/input_currency/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					IsCurrencyEditable: () => IsCurrencyEditable,
					KitchenSink: () => KitchenSink,
					KitchenSinkWithInvalidState: () =>
						KitchenSinkWithInvalidState,
					WithDefaultValue: () => WithDefaultValue,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					"./src/components/input_currency/index.tsx",
				),
				_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./mocks/LOREM.mock.ts"),
				_test_mock_data_input_currency__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__("./test/mock_data/input_currency.tsx"),
				_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					"./src/components/box/index.tsx",
				),
				_select_select_single__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						"./src/components/select/select_single/index.tsx",
					),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			const __WEBPACK_DEFAULT_EXPORT__ = {
					args: {
						initialCurrency: "USD",
						locale: "en-US",
						name: "input_currency",
						onChange: (e) => {
							console.info(e.target.value);
						},
					},
					component: ___WEBPACK_IMPORTED_MODULE_1__.O,
					title: "Components/InputCurrency",
				},
				Default = {},
				LocalesTemplate = ({ locale: initLocale, ...rest }) => {
					const [locale, setLocale] = (0,
						react__WEBPACK_IMPORTED_MODULE_0__.useState)(
							initLocale,
						),
						[numericValue, setNumericValue] = (0,
						react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
					return (0,
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
						_box__WEBPACK_IMPORTED_MODULE_4__.x,
						{
							alignItems: "center",
							display: "flex",
							gap: "space_4",
							children: [
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									_select_select_single__WEBPACK_IMPORTED_MODULE_5__.N,
									{
										items: _test_mock_data_input_currency__WEBPACK_IMPORTED_MODULE_3__.g,
										name: "locale",
										onChange: (item) => {
											setLocale(
												item?.value || initLocale,
											);
										},
										placeholder: "Select a locale",
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									___WEBPACK_IMPORTED_MODULE_1__.O,
									{
										...rest,
										locale,
										onChange: (e) => {
											setNumericValue(e.target.value),
												rest.onChange?.(e);
										},
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									_box__WEBPACK_IMPORTED_MODULE_4__.x,
									{ children: numericValue },
								),
							],
						},
					);
				};
			LocalesTemplate.displayName = "LocalesTemplate";
			const KitchenSink = {
					args: {
						currencySelectItems:
							_test_mock_data_input_currency__WEBPACK_IMPORTED_MODULE_3__.m,
						currencySelectLabel: "Currency",
						isCurrencyEditable: !0,
						onCurrencyChange(currency) {
							console.info(currency);
						},
					},
					render: LocalesTemplate,
				},
				IsCurrencyEditable = {
					args: {
						currencySelectItems:
							_test_mock_data_input_currency__WEBPACK_IMPORTED_MODULE_3__.m,
						currencySelectLabel: "Currency",
						isCurrencyEditable: !0,
						onCurrencyChange(currency) {
							console.info(currency);
						},
					},
				},
				KitchenSinkWithInvalidState = {
					args: {
						currencySelectItems:
							_test_mock_data_input_currency__WEBPACK_IMPORTED_MODULE_3__.m,
						currencySelectLabel: "Currency",
						invalid: !0,
						isCurrencyEditable: !0,
						label: "Amount",
						labelTooltip:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m
								.text_md,
						name: "input_currency",
						onCurrencyChange(currency) {
							console.info(currency);
						},
					},
				},
				WithDefaultValue = { args: { defaultValue: 42000.69 } };
		},
	},
]);
