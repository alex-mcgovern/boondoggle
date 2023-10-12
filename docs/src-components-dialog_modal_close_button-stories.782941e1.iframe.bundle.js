"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[4056],
	{
		"./src/components/dialog_modal_close_button/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				H: () => DialogModalCloseButton,
			});
			var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/@fortawesome/pro-solid-svg-icons/index.mjs",
					),
				_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./src/components/button/index.tsx",
				),
				_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					"./src/components/icon/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			function DialogModalCloseButton({ closeDialog }) {
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_button__WEBPACK_IMPORTED_MODULE_0__.z,
					{
						appearance: "ghost",
						"aria-label": "Close",
						marginLeft: "auto",
						name: "close",
						onClick: closeDialog,
						size: "square_md",
						slotLeft: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_1__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.NBC,
							},
						),
						type: "button",
					},
				);
			}
			DialogModalCloseButton.displayName = "DialogModalCloseButton";
			try {
				(DialogModalCloseButton.displayName = "DialogModalCloseButton"),
					(DialogModalCloseButton.__docgenInfo = {
						description:
							"Renders a square close button for a modal dialog.",
						displayName: "DialogModalCloseButton",
						props: {
							closeDialog: {
								defaultValue: null,
								description:
									"Callback to close the dialog component.",
								name: "closeDialog",
								required: !0,
								type: { name: "() => void" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/dialog_modal_close_button/index.tsx#DialogModalCloseButton"
						] = {
							docgenInfo: DialogModalCloseButton.__docgenInfo,
							name: "DialogModalCloseButton",
							path: "src/components/dialog_modal_close_button/index.tsx#DialogModalCloseButton",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/dialog_modal_close_button/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			const __WEBPACK_DEFAULT_EXPORT__ = {
					args: { closeDialog: () => alert("closed") },
					component: __webpack_require__(
						"./src/components/dialog_modal_close_button/index.tsx",
					).H,
					title: "Components/DialogModalCloseButton",
				},
				Default = {};
		},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/button/styles.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA81W227iMBR85yv8VpBw1dByrVbarfoH+7APVRWZ+JBYJHZqOxR2xb9v4mxsaLmElpTlBeUwjOeMjye+VnoVg/IXRDLC9Y80BSIJD8API6G073url99A6Bz9aSEUiFjICcrBbYw1LLUfsTDyA8G1JAZ9K/vL4Szo3LfWreu63BOm2qQ7zbQWvMt4munOhAvdLupPlCkyjYE+d9FTQYSrwrcrLTO4eu50CtyEBJotIAdRogkunyzEqJ+SYB5KkXFqW2Bc+yXUaocLaI/EAuRBkQZhNYZHNMaMz63E+Ivs3RqOcrW33g6+XveGtbsEUpiRLHaTOzyikJMFC4lmgpPYKk3Oejh2L3GxOUOo6AVTCIQ0qiaICw4X6+Gc5xyhWb47+BXyjdIVuCj9MhWcAGVZkv9lPo5fxgPPO7J1qWQJkSvbMd+j58DwvZmj14hppzk6df3mp+ZfK9tzM/o/G/nI6HwsyFR+Wjjd7ECU/EJSyD3x0iVSImb03hbxdjyZ2rsJuXtv7CeSZofKC8bMARu24f0LtfWJ8TFNV/rH+9utnQu1Xl8h6AeD+1k+ByJJC3H+jXXG6xvh0VYCqpQEjIfmG3yvZwOwF9Xj9xz/4Dj/jeMP6/H3HP/wKP/I0c/q0d86+lET9tw5/nET9vQdP2nAnoGjnzZhz9DxB03YM3L89HR7vheXAoLaqYQZSIUl0CwAihNRXY5w+RPkWVTGwj5FlQxpUPlFK88vxUoac9qryLT1x6y8g2EVCamdtHkHAVF5Nu37uGQ6H6cojNKrM4rciMRTWYuEXLfWfwECFHpe0A4AAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					".styles_variantAppearance_ghost__1yqzeadk {\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_ghost__1yqzeadk:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--tint_active__13r5x7fe);\n}\n.styles_variantAppearance_ghost__1yqzeadk:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n}\n.styles_variantAppearance_link__1yqzeadl:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  color: var(--button_active__13r5x7f6);\n}\n.styles_variantAppearance_link__1yqzeadl:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  color: var(--button_default__13r5x7f7);\n}\n.styles_variantAppearance_navigational__1yqzeadm {\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_navigational__1yqzeadm:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n  text-decoration: none;\n}\n.styles_variantAppearance_navigational__1yqzeadm:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--tint_active__13r5x7fe);\n  font-weight: var(--fontWeight-medium__1k9lq9611);\n}\n.styles_variantAppearance_primary__1yqzeadn {\n  background: var(--button_default__13r5x7f7);\n  color: var(--white__13r5x7fh);\n}\n.styles_variantAppearance_primary__1yqzeadn:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--button_hover__13r5x7f8);\n  color: var(--white__13r5x7fh);\n}\n.styles_variantAppearance_primary__1yqzeadn:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--button_active__13r5x7f6);\n}\n.styles_variantAppearance_secondary__1yqzeado {\n  border: 1px solid;\n  border-color: var(--border_default__13r5x7f4);\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_secondary__1yqzeado:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n  border-color: var(--border_hover__13r5x7f5);\n}\n.styles_variantAppearance_secondary__1yqzeado:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--button_tint__13r5x7f9);\n  border-color: var(--button_default__13r5x7f7);\n  color: var(--button_default__13r5x7f7);\n}\n.styles_getButtonStyles_compound_0__1yqzead15 {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_1__1yqzead16 {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_2__1yqzead17 {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n.styles_getButtonStyles_compound_3__1yqzead18 {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_4__1yqzead19 {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_5__1yqzead1a {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n.styles_getButtonStyles_compound_6__1yqzead1b {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_7__1yqzead1c {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_8__1yqzead1d {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .styles_getButtonStyles__1yqzeadr {\n    transition: color var(--transitionDuration-short__1k9lq962k) ease,                         background var(--transitionDuration-short__1k9lq962k) ease,                         opacity var(--transitionDuration-short__1k9lq962k) ease,                         border-color var(--transitionDuration-short__1k9lq962k) ease;\n  }\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE,0CAA0C;AAC5C;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,uCAAuC;AACzC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,uCAAuC;EACvC,qBAAqB;AACvB;AACA;EACE,wCAAwC;EACxC,gDAAgD;AAClD;AACA;EACE,2CAA2C;EAC3C,6BAA6B;AAC/B;AACA;EACE,yCAAyC;EACzC,6BAA6B;AAC/B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,iBAAiB;EACjB,6CAA6C;EAC7C,0CAA0C;AAC5C;AACA;EACE,uCAAuC;EACvC,2CAA2C;AAC7C;AACA;EACE,wCAAwC;EACxC,6CAA6C;EAC7C,sCAAsC;AACxC;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE;IACE,4TAA4T;EAC9T;AACF",
						sourcesContent: [
							".styles_variantAppearance_ghost__1yqzeadk {\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_ghost__1yqzeadk:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--tint_active__13r5x7fe);\n}\n.styles_variantAppearance_ghost__1yqzeadk:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n}\n.styles_variantAppearance_link__1yqzeadl:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  color: var(--button_active__13r5x7f6);\n}\n.styles_variantAppearance_link__1yqzeadl:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  color: var(--button_default__13r5x7f7);\n}\n.styles_variantAppearance_navigational__1yqzeadm {\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_navigational__1yqzeadm:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n  text-decoration: none;\n}\n.styles_variantAppearance_navigational__1yqzeadm:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--tint_active__13r5x7fe);\n  font-weight: var(--fontWeight-medium__1k9lq9611);\n}\n.styles_variantAppearance_primary__1yqzeadn {\n  background: var(--button_default__13r5x7f7);\n  color: var(--white__13r5x7fh);\n}\n.styles_variantAppearance_primary__1yqzeadn:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--button_hover__13r5x7f8);\n  color: var(--white__13r5x7fh);\n}\n.styles_variantAppearance_primary__1yqzeadn:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--button_active__13r5x7f6);\n}\n.styles_variantAppearance_secondary__1yqzeado {\n  border: 1px solid;\n  border-color: var(--border_default__13r5x7f4);\n  color: var(--text_high_contrast__13r5x7fc);\n}\n.styles_variantAppearance_secondary__1yqzeado:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:hover) {\n  background: var(--tint_hover__13r5x7fg);\n  border-color: var(--border_hover__13r5x7f5);\n}\n.styles_variantAppearance_secondary__1yqzeado:is(a,button,input):not(:is([disabled], [aria-disabled='true'])):is(:active, [data-active='true']) {\n  background: var(--button_tint__13r5x7f9);\n  border-color: var(--button_default__13r5x7f7);\n  color: var(--button_default__13r5x7f7);\n}\n.styles_getButtonStyles_compound_0__1yqzead15 {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_1__1yqzead16 {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_2__1yqzead17 {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n.styles_getButtonStyles_compound_3__1yqzead18 {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_4__1yqzead19 {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_5__1yqzead1a {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n.styles_getButtonStyles_compound_6__1yqzead1b {\n  height: var(--spacing-space_12__1k9lq962h);\n}\n.styles_getButtonStyles_compound_7__1yqzead1c {\n  height: var(--spacing-space_10__1k9lq962g);\n}\n.styles_getButtonStyles_compound_8__1yqzead1d {\n  height: var(--spacing-space_8__1k9lq962f);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .styles_getButtonStyles__1yqzeadr {\n    transition: color var(--transitionDuration-short__1k9lq962k) ease,                         background var(--transitionDuration-short__1k9lq962k) ease,                         opacity var(--transitionDuration-short__1k9lq962k) ease,                         border-color var(--transitionDuration-short__1k9lq962k) ease;\n  }\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/slot_wrapper/styles.css.ts.vanilla.css","source":"LnN0eWxlc19nZXRTbG90U3R5bGVzX19obHhteTI3IHsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					".styles_getSlotStyles__hlxmy27 {\n  pointer-events: none;\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings: "AAAA;EACE,oBAAoB;AACtB",
						sourcesContent: [
							".styles_getSlotStyles__hlxmy27 {\n  pointer-events: none;\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/common/element_size.css.ts.vanilla.css","source":"LmVsZW1lbnRfc2l6ZV9lbGVtZW50UGFkZGluZ19sZ19fMWY2enJ2NiB7CiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zcGFjZV8zX18xazlscTk2MmIpIHZhcigtLXNwYWNpbmctc3BhY2VfNl9fMWs5bHE5NjJlKTsKfQouZWxlbWVudF9zaXplX2VsZW1lbnRQYWRkaW5nX21kX18xZjZ6cnY3IHsKICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNwYWNlXzJfXzFrOWxxOTYyYSkgdmFyKC0tc3BhY2luZy1zcGFjZV80X18xazlscTk2MmMpOwp9Ci5lbGVtZW50X3NpemVfZWxlbWVudFBhZGRpbmdfc21fXzFmNnpydjggewogIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc3BhY2VfMV9fMWs5bHE5NjI5KSB2YXIoLS1zcGFjaW5nLXNwYWNlXzJfXzFrOWxxOTYyYSk7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					".element_size_elementPadding_lg__1f6zrv6 {\n  padding: var(--spacing-space_3__1k9lq962b) var(--spacing-space_6__1k9lq962e);\n}\n.element_size_elementPadding_md__1f6zrv7 {\n  padding: var(--spacing-space_2__1k9lq962a) var(--spacing-space_4__1k9lq962c);\n}\n.element_size_elementPadding_sm__1f6zrv8 {\n  padding: var(--spacing-space_1__1k9lq9629) var(--spacing-space_2__1k9lq962a);\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE,4EAA4E;AAC9E;AACA;EACE,4EAA4E;AAC9E;AACA;EACE,4EAA4E;AAC9E",
						sourcesContent: [
							".element_size_elementPadding_lg__1f6zrv6 {\n  padding: var(--spacing-space_3__1k9lq962b) var(--spacing-space_6__1k9lq962e);\n}\n.element_size_elementPadding_md__1f6zrv7 {\n  padding: var(--spacing-space_2__1k9lq962a) var(--spacing-space_4__1k9lq962c);\n}\n.element_size_elementPadding_sm__1f6zrv8 {\n  padding: var(--spacing-space_1__1k9lq9629) var(--spacing-space_2__1k9lq962a);\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
	},
]);
