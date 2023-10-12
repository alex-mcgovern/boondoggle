"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[553],
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
		"./documentation/Typography.mdx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					default: () => Typography,
				});
			__webpack_require__("./node_modules/react/index.js");
			var jsx_runtime = __webpack_require__(
					"./node_modules/react/jsx-runtime.js",
				),
				lib = __webpack_require__(
					"./node_modules/@mdx-js/react/lib/index.js",
				),
				dist = __webpack_require__(
					"./node_modules/@storybook/blocks/dist/index.mjs",
				),
				box =
					(__webpack_require__("./mocks/LOREM.mock.ts"),
					__webpack_require__("./src/components/box/index.tsx")),
				fontSizeRaw =
					(__webpack_require__(
						'src/styles/layers.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/layers.css.ts.vanilla.css","source":"QGxheWVyIHJlc2V0OwpAbGF5ZXIgYmFzZTsKQGxheWVyIHRoZW1lOwpAbGF5ZXIgc3ByaW5rbGVzOw=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/color_palette.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/color_palette.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA+1Y226jMBB971fwUmlXShHGNob0pdJ+wH4CIgkJaSlUhPSiVf99xyY2hmCHoKXah74QtfJhxuM5Zw5+yJOPtHLqLH1O72+WVVnWC2e5XCXrp01Vvjh/bhzn7k7+GccIV/Sdbb2lkx3y5IfvBQsnYq53u3CIG8LTc2mEf94r2K4qj8VGAZEANjjsCVwUAlAicoCoxb622CfNYnjKtWW1Sas4Wdf711RhsIYJBIQGLuphNuk2Oea1AhEJYgsHIVi+cELqRj1UVr7CU2KoxFDAeC4DDAu17I51XRb97IITCCEOElXDrt/D9LNj2pYaEPXOAnWTCyUkVHGYi3uQel+0QSKJiKDItKm11xZuW66Ph7jaFzuFSLS0QgTVgoLTNsghSzblm1q9kh2DeMc0NYayRaJlvCg6oer0vY6z/S6L12VRV8mhzXBt7QYBzCHgGW5z1hFQc6pwvAi9U0r16iFxtCJjHdI/pK1WP4ShDKKMuIPpntFOR/jQBYDQmuEt29dtSpmZN583DxqJBWPddZmXVfyS5GkNL3lNqn1S1L/4P39DCrA8Tp5XWi57AZtMdTvZMWyQnXJWJ3Yd2y/yncc4cYMNgAyEx7x1A9GLAZMHfInxmAp14OdFaQdkozz2ZIKYdBK0ct64LQvpMVUYKvv8AuuJLyFA5LCFmFlvLMIU2o8lPoRs2gh1inGR+qbaW7hvqoiN+4RITMRFo4sZ5D7BKkqgRxnNfcf5HEf3VX5sX/g4J9u1MQVs92dh++AoHDPfQdAZA1LATyDn++UJPzTgps34iVN+0pyfNOmnzPqZad/WEdGraG88AevMN1Xl8tRvej7QNdcy9pF3ojH8dFTp35O/n/XT7Pw/y3QOAejb+6kGf5rF/xaArxIAU4dMs/yTTP802z/F+M+jALsqTQv1xnxO/iNuqqnKM5qF/4giYTxFeqjjcq0CgAgvYigcQDAUblAARDTiNW6XjLb8iGLxXcGT9MMBK25QAMvmLBKAqC++EvjWMHODURqACBLcYI0F9cZogLka82kAolTEFC6AXCUC5lOwqIC5LjYVQPxzjTZfRTDTR/kARMAHkFDqzaw+AFTgQ73w+dsEfIUJMI2gESZgcGtWE8CVV5wT9UebANO4s5kAUym+TcD/bAKqtOVpMeuFH420KwAyz4Uf5d/yzZCkQzDTlR/PjRFR8LBzTWO/84uEYRA3B2T0HYBIMjhN8rATzH7tZ96c9eIvFEmS29MUGiMAOPCE/febVo/GCIC5GvMJAKZE2UpwAMEVCmA+BYsEmOtikwCBUhcB/XvDQQVoAjFRlIhMvgX8/AtAYwM2yhsAAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/vars.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/vars.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA4WY34/iNhDH3/tXWCuttCcFGtv5QdKnu7anq9R7uW11LychAwaym1+bBJbdU//3jgnY48QAD6A4n/FMPOPvOKRNVXXk5y+ETCaireWy+ya6rJrIQ9eI79lKzuf0OclfkshPCfXJr4T/NoLbl51oDEmBBJCOwU7kucZYShKFRWPuFTvmMF0EYNJzi6pZyeb0M1/JtdjlnYYDgOsDaas8W5G9aB4mY5I34SFeBx9c822rPXyfZwsvznbm+rlCa65vYpXt2kno/7jXM0UpCf17B5VvNBODN1YfHFCx0tAsJTMnU2dobRNYW/Vxkm2hOZGSwDCHx61YVa84pkVKfOWQMOBIs1mIBxr4Hg0Sj4aJ50/Zh6E1CnaprDkYRm5jGo6sUXArZa3W3+9tOfV46MEE/tQ/Z2+VtXUu3iaLvFo+a0uZkuOAzaxzedDIOiXq2iY2TWaC36REXdtEVuZZaWpzm5J+xEUNgsrO7MQR2+mOFeKTNhhHWlYoiueUqGub6MQiN0iekuOAg5ksJaqc4gQeR3t6XZXdZ1FkOSxztXrTaJmSiahrYNu3tpOF9wmCff4qlo/Hy89g5t09yk0lyb9/3XlfZL6XXbYU3scmE7nXihJqUTbZ2rv7qKYhv1d51ZA/i+opuzOWpwETy2P2Lo+R/G3qtIK908jCAX01Ga2hoKazOHSDj6byXhTo4rZUM01K2NSFMI20gDgAroEOonb7CTSzU4wLCTWyVwhzMZFmXp0LpNRfIwcltGc1UMh3mW22HSxObtbwLSWx74+YY7+wwHcQKgeYq2/TKqCrcAdVSFAqkw9KlXyOsbJqCmFql0JLCRxYK4vMio1CT4nOoNrk/8gCNkQnoQJ3BZQlnZssUtVT1g1h6+aagckqDXsDftXA7HMaHfnLLJubsqPQJSCSGwZocmgYjayl6B6Yp6w+XDbj2A+0EH7LD0d+hPbDb/kJkNlCmwW3zMJ5bOygtYQQXnwtvBD5WWk/4S0/ETKT2iy6ZRbPzY6k0F4gNBXiFQPkZ6P9xNjPti9gw0HD8a1bLESnDAo9hoX3A2C/NcCTAvZbi7AOKvQZnVQ0gKfIFTCYIraigB4SD6KIrShKBQymSCwnoOfJ0An1rUBrdSAdRAoDeJaXIzKYRuy6yiAg42rAIoqsnCxBPmSJlArEHI1bfFfVn4Q5NVKQ9UBrrWrgX85CavUsOpD2AYkaF91fJVHnopbOIw51LgpCz50MEr03u71hCindO+5wmDH9i/mDJocxs2MYvfiIqIsxdpGyWhnjNtfWYpmVGzv3LMC5PyPWyYqFer+d76tfOfcNEl1CfkBPNliszhR+xMZBaRzRM0XTi7BJJksUeRE0GWVCgZc4k1O2GBx+bBAldolLzabQk6wGhxMbRKmV7pT13Mxwa1xzg2VBadnYBTwA0bps8W6AU0zZZvAOWv6xa9S7aDnJq9LsWZYdTw5FexEfHF3Y0/FMcsWg3VYNqlzQX2Z4eBPutkb/Wa6Lrb9jyT8rkPz39y1tZyXS9v6+ramswpqqif2rIXrV3b9ixN5VL3hX9cCyynHJgubOpvz0uR+CKDWtOpFOo9NnRKKiBcllwTQ5fUYkqloQXc7P3tmIRJULohvQs/dwRKLSBdENkrP32Yg0xxYG0hvqZ6cjEpU5CHCknz0YkYkhQYRj/ezxiESbgoMWz/TDj0mTIw5ynOiHd6AmS5yNi6YQWTlHfyNw0OM40rsMQejfAg56HMxcEPpTgIfqjWEEHUYNm4Muo3ELd/R3Hg/6+3//AxlkAbAbEwAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					{
						bodyLg: "1rem",
						bodyMd: "0.875rem",
						bodySm: "0.75rem",
						h1: "2.5rem",
						h2: "2rem",
						h3: "1.75rem",
						h4: "1.5rem",
						h5: "1.25rem",
						h6: "1rem",
						root: "16px",
					}),
				lineHeightRaw = {
					bodyLg: "1.5rem",
					bodyMd: "1.5rem",
					bodySm: "1rem",
					h1: "3rem",
					h2: "2.5rem",
					h3: "2rem",
					h4: "1.75rem",
					h5: "1.5rem",
					h6: "1.5rem",
					root: "1.5rem",
				};
			const remToPx = (rem) => 16 * Number(rem.split("rem")[0]) + "px";
			function _createMdxContent(props) {
				const _components = Object.assign(
					{ h1: "h1", p: "p" },
					(0, lib.ah)(),
					props.components,
				);
				return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
					children: [
						(0, jsx_runtime.jsx)(dist.h_, {
							title: "Documentation/Typography",
						}),
						"\n",
						(0, jsx_runtime.jsx)(_components.h1, {
							id: "typography",
							children: "Typography",
						}),
						"\n",
						(0, jsx_runtime.jsx)(dist.Xz, {
							children: (0, jsx_runtime.jsxs)(box.x, {
								as: "table",
								children: [
									(0, jsx_runtime.jsx)("thead", {
										children: (0, jsx_runtime.jsxs)("tr", {
											children: [
												(0, jsx_runtime.jsx)("th", {
													children: "Style",
												}),
												(0, jsx_runtime.jsx)("th", {
													children: "Font size",
												}),
												(0, jsx_runtime.jsx)("th", {
													children: "Line height",
												}),
											],
										}),
									}),
									(0, jsx_runtime.jsxs)("tbody", {
										children: [
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h1",
																children: "H1",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h1,
																	" / ",
																	remToPx(
																		fontSizeRaw.h1,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h1,
																	" / ",
																	remToPx(
																		lineHeightRaw.h1,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h2",
																children: "H2",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h2,
																	" / ",
																	remToPx(
																		fontSizeRaw.h2,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h2,
																	" / ",
																	remToPx(
																		lineHeightRaw.h2,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h3",
																children: "H3",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h3,
																	" / ",
																	remToPx(
																		fontSizeRaw.h3,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h3,
																	" / ",
																	remToPx(
																		lineHeightRaw.h3,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h4",
																children: "H4",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h4,
																	" / ",
																	remToPx(
																		fontSizeRaw.h4,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h4,
																	" / ",
																	remToPx(
																		lineHeightRaw.h4,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h5",
																children: "H5",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h5,
																	" / ",
																	remToPx(
																		fontSizeRaw.h5,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h5,
																	" / ",
																	remToPx(
																		lineHeightRaw.h5,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																as: "h6",
																children: "H6",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.h6,
																	" / ",
																	remToPx(
																		fontSizeRaw.h6,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.h6,
																	" / ",
																	remToPx(
																		lineHeightRaw.h6,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																fontStyle:
																	"bodyLg",
																children:
																	"bodyLg",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.bodyLg,
																	" / ",
																	remToPx(
																		fontSizeRaw.bodyLg,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.bodyLg,
																	" / ",
																	remToPx(
																		lineHeightRaw.bodyLg,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																fontStyle:
																	"bodyMd",
																children:
																	"bodyMd",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.bodyMd,
																	" / ",
																	remToPx(
																		fontSizeRaw.bodyMd,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.bodyMd,
																	" / ",
																	remToPx(
																		lineHeightRaw.bodyMd,
																	),
																],
															},
														),
													}),
												],
											}),
											(0, jsx_runtime.jsxs)("tr", {
												children: [
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsx)(
															box.x,
															{
																fontStyle:
																	"bodySm",
																children:
																	"bodySm",
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	fontSizeRaw.bodySm,
																	" / ",
																	remToPx(
																		fontSizeRaw.bodySm,
																	),
																],
															},
														),
													}),
													(0, jsx_runtime.jsx)("td", {
														children: (0,
														jsx_runtime.jsxs)(
															_components.p,
															{
																children: [
																	lineHeightRaw.bodySm,
																	" / ",
																	remToPx(
																		lineHeightRaw.bodySm,
																	),
																],
															},
														),
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				});
			}
			const Typography = function MDXContent(props = {}) {
				const { wrapper: MDXLayout } = Object.assign(
					{},
					(0, lib.ah)(),
					props.components,
				);
				return MDXLayout
					? (0, jsx_runtime.jsx)(
							MDXLayout,
							Object.assign({}, props, {
								children: (0, jsx_runtime.jsx)(
									_createMdxContent,
									props,
								),
							}),
					  )
					: _createMdxContent(props);
			};
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
		"./src/components/box/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { x: () => Box });
			var _dessert_box_react__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						"./node_modules/@dessert-box/react/dist/dessert-box-react.esm.js",
					),
				_styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						"./src/styles/utils/get_sprinkles.css.ts",
					);
			const Box = (0, _dessert_box_react__WEBPACK_IMPORTED_MODULE_1__.dO)(
				{
					atoms: _styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_0__.eD,
				},
			);
			try {
				(Box.displayName = "Box"),
					(Box.__docgenInfo = {
						description:
							"Polymorphic `Box` component that allows customisation with\nVanilla Extract Sprinkles API.\n\n- https://github.com/TheMightyPenguin/dessert-box\n- https://vanilla-extract.style/documentation/packages/sprinkles/",
						displayName: "Box",
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
							__alignItems: {
								defaultValue: null,
								description: "",
								name: "__alignItems",
								required: !1,
								type: {
									name: '{} | "start" | "end" | "center" | "stretch" | "baseline"',
								},
							},
							__aspectRatio: {
								defaultValue: null,
								description: "",
								name: "__aspectRatio",
								required: !1,
								type: {
									name: '{} | "square" | "extraWide" | "tall" | "wide"',
								},
							},
							__background: {
								defaultValue: null,
								description: "",
								name: "__background",
								required: !1,
								type: {
									name: '{} | "inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							__border: {
								defaultValue: null,
								description: "",
								name: "__border",
								required: !1,
								type: {
									name: '{} | "border_default" | "border_hover"',
								},
							},
							__borderBottom: {
								defaultValue: null,
								description: "",
								name: "__borderBottom",
								required: !1,
								type: {
									name: '{} | "border_default" | "border_hover"',
								},
							},
							__borderLeft: {
								defaultValue: null,
								description: "",
								name: "__borderLeft",
								required: !1,
								type: {
									name: '{} | "border_default" | "border_hover"',
								},
							},
							__borderRadius: {
								defaultValue: null,
								description: "",
								name: "__borderRadius",
								required: !1,
								type: {
									name: '{} | "50%" | "lg" | "md" | "pill" | "sm"',
								},
							},
							__borderRight: {
								defaultValue: null,
								description: "",
								name: "__borderRight",
								required: !1,
								type: {
									name: '{} | "border_default" | "border_hover"',
								},
							},
							__borderTop: {
								defaultValue: null,
								description: "",
								name: "__borderTop",
								required: !1,
								type: {
									name: '{} | "border_default" | "border_hover"',
								},
							},
							__bottom: {
								defaultValue: null,
								description: "",
								name: "__bottom",
								required: !1,
								type: { name: '{} | "0"' },
							},
							__boxShadow: {
								defaultValue: null,
								description: "",
								name: "__boxShadow",
								required: !1,
								type: { name: '{} | "lg" | "md" | "sm"' },
							},
							__color: {
								defaultValue: null,
								description: "",
								name: "__color",
								required: !1,
								type: {
									name: '{} | "inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | ... 8 more ... | "tint_hover"',
								},
							},
							__flex: {
								defaultValue: null,
								description: "",
								name: "__flex",
								required: !1,
								type: {
									name: '{} | "0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"',
								},
							},
							__flexGrow: {
								defaultValue: null,
								description: "",
								name: "__flexGrow",
								required: !1,
								type: { name: '{} | "0" | "1"' },
							},
							__flexShrink: {
								defaultValue: null,
								description: "",
								name: "__flexShrink",
								required: !1,
								type: { name: '{} | "0" | "1"' },
							},
							__flexWrap: {
								defaultValue: null,
								description: "",
								name: "__flexWrap",
								required: !1,
								type: { name: '{} | "wrap" | "nowrap"' },
							},
							__fontSize: {
								defaultValue: null,
								description: "",
								name: "__fontSize",
								required: !1,
								type: {
									name: '{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							__fontWeight: {
								defaultValue: null,
								description: "",
								name: "__fontWeight",
								required: !1,
								type: {
									name: '{} | "bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"',
								},
							},
							__height: {
								defaultValue: null,
								description: "",
								name: "__height",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							__inset: {
								defaultValue: null,
								description: "",
								name: "__inset",
								required: !1,
								type: { name: '{} | "0"' },
							},
							__isolation: {
								defaultValue: null,
								description: "",
								name: "__isolation",
								required: !1,
								type: { name: '{} | "isolate"' },
							},
							__justifyContent: {
								defaultValue: null,
								description: "",
								name: "__justifyContent",
								required: !1,
								type: {
									name: '{} | "start" | "end" | "center" | "space-around" | "space-between" | "stretch"',
								},
							},
							__left: {
								defaultValue: null,
								description: "",
								name: "__left",
								required: !1,
								type: { name: '{} | "0"' },
							},
							__lineHeight: {
								defaultValue: null,
								description: "",
								name: "__lineHeight",
								required: !1,
								type: {
									name: '{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							__margin: {
								defaultValue: null,
								description: "",
								name: "__margin",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__marginBottom: {
								defaultValue: null,
								description: "",
								name: "__marginBottom",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__marginLeft: {
								defaultValue: null,
								description: "",
								name: "__marginLeft",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__marginRight: {
								defaultValue: null,
								description: "",
								name: "__marginRight",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__marginTop: {
								defaultValue: null,
								description: "",
								name: "__marginTop",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__maxHeight: {
								defaultValue: null,
								description: "",
								name: "__maxHeight",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							__maxWidth: {
								defaultValue: null,
								description: "",
								name: "__maxWidth",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							__minHeight: {
								defaultValue: null,
								description: "",
								name: "__minHeight",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							__minWidth: {
								defaultValue: null,
								description: "",
								name: "__minWidth",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							__overflowX: {
								defaultValue: null,
								description: "",
								name: "__overflowX",
								required: !1,
								type: {
									name: '{} | "hidden" | "auto" | "visible" | "scroll"',
								},
							},
							__overflowY: {
								defaultValue: null,
								description: "",
								name: "__overflowY",
								required: !1,
								type: {
									name: '{} | "hidden" | "auto" | "visible" | "scroll"',
								},
							},
							__right: {
								defaultValue: null,
								description: "",
								name: "__right",
								required: !1,
								type: { name: '{} | "0"' },
							},
							__textAlign: {
								defaultValue: null,
								description: "",
								name: "__textAlign",
								required: !1,
								type: {
									name: '{} | "right" | "left" | "center"',
								},
							},
							__textDecoration: {
								defaultValue: null,
								description: "",
								name: "__textDecoration",
								required: !1,
								type: {
									name: '{} | "none" | "line-through" | "underline"',
								},
							},
							__textTransform: {
								defaultValue: null,
								description: "",
								name: "__textTransform",
								required: !1,
								type: {
									name: '{} | "capitalize" | "lowercase" | "uppercase"',
								},
							},
							__top: {
								defaultValue: null,
								description: "",
								name: "__top",
								required: !1,
								type: { name: '{} | "0"' },
							},
							__whiteSpace: {
								defaultValue: null,
								description: "",
								name: "__whiteSpace",
								required: !1,
								type: { name: '{} | "normal" | "nowrap"' },
							},
							__zIndex: {
								defaultValue: null,
								description: "",
								name: "__zIndex",
								required: !1,
								type: { name: '{} | "1" | "-1"' },
							},
							__fontStyle: {
								defaultValue: null,
								description: "",
								name: "__fontStyle",
								required: !1,
								type: {
									name: '{} | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							__marginX: {
								defaultValue: null,
								description: "",
								name: "__marginX",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__marginY: {
								defaultValue: null,
								description: "",
								name: "__marginY",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__overflow: {
								defaultValue: null,
								description: "",
								name: "__overflow",
								required: !1,
								type: {
									name: '{} | "hidden" | "auto" | "visible" | "scroll"',
								},
							},
							__placeItems: {
								defaultValue: null,
								description: "",
								name: "__placeItems",
								required: !1,
								type: {
									name: '{} | "start" | "end" | "center" | "stretch"',
								},
							},
							__display: {
								defaultValue: null,
								description: "",
								name: "__display",
								required: !1,
								type: {
									name: '{} | "table" | "none" | "flex" | "grid" | "block" | "inline" | "table-cell" | "inline-block" | "inline-flex"',
								},
							},
							__flexDirection: {
								defaultValue: null,
								description: "",
								name: "__flexDirection",
								required: !1,
								type: {
									name: '{} | "column" | "column-reverse" | "row" | "row-reverse"',
								},
							},
							__gap: {
								defaultValue: null,
								description: "",
								name: "__gap",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__gridTemplateColumns: {
								defaultValue: null,
								description: "",
								name: "__gridTemplateColumns",
								required: !1,
								type: {
									name: '{} | "1_2" | "1_3" | "1x" | "2_1" | "2x" | "3_1" | "3x" | "4x" | "5_7" | "5x" | "6x" | "7_5" | "7x"',
								},
							},
							__padding: {
								defaultValue: null,
								description: "",
								name: "__padding",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__paddingBottom: {
								defaultValue: null,
								description: "",
								name: "__paddingBottom",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__paddingLeft: {
								defaultValue: null,
								description: "",
								name: "__paddingLeft",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__paddingRight: {
								defaultValue: null,
								description: "",
								name: "__paddingRight",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__paddingTop: {
								defaultValue: null,
								description: "",
								name: "__paddingTop",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__position: {
								defaultValue: null,
								description: "",
								name: "__position",
								required: !1,
								type: {
									name: '{} | "absolute" | "relative" | "static" | "sticky"',
								},
							},
							__width: {
								defaultValue: null,
								description: "",
								name: "__width",
								required: !1,
								type: {
									name: '{} | "" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							__paddingX: {
								defaultValue: null,
								description: "",
								name: "__paddingX",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							__paddingY: {
								defaultValue: null,
								description: "",
								name: "__paddingY",
								required: !1,
								type: {
									name: '{} | "none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							as: {
								defaultValue: null,
								description: "",
								name: "as",
								required: !1,
								type: { name: "React.ElementType<any>" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/box/index.tsx#Box"
						] = {
							docgenInfo: Box.__docgenInfo,
							name: "Box",
							path: "src/components/box/index.tsx#Box",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
	},
]);
