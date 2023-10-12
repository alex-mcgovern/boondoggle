"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[8206],
	{
		"./node_modules/@radix-ui/primitive/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
				originalEventHandler,
				ourEventHandler,
				{ checkForDefaultPrevented = !0 } = {},
			) {
				return function handleEvent(event) {
					if (
						(null == originalEventHandler ||
							originalEventHandler(event),
						!1 === checkForDefaultPrevented ||
							!event.defaultPrevented)
					)
						return null == ourEventHandler
							? void 0
							: ourEventHandler(event);
				};
			}
			__webpack_require__.d(__webpack_exports__, {
				M: () => $e42e1063c40fb3ef$export$b9ecd428b558ff10,
			});
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
		"./node_modules/@radix-ui/react-context/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				b: () => $c512c27ab02ef895$export$50c7b4e9d9f19c1,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				"./node_modules/react/index.js",
			);
			function $c512c27ab02ef895$export$50c7b4e9d9f19c1(
				scopeName,
				createContextScopeDeps = [],
			) {
				let defaultContexts = [];
				const createScope = () => {
					const scopeContexts = defaultContexts.map(
						(defaultContext) =>
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
								defaultContext,
							),
					);
					return function useScope(scope) {
						const contexts =
							(null == scope ? void 0 : scope[scopeName]) ||
							scopeContexts;
						return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
							() => ({
								[`__scope${scopeName}`]: {
									...scope,
									[scopeName]: contexts,
								},
							}),
							[scope, contexts],
						);
					};
				};
				return (
					(createScope.scopeName = scopeName),
					[
						function $c512c27ab02ef895$export$fd42f52fd3ae1109(
							rootComponentName,
							defaultContext,
						) {
							const BaseContext = (0,
								react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
									defaultContext,
								),
								index = defaultContexts.length;
							function Provider(props) {
								const { scope, children, ...context } = props,
									Context =
										(null == scope
											? void 0
											: scope[scopeName][index]) ||
										BaseContext,
									value = (0,
									react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
										() => context,
										Object.values(context),
									);
								return (0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
									Context.Provider,
									{ value },
									children,
								);
							}
							return (
								(defaultContexts = [
									...defaultContexts,
									defaultContext,
								]),
								(Provider.displayName =
									rootComponentName + "Provider"),
								[
									Provider,
									function useContext(consumerName, scope) {
										const Context =
												(null == scope
													? void 0
													: scope[scopeName][
															index
													  ]) || BaseContext,
											context = (0,
											react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
												Context,
											);
										if (context) return context;
										if (void 0 !== defaultContext)
											return defaultContext;
										throw new Error(
											`\`${consumerName}\` must be used within \`${rootComponentName}\``,
										);
									},
								]
							);
						},
						$c512c27ab02ef895$var$composeContextScopes(
							createScope,
							...createContextScopeDeps,
						),
					]
				);
			}
			function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
				const baseScope = scopes[0];
				if (1 === scopes.length) return baseScope;
				const createScope1 = () => {
					const scopeHooks = scopes.map((createScope) => ({
						useScope: createScope(),
						scopeName: createScope.scopeName,
					}));
					return function useComposedScopes(overrideScopes) {
						const nextScopes1 = scopeHooks.reduce(
							(nextScopes, { useScope, scopeName }) => ({
								...nextScopes,
								...useScope(overrideScopes)[
									`__scope${scopeName}`
								],
							}),
							{},
						);
						return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
							() => ({
								[`__scope${baseScope.scopeName}`]: nextScopes1,
							}),
							[nextScopes1],
						);
					};
				};
				return (
					(createScope1.scopeName = baseScope.scopeName), createScope1
				);
			}
		},
		"./node_modules/@radix-ui/react-primitive/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				WV: () => $8927f6f2acc4f386$export$250ffa63cdc0d034,
			});
			var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/@babel/runtime/helpers/esm/extends.js",
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./node_modules/react/index.js",
				),
				_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ =
					(__webpack_require__("./node_modules/react-dom/index.js"),
					__webpack_require__(
						"./node_modules/@radix-ui/react-slot/dist/index.mjs",
					));
			const $8927f6f2acc4f386$export$250ffa63cdc0d034 = [
				"a",
				"button",
				"div",
				"form",
				"h2",
				"h3",
				"img",
				"input",
				"label",
				"li",
				"nav",
				"ol",
				"p",
				"span",
				"svg",
				"ul",
			].reduce((primitive, node) => {
				const Node = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
					(props, forwardedRef) => {
						const { asChild, ...primitiveProps } = props,
							Comp = asChild
								? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.g7
								: node;
						return (
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
								window[Symbol.for("radix-ui")] = !0;
							}, []),
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
								Comp,
								(0,
								_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
									{},
									primitiveProps,
									{ ref: forwardedRef },
								),
							)
						);
					},
				);
				return (
					(Node.displayName = `Primitive.${node}`),
					{ ...primitive, [node]: Node }
				);
			}, {});
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
		"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.d(__webpack_exports__, {
					T: () => $71cd76cc60e0454e$export$6f32135080cb4c3,
				});
				var react = __webpack_require__(
					"./node_modules/react/index.js",
				);
				function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
					const callbackRef = (0, react.useRef)(callback);
					return (
						(0, react.useEffect)(() => {
							callbackRef.current = callback;
						}),
						(0, react.useMemo)(
							() => (...args) => {
								var _callbackRef$current;
								return null ===
									(_callbackRef$current =
										callbackRef.current) ||
									void 0 === _callbackRef$current
									? void 0
									: _callbackRef$current.call(
											callbackRef,
											...args,
									  );
							},
							[],
						)
					);
				}
				function $71cd76cc60e0454e$export$6f32135080cb4c3({
					prop,
					defaultProp,
					onChange = () => {},
				}) {
					const [uncontrolledProp, setUncontrolledProp] =
							(function $71cd76cc60e0454e$var$useUncontrolledState({
								defaultProp,
								onChange,
							}) {
								const uncontrolledState = (0, react.useState)(
										defaultProp,
									),
									[value] = uncontrolledState,
									prevValueRef = (0, react.useRef)(value),
									handleChange =
										$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(
											onChange,
										);
								return (
									(0, react.useEffect)(() => {
										prevValueRef.current !== value &&
											(handleChange(value),
											(prevValueRef.current = value));
									}, [value, prevValueRef, handleChange]),
									uncontrolledState
								);
							})({ defaultProp, onChange }),
						isControlled = void 0 !== prop,
						value1 = isControlled ? prop : uncontrolledProp,
						handleChange =
							$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
					return [
						value1,
						(0, react.useCallback)(
							(nextValue) => {
								if (isControlled) {
									const value =
										"function" == typeof nextValue
											? nextValue(prop)
											: nextValue;
									value !== prop && handleChange(value);
								} else setUncontrolledProp(nextValue);
							},
							[
								isControlled,
								prop,
								setUncontrolledProp,
								handleChange,
							],
						),
					];
				}
			},
		"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				b: () => $9f79659886946c16$export$e5c5a5f917a5871c,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				"./node_modules/react/index.js",
			);
			const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(
				null === globalThis || void 0 === globalThis
					? void 0
					: globalThis.document,
			)
				? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
				: () => {};
		},
	},
]);
