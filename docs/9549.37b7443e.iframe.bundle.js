/*! For license information please see 9549.37b7443e.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[9549],
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
		"./node_modules/@dessert-box/core/dist/dessert-box-core.esm.js": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function composeClassNames(...classNames) {
				const classes = classNames
					.filter(
						(className) => Boolean(className) && " " !== className,
					)
					.map((className) =>
						null == className
							? void 0
							: className.toString().trim(),
					);
				return 0 === classes.length ? void 0 : classes.join(" ");
			}
			function extractAtomsFromProps(props, atomsFn) {
				let hasAtomProps = !1,
					atomProps = {},
					otherProps = {},
					customProps = {};
				for (const key in props)
					if ("_" === key[0] && "_" === key[1]) {
						customProps[key.substring(2)] = props[key];
					} else
						atomsFn.properties.has(key)
							? ((hasAtomProps = !0),
							  (atomProps[key] = props[key]))
							: (otherProps[key] = props[key]);
				return { hasAtomProps, atomProps, otherProps, customProps };
			}
			__webpack_require__.d(__webpack_exports__, {
				U: () => composeClassNames,
				q: () => extractAtomsFromProps,
			});
		},
		"./node_modules/@radix-ui/react-collapsible/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				VY: () => $409067139f391064$export$7c6e2c02157bb7d2,
				fC: () => $409067139f391064$export$be92b6f5f03c0fe9,
				xz: () => $409067139f391064$export$41fb9f06171c75f4,
			});
			var esm_extends = __webpack_require__(
					"./node_modules/@babel/runtime/helpers/esm/extends.js",
				),
				react = __webpack_require__("./node_modules/react/index.js"),
				react_namespaceObject = __webpack_require__.t(react, 2),
				dist = __webpack_require__(
					"./node_modules/@radix-ui/primitive/dist/index.mjs",
				),
				react_context_dist = __webpack_require__(
					"./node_modules/@radix-ui/react-context/dist/index.mjs",
				),
				react_use_controllable_state_dist = __webpack_require__(
					"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs",
				),
				react_use_layout_effect_dist = __webpack_require__(
					"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs",
				),
				react_compose_refs_dist = __webpack_require__(
					"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs",
				),
				react_primitive_dist = __webpack_require__(
					"./node_modules/@radix-ui/react-primitive/dist/index.mjs",
				),
				react_dom = __webpack_require__(
					"./node_modules/react-dom/index.js",
				);
			const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
				const { present, children } = props,
					presence = (function $921a889cee6df7e8$var$usePresence(
						present,
					) {
						const [node1, setNode] = (0, react.useState)(),
							stylesRef = (0, react.useRef)({}),
							prevPresentRef = (0, react.useRef)(present),
							prevAnimationNameRef = (0, react.useRef)("none"),
							initialState = present ? "mounted" : "unmounted",
							[state, send] =
								(function $fe963b355347cc68$export$3e6543de14f8614f(
									initialState,
									machine,
								) {
									return (0, react.useReducer)(
										(state, event) => {
											const nextState =
												machine[state][event];
											return null != nextState
												? nextState
												: state;
										},
										initialState,
									);
								})(initialState, {
									mounted: {
										UNMOUNT: "unmounted",
										ANIMATION_OUT: "unmountSuspended",
									},
									unmountSuspended: {
										MOUNT: "mounted",
										ANIMATION_END: "unmounted",
									},
									unmounted: { MOUNT: "mounted" },
								});
						return (
							(0, react.useEffect)(() => {
								const currentAnimationName =
									$921a889cee6df7e8$var$getAnimationName(
										stylesRef.current,
									);
								prevAnimationNameRef.current =
									"mounted" === state
										? currentAnimationName
										: "none";
							}, [state]),
							(0, react_use_layout_effect_dist.b)(() => {
								const styles = stylesRef.current,
									wasPresent = prevPresentRef.current;
								if (wasPresent !== present) {
									const prevAnimationName =
											prevAnimationNameRef.current,
										currentAnimationName =
											$921a889cee6df7e8$var$getAnimationName(
												styles,
											);
									if (present) send("MOUNT");
									else if (
										"none" === currentAnimationName ||
										"none" ===
											(null == styles
												? void 0
												: styles.display)
									)
										send("UNMOUNT");
									else {
										send(
											wasPresent &&
											prevAnimationName !==
												currentAnimationName
												? "ANIMATION_OUT"
												: "UNMOUNT",
										);
									}
									prevPresentRef.current = present;
								}
							}, [present, send]),
							(0, react_use_layout_effect_dist.b)(() => {
								if (node1) {
									const handleAnimationEnd = (event) => {
											const isCurrentAnimation =
												$921a889cee6df7e8$var$getAnimationName(
													stylesRef.current,
												).includes(event.animationName);
											event.target === node1 &&
												isCurrentAnimation &&
												(0, react_dom.flushSync)(() =>
													send("ANIMATION_END"),
												);
										},
										handleAnimationStart = (event) => {
											event.target === node1 &&
												(prevAnimationNameRef.current =
													$921a889cee6df7e8$var$getAnimationName(
														stylesRef.current,
													));
										};
									return (
										node1.addEventListener(
											"animationstart",
											handleAnimationStart,
										),
										node1.addEventListener(
											"animationcancel",
											handleAnimationEnd,
										),
										node1.addEventListener(
											"animationend",
											handleAnimationEnd,
										),
										() => {
											node1.removeEventListener(
												"animationstart",
												handleAnimationStart,
											),
												node1.removeEventListener(
													"animationcancel",
													handleAnimationEnd,
												),
												node1.removeEventListener(
													"animationend",
													handleAnimationEnd,
												);
										}
									);
								}
								send("ANIMATION_END");
							}, [node1, send]),
							{
								isPresent: [
									"mounted",
									"unmountSuspended",
								].includes(state),
								ref: (0, react.useCallback)((node) => {
									node &&
										(stylesRef.current =
											getComputedStyle(node)),
										setNode(node);
								}, []),
							}
						);
					})(present),
					child =
						"function" == typeof children
							? children({ present: presence.isPresent })
							: react.Children.only(children),
					ref = (0, react_compose_refs_dist.e)(
						presence.ref,
						child.ref,
					);
				return "function" == typeof children || presence.isPresent
					? (0, react.cloneElement)(child, { ref })
					: null;
			};
			function $921a889cee6df7e8$var$getAnimationName(styles) {
				return (
					(null == styles ? void 0 : styles.animationName) || "none"
				);
			}
			$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
			const $1746a345f3d73bb7$var$useReactId =
				react_namespaceObject["useId".toString()] || (() => {});
			let $1746a345f3d73bb7$var$count = 0;
			function $1746a345f3d73bb7$export$f680877a34711e37(
				deterministicId,
			) {
				const [id, setId] = react.useState(
					$1746a345f3d73bb7$var$useReactId(),
				);
				return (
					(0, react_use_layout_effect_dist.b)(() => {
						deterministicId ||
							setId((reactId) =>
								null != reactId
									? reactId
									: String($1746a345f3d73bb7$var$count++),
							);
					}, [deterministicId]),
					deterministicId || (id ? `radix-${id}` : "")
				);
			}
			const [
					$409067139f391064$var$createCollapsibleContext,
					$409067139f391064$export$952b32dcbe73087a,
				] = (0, react_context_dist.b)("Collapsible"),
				[
					$409067139f391064$var$CollapsibleProvider,
					$409067139f391064$var$useCollapsibleContext,
				] =
					$409067139f391064$var$createCollapsibleContext(
						"Collapsible",
					),
				$409067139f391064$export$6eb0f7ddcda6131f = (0,
				react.forwardRef)((props, forwardedRef) => {
					const {
							__scopeCollapsible,
							open: openProp,
							defaultOpen,
							disabled,
							onOpenChange,
							...collapsibleProps
						} = props,
						[open = !1, setOpen] = (0,
						react_use_controllable_state_dist.T)({
							prop: openProp,
							defaultProp: defaultOpen,
							onChange: onOpenChange,
						});
					return (0,
					react.createElement)(
						$409067139f391064$var$CollapsibleProvider,
						{
							scope: __scopeCollapsible,
							disabled,
							contentId:
								$1746a345f3d73bb7$export$f680877a34711e37(),
							open,
							onOpenToggle: (0, react.useCallback)(
								() => setOpen((prevOpen) => !prevOpen),
								[setOpen],
							),
						},
						(0, react.createElement)(
							react_primitive_dist.WV.div,
							(0, esm_extends.Z)(
								{
									"data-state":
										$409067139f391064$var$getState(open),
									"data-disabled": disabled ? "" : void 0,
								},
								collapsibleProps,
								{ ref: forwardedRef },
							),
						),
					);
				}),
				$409067139f391064$export$c135dce7b15bbbdc = (0,
				react.forwardRef)((props, forwardedRef) => {
					const { __scopeCollapsible, ...triggerProps } = props,
						context = $409067139f391064$var$useCollapsibleContext(
							"CollapsibleTrigger",
							__scopeCollapsible,
						);
					return (0,
					react.createElement)(
						react_primitive_dist.WV.button,
						(0, esm_extends.Z)(
							{
								type: "button",
								"aria-controls": context.contentId,
								"aria-expanded": context.open || !1,
								"data-state": $409067139f391064$var$getState(
									context.open,
								),
								"data-disabled": context.disabled ? "" : void 0,
								disabled: context.disabled,
							},
							triggerProps,
							{
								ref: forwardedRef,
								onClick: (0, dist.M)(
									props.onClick,
									context.onOpenToggle,
								),
							},
						),
					);
				}),
				$409067139f391064$export$aadde00976f34151 = (0,
				react.forwardRef)((props, forwardedRef) => {
					const { forceMount, ...contentProps } = props,
						context = $409067139f391064$var$useCollapsibleContext(
							"CollapsibleContent",
							props.__scopeCollapsible,
						);
					return (0,
					react.createElement)(
						$921a889cee6df7e8$export$99c2b779aa4e8b8b,
						{ present: forceMount || context.open },
						({ present }) =>
							(0, react.createElement)(
								$409067139f391064$var$CollapsibleContentImpl,
								(0, esm_extends.Z)({}, contentProps, {
									ref: forwardedRef,
									present,
								}),
							),
					);
				}),
				$409067139f391064$var$CollapsibleContentImpl = (0,
				react.forwardRef)((props, forwardedRef) => {
					const {
							__scopeCollapsible,
							present,
							children,
							...contentProps
						} = props,
						context = $409067139f391064$var$useCollapsibleContext(
							"CollapsibleContent",
							__scopeCollapsible,
						),
						[isPresent, setIsPresent] = (0, react.useState)(
							present,
						),
						ref = (0, react.useRef)(null),
						composedRefs = (0, react_compose_refs_dist.e)(
							forwardedRef,
							ref,
						),
						heightRef = (0, react.useRef)(0),
						height = heightRef.current,
						widthRef = (0, react.useRef)(0),
						width = widthRef.current,
						isOpen = context.open || isPresent,
						isMountAnimationPreventedRef = (0, react.useRef)(
							isOpen,
						),
						originalStylesRef = (0, react.useRef)();
					return (
						(0, react.useEffect)(() => {
							const rAF = requestAnimationFrame(
								() =>
									(isMountAnimationPreventedRef.current = !1),
							);
							return () => cancelAnimationFrame(rAF);
						}, []),
						(0, react_use_layout_effect_dist.b)(() => {
							const node = ref.current;
							if (node) {
								(originalStylesRef.current =
									originalStylesRef.current || {
										transitionDuration:
											node.style.transitionDuration,
										animationName: node.style.animationName,
									}),
									(node.style.transitionDuration = "0s"),
									(node.style.animationName = "none");
								const rect = node.getBoundingClientRect();
								(heightRef.current = rect.height),
									(widthRef.current = rect.width),
									isMountAnimationPreventedRef.current ||
										((node.style.transitionDuration =
											originalStylesRef.current.transitionDuration),
										(node.style.animationName =
											originalStylesRef.current.animationName)),
									setIsPresent(present);
							}
						}, [context.open, present]),
						(0, react.createElement)(
							react_primitive_dist.WV.div,
							(0, esm_extends.Z)(
								{
									"data-state":
										$409067139f391064$var$getState(
											context.open,
										),
									"data-disabled": context.disabled
										? ""
										: void 0,
									id: context.contentId,
									hidden: !isOpen,
								},
								contentProps,
								{
									ref: composedRefs,
									style: {
										"--radix-collapsible-content-height":
											height ? `${height}px` : void 0,
										"--radix-collapsible-content-width":
											width ? `${width}px` : void 0,
										...props.style,
									},
								},
							),
							isOpen && children,
						)
					);
				});
			function $409067139f391064$var$getState(open) {
				return open ? "open" : "closed";
			}
			const $409067139f391064$export$be92b6f5f03c0fe9 =
					$409067139f391064$export$6eb0f7ddcda6131f,
				$409067139f391064$export$41fb9f06171c75f4 =
					$409067139f391064$export$c135dce7b15bbbdc,
				$409067139f391064$export$7c6e2c02157bb7d2 =
					$409067139f391064$export$aadde00976f34151;
		},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/collapsible/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBzdHlsZXNfb3Blbl9fMTgyZjB3OTAgewogIGZyb20gewogICAgaGVpZ2h0OiAwOwogIH0KICB0byB7CiAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0KTsKICB9Cn0KQGtleWZyYW1lcyBzdHlsZXNfY2xvc2VfXzE4MmYwdzkxIHsKICBmcm9tIHsKICAgIGhlaWdodDogdmFyKC0tcmFkaXgtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQpOwogIH0KICB0byB7CiAgICBoZWlnaHQ6IDA7CiAgfQp9Ci5zdHlsZXNfY29sbGFwc2libGVDb250ZW50QW5pbWF0aW9uX18xODJmMHc5MiB7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKfQouc3R5bGVzX2NvbGxhcHNpYmxlQ29udGVudEFuaW1hdGlvbl9fMTgyZjB3OTJbZGF0YS1zdGF0ZT0iY2xvc2VkIl0gewogIGFuaW1hdGlvbjogc3R5bGVzX2Nsb3NlX18xODJmMHc5MSB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24tbWVkaXVtX18xazlscTk2MmopIGVhc2UgZm9yd2FyZHM7Cn0KLnN0eWxlc19jb2xsYXBzaWJsZUNvbnRlbnRBbmltYXRpb25fXzE4MmYwdzkyW2RhdGEtc3RhdGU9Im9wZW4iXSB7CiAgYW5pbWF0aW9uOiBzdHlsZXNfb3Blbl9fMTgyZjB3OTAgdmFyKC0tdHJhbnNpdGlvbkR1cmF0aW9uLW1lZGl1bV9fMWs5bHE5NjJqKSBlYXNlIGZvcndhcmRzOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					'@keyframes styles_open__182f0w90 {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--radix-collapsible-content-height);\n  }\n}\n@keyframes styles_close__182f0w91 {\n  from {\n    height: var(--radix-collapsible-content-height);\n  }\n  to {\n    height: 0;\n  }\n}\n.styles_collapsibleContentAnimation__182f0w92 {\n  overflow: hidden;\n}\n.styles_collapsibleContentAnimation__182f0w92[data-state="closed"] {\n  animation: styles_close__182f0w91 var(--transitionDuration-medium__1k9lq962j) ease forwards;\n}\n.styles_collapsibleContentAnimation__182f0w92[data-state="open"] {\n  animation: styles_open__182f0w90 var(--transitionDuration-medium__1k9lq962j) ease forwards;\n}',
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE;IACE,SAAS;EACX;EACA;IACE,+CAA+C;EACjD;AACF;AACA;EACE;IACE,+CAA+C;EACjD;EACA;IACE,SAAS;EACX;AACF;AACA;EACE,gBAAgB;AAClB;AACA;EACE,2FAA2F;AAC7F;AACA;EACE,0FAA0F;AAC5F",
						sourcesContent: [
							'@keyframes styles_open__182f0w90 {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--radix-collapsible-content-height);\n  }\n}\n@keyframes styles_close__182f0w91 {\n  from {\n    height: var(--radix-collapsible-content-height);\n  }\n  to {\n    height: 0;\n  }\n}\n.styles_collapsibleContentAnimation__182f0w92 {\n  overflow: hidden;\n}\n.styles_collapsibleContentAnimation__182f0w92[data-state="closed"] {\n  animation: styles_close__182f0w91 var(--transitionDuration-medium__1k9lq962j) ease forwards;\n}\n.styles_collapsibleContentAnimation__182f0w92[data-state="open"] {\n  animation: styles_open__182f0w90 var(--transitionDuration-medium__1k9lq962j) ease forwards;\n}',
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
		"./node_modules/react/cjs/react-jsx-runtime.production.min.js": (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			var f = __webpack_require__("./node_modules/react/index.js"),
				k = Symbol.for("react.element"),
				l = Symbol.for("react.fragment"),
				m = Object.prototype.hasOwnProperty,
				n =
					f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
						.ReactCurrentOwner,
				p = { key: !0, ref: !0, __self: !0, __source: !0 };
			function q(c, a, g) {
				var b,
					d = {},
					e = null,
					h = null;
				for (b in (void 0 !== g && (e = "" + g),
				void 0 !== a.key && (e = "" + a.key),
				void 0 !== a.ref && (h = a.ref),
				a))
					m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
				if (c && c.defaultProps)
					for (b in (a = c.defaultProps))
						void 0 === d[b] && (d[b] = a[b]);
				return {
					$$typeof: k,
					type: c,
					key: e,
					ref: h,
					props: d,
					_owner: n.current,
				};
			}
			(exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
		},
		"./node_modules/react/jsx-runtime.js": (
			module,
			__unused_webpack_exports,
			__webpack_require__,
		) => {
			module.exports = __webpack_require__(
				"./node_modules/react/cjs/react-jsx-runtime.production.min.js",
			);
		},
	},
]);
