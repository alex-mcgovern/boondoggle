"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[2642],
	{
		"./src/components/dialog_modal_action_confirm/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithColorOverlay: () => WithColorOverlay,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			const __WEBPACK_DEFAULT_EXPORT__ = {
					args: {
						buttonText: "Freeze account",
						confirmText: "freeze account",
						onClick: () => {
							alert("Confirmed");
						},
						promptPrefix: "Please type",
						promptSuffix: "to continue",
					},
					component: __webpack_require__(
						"./src/components/dialog_modal_action_confirm/index.tsx",
					).P,
					title: "Components/DialogModalActionConfirm",
				},
				Default = {},
				WithColorOverlay = { args: { colorOverlay: "red" } };
		},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/dialog_modal_action_confirm/styles.css.ts.vanilla.css","source":"LnN0eWxlc19jb25maXJtVGV4dFN0eWxlX183dHQ3aHkxIHsKICB1c2VyLXNlbGVjdDogbm9uZTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
			(module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__,
				});
				var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
						__webpack_require__(
							"./node_modules/css-loader/dist/runtime/sourceMaps.js",
						),
					_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
						__webpack_require__.n(
							_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
						),
					_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							"./node_modules/css-loader/dist/runtime/api.js",
						),
					___CSS_LOADER_EXPORT___ = __webpack_require__.n(
						_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
					)()(
						_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
					);
				___CSS_LOADER_EXPORT___.push([
					module.id,
					".styles_confirmTextStyle__7tt7hy1 {\n  user-select: none;\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings: "AAAA;EACE,iBAAiB;AACnB",
						sourcesContent: [
							".styles_confirmTextStyle__7tt7hy1 {\n  user-select: none;\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
	},
]);
