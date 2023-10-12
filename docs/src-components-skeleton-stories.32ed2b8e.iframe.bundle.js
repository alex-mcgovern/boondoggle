"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[6910],
	{
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
		"./src/components/skeleton/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { O: () => Skeleton });
			var clsx_m = __webpack_require__(
					"./node_modules/clsx/dist/clsx.m.js",
				),
				box = __webpack_require__("./src/components/box/index.tsx"),
				injectStylesIntoStyleTag =
					(__webpack_require__(
						'src/styles/layers.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/layers.css.ts.vanilla.css","source":"QGxheWVyIHJlc2V0OwpAbGF5ZXIgYmFzZTsKQGxheWVyIHRoZW1lOwpAbGF5ZXIgc3ByaW5rbGVzOw=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/color_palette.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/color_palette.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA+1Y226jMBB971fwUmlXShHGNob0pdJ+wH4CIgkJaSlUhPSiVf99xyY2hmCHoKXah74QtfJhxuM5Zw5+yJOPtHLqLH1O72+WVVnWC2e5XCXrp01Vvjh/bhzn7k7+GccIV/Sdbb2lkx3y5IfvBQsnYq53u3CIG8LTc2mEf94r2K4qj8VGAZEANjjsCVwUAlAicoCoxb622CfNYnjKtWW1Sas4Wdf711RhsIYJBIQGLuphNuk2Oea1AhEJYgsHIVi+cELqRj1UVr7CU2KoxFDAeC4DDAu17I51XRb97IITCCEOElXDrt/D9LNj2pYaEPXOAnWTCyUkVHGYi3uQel+0QSKJiKDItKm11xZuW66Ph7jaFzuFSLS0QgTVgoLTNsghSzblm1q9kh2DeMc0NYayRaJlvCg6oer0vY6z/S6L12VRV8mhzXBt7QYBzCHgGW5z1hFQc6pwvAi9U0r16iFxtCJjHdI/pK1WP4ShDKKMuIPpntFOR/jQBYDQmuEt29dtSpmZN583DxqJBWPddZmXVfyS5GkNL3lNqn1S1L/4P39DCrA8Tp5XWi57AZtMdTvZMWyQnXJWJ3Yd2y/yncc4cYMNgAyEx7x1A9GLAZMHfInxmAp14OdFaQdkozz2ZIKYdBK0ct64LQvpMVUYKvv8AuuJLyFA5LCFmFlvLMIU2o8lPoRs2gh1inGR+qbaW7hvqoiN+4RITMRFo4sZ5D7BKkqgRxnNfcf5HEf3VX5sX/g4J9u1MQVs92dh++AoHDPfQdAZA1LATyDn++UJPzTgps34iVN+0pyfNOmnzPqZad/WEdGraG88AevMN1Xl8tRvej7QNdcy9pF3ojH8dFTp35O/n/XT7Pw/y3QOAejb+6kGf5rF/xaArxIAU4dMs/yTTP802z/F+M+jALsqTQv1xnxO/iNuqqnKM5qF/4giYTxFeqjjcq0CgAgvYigcQDAUblAARDTiNW6XjLb8iGLxXcGT9MMBK25QAMvmLBKAqC++EvjWMHODURqACBLcYI0F9cZogLka82kAolTEFC6AXCUC5lOwqIC5LjYVQPxzjTZfRTDTR/kARMAHkFDqzaw+AFTgQ73w+dsEfIUJMI2gESZgcGtWE8CVV5wT9UebANO4s5kAUym+TcD/bAKqtOVpMeuFH420KwAyz4Uf5d/yzZCkQzDTlR/PjRFR8LBzTWO/84uEYRA3B2T0HYBIMjhN8rATzH7tZ96c9eIvFEmS29MUGiMAOPCE/febVo/GCIC5GvMJAKZE2UpwAMEVCmA+BYsEmOtikwCBUhcB/XvDQQVoAjFRlIhMvgX8/AtAYwM2yhsAAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/vars.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/vars.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA4WY34/iNhDH3/tXWCuttCcFGtv5QdKnu7anq9R7uW11LychAwaym1+bBJbdU//3jgnY48QAD6A4n/FMPOPvOKRNVXXk5y+ETCaireWy+ya6rJrIQ9eI79lKzuf0OclfkshPCfXJr4T/NoLbl51oDEmBBJCOwU7kucZYShKFRWPuFTvmMF0EYNJzi6pZyeb0M1/JtdjlnYYDgOsDaas8W5G9aB4mY5I34SFeBx9c822rPXyfZwsvznbm+rlCa65vYpXt2kno/7jXM0UpCf17B5VvNBODN1YfHFCx0tAsJTMnU2dobRNYW/Vxkm2hOZGSwDCHx61YVa84pkVKfOWQMOBIs1mIBxr4Hg0Sj4aJ50/Zh6E1CnaprDkYRm5jGo6sUXArZa3W3+9tOfV46MEE/tQ/Z2+VtXUu3iaLvFo+a0uZkuOAzaxzedDIOiXq2iY2TWaC36REXdtEVuZZaWpzm5J+xEUNgsrO7MQR2+mOFeKTNhhHWlYoiueUqGub6MQiN0iekuOAg5ksJaqc4gQeR3t6XZXdZ1FkOSxztXrTaJmSiahrYNu3tpOF9wmCff4qlo/Hy89g5t09yk0lyb9/3XlfZL6XXbYU3scmE7nXihJqUTbZ2rv7qKYhv1d51ZA/i+opuzOWpwETy2P2Lo+R/G3qtIK908jCAX01Ga2hoKazOHSDj6byXhTo4rZUM01K2NSFMI20gDgAroEOonb7CTSzU4wLCTWyVwhzMZFmXp0LpNRfIwcltGc1UMh3mW22HSxObtbwLSWx74+YY7+wwHcQKgeYq2/TKqCrcAdVSFAqkw9KlXyOsbJqCmFql0JLCRxYK4vMio1CT4nOoNrk/8gCNkQnoQJ3BZQlnZssUtVT1g1h6+aagckqDXsDftXA7HMaHfnLLJubsqPQJSCSGwZocmgYjayl6B6Yp6w+XDbj2A+0EH7LD0d+hPbDb/kJkNlCmwW3zMJ5bOygtYQQXnwtvBD5WWk/4S0/ETKT2iy6ZRbPzY6k0F4gNBXiFQPkZ6P9xNjPti9gw0HD8a1bLESnDAo9hoX3A2C/NcCTAvZbi7AOKvQZnVQ0gKfIFTCYIraigB4SD6KIrShKBQymSCwnoOfJ0An1rUBrdSAdRAoDeJaXIzKYRuy6yiAg42rAIoqsnCxBPmSJlArEHI1bfFfVn4Q5NVKQ9UBrrWrgX85CavUsOpD2AYkaF91fJVHnopbOIw51LgpCz50MEr03u71hCindO+5wmDH9i/mDJocxs2MYvfiIqIsxdpGyWhnjNtfWYpmVGzv3LMC5PyPWyYqFer+d76tfOfcNEl1CfkBPNliszhR+xMZBaRzRM0XTi7BJJksUeRE0GWVCgZc4k1O2GBx+bBAldolLzabQk6wGhxMbRKmV7pT13Mxwa1xzg2VBadnYBTwA0bps8W6AU0zZZvAOWv6xa9S7aDnJq9LsWZYdTw5FexEfHF3Y0/FMcsWg3VYNqlzQX2Z4eBPutkb/Wa6Lrb9jyT8rkPz39y1tZyXS9v6+ramswpqqif2rIXrV3b9ixN5VL3hX9cCyynHJgubOpvz0uR+CKDWtOpFOo9NnRKKiBcllwTQ5fUYkqloQXc7P3tmIRJULohvQs/dwRKLSBdENkrP32Yg0xxYG0hvqZ6cjEpU5CHCknz0YkYkhQYRj/ezxiESbgoMWz/TDj0mTIw5ynOiHd6AmS5yNi6YQWTlHfyNw0OM40rsMQejfAg56HMxcEPpTgIfqjWEEHUYNm4Muo3ELd/R3Hg/6+3//AxlkAbAbEwAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
					)),
				injectStylesIntoStyleTag_default = __webpack_require__.n(
					injectStylesIntoStyleTag,
				),
				styleDomAPI = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/styleDomAPI.js",
				),
				styleDomAPI_default = __webpack_require__.n(styleDomAPI),
				insertBySelector = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/insertBySelector.js",
				),
				insertBySelector_default =
					__webpack_require__.n(insertBySelector),
				setAttributesWithoutAttributes = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
				),
				setAttributesWithoutAttributes_default = __webpack_require__.n(
					setAttributesWithoutAttributes,
				),
				insertStyleElement = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/insertStyleElement.js",
				),
				insertStyleElement_default =
					__webpack_require__.n(insertStyleElement),
				styleTagTransform = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/styleTagTransform.js",
				),
				styleTagTransform_default =
					__webpack_require__.n(styleTagTransform),
				styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9_node_modules_vanilla_extract_webpack_plugin_extracted =
					__webpack_require__(
						'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/skeleton/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
				options = {};
			(options.styleTagTransform = styleTagTransform_default()),
				(options.setAttributes =
					setAttributesWithoutAttributes_default()),
				(options.insert = insertBySelector_default().bind(
					null,
					"head",
				)),
				(options.domAPI = styleDomAPI_default()),
				(options.insertStyleElement = insertStyleElement_default());
			injectStylesIntoStyleTag_default()(
				styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9_node_modules_vanilla_extract_webpack_plugin_extracted.Z,
				options,
			);
			styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9_node_modules_vanilla_extract_webpack_plugin_extracted.Z &&
				styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9_node_modules_vanilla_extract_webpack_plugin_extracted
					.Z.locals &&
				styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9_node_modules_vanilla_extract_webpack_plugin_extracted
					.Z.locals;
			var loadingStyles = "styles_loadingStyles__1lrs7qk1",
				jsx_runtime = __webpack_require__(
					"./node_modules/react/jsx-runtime.js",
				);
			function Skeleton({ className, ...rest }) {
				return (0, jsx_runtime.jsx)(box.x, {
					className: (0, clsx_m.Z)(className, loadingStyles),
					...rest,
				});
			}
			Skeleton.displayName = "Skeleton";
			try {
				(Skeleton.displayName = "Skeleton"),
					(Skeleton.__docgenInfo = {
						description: "",
						displayName: "Skeleton",
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
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/skeleton/index.tsx#Skeleton"
						] = {
							docgenInfo: Skeleton.__docgenInfo,
							name: "Skeleton",
							path: "src/components/skeleton/index.tsx#Skeleton",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
		"./src/components/skeleton/stories.tsx": (
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
					component: __webpack_require__(
						"./src/components/skeleton/index.tsx",
					).O,
					title: "Components/Skeleton",
				},
				Default = {};
		},
		"./node_modules/clsx/dist/clsx.m.js": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function r(e) {
				var t,
					f,
					n = "";
				if ("string" == typeof e || "number" == typeof e) n += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (t = 0; t < e.length; t++)
							e[t] &&
								(f = r(e[t])) &&
								(n && (n += " "), (n += f));
					else for (t in e) e[t] && (n && (n += " "), (n += t));
				return n;
			}
			__webpack_require__.d(__webpack_exports__, {
				Z: () => __WEBPACK_DEFAULT_EXPORT__,
			});
			const __WEBPACK_DEFAULT_EXPORT__ = function clsx() {
				for (var e, t, f = 0, n = ""; f < arguments.length; )
					(e = arguments[f++]) &&
						(t = r(e)) &&
						(n && (n += " "), (n += t));
				return n;
			};
		},
		'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/skeleton/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgewogIHRvIHsKICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwJTsKICB9Cn0KLnN0eWxlc19sb2FkaW5nU3R5bGVzX18xbHJzN3FrMSB7CiAgYW5pbWF0aW9uOiAycyBzdHlsZXNfYW5pbWF0aW9uTG9hZGluZ19fMWxyczdxazAgZWFzZS1pbi1vdXQgaW5maW5pdGU7CiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KAogICAgICAxMDBkZWcsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLAogICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSA1MCUsCiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlCiAgICApIHZhcigtLXRpbnRfYWN0aXZlX18xM3I1eDdmZSk7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGludF9kZWZhdWx0X18xM3I1eDdmZik7CiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxODAlOwogIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cy1zbV9fMWs5bHE5NmEpOwogIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmVIZWlnaHQtYm9keU1kX18xazlscTk2MXYpOwogIHdpZHRoOiAxMDAlOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
					"@keyframes styles_animationLoading__1lrs7qk0 {\n  to {\n    background-position-x: -20%;\n  }\n}\n.styles_loadingStyles__1lrs7qk1 {\n  animation: 2s styles_animationLoading__1lrs7qk0 ease-in-out infinite;\n  background: linear-gradient(\n      100deg,\n      rgba(255, 255, 255, 0) 40%,\n      rgba(255, 255, 255, .5) 50%,\n      rgba(255, 255, 255, 0) 60%\n    ) var(--tint_active__13r5x7fe);\n  background-color: var(--tint_default__13r5x7ff);\n  background-position-x: 180%;\n  background-size: 200% 100%;\n  border-radius: var(--borderRadius-sm__1k9lq96a);\n  min-height: var(--lineHeight-bodyMd__1k9lq961v);\n  width: 100%;\n}",
					"",
					{
						version: 3,
						sources: [
							"webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
						],
						names: [],
						mappings:
							"AAAA;EACE;IACE,2BAA2B;EAC7B;AACF;AACA;EACE,oEAAoE;EACpE;;;;;kCAKgC;EAChC,+CAA+C;EAC/C,2BAA2B;EAC3B,0BAA0B;EAC1B,+CAA+C;EAC/C,+CAA+C;EAC/C,WAAW;AACb",
						sourcesContent: [
							"@keyframes styles_animationLoading__1lrs7qk0 {\n  to {\n    background-position-x: -20%;\n  }\n}\n.styles_loadingStyles__1lrs7qk1 {\n  animation: 2s styles_animationLoading__1lrs7qk0 ease-in-out infinite;\n  background: linear-gradient(\n      100deg,\n      rgba(255, 255, 255, 0) 40%,\n      rgba(255, 255, 255, .5) 50%,\n      rgba(255, 255, 255, 0) 60%\n    ) var(--tint_active__13r5x7fe);\n  background-color: var(--tint_default__13r5x7ff);\n  background-position-x: 180%;\n  background-size: 200% 100%;\n  border-radius: var(--borderRadius-sm__1k9lq96a);\n  min-height: var(--lineHeight-bodyMd__1k9lq961v);\n  width: 100%;\n}",
						],
						sourceRoot: "",
					},
				]);
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
			},
	},
]);
