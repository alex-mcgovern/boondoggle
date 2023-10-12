"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[8415],
	{
		"./node_modules/@babel/runtime/helpers/esm/extends.js": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function _extends() {
				return (
					(_extends = Object.assign
						? Object.assign.bind()
						: function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];
									for (var key in source)
										Object.prototype.hasOwnProperty.call(
											source,
											key,
										) && (target[key] = source[key]);
								}
								return target;
						  }),
					_extends.apply(this, arguments)
				);
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => _extends });
		},
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
		"./mocks/LOREM.mock.ts": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { m: () => LOREM });
			const LOREM = {
				button: "Do the thing",
				dateFormatted: "02/06/1993",
				dateISO: "1993-02-06T00:00:00.000Z",
				email: () => "john.smith@email.com",
				errorMessage: (suffix) =>
					"Error ipsum" + (suffix ? `-${suffix}` : ""),
				id: (suffix) => "lorem-ipsum" + (suffix ? `-${suffix}` : ""),
				label: (suffix) => "Label ipsum" + (suffix ? `-${suffix}` : ""),
				labelDate: (suffix) =>
					"Date label" + (suffix ? `-${suffix}` : ""),
				labelDescription: (suffix) =>
					"Description label" + (suffix ? `-${suffix}` : ""),
				labelDropdown: (suffix) =>
					"Dropdown label" + (suffix ? `-${suffix}` : ""),
				labelEmail: (suffix) =>
					"Email label" + (suffix ? `-${suffix}` : ""),
				labelRadioButtons: (suffix) =>
					"Radio buttons label" + (suffix ? `-${suffix}` : ""),
				labelSlider: (suffix) =>
					"Slider label" + (suffix ? `-${suffix}` : ""),
				link: "Go to the thing",
				name: (suffix) => "element" + (suffix ? `-${suffix}` : ""),
				placeholder: (suffix) =>
					"Placeholder ipsum" + (suffix ? `-${suffix}` : ""),
				select: "Select a thing",
				text_lg:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
				text_md:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				text_xl:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
				text_xxs: "Lorem ipsum",
				title_xl:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
			};
		},
		"./src/components/input_date/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Invalid: () => Invalid,
					WithDefaultValue: () => WithDefaultValue,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./src/components/input_date/index.tsx",
				),
				_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__("./mocks/LOREM.mock.ts");
			const __WEBPACK_DEFAULT_EXPORT__ = {
					args: {
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
						onChange: (newDate) => {
							console.info("newDate", newDate);
						},
						placeholder:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
					},
					component: ___WEBPACK_IMPORTED_MODULE_0__.U,
					title: "Components/InputDate",
				},
				Default = {},
				Invalid = {
					args: {
						errorMessage:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.errorMessage(),
						invalid: !0,
					},
				},
				WithDefaultValue = { args: { defaultValue: "2021-01-01" } };
		},
		"./src/hooks/use_click_outside.ts": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				O: () => useClickOutside,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				"./node_modules/react/index.js",
			);
			function useClickOutside({ callback, contentRef, triggerRef }) {
				(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
					function handleClickOutside(event) {
						triggerRef?.current?.contains(event.target) ||
							(contentRef?.current?.contains(event.target) &&
								"DIALOG" !== event?.target.nodeName) ||
							callback();
					}
					function handleEscape(event) {
						"Escape" === event.key && callback();
					}
					return (
						document.addEventListener(
							"mousedown",
							handleClickOutside,
						),
						document.addEventListener("keydown", handleEscape),
						() => {
							document.removeEventListener(
								"mousedown",
								handleClickOutside,
							),
								document.removeEventListener(
									"keydown",
									handleEscape,
								);
						}
					);
				});
			}
		},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/dialog/styles.css.ts.vanilla.css","source":"LnN0eWxlc19wbGFjZW1lbnRfYm90dG9tLWNlbnRlcl9fdGhnNzRrMCB7CiAgaW5zZXQtaW5saW5lLXN0YXJ0OiA1MCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwp9Ci5zdHlsZXNfcGxhY2VtZW50X2JvdHRvbS1lbmRfX3RoZzc0azEgewogIGxlZnQ6IGF1dG87Cn0KLnN0eWxlc19wbGFjZW1lbnRfbWlkZGxlLXN0YXJ0X190aGc3NGszIHsKICBpbnNldC1ibG9jazogMCUgNTAlOwogIGluc2V0LWlubGluZS1zdGFydDogY2FsYygxMDAlICsgdmFyKC0tc3BhY2luZy1zcGFjZV8yX18xazlscTk2MmEpKTsKfQouc3R5bGVzX3BsYWNlbWVudF90b3AtY2VudGVyX190aGc3NGs0IHsKICBpbnNldC1ibG9jay1lbmQ6IDEwMCU7CiAgaW5zZXQtaW5saW5lLXN0YXJ0OiA1MCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwp9Ci5zdHlsZXNfcGxhY2VtZW50X3RvcC1lbmRfX3RoZzc0azUgewogIGluc2V0LWJsb2NrLWVuZDogMTAwJTsKICBsZWZ0OiBhdXRvOwp9Ci5zdHlsZXNfcGxhY2VtZW50X3RvcC1zdGFydF9fdGhnNzRrNiB7CiAgaW5zZXQtYmxvY2stZW5kOiAxMDAlOwp9Ci5zdHlsZXNfZ2V0RGlhbG9nU3R5bGVzX190aGc3NGs4IHsKICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zcGFjaW5nLXNwYWNlXzRfXzFrOWxxOTYyYykpOwp9Ci5zdHlsZXNfZ2V0RGlhbG9nU3R5bGVzX190aGc3NGs4OmZvY3VzIHsKICBvdXRsaW5lOiBub25lOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					".styles_placement_bottom-center__thg74k0 {\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n}\n.styles_placement_bottom-end__thg74k1 {\n  left: auto;\n}\n.styles_placement_middle-start__thg74k3 {\n  inset-block: 0% 50%;\n  inset-inline-start: calc(100% + var(--spacing-space_2__1k9lq962a));\n}\n.styles_placement_top-center__thg74k4 {\n  inset-block-end: 100%;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n}\n.styles_placement_top-end__thg74k5 {\n  inset-block-end: 100%;\n  left: auto;\n}\n.styles_placement_top-start__thg74k6 {\n  inset-block-end: 100%;\n}\n.styles_getDialogStyles__thg74k8 {\n  max-width: calc(100vw - var(--spacing-space_4__1k9lq962c));\n}\n.styles_getDialogStyles__thg74k8:focus {\n  outline: none;\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,kEAAkE;AACpE;AACA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,0DAA0D;AAC5D;AACA;EACE,aAAa;AACf",
						sourcesContent: [
							".styles_placement_bottom-center__thg74k0 {\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n}\n.styles_placement_bottom-end__thg74k1 {\n  left: auto;\n}\n.styles_placement_middle-start__thg74k3 {\n  inset-block: 0% 50%;\n  inset-inline-start: calc(100% + var(--spacing-space_2__1k9lq962a));\n}\n.styles_placement_top-center__thg74k4 {\n  inset-block-end: 100%;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n}\n.styles_placement_top-end__thg74k5 {\n  inset-block-end: 100%;\n  left: auto;\n}\n.styles_placement_top-start__thg74k6 {\n  inset-block-end: 100%;\n}\n.styles_getDialogStyles__thg74k8 {\n  max-width: calc(100vw - var(--spacing-space_4__1k9lq962c));\n}\n.styles_getDialogStyles__thg74k8:focus {\n  outline: none;\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/input_date/styles.css.ts.vanilla.css","source":"LnN0eWxlc19kYXRlUGlja2VyRGlhbG9nU3R5bGVfX3RlZHdhMjEgewogIHBvaW50ZXItZXZlbnRzOiBhbGw7Cn0KLnN0eWxlc19pbnB1dERhdGVTdHlsZV9fdGVkd2EyMiB7CiAgdGV4dC1hbGlnbjogbGVmdDsKfQouc3R5bGVzX2lucHV0RGF0ZVN0eWxlX190ZWR3YTIyOmhvdmVyIHsKICBjdXJzb3I6IHBvaW50ZXI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					".styles_datePickerDialogStyle__tedwa21 {\n  pointer-events: all;\n}\n.styles_inputDateStyle__tedwa22 {\n  text-align: left;\n}\n.styles_inputDateStyle__tedwa22:hover {\n  cursor: pointer;\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB",
						sourcesContent: [
							".styles_datePickerDialogStyle__tedwa21 {\n  pointer-events: all;\n}\n.styles_inputDateStyle__tedwa22 {\n  text-align: left;\n}\n.styles_inputDateStyle__tedwa22:hover {\n  cursor: pointer;\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
	},
]);
