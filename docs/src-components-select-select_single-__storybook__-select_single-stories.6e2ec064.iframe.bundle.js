(self.webpackChunk_alex_mcgovern_boondoggle_design =
  self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
  [7712, 3548, 580, 7568, 5883, 8523, 8820, 303, 195],
  {
    "./node_modules/@babel/runtime/helpers/esm/extends.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
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
    "./src/components/select/shared/select_input.styles.css.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        C: () => selectInputCursorStyles,
      });
      var injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        extracted = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/select/shared/select_input.styles.css.ts.vanilla.css","source":"Ll8xYmtyYTVhMDpyZWFkLW9ubHkgewogIGN1cnNvcjogcG9pbnRlcjsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(extracted.Z, options);
      extracted.Z && extracted.Z.locals && extracted.Z.locals;
      var selectInputCursorStyles = "_1bkra5a0";
    },
    "./src/components/select/select_single/__storybook__/select_single.stories.tsx":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Customisation: () => Customisation,
            Default: () => Default,
            Disabled: () => Disabled,
            Filterable: () => Filterable,
            InitialSelectedItem: () => InitialSelectedItem,
            Invalid: () => Invalid,
            ItemOnClick: () => ItemOnClick,
            ItemsWithIsSelectedTrue: () => ItemsWithIsSelectedTrue,
            OnChange: () => OnChange,
            PlayKeyboardNavigation: () => PlayKeyboardNavigation,
            SizeLg: () => SizeLg,
            SizeMd: () => SizeMd,
            SizeSm: () => SizeSm,
            SlotLeft: () => SlotLeft,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          });
        var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              "./node_modules/@fortawesome/pro-light-svg-icons/index.mjs"
            ),
          _storybook_jest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/@storybook/jest/dist/esm/index.js"
          ),
          _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/testing-library/dist/esm/index.js"
            ),
          ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            "./src/components/select/select_single/select_single.comp.tsx"
          ),
          _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            "./mocks/LOREM.mock.ts"
          ),
          _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            "./src/components/icon/icon.comp.tsx"
          ),
          _mocks_select_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            "./src/components/select/__mocks__/select.mock.tsx"
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            "./node_modules/react/jsx-runtime.js"
          );
        const ON_CHANGE = _storybook_jest__WEBPACK_IMPORTED_MODULE_0__.e.fn(),
          ITEMS = (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_3__.S)({}),
          __WEBPACK_DEFAULT_EXPORT__ = {
            args: {
              id: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.id(),
              items: ITEMS,
              label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.label(),
              name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.name(),
              onChange: ON_CHANGE,
              placeholder:
                _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.placeholder(),
            },
            component: ___WEBPACK_IMPORTED_MODULE_5__.N,
            title: "React components/SelectSingle",
          },
          Default = {},
          InitialSelectedItem = { args: { initialSelectedItem: ITEMS[0] } },
          Invalid = {
            args: {
              errorMessage:
                _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.errorMessage(),
              invalid: !0,
            },
          },
          Filterable = { args: { isFilterable: !0 } },
          Customisation = {
            args: { wrapperProps: { marginBottom: "spacing_3" } },
          },
          Disabled = { args: { disabled: !0 } },
          SizeSm = { args: { size: "sm" } },
          SizeMd = { args: { size: "md" } },
          SizeLg = { args: { size: "lg" } },
          OnChange = {
            args: {
              onChange: (changes) => {
                alert(changes.selectedItem?.label);
              },
            },
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
          },
          ItemsWithIsSelectedTrue = {
            args: {
              items: [
                { isSelected: !0, label: "United Kingdom", value: "uk" },
                { isSelected: !1, label: "France", value: "fr" },
                { isSelected: !1, label: "Germany", value: "de" },
              ],
            },
          },
          PlayKeyboardNavigation = {
            play: async ({ canvasElement }) => {
              const combobox = (0,
              _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(
                canvasElement
              ).getByRole("combobox");
              await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.keyboard(
                "{tab}"
              ),
                await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.keyboard(
                  "{tab}"
                ),
                await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.keyboard(
                  "{arrowdown}"
                ),
                await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.keyboard(
                  "{arrowdown}"
                ),
                await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.keyboard(
                  "{enter}"
                ),
                await (0,
                _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)(
                  () => {
                    (0, _storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(
                      combobox.value
                    ).toBe(ITEMS[0].label);
                  }
                );
            },
          },
          SlotLeft = {
            args: {
              items: (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_3__.S)({
                withIcon: !0,
              }),
              slotLeft: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _icon__WEBPACK_IMPORTED_MODULE_6__.J,
                {
                  icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_7__.kCF,
                }
              ),
            },
          };
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: "{}",
              ...Default.parameters?.docs?.source,
            },
          },
        }),
          (InitialSelectedItem.parameters = {
            ...InitialSelectedItem.parameters,
            docs: {
              ...InitialSelectedItem.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    initialSelectedItem: ITEMS[0]\n  }\n}",
                ...InitialSelectedItem.parameters?.docs?.source,
              },
            },
          }),
          (Invalid.parameters = {
            ...Invalid.parameters,
            docs: {
              ...Invalid.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    errorMessage: LOREM.errorMessage(),\n    invalid: true\n  }\n}",
                ...Invalid.parameters?.docs?.source,
              },
            },
          }),
          (Filterable.parameters = {
            ...Filterable.parameters,
            docs: {
              ...Filterable.parameters?.docs,
              source: {
                originalSource: "{\n  args: {\n    isFilterable: true\n  }\n}",
                ...Filterable.parameters?.docs?.source,
              },
            },
          }),
          (Customisation.parameters = {
            ...Customisation.parameters,
            docs: {
              ...Customisation.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    wrapperProps: {\n      marginBottom: "spacing_3"\n    }\n  }\n}',
                ...Customisation.parameters?.docs?.source,
              },
            },
          }),
          (Disabled.parameters = {
            ...Disabled.parameters,
            docs: {
              ...Disabled.parameters?.docs,
              source: {
                originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
                ...Disabled.parameters?.docs?.source,
              },
            },
          }),
          (SizeSm.parameters = {
            ...SizeSm.parameters,
            docs: {
              ...SizeSm.parameters?.docs,
              source: {
                originalSource: '{\n  args: {\n    size: "sm"\n  }\n}',
                ...SizeSm.parameters?.docs?.source,
              },
            },
          }),
          (SizeMd.parameters = {
            ...SizeMd.parameters,
            docs: {
              ...SizeMd.parameters?.docs,
              source: {
                originalSource: '{\n  args: {\n    size: "md"\n  }\n}',
                ...SizeMd.parameters?.docs?.source,
              },
            },
          }),
          (SizeLg.parameters = {
            ...SizeLg.parameters,
            docs: {
              ...SizeLg.parameters?.docs,
              source: {
                originalSource: '{\n  args: {\n    size: "lg"\n  }\n}',
                ...SizeLg.parameters?.docs?.source,
              },
            },
          }),
          (OnChange.parameters = {
            ...OnChange.parameters,
            docs: {
              ...OnChange.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    onChange: (changes: UseComboboxStateChange<SelectItemShape>) => {\n      alert(changes.selectedItem?.label);\n    }\n  }\n}",
                ...OnChange.parameters?.docs?.source,
              },
            },
          }),
          (ItemOnClick.parameters = {
            ...ItemOnClick.parameters,
            docs: {
              ...ItemOnClick.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    items: [{\n      as: "button",\n      label: "United Kingdom",\n      onClick: () => {\n        alert("clicked");\n      },\n      value: "uk"\n    }]\n  }\n}',
                ...ItemOnClick.parameters?.docs?.source,
              },
            },
          }),
          (ItemsWithIsSelectedTrue.parameters = {
            ...ItemsWithIsSelectedTrue.parameters,
            docs: {
              ...ItemsWithIsSelectedTrue.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    items: [{\n      isSelected: true,\n      label: "United Kingdom",\n      value: "uk"\n    }, {\n      isSelected: false,\n      label: "France",\n      value: "fr"\n    }, {\n      isSelected: false,\n      label: "Germany",\n      value: "de"\n    }]\n  }\n}',
                ...ItemsWithIsSelectedTrue.parameters?.docs?.source,
              },
            },
          }),
          (PlayKeyboardNavigation.parameters = {
            ...PlayKeyboardNavigation.parameters,
            docs: {
              ...PlayKeyboardNavigation.parameters?.docs,
              source: {
                originalSource:
                  '{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const combobox = canvas.getByRole("combobox");\n\n    // await userEvent.click(combobox);\n\n    await userEvent.keyboard("{tab}");\n    await userEvent.keyboard("{tab}");\n    await userEvent.keyboard("{arrowdown}");\n    await userEvent.keyboard("{arrowdown}");\n    await userEvent.keyboard("{enter}");\n    await waitFor(() => {\n      expect((combobox as HTMLInputElement).value).toBe(ITEMS[0].label);\n    });\n  }\n}',
                ...PlayKeyboardNavigation.parameters?.docs?.source,
              },
            },
          }),
          (SlotLeft.parameters = {
            ...SlotLeft.parameters,
            docs: {
              ...SlotLeft.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: mockSelectItems({\n      withIcon: true\n    }),\n    slotLeft: <Icon icon={faGlobeAfrica} />\n  }\n}",
                ...SlotLeft.parameters?.docs?.source,
              },
            },
          });
        const __namedExportsOrder = [
          "Default",
          "InitialSelectedItem",
          "Invalid",
          "Filterable",
          "Customisation",
          "Disabled",
          "SizeSm",
          "SizeMd",
          "SizeLg",
          "OnChange",
          "ItemOnClick",
          "ItemsWithIsSelectedTrue",
          "PlayKeyboardNavigation",
          "SlotLeft",
        ];
      },
    "./src/components/select/select_single/select_single.comp.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { N: () => SelectSingle });
      var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/downshift/dist/downshift.esm.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        _box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/components/box/box.comp.tsx"
        ),
        _input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./src/components/input/input.comp.tsx"
        ),
        _input_clear_button_input_clear_button_comp__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./src/components/input_clear_button/input_clear_button.comp.tsx"
          ),
        _select_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
        _shared_select_input_styles_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./src/components/select/shared/select_input.styles.css.ts"
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const defaultItemToString = (item) => item?.label || "",
        SelectSingle = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          (
            {
              disabled,
              errorMessage,
              id,
              initialHighlightedItem,
              initialSelectedItem,
              inputProps,
              invalid,
              isFilterable,
              isOpen: controlledIsOpen,
              itemToString = defaultItemToString,
              items,
              label,
              labelTooltip,
              name,
              onChange,
              onIsOpenChange,
              placeholder,
              size,
              slotLeft,
              slotRight = _shared_DEFAULT_SLOT_RIGHT__WEBPACK_IMPORTED_MODULE_3__.m,
              wrapperProps,
              ...rest
            },
            ref
          ) => {
            const localInitialSelectedItem = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                () =>
                  initialSelectedItem ||
                  items.find((item) => item.isSelected) ||
                  null,
                [initialSelectedItem, items]
              ),
              [selectedItem, setSelectedItem] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(
                localInitialSelectedItem
              ),
              [inputValue, setInputValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(
                localInitialSelectedItem?.label || ""
              ),
              [localSlotLeft, setLocalSlotLeft] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(slotLeft),
              filteredItems = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                () =>
                  items && isFilterable
                    ? (0, _select_utils__WEBPACK_IMPORTED_MODULE_4__.DW)({
                        inputValue,
                        items,
                      })
                    : items,
                [items, isFilterable, inputValue]
              ),
              {
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                highlightedIndex,
                isOpen,
                reset,
                toggleMenu,
              } = (0, downshift__WEBPACK_IMPORTED_MODULE_5__.Kb)({
                defaultHighlightedIndex: (0,
                _select_utils__WEBPACK_IMPORTED_MODULE_4__.Nj)({
                  initialHighlightedItem,
                  items,
                  selectedItem,
                }),
                initialSelectedItem,
                isOpen: controlledIsOpen,
                items: filteredItems,
                itemToString,
                onIsOpenChange,
                onSelectedItemChange: onChange,
                onStateChange({
                  inputValue: newInputValue,
                  selectedItem: newSelectedItem,
                  type,
                }) {
                  switch (type) {
                    case downshift__WEBPACK_IMPORTED_MODULE_5__.Kb
                      .stateChangeTypes.InputKeyDownEnter:
                    case downshift__WEBPACK_IMPORTED_MODULE_5__.Kb
                      .stateChangeTypes.ItemClick:
                    case downshift__WEBPACK_IMPORTED_MODULE_5__.Kb
                      .stateChangeTypes.InputBlur:
                      newSelectedItem &&
                        (newSelectedItem.onClick && newSelectedItem.onClick(),
                        setSelectedItem(newSelectedItem),
                        setInputValue(newSelectedItem.label),
                        newSelectedItem.slotLeft &&
                          setLocalSlotLeft(newSelectedItem.slotLeft));
                      break;
                    case downshift__WEBPACK_IMPORTED_MODULE_5__.Kb
                      .stateChangeTypes.InputChange:
                      void 0 !== newInputValue && setInputValue(newInputValue);
                  }
                },
                selectedItem,
                stateReducer: (state, actionAndChanges) =>
                  (0, _select_utils__WEBPACK_IMPORTED_MODULE_4__.j3)(
                    state,
                    actionAndChanges,
                    {}
                  ),
              }),
              getIsItemSelected = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                (item) =>
                  (0, _select_utils__WEBPACK_IMPORTED_MODULE_4__.x7)({
                    item,
                    selectedItem,
                  }),
                [selectedItem]
              ),
              SlotRight = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                () =>
                  isFilterable && inputValue.length > 0
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _input_clear_button_input_clear_button_comp__WEBPACK_IMPORTED_MODULE_6__.k,
                        {
                          onClick: () => {
                            setInputValue(""),
                              setSelectedItem(null),
                              setLocalSlotLeft(null),
                              reset();
                          },
                        }
                      )
                    : slotRight,
                [inputValue.length, isFilterable, reset, slotRight]
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _box__WEBPACK_IMPORTED_MODULE_7__.x,
              {
                ...wrapperProps,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _shared_dropdown_menu_dropdown_menu_comp__WEBPACK_IMPORTED_MODULE_8__.h,
                  {
                    getIsItemSelected,
                    getItemProps,
                    getMenuProps,
                    highlightedIndex,
                    isOpen,
                    items: filteredItems,
                    size,
                    width: "100%",
                    triggerNode: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _input__WEBPACK_IMPORTED_MODULE_9__.I,
                      {
                        ...inputProps,
                        className:
                          _shared_select_input_styles_css__WEBPACK_IMPORTED_MODULE_1__.C,
                        errorMessage,
                        invalid,
                        label,
                        labelTooltip,
                        readOnly: !isFilterable,
                        size,
                        slotLeft: localSlotLeft,
                        slotRight: SlotRight,
                        labelProps: getLabelProps({ htmlFor: id }),
                        ...getInputProps?.({
                          disabled,
                          id,
                          name,
                          onClick: toggleMenu,
                          placeholder,
                          ref,
                          value: inputValue,
                          ...rest,
                        }),
                      }
                    ),
                  }
                ),
              }
            );
          }
        );
      try {
        (SelectSingle.displayName = "SelectSingle"),
          (SelectSingle.__docgenInfo = {
            description: "",
            displayName: "SelectSingle",
            props: {
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              errorMessage: {
                defaultValue: null,
                description: "",
                name: "errorMessage",
                required: !1,
                type: { name: "string" },
              },
              initialHighlightedItem: {
                defaultValue: null,
                description: "",
                name: "initialHighlightedItem",
                required: !1,
                type: { name: "SelectItemShape" },
              },
              inputProps: {
                defaultValue: null,
                description: "",
                name: "inputProps",
                required: !1,
                type: { name: "Partial<InputProps>" },
              },
              invalid: {
                defaultValue: null,
                description: "",
                name: "invalid",
                required: !1,
                type: { name: "boolean" },
              },
              isClearable: {
                defaultValue: null,
                description: "",
                name: "isClearable",
                required: !1,
                type: { name: "boolean" },
              },
              isFilterable: {
                defaultValue: null,
                description: "",
                name: "isFilterable",
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
              items: {
                defaultValue: null,
                description: "",
                name: "items",
                required: !0,
                type: { name: "SelectItemShape[]" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
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
              labelProps: {
                defaultValue: null,
                description: "",
                name: "labelProps",
                required: !1,
                type: { name: "LabelProps" },
              },
              wrapperProps: {
                defaultValue: null,
                description: "",
                name: "wrapperProps",
                required: !1,
                type: { name: "BoxProps" },
              },
              initialSelectedItem: {
                defaultValue: null,
                description: "",
                name: "initialSelectedItem",
                required: !1,
                type: { name: "SelectItemShape" },
              },
              itemToString: {
                defaultValue: {
                  value:
                    '(item: SelectItemShape | null) => {\n  return item?.label || "";\n}',
                },
                description: "",
                name: "itemToString",
                required: !1,
                type: { name: "(item: SelectItemShape) => string" },
              },
              labelTooltip: {
                defaultValue: null,
                description: "Optional tooltip for label",
                name: "labelTooltip",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: {
                  name: "(changes: UseComboboxStateChange<SelectItemShape>) => void",
                },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
              ref: {
                defaultValue: null,
                description:
                  "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
                name: "ref",
                required: !1,
                type: { name: "Ref<HTMLInputElement>" },
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
              "src/components/select/select_single/select_single.comp.tsx#SelectSingle"
            ] = {
              docgenInfo: SelectSingle.__docgenInfo,
              name: "SelectSingle",
              path: "src/components/select/select_single/select_single.comp.tsx#SelectSingle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/select/shared/select_input.styles.css.ts.vanilla.css","source":"Ll8xYmtyYTVhMDpyZWFkLW9ubHkgewogIGN1cnNvcjogcG9pbnRlcjsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "._1bkra5a0:read-only {\n  cursor: pointer;\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
            ],
            names: [],
            mappings: "AAAA;EACE,eAAe;AACjB",
            sourcesContent: ["._1bkra5a0:read-only {\n  cursor: pointer;\n}"],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/lodash/_arrayIncludes.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseIndexOf = __webpack_require__(
        "./node_modules/lodash/_baseIndexOf.js"
      );
      module.exports = function arrayIncludes(array, value) {
        return (
          !!(null == array ? 0 : array.length) &&
          baseIndexOf(array, value, 0) > -1
        );
      };
    },
    "./node_modules/lodash/_arrayIncludesWith.js": (module) => {
      module.exports = function arrayIncludesWith(array, value, comparator) {
        for (
          var index = -1, length = null == array ? 0 : array.length;
          ++index < length;

        )
          if (comparator(value, array[index])) return !0;
        return !1;
      };
    },
    "./node_modules/lodash/_baseFindIndex.js": (module) => {
      module.exports = function baseFindIndex(
        array,
        predicate,
        fromIndex,
        fromRight
      ) {
        for (
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          fromRight ? index-- : ++index < length;

        )
          if (predicate(array[index], index, array)) return index;
        return -1;
      };
    },
    "./node_modules/lodash/_baseIndexOf.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseFindIndex = __webpack_require__(
          "./node_modules/lodash/_baseFindIndex.js"
        ),
        baseIsNaN = __webpack_require__("./node_modules/lodash/_baseIsNaN.js"),
        strictIndexOf = __webpack_require__(
          "./node_modules/lodash/_strictIndexOf.js"
        );
      module.exports = function baseIndexOf(array, value, fromIndex) {
        return value == value
          ? strictIndexOf(array, value, fromIndex)
          : baseFindIndex(array, baseIsNaN, fromIndex);
      };
    },
    "./node_modules/lodash/_baseIsNaN.js": (module) => {
      module.exports = function baseIsNaN(value) {
        return value != value;
      };
    },
    "./node_modules/lodash/_baseUniq.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
        arrayIncludes = __webpack_require__(
          "./node_modules/lodash/_arrayIncludes.js"
        ),
        arrayIncludesWith = __webpack_require__(
          "./node_modules/lodash/_arrayIncludesWith.js"
        ),
        cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js"),
        createSet = __webpack_require__("./node_modules/lodash/_createSet.js"),
        setToArray = __webpack_require__(
          "./node_modules/lodash/_setToArray.js"
        );
      module.exports = function baseUniq(array, iteratee, comparator) {
        var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = !0,
          result = [],
          seen = result;
        if (comparator) (isCommon = !1), (includes = arrayIncludesWith);
        else if (length >= 200) {
          var set = iteratee ? null : createSet(array);
          if (set) return setToArray(set);
          (isCommon = !1), (includes = cacheHas), (seen = new SetCache());
        } else seen = iteratee ? [] : result;
        outer: for (; ++index < length; ) {
          var value = array[index],
            computed = iteratee ? iteratee(value) : value;
          if (
            ((value = comparator || 0 !== value ? value : 0),
            isCommon && computed == computed)
          ) {
            for (var seenIndex = seen.length; seenIndex--; )
              if (seen[seenIndex] === computed) continue outer;
            iteratee && seen.push(computed), result.push(value);
          } else
            includes(seen, computed, comparator) ||
              (seen !== result && seen.push(computed), result.push(value));
        }
        return result;
      };
    },
    "./node_modules/lodash/_createSet.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Set = __webpack_require__("./node_modules/lodash/_Set.js"),
        noop = __webpack_require__("./node_modules/lodash/noop.js"),
        setToArray = __webpack_require__(
          "./node_modules/lodash/_setToArray.js"
        ),
        createSet =
          Set && 1 / setToArray(new Set([, -0]))[1] == 1 / 0
            ? function (values) {
                return new Set(values);
              }
            : noop;
      module.exports = createSet;
    },
    "./node_modules/lodash/_strictIndexOf.js": (module) => {
      module.exports = function strictIndexOf(array, value, fromIndex) {
        for (
          var index = fromIndex - 1, length = array.length;
          ++index < length;

        )
          if (array[index] === value) return index;
        return -1;
      };
    },
    "./node_modules/lodash/noop.js": (module) => {
      module.exports = function noop() {};
    },
    "./node_modules/lodash/uniq.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var baseUniq = __webpack_require__("./node_modules/lodash/_baseUniq.js");
      module.exports = function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      };
    },
    "?4f7e": () => {},
  },
]);
