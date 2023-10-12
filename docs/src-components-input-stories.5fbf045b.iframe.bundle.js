"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[470],
	{
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
		"./src/components/input/stories.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Colors: () => Colors,
					Default: () => Default,
					Description: () => Description,
					HasBorderFalse: () => HasBorderFalse,
					Invalid: () => Invalid,
					IsClearable: () => IsClearable,
					IsCopyable: () => IsCopyable,
					IsVisibilityToggleable: () => IsVisibilityToggleable,
					IsVisibilityToggleableAndIsCopyable: () =>
						IsVisibilityToggleableAndIsCopyable,
					Sizes: () => Sizes,
					StateDisabled: () => StateDisabled,
					StateFocusVisible: () => StateFocusVisible,
					StateHover: () => StateHover,
					StateReadOnly: () => StateReadOnly,
					TypeDate: () => TypeDate,
					With1SlotLeft: () => With1SlotLeft,
					With1SlotRight: () => With1SlotRight,
					With1SlotRightIsCopyable: () => With1SlotRightIsCopyable,
					With1SlotRightWide: () => With1SlotRightWide,
					With2SlotLeft: () => With2SlotLeft,
					With2SlotRight: () => With2SlotRight,
					With3SlotLeft: () => With3SlotLeft,
					With3SlotRight: () => With3SlotRight,
					WithDefaultValue: () => WithDefaultValue,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						"./node_modules/@fortawesome/pro-solid-svg-icons/index.mjs",
					),
				___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					"./src/components/input/index.tsx",
				),
				_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__("./mocks/LOREM.mock.ts"),
				_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					"./src/components/box/index.tsx",
				),
				_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					"./src/components/button/index.tsx",
				),
				_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					"./src/components/icon/index.tsx",
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__("./node_modules/react/jsx-runtime.js");
			const __WEBPACK_DEFAULT_EXPORT__ = {
					args: {
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
						placeholder:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
					},
					argTypes: {
						addonLeft: { table: { category: "Add-ons" } },
						addonRight: { table: { category: "Add-ons" } },
						isVisibilityToggleable: {
							table: { category: "Visibility" },
						},
						isVisible: { table: { category: "Visibility" } },
						onBlur: { table: { category: "Event handlers" } },
						onChange: { table: { category: "Event handlers" } },
						onClick: { table: { category: "Event handlers" } },
						onFocus: { table: { category: "Event handlers" } },
						onMouseLeave: { table: { category: "Event handlers" } },
						onMouseOver: { table: { category: "Event handlers" } },
						slotLeft: { table: { category: "Slots" } },
						slotRight: { table: { category: "Slots" } },
					},
					component: ___WEBPACK_IMPORTED_MODULE_0__.I,
					title: "Components/Input",
				},
				Default = {
					args: {
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
					},
				},
				TypeDate = {
					args: {
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
						type: "date",
					},
				},
				Invalid = {
					args: {
						invalid: !0,
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
					},
				},
				HasBorderFalse = {
					args: {
						hasBorder: !1,
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
					},
				},
				Description = {
					args: {
						description:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m
								.text_lg,
						label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.label(),
						name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.name(),
					},
				},
				TemplateColors = () =>
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
						_box__WEBPACK_IMPORTED_MODULE_2__.x,
						{
							alignItems: "center",
							display: "flex",
							gap: "space_6",
							children: [
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										colorOverlay: "blue",
										name: "blue",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										slotRight: (0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
											_icon__WEBPACK_IMPORTED_MODULE_4__.J,
											{
												icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.XxF,
											},
										),
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										colorOverlay: "red",
										name: "red",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										slotRight: (0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
											_icon__WEBPACK_IMPORTED_MODULE_4__.J,
											{
												icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.XxF,
											},
										),
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										colorOverlay: "green",
										name: "green",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										slotRight: (0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
											_icon__WEBPACK_IMPORTED_MODULE_4__.J,
											{
												icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.XxF,
											},
										),
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										colorOverlay: "amber",
										name: "amber",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										slotRight: (0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
											_icon__WEBPACK_IMPORTED_MODULE_4__.J,
											{
												icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.XxF,
											},
										),
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										colorOverlay: "grey",
										name: "grey",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										slotRight: (0,
										react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
											_icon__WEBPACK_IMPORTED_MODULE_4__.J,
											{
												icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.XxF,
											},
										),
									},
								),
							],
						},
					);
			TemplateColors.displayName = "TemplateColors";
			const Colors = { render: TemplateColors },
				TemplateSizes = (props) =>
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
						_box__WEBPACK_IMPORTED_MODULE_2__.x,
						{
							display: "grid",
							gap: "space_8",
							gridTemplateColumns: "3x",
							marginBottom: "space_8",
							children: [
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										...props,
										label: "lg",
										name: "lg",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										size: "lg",
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										...props,
										label: "md",
										name: "md",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										size: "md",
									},
								),
								(0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									___WEBPACK_IMPORTED_MODULE_0__.I,
									{
										...props,
										label: "sm",
										name: "sm",
										placeholder:
											_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m.placeholder(),
										size: "sm",
									},
								),
							],
						},
					);
			TemplateSizes.displayName = "TemplateSizes";
			const Sizes = { render: TemplateSizes },
				IsClearable = {
					args: { isClearable: !0, strClear: "Clear input" },
				},
				IsCopyable = {
					args: {
						defaultValue:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m
								.text_md,
						isCopyable: !0,
						readOnly: !0,
						strCopied: "Copied",
						strCopy: "Copy",
					},
				},
				IsVisibilityToggleable = {
					args: {
						defaultValue:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m
								.text_md,
						isVisibilityToggleable: !0,
						isVisible: !1,
						strHide: "Hide",
						strShow: "Show",
					},
				},
				IsVisibilityToggleableAndIsCopyable = {
					render: () =>
						(0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_box__WEBPACK_IMPORTED_MODULE_2__.x,
										{
											as: "h3",
											children:
												"Is visibility toggleable and is copyable",
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										TemplateSizes,
										{
											defaultValue:
												_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__
													.m.text_xxs,
											isCopyable: !0,
											isVisibilityToggleable: !0,
											isVisible: !1,
										},
									),
								],
							},
						),
				},
				StateHover = { parameters: { pseudo: { hover: !0 } } },
				StateFocusVisible = {
					parameters: { pseudo: { focusVisible: !0 } },
				},
				StateDisabled = { args: { disabled: !0 } },
				StateReadOnly = { args: { readOnly: !0 } },
				WithDefaultValue = {
					args: {
						defaultValue:
							_mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_1__.m
								.text_md,
					},
				},
				With1SlotLeft = {
					args: {
						slotLeft: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_4__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
							},
						),
					},
				},
				With2SlotLeft = {
					args: {
						slotLeft: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
								],
							},
						),
					},
				},
				With3SlotLeft = {
					args: {
						slotLeft: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
								],
							},
						),
					},
				},
				With1SlotRight = {
					args: {
						slotRight: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_4__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
							},
						),
					},
				},
				With1SlotRightWide = {
					args: {
						slotRight: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_button__WEBPACK_IMPORTED_MODULE_3__.z,
							{
								appearance: "ghost",
								name: "reset",
								size: "sm",
								slotLeft: (0,
								react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
									_icon__WEBPACK_IMPORTED_MODULE_4__.J,
									{
										icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.QDM,
									},
								),
								children: "Reset",
							},
						),
					},
				},
				With1SlotRightIsCopyable = {
					args: {
						isCopyable: !0,
						readOnly: !0,
						slotRight: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_icon__WEBPACK_IMPORTED_MODULE_4__.J,
							{
								icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.byT,
							},
						),
						strCopied: "Copied",
						strCopy: "Copy",
					},
				},
				With2SlotRight = {
					args: {
						slotRight: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
								],
							},
						),
					},
				},
				With3SlotRight = {
					args: {
						slotRight: (0,
						react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
							{
								children: [
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
									(0,
									react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
										_icon__WEBPACK_IMPORTED_MODULE_4__.J,
										{
											icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.eFW,
										},
									),
								],
							},
						),
					},
				};
		},
	},
]);
