"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
  self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
  [5562, 3548, 7568, 5883, 8820, 303, 195],
  {
    "./node_modules/@babel/runtime/helpers/esm/extends.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
    },
    "./src/components/select/select_button/__storybook__/select_button.stories.tsx":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ButtonProps: () => ButtonProps,
            Customisation: () => Customisation,
            Default: () => Default,
            Disabled: () => Disabled,
            ItemOnClick: () => ItemOnClick,
            ItemsAsButtons: () => ItemsAsButtons,
            PlacementBottomCenter: () => PlacementBottomCenter,
            PlacementBottomEnd: () => PlacementBottomEnd,
            SlotLeft: () => SlotLeft,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          });
        var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            "./src/components/select/select_button/select_button.comp.tsx"
          ),
          _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            "./mocks/LOREM.mock.ts"
          ),
          _box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            "./src/components/box/box.comp.tsx"
          ),
          _mocks_select_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./src/components/select/__mocks__/select.mock.tsx"
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/react/jsx-runtime.js"
          );
        const ITEMS = (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_1__.S)(
            {}
          ),
          PROPS = {
            buttonText: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.button,
            id: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.id(),
            items: ITEMS,
            name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_2__.m.name(),
          },
          __WEBPACK_DEFAULT_EXPORT__ = {
            component: ___WEBPACK_IMPORTED_MODULE_3__.U,
            title: "React components/SelectButton",
          },
          Template = ({ ...rest }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              ___WEBPACK_IMPORTED_MODULE_3__.U,
              { ...rest }
            );
        Template.displayName = "Template";
        const PlacementTemplate = ({ ...rest }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _box__WEBPACK_IMPORTED_MODULE_4__.x,
            {
              display: "flex",
              width: "50%",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _box__WEBPACK_IMPORTED_MODULE_4__.x,
                {
                  marginLeft: "auto",
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    ___WEBPACK_IMPORTED_MODULE_3__.U,
                    { ...rest }
                  ),
                }
              ),
            }
          );
        PlacementTemplate.displayName = "PlacementTemplate";
        const Default = { args: PROPS, render: Template },
          ItemsAsButtons = {
            args: {
              ...PROPS,
              items: (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_1__.n)({
                withIcon: !0,
              }),
            },
            render: Template,
          },
          Customisation = {
            args: { ...PROPS, wrapperProps: { marginBottom: "spacing_3" } },
          },
          Disabled = { args: { ...PROPS, disabled: !0 }, render: Template },
          SlotLeft = {
            args: {
              ...PROPS,
              items: (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_1__.S)({
                withIcon: !0,
              }),
            },
            render: Template,
          },
          PlacementBottomEnd = {
            args: { ...PROPS, buttonText: "", placement: "bottom-end" },
            render: PlacementTemplate,
          },
          PlacementBottomCenter = {
            args: { ...PROPS, buttonText: "", placement: "bottom-center" },
            render: PlacementTemplate,
          },
          ItemOnClick = {
            args: {
              items: [
                {
                  as: "button",
                  label: "United Kingdom",
                  onClick: () => {
                    alert("clicked");
                  },
                  value: "uk",
                },
              ],
            },
            render: Template,
          },
          ButtonProps = {
            args: {
              ...PROPS,
              buttonProps: {
                appearance: "tertiary",
                name: "select_button",
                size: "sm",
              },
            },
            render: Template,
          };
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: "{\n  args: PROPS,\n  render: Template\n}",
              ...Default.parameters?.docs?.source,
            },
          },
        }),
          (ItemsAsButtons.parameters = {
            ...ItemsAsButtons.parameters,
            docs: {
              ...ItemsAsButtons.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...PROPS,\n    items: mockSelectItemsAsButtons({\n      withIcon: true\n    })\n  },\n  render: Template\n}",
                ...ItemsAsButtons.parameters?.docs?.source,
              },
            },
          }),
          (Customisation.parameters = {
            ...Customisation.parameters,
            docs: {
              ...Customisation.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    ...PROPS,\n    wrapperProps: {\n      marginBottom: "spacing_3"\n    }\n  }\n}',
                ...Customisation.parameters?.docs?.source,
              },
            },
          }),
          (Disabled.parameters = {
            ...Disabled.parameters,
            docs: {
              ...Disabled.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...PROPS,\n    disabled: true\n  },\n  render: Template\n}",
                ...Disabled.parameters?.docs?.source,
              },
            },
          }),
          (SlotLeft.parameters = {
            ...SlotLeft.parameters,
            docs: {
              ...SlotLeft.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...PROPS,\n    items: mockSelectItems({\n      withIcon: true\n    })\n  },\n  render: Template\n}",
                ...SlotLeft.parameters?.docs?.source,
              },
            },
          }),
          (PlacementBottomEnd.parameters = {
            ...PlacementBottomEnd.parameters,
            docs: {
              ...PlacementBottomEnd.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    ...PROPS,\n    buttonText: "",\n    placement: "bottom-end"\n  },\n  render: PlacementTemplate\n}',
                ...PlacementBottomEnd.parameters?.docs?.source,
              },
            },
          }),
          (PlacementBottomCenter.parameters = {
            ...PlacementBottomCenter.parameters,
            docs: {
              ...PlacementBottomCenter.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    ...PROPS,\n    buttonText: "",\n    placement: "bottom-center"\n  },\n  render: PlacementTemplate\n}',
                ...PlacementBottomCenter.parameters?.docs?.source,
              },
            },
          }),
          (ItemOnClick.parameters = {
            ...ItemOnClick.parameters,
            docs: {
              ...ItemOnClick.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    items: [{\n      as: "button",\n      label: "United Kingdom",\n      onClick: () => {\n        alert("clicked");\n      },\n      value: "uk"\n    }]\n  },\n  render: Template\n}',
                ...ItemOnClick.parameters?.docs?.source,
              },
            },
          }),
          (ButtonProps.parameters = {
            ...ButtonProps.parameters,
            docs: {
              ...ButtonProps.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    ...PROPS,\n    buttonProps: {\n      appearance: "tertiary",\n      name: "select_button",\n      size: "sm"\n    }\n  },\n  render: Template\n}',
                ...ButtonProps.parameters?.docs?.source,
              },
            },
          });
        const __namedExportsOrder = [
          "Default",
          "ItemsAsButtons",
          "Customisation",
          "Disabled",
          "SlotLeft",
          "PlacementBottomEnd",
          "PlacementBottomCenter",
          "ItemOnClick",
          "ButtonProps",
        ];
      },
    "./src/components/select/select_button/select_button.comp.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { U: () => SelectButton });
      var _dessert_box_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@dessert-box/core/dist/dessert-box-core.esm.js"
        ),
        downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/downshift/dist/downshift.esm.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        _styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./src/styles/utils/get_sprinkles.css.ts"),
        _box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/components/box/box.comp.tsx"
        ),
        _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./src/components/button/button.comp.tsx"
        ),
        _select_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./src/components/select/select_utils.ts"
        ),
        _shared_DEFAULT_SLOT_RIGHT__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./src/components/select/shared/DEFAULT_SLOT_RIGHT.tsx"
          ),
        _shared_dropdown_menu_dropdown_menu_comp__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            "./src/components/select/shared/dropdown_menu/dropdown_menu.comp.tsx"
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const SelectButton = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
        (
          {
            buttonProps,
            buttonText,
            disabled,
            id,
            initialHighlightedItem,
            initialSelectedItem,
            items,
            name,
            onChange,
            placement = "bottom-start",
            size,
            slotLeft,
            slotRight = _shared_DEFAULT_SLOT_RIGHT__WEBPACK_IMPORTED_MODULE_3__.m,
            wrapperProps,
          },
          ref
        ) => {
          const [selectedItem, setSelectedItem] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              initialSelectedItem ||
                items.find((item) => item.isSelected) ||
                null
            ),
            [isOpen, setIsOpen] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            { atomProps: buttonAtomProps, otherProps: buttonOtherProps } = (0,
            _dessert_box_core__WEBPACK_IMPORTED_MODULE_4__.q)(
              buttonProps,
              _styles_utils_get_sprinkles_css__WEBPACK_IMPORTED_MODULE_1__.eD
            ),
            {
              getItemProps,
              getMenuProps,
              getToggleButtonProps,
              highlightedIndex,
              toggleMenu,
            } = (0, downshift__WEBPACK_IMPORTED_MODULE_5__.L7)({
              defaultHighlightedIndex: (0,
              _select_utils__WEBPACK_IMPORTED_MODULE_6__.Nj)({
                initialHighlightedItem,
                items,
                selectedItem,
              }),
              initialSelectedItem,
              isOpen,
              items,
              onSelectedItemChange: onChange,
              onStateChange({ selectedItem: newSelectedItem, type }) {
                switch (type) {
                  case downshift__WEBPACK_IMPORTED_MODULE_5__.L7
                    .stateChangeTypes.ToggleButtonClick:
                  case downshift__WEBPACK_IMPORTED_MODULE_5__.L7
                    .stateChangeTypes.ToggleButtonKeyDownArrowDown:
                    setIsOpen(!0);
                    break;
                  case downshift__WEBPACK_IMPORTED_MODULE_5__.L7
                    .stateChangeTypes.ToggleButtonKeyDownEnter:
                    newSelectedItem &&
                      (newSelectedItem.onClick && newSelectedItem.onClick(),
                      setSelectedItem(newSelectedItem)),
                      setIsOpen((current) => !current);
                    break;
                  case downshift__WEBPACK_IMPORTED_MODULE_5__.L7
                    .stateChangeTypes.ItemClick:
                    newSelectedItem &&
                      (newSelectedItem.onClick && newSelectedItem.onClick(),
                      setSelectedItem(newSelectedItem)),
                      setIsOpen(!1);
                }
              },
            }),
            getIsItemSelected = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
              (item) =>
                (0, _select_utils__WEBPACK_IMPORTED_MODULE_6__.x7)({
                  item,
                  selectedItem,
                }),
              [selectedItem]
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _box__WEBPACK_IMPORTED_MODULE_7__.x,
            {
              ...wrapperProps,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _shared_dropdown_menu_dropdown_menu_comp__WEBPACK_IMPORTED_MODULE_8__.h,
                {
                  getIsItemSelected,
                  getItemProps,
                  getMenuProps,
                  highlightedIndex,
                  isOpen,
                  items,
                  placement,
                  size,
                  triggerNode: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _button__WEBPACK_IMPORTED_MODULE_9__.z,
                    {
                      size,
                      slotLeft,
                      slotProps: { gap: "none" },
                      slotRight,
                      ...buttonAtomProps,
                      ...getToggleButtonProps?.({
                        ...buttonOtherProps,
                        disabled,
                        id,
                        name,
                        onClick: toggleMenu,
                        ref,
                      }),
                      children: buttonText,
                    }
                  ),
                }
              ),
            }
          );
        }
      );
      try {
        (SelectButton.displayName = "SelectButton"),
          (SelectButton.__docgenInfo = {
            description: "",
            displayName: "SelectButton",
            props: {
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"lg"' },
                    { value: '"md"' },
                    { value: '"sm"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              slotLeft: {
                defaultValue: null,
                description: "",
                name: "slotLeft",
                required: !1,
                type: { name: "ReactNode" },
              },
              slotRight: {
                defaultValue: { value: "<Icon icon={faAngleDown} />" },
                description: "",
                name: "slotRight",
                required: !1,
                type: { name: "ReactNode" },
              },
              items: {
                defaultValue: null,
                description: "",
                name: "items",
                required: !0,
                type: { name: "SelectItemShape[]" },
              },
              isClearable: {
                defaultValue: null,
                description: "",
                name: "isClearable",
                required: !1,
                type: { name: "boolean" },
              },
              isOpen: {
                defaultValue: null,
                description: "",
                name: "isOpen",
                required: !1,
                type: { name: "boolean" },
              },
              onIsOpenChange: {
                defaultValue: null,
                description: "",
                name: "onIsOpenChange",
                required: !1,
                type: {
                  name: "(changes: UseComboboxStateChange<SelectItemShape>) => void",
                },
              },
              initialHighlightedItem: {
                defaultValue: null,
                description: "",
                name: "initialHighlightedItem",
                required: !1,
                type: { name: "SelectItemShape" },
              },
              alignItems: {
                defaultValue: null,
                description: "",
                name: "alignItems",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"stretch"' },
                    { value: '"center"' },
                    { value: '"end"' },
                    { value: '"start"' },
                    { value: '"baseline"' },
                  ],
                },
              },
              aspectRatio: {
                defaultValue: null,
                description: "",
                name: "aspectRatio",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"square"' },
                    { value: '"extraWide"' },
                    { value: '"tall"' },
                    { value: '"wide"' },
                  ],
                },
              },
              background: {
                defaultValue: null,
                description: "",
                name: "background",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"inherit"' },
                    { value: '"background"' },
                    { value: '"black"' },
                    { value: '"transparent"' },
                    { value: '"white"' },
                    { value: '"backdrop"' },
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                    { value: '"button_active"' },
                    { value: '"button_default"' },
                    { value: '"button_tint"' },
                    { value: '"focus_ring"' },
                    { value: '"shadow"' },
                    { value: '"text_high_contrast"' },
                    { value: '"text_low_contrast"' },
                    { value: '"tint_active"' },
                    { value: '"tint_default"' },
                  ],
                },
              },
              border: {
                defaultValue: null,
                description: "",
                name: "border",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                  ],
                },
              },
              borderBottom: {
                defaultValue: null,
                description: "",
                name: "borderBottom",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                  ],
                },
              },
              borderLeft: {
                defaultValue: null,
                description: "",
                name: "borderLeft",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                  ],
                },
              },
              borderRadius: {
                defaultValue: null,
                description: "",
                name: "borderRadius",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"50%"' },
                    { value: '"lg"' },
                    { value: '"md"' },
                    { value: '"pill"' },
                    { value: '"sm"' },
                  ],
                },
              },
              borderRight: {
                defaultValue: null,
                description: "",
                name: "borderRight",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                  ],
                },
              },
              borderTop: {
                defaultValue: null,
                description: "",
                name: "borderTop",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                  ],
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
                type: {
                  name: "enum",
                  value: [
                    { value: '"lg"' },
                    { value: '"md"' },
                    { value: '"sm"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: "",
                name: "color",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"inherit"' },
                    { value: '"background"' },
                    { value: '"black"' },
                    { value: '"white"' },
                    { value: '"currentColor"' },
                    { value: '"backdrop"' },
                    { value: '"border_active"' },
                    { value: '"border_default"' },
                    { value: '"button_active"' },
                    { value: '"button_default"' },
                    { value: '"button_tint"' },
                    { value: '"focus_ring"' },
                    { value: '"shadow"' },
                    { value: '"text_high_contrast"' },
                    { value: '"text_low_contrast"' },
                    { value: '"tint_active"' },
                    { value: '"tint_default"' },
                  ],
                },
              },
              flex: {
                defaultValue: null,
                description: "",
                name: "flex",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"0 1 auto"' },
                    { value: '"1 1 auto"' },
                    { value: '"1 1 0%"' },
                    { value: '"1 1 100%"' },
                  ],
                },
              },
              flexGrow: {
                defaultValue: null,
                description: "",
                name: "flexGrow",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"0"' }, { value: '"1"' }],
                },
              },
              flexShrink: {
                defaultValue: null,
                description: "",
                name: "flexShrink",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"0"' }, { value: '"1"' }],
                },
              },
              flexWrap: {
                defaultValue: null,
                description: "",
                name: "flexWrap",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"nowrap"' }, { value: '"wrap"' }],
                },
              },
              fontSize: {
                defaultValue: null,
                description: "",
                name: "fontSize",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"body_lg"' },
                    { value: '"body_md"' },
                    { value: '"body_sm"' },
                    { value: '"body_xl"' },
                    { value: '"body_xs"' },
                    { value: '"h0"' },
                    { value: '"root"' },
                  ],
                },
              },
              fontWeight: {
                defaultValue: null,
                description: "",
                name: "fontWeight",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"normal"' },
                    { value: '"bold"' },
                    { value: '"medium"' },
                    { value: '"light"' },
                    { value: '"extrabold"' },
                    { value: '"semibold"' },
                  ],
                },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '""' },
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"min-content"' },
                    { value: '"50%"' },
                    { value: '"100%"' },
                    { value: '"100vh"' },
                    { value: '"25%"' },
                    { value: '"25vh"' },
                    { value: '"50vh"' },
                    { value: '"75%"' },
                    { value: '"75vh"' },
                    { value: '"90vh"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
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
                  name: "enum",
                  value: [
                    { value: '"space-around"' },
                    { value: '"space-between"' },
                    { value: '"stretch"' },
                    { value: '"center"' },
                    { value: '"end"' },
                    { value: '"start"' },
                  ],
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
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"body_lg"' },
                    { value: '"body_md"' },
                    { value: '"body_sm"' },
                    { value: '"body_xl"' },
                    { value: '"body_xs"' },
                    { value: '"h0"' },
                    { value: '"root"' },
                  ],
                },
              },
              margin: {
                defaultValue: null,
                description: "",
                name: "margin",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              marginBottom: {
                defaultValue: null,
                description: "",
                name: "marginBottom",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              marginLeft: {
                defaultValue: null,
                description: "",
                name: "marginLeft",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              marginRight: {
                defaultValue: null,
                description: "",
                name: "marginRight",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              marginTop: {
                defaultValue: null,
                description: "",
                name: "marginTop",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              maxHeight: {
                defaultValue: null,
                description: "",
                name: "maxHeight",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '""' },
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"min-content"' },
                    { value: '"50%"' },
                    { value: '"100%"' },
                    { value: '"100vh"' },
                    { value: '"25%"' },
                    { value: '"25vh"' },
                    { value: '"50vh"' },
                    { value: '"75%"' },
                    { value: '"75vh"' },
                    { value: '"90vh"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              maxWidth: {
                defaultValue: null,
                description: "",
                name: "maxWidth",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '""' },
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"max-content"' },
                    { value: '"min-content"' },
                    { value: '"50%"' },
                    { value: '"100%"' },
                    { value: '"25%"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                    { value: '"col_1"' },
                    { value: '"col_10"' },
                    { value: '"col_11"' },
                    { value: '"col_12"' },
                    { value: '"col_2"' },
                    { value: '"col_3"' },
                    { value: '"col_4"' },
                    { value: '"col_5"' },
                    { value: '"col_6"' },
                    { value: '"col_7"' },
                    { value: '"col_8"' },
                    { value: '"col_9"' },
                  ],
                },
              },
              minHeight: {
                defaultValue: null,
                description: "",
                name: "minHeight",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '""' },
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"min-content"' },
                    { value: '"50%"' },
                    { value: '"100%"' },
                    { value: '"100vh"' },
                    { value: '"25%"' },
                    { value: '"25vh"' },
                    { value: '"50vh"' },
                    { value: '"75%"' },
                    { value: '"75vh"' },
                    { value: '"90vh"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              minWidth: {
                defaultValue: null,
                description: "",
                name: "minWidth",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '""' },
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"max-content"' },
                    { value: '"min-content"' },
                    { value: '"50%"' },
                    { value: '"100%"' },
                    { value: '"25%"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                    { value: '"col_1"' },
                    { value: '"col_10"' },
                    { value: '"col_11"' },
                    { value: '"col_12"' },
                    { value: '"col_2"' },
                    { value: '"col_3"' },
                    { value: '"col_4"' },
                    { value: '"col_5"' },
                    { value: '"col_6"' },
                    { value: '"col_7"' },
                    { value: '"col_8"' },
                    { value: '"col_9"' },
                  ],
                },
              },
              overflow: {
                defaultValue: null,
                description: "",
                name: "overflow",
                required: !1,
                type: { name: '"hidden"' },
              },
              overflowY: {
                defaultValue: null,
                description: "",
                name: "overflowY",
                required: !1,
                type: { name: '"auto"' },
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
                type: {
                  name: "enum",
                  value: [
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"center"' },
                  ],
                },
              },
              textDecoration: {
                defaultValue: null,
                description: "",
                name: "textDecoration",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"line-through"' },
                    { value: '"underline"' },
                  ],
                },
              },
              textTransform: {
                defaultValue: null,
                description: "",
                name: "textTransform",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"capitalize"' },
                    { value: '"lowercase"' },
                    { value: '"uppercase"' },
                  ],
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
                type: {
                  name: "enum",
                  value: [{ value: '"normal"' }, { value: '"nowrap"' }],
                },
              },
              zIndex: {
                defaultValue: null,
                description: "",
                name: "zIndex",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"1"' }, { value: '"-1"' }],
                },
              },
              fontStyle: {
                defaultValue: null,
                description: "",
                name: "fontStyle",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"body_lg"' },
                    { value: '"body_md"' },
                    { value: '"body_sm"' },
                    { value: '"body_xl"' },
                    { value: '"body_xs"' },
                    { value: '"h0"' },
                    { value: '"root"' },
                  ],
                },
              },
              marginX: {
                defaultValue: null,
                description: "",
                name: "marginX",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              marginY: {
                defaultValue: null,
                description: "",
                name: "marginY",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"none"' },
                    { value: '"auto"' },
                    { value: '"spacing_0.25"' },
                    { value: '"spacing_0.5"' },
                    { value: '"spacing_1"' },
                    { value: '"spacing_1.5"' },
                    { value: '"spacing_2"' },
                    { value: '"spacing_3"' },
                    { value: '"spacing_4"' },
                    { value: '"spacing_5"' },
                    { value: '"spacing_6"' },
                  ],
                },
              },
              placeItems: {
                defaultValue: null,
                description: "",
                name: "placeItems",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"stretch"' },
                    { value: '"center"' },
                    { value: '"end"' },
                    { value: '"start"' },
                  ],
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
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
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
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: "",
                name: "paddingBottom",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: "",
                name: "paddingLeft",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              paddingRight: {
                defaultValue: null,
                description: "",
                name: "paddingRight",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              paddingTop: {
                defaultValue: null,
                description: "",
                name: "paddingTop",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              position: {
                defaultValue: null,
                description: "",
                name: "position",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<("absolute" | "relative" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
                },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; "spacing_0.25": CSSVarFunction; "spacing_0.5": CSSVarFunction; spacing_1: CSSVarFunction; ... 23 more ...; "min-content": CSSVarFunction; }, { ...; }>>',
                },
              },
              paddingX: {
                defaultValue: null,
                description: "",
                name: "paddingX",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              paddingY: {
                defaultValue: null,
                description: "",
                name: "paddingY",
                required: !1,
                type: {
                  name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; "spacing_0.25": string; "spacing_0.5": string; spacing_1: string; "spacing_1.5": string; spacing_2: string; spacing_3: string; spacing_4: string; spacing_5: string; spacing_6: string; }, CSSVarFunction>, { ...; }>>',
                },
              },
              buttonProps: {
                defaultValue: null,
                description: "",
                name: "buttonProps",
                required: !1,
                type: {
                  name: 'ChildSprinkleProps<{ alignItems: { values: Values<("stretch" | "center" | "end" | "start" | "baseline")[], { defaultClass: string; }>; }; aspectRatio: { values: Values<MapLeafNodes<{ extraWide: string; square: string; tall: string; wide: string; }, CSSVarFunction>, { ...; }>; }; ... 39 more ...; zIndex: { ...; }; } ...',
                },
              },
              buttonText: {
                defaultValue: null,
                description: "",
                name: "buttonText",
                required: !1,
                type: { name: "string" },
              },
              initialSelectedItem: {
                defaultValue: null,
                description: "",
                name: "initialSelectedItem",
                required: !1,
                type: { name: "SelectItemShape" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: {
                  name: "(changes: UseSelectStateChange<SelectItemShape>) => void",
                },
              },
              placement: {
                defaultValue: { value: "bottom-start" },
                description: "",
                name: "placement",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"bottom-center"' },
                    { value: '"bottom-end"' },
                    { value: '"bottom-start"' },
                    { value: '"top-center"' },
                    { value: '"top-end"' },
                    { value: '"top-start"' },
                  ],
                },
              },
              wrapperProps: {
                defaultValue: null,
                description: "",
                name: "wrapperProps",
                required: !1,
                type: {
                  name: 'ChildSprinkleProps<{ alignItems: { values: Values<("stretch" | "center" | "end" | "start" | "baseline")[], { defaultClass: string; }>; }; aspectRatio: { values: Values<MapLeafNodes<{ extraWide: string; square: string; tall: string; wide: string; }, CSSVarFunction>, { ...; }>; }; ... 39 more ...; zIndex: { ...; }; } ...',
                },
              },
              ref: {
                defaultValue: null,
                description:
                  "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
                name: "ref",
                required: !1,
                type: { name: "Ref<HTMLButtonElement>" },
              },
              key: {
                defaultValue: null,
                description: "",
                name: "key",
                required: !1,
                type: { name: "Key" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/select/select_button/select_button.comp.tsx#SelectButton"
            ] = {
              docgenInfo: SelectButton.__docgenInfo,
              name: "SelectButton",
              path: "src/components/select/select_button/select_button.comp.tsx#SelectButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
