/*! For license information please see documentation-References-mdx.ec745004.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[4080],
	{
		"./node_modules/@mdx-js/react/lib/index.js": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				NF: () => withMDXComponents,
				Zo: () => MDXProvider,
				ah: () => useMDXComponents,
				pC: () => MDXContext,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				"./node_modules/react/index.js",
			);
			const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
				{},
			);
			function withMDXComponents(Component) {
				return function boundMDXComponent(props) {
					const allComponents = useMDXComponents(props.components);
					return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						Component,
						{ ...props, allComponents },
					);
				};
			}
			function useMDXComponents(components) {
				const contextComponents =
					react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
				return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
					() =>
						"function" == typeof components
							? components(contextComponents)
							: { ...contextComponents, ...components },
					[contextComponents, components],
				);
			}
			const emptyObject = {};
			function MDXProvider({
				components,
				children,
				disableParentContext,
			}) {
				let allComponents;
				return (
					(allComponents = disableParentContext
						? "function" == typeof components
							? components({})
							: components || emptyObject
						: useMDXComponents(components)),
					react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						MDXContext.Provider,
						{ value: allComponents },
						children,
					)
				);
			}
		},
		"./documentation/References.mdx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			__webpack_require__("./node_modules/react/index.js");
			var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js"),
				_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						"./node_modules/@mdx-js/react/lib/index.js",
					),
				_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						"./node_modules/@storybook/blocks/dist/index.mjs",
					);
			function _createMdxContent(props) {
				const _components = Object.assign(
					{
						h1: "h1",
						h2: "h2",
						ul: "ul",
						li: "li",
						a: "a",
						h3: "h3",
					},
					(0,
					_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),
					props.components,
				);
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
					{
						children: [
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
								_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,
								{ title: "Documentation/References" },
							),
							"\n",
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
								_components.h1,
								{ id: "references", children: "References" },
							),
							"\n",
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
								_components.h2,
								{
									id: "storybook-examples",
									children: "Storybook examples",
								},
							),
							"\n",
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
								_components.ul,
								{
									children: [
										"\n",
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
											_components.li,
											{
												children: (0,
												react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
													_components.a,
													{
														href: "https://www.kickstartds.com/storybook/",
														target: "_blank",
														rel: "nofollow noopener noreferrer",
														children: "Kickstart",
													},
												),
											},
										),
										"\n",
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
											_components.li,
											{
												children: (0,
												react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
													_components.a,
													{
														href: "https://developers.grafana.com/ui/latest/",
														target: "_blank",
														rel: "nofollow noopener noreferrer",
														children: "Grafana",
													},
												),
											},
										),
										"\n",
									],
								},
							),
							"\n",
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
								_components.h3,
								{
									id: "box-examples",
									children: "Box examples",
								},
							),
							"\n",
							(0,
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
								_components.ul,
								{
									children: [
										"\n",
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
											_components.li,
											{
												children: (0,
												react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
													_components.a,
													{
														href: "https://mui.com/material-ui/react-box/",
														target: "_blank",
														rel: "nofollow noopener noreferrer",
														children:
															"React Box — Material UI",
													},
												),
											},
										),
										"\n",
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
											_components.li,
											{
												children: (0,
												react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
													_components.a,
													{
														href: "https://chakra-ui.com/docs/components/box",
														target: "_blank",
														rel: "nofollow noopener noreferrer",
														children:
															"Box — Chakra UI",
													},
												),
											},
										),
										"\n",
										(0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
											_components.li,
											{
												children: (0,
												react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
													_components.a,
													{
														href: "https://seek-oss.github.io/braid-design-system/components/Box/",
														target: "_blank",
														rel: "nofollow noopener noreferrer",
														children:
															"Box — Braid Design System",
													},
												),
											},
										),
										"\n",
									],
								},
							),
						],
					},
				);
			}
			const __WEBPACK_DEFAULT_EXPORT__ = function MDXContent(props = {}) {
				const { wrapper: MDXLayout } = Object.assign(
					{},
					(0,
					_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),
					props.components,
				);
				return MDXLayout
					? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
							MDXLayout,
							Object.assign({}, props, {
								children: (0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
									_createMdxContent,
									props,
								),
							}),
					  )
					: _createMdxContent(props);
			};
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
