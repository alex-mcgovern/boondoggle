(self.webpackChunk_alex_mcgovern_boondoggle_design =
  self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
  [7709],
  {
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
    "./src/components/select/select_multi/__storybook__/select_multi.stories.tsx":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Controlled: () => Controlled,
            Customisation: () => Customisation,
            Default: () => Default,
            Filterable: () => Filterable,
            InitialSelectedItems: () => InitialSelectedItems,
            Invalid: () => Invalid,
            ItemsWithIsSelectedTrue: () => ItemsWithIsSelectedTrue,
            OnChange: () => OnChange,
            SelectedItemsToString: () => SelectedItemsToString,
            SlotLeft: () => SlotLeft,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          });
        var _storybook_jest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/@storybook/jest/dist/esm/index.js"
          ),
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/react/index.js"
          ),
          ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            "./src/components/select/select_multi/select_multi.comp.tsx"
          ),
          _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            "./mocks/LOREM.mock.ts"
          ),
          _box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            "./src/components/box/box.comp.tsx"
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
              errorMessage:
                _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.errorMessage(),
              id: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.id(),
              items: ITEMS,
              label: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.label(),
              name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.name(),
              onChange: ON_CHANGE,
              placeholder:
                _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.placeholder(),
            },
            component: ___WEBPACK_IMPORTED_MODULE_5__._,
            title: "React components/SelectMulti",
          },
          Default = {},
          Filterable = { args: { isFilterable: !0 } },
          InitialSelectedItems = { args: { initialSelectedItems: [ITEMS[0]] } },
          Invalid = { args: { invalid: !0 } },
          ItemsWithIsSelectedTrue = {
            args: {
              items: [
                { isSelected: !0, label: "United Kingdom", value: "uk" },
                { isSelected: !0, label: "France", value: "fr" },
                { isSelected: !0, label: "Germany", value: "de" },
              ],
            },
          },
          ControlledTemplate = () => {
            const [selectedItems, setSelectedItems] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              _box__WEBPACK_IMPORTED_MODULE_6__.x,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                    _box__WEBPACK_IMPORTED_MODULE_6__.x,
                    {
                      alignItems: "center",
                      display: "flex",
                      gap: "spacing_1",
                      marginBottom: "spacing_2",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          "button",
                          {
                            onClick: () => setSelectedItems([]),
                            type: "button",
                            children: "Clear selected Items",
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          "button",
                          {
                            onClick: () => setSelectedItems([ITEMS[0]]),
                            type: "button",
                            children: "Set selected Items",
                          }
                        ),
                      ],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    ___WEBPACK_IMPORTED_MODULE_5__._,
                    {
                      items: ITEMS,
                      name: _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.name(),
                      placeholder:
                        _mocks_LOREM_mock__WEBPACK_IMPORTED_MODULE_4__.m.placeholder(),
                      selectedItems,
                    }
                  ),
                  JSON.stringify(selectedItems),
                ],
              }
            );
          };
        ControlledTemplate.displayName = "ControlledTemplate";
        const Controlled = { render: ControlledTemplate },
          Customisation = {
            args: { wrapperProps: { marginBottom: "spacing_3" } },
          },
          OnChange = {
            args: {
              onChange: (selectedItems) => {
                alert(JSON.stringify({ selectedItems }));
              },
            },
          },
          SelectedItemsToString = {
            args: {
              selectedItemsToString: (selectedItems) =>
                1 === selectedItems.length
                  ? `${selectedItems.length} country selected`
                  : `${selectedItems.length} countries selected`,
            },
          },
          SlotLeft = {
            args: {
              items: (0, _mocks_select_mock__WEBPACK_IMPORTED_MODULE_3__.S)({
                withIcon: !0,
              }),
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
          (InitialSelectedItems.parameters = {
            ...InitialSelectedItems.parameters,
            docs: {
              ...InitialSelectedItems.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    initialSelectedItems: [ITEMS[0]]\n  }\n}",
                ...InitialSelectedItems.parameters?.docs?.source,
              },
            },
          }),
          (Invalid.parameters = {
            ...Invalid.parameters,
            docs: {
              ...Invalid.parameters?.docs,
              source: {
                originalSource: "{\n  args: {\n    invalid: true\n  }\n}",
                ...Invalid.parameters?.docs?.source,
              },
            },
          }),
          (ItemsWithIsSelectedTrue.parameters = {
            ...ItemsWithIsSelectedTrue.parameters,
            docs: {
              ...ItemsWithIsSelectedTrue.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    items: [{\n      isSelected: true,\n      label: "United Kingdom",\n      value: "uk"\n    }, {\n      isSelected: true,\n      label: "France",\n      value: "fr"\n    }, {\n      isSelected: true,\n      label: "Germany",\n      value: "de"\n    }]\n  }\n}',
                ...ItemsWithIsSelectedTrue.parameters?.docs?.source,
              },
            },
          }),
          (Controlled.parameters = {
            ...Controlled.parameters,
            docs: {
              ...Controlled.parameters?.docs,
              source: {
                originalSource: "{\n  render: ControlledTemplate\n}",
                ...Controlled.parameters?.docs?.source,
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
              description: {
                story:
                  "-----------------------------------------------------------------------------",
                ...Customisation.parameters?.docs?.description,
              },
            },
          }),
          (OnChange.parameters = {
            ...OnChange.parameters,
            docs: {
              ...OnChange.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    onChange: (selectedItems: Array<DropdownItemShape>) => {\n      alert(JSON.stringify({\n        selectedItems\n      }));\n    }\n  }\n}",
                ...OnChange.parameters?.docs?.source,
              },
              description: {
                story:
                  "-----------------------------------------------------------------------------",
                ...OnChange.parameters?.docs?.description,
              },
            },
          }),
          (SelectedItemsToString.parameters = {
            ...SelectedItemsToString.parameters,
            docs: {
              ...SelectedItemsToString.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    selectedItemsToString: (selectedItems: Array<DropdownItemShape>) => {\n      if (selectedItems.length === 1) {\n        return `${selectedItems.length} country selected`;\n      }\n      return `${selectedItems.length} countries selected`;\n    }\n  }\n}",
                ...SelectedItemsToString.parameters?.docs?.source,
              },
              description: {
                story:
                  "-----------------------------------------------------------------------------",
                ...SelectedItemsToString.parameters?.docs?.description,
              },
            },
          }),
          (SlotLeft.parameters = {
            ...SlotLeft.parameters,
            docs: {
              ...SlotLeft.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: mockSelectItems({\n      withIcon: true\n    })\n  }\n}",
                ...SlotLeft.parameters?.docs?.source,
              },
              description: {
                story:
                  "-----------------------------------------------------------------------------",
                ...SlotLeft.parameters?.docs?.description,
              },
            },
          });
        const __namedExportsOrder = [
          "Default",
          "Filterable",
          "InitialSelectedItems",
          "Invalid",
          "ItemsWithIsSelectedTrue",
          "Controlled",
          "Customisation",
          "OnChange",
          "SelectedItemsToString",
          "SlotLeft",
        ];
        try {
          (Customisation.displayName = "Customisation"),
            (Customisation.__docgenInfo = {
              description:
                "-----------------------------------------------------------------------------",
              displayName: "Customisation",
              props: {},
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#Customisation"
              ] = {
                docgenInfo: Customisation.__docgenInfo,
                name: "Customisation",
                path: "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#Customisation",
              });
        } catch (__react_docgen_typescript_loader_error) {}
        try {
          (OnChange.displayName = "OnChange"),
            (OnChange.__docgenInfo = {
              description:
                "-----------------------------------------------------------------------------",
              displayName: "OnChange",
              props: {},
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#OnChange"
              ] = {
                docgenInfo: OnChange.__docgenInfo,
                name: "OnChange",
                path: "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#OnChange",
              });
        } catch (__react_docgen_typescript_loader_error) {}
        try {
          (SelectedItemsToString.displayName = "SelectedItemsToString"),
            (SelectedItemsToString.__docgenInfo = {
              description:
                "-----------------------------------------------------------------------------",
              displayName: "SelectedItemsToString",
              props: {},
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#SelectedItemsToString"
              ] = {
                docgenInfo: SelectedItemsToString.__docgenInfo,
                name: "SelectedItemsToString",
                path: "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#SelectedItemsToString",
              });
        } catch (__react_docgen_typescript_loader_error) {}
        try {
          (SlotLeft.displayName = "SlotLeft"),
            (SlotLeft.__docgenInfo = {
              description:
                "-----------------------------------------------------------------------------",
              displayName: "SlotLeft",
              props: {},
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#SlotLeft"
              ] = {
                docgenInfo: SlotLeft.__docgenInfo,
                name: "SlotLeft",
                path: "src/components/select/select_multi/__storybook__/select_multi.stories.tsx#SlotLeft",
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    "./src/components/select/select_multi/select_multi.comp.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { _: () => SelectMulti });
      var clsx_m = __webpack_require__("./node_modules/clsx/dist/clsx.m.js"),
        downshift_esm = __webpack_require__(
          "./node_modules/downshift/dist/downshift.esm.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        box_comp = __webpack_require__("./src/components/box/box.comp.tsx"),
        input_comp = __webpack_require__(
          "./src/components/input/input.comp.tsx"
        ),
        input_clear_button_comp = __webpack_require__(
          "./src/components/input_clear_button/input_clear_button.comp.tsx"
        ),
        select_utils = __webpack_require__(
          "./src/components/select/select_utils.ts"
        ),
        DEFAULT_SLOT_RIGHT = __webpack_require__(
          "./src/components/select/shared/DEFAULT_SLOT_RIGHT.tsx"
        ),
        dropdown_menu_comp = __webpack_require__(
          "./src/components/select/shared/dropdown_menu/dropdown_menu.comp.tsx"
        ),
        select_input_styles_css = __webpack_require__(
          "./src/components/select/shared/select_input.styles.css.ts"
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__(
            'src/styles/layers.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/layers.css.ts.vanilla.css","source":"QGxheWVyIHJlc2V0OwpAbGF5ZXIgYmFzZTsKQGxheWVyIGJhc2VPdmVycmlkZXM7CkBsYXllciB0aGVtZTsKQGxheWVyIHZhcnM7CkBsYXllciBzcHJpbmtsZXM7"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
          __webpack_require__(
            'src/styles/color_palette.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/color_palette.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA62WTW7bMBCF9z4FNwVSwBFIkcMfZ5ObFLbs1E1TuHCzSFH47h0ORUWRxhYjeyPBwGcO3/DpcR5f1n93R/G63/3aPSxWx8PhdSlWq826+bk9Hn6Lfwsh7u+/KX2EN/ckV2L/52V9V0u7FMFV8stSmMrjU1YQ9NeHD7QiOsFaEhw80gOs7mG1SRg+B5TOFCyFkpVDyvkxZjLmEFOVQsxDFYYYtFiNNQGSDhivZnuYSwqQhiHmMmawmqOioR6v5vurQWWiBDNeLeQmq9jkpAEVB+qyDGGAr4vat+lRNunV49JNpjx1LzaZNjDAthkLiOlKRwzwNcB258//tHjsGY9cVuW/PdHPz9qOMZ4O3amFriWlzmO8p4HMVCcXqDHXmk/jct7SuVnHca37tIwHG6tqw5W17zISBo7DWveZOmNe5Y+Mcd+kiCL7sQbEhVO3FbvPTZnqpkxO60FjMhaiX0fYBQ8Kcerb7vutbEd4u6eAjb7WdsRhE+IJ2O4zY0MPP1vn8LPGl82hx8WeUnmHmALMDu1ICcgL1qMgCClGg+RM5UulzHbfuyQFF9w3Kb0plfQhBNNp25yo8xy4v5UDVUwg6GoxRvikBRVg14xMqWEuRJ8yUaUnC1p2RcgrakrHWLn2XN9sr3S+ohUHulxa0ZnGS8tbrrQvFTPXhAqAViYXsuG2KVXflIra5iMP1KYoKpjrfPjjpkk4qnVVFHLTX/H8x0UhNxCdi8LEgeU800UhNzqxUTglZf5FPNHMS7Ng8TRYPA/O8+DzzYZACL3b2NxgCAwUbZCm9/O3MYFI1GmEYWaTPAaCp9uQBHkOtD3QJRDYPbo8gEq6tep0Yoz7famYuSbUYLorCKPQnh8HJ9U3paK2PbC7kZnQmXDh6T9aPKtJFA8AAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
          __webpack_require__(
            'src/styles/vars.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/vars.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA3WVTY/TMBCG7/wKqxLSIiUhtvNpTgsCwYHTas8obd02W+ejTrZ0F/HfGbfdoIynufV5ZyaTpO9rZbtuZH/eMRaGv/i+NIcyixXjMfvI5KcZ5oCB8jkVipWOZnMsoTgDXs5xArg/saEz9ZodK3vnJGnTU76RH+al6e3SBJVmiqXx+znL3QL9aQ4LxQrMSngAd2FeKZZgtlQsdhOYAInZ7bK640kc8KQMeFoGcSTQZivXIKE2o+t5ihrWrsE9d3wplzyQaQA9cRTjx9aKLU232s/pRrGN0WjxrWJbW6/ncKdY3Zq61XNcv+GQmP40if5N9oq1HZ5mFBurpUG0udJwpY2ZS61iYdX3oA0vw6ib4DPcbv+zWj2cf37r2jFYPOhtp9njj0XwXZujHutVFdzbujLBULVDOGhbb4LFvRvDvnSms+xr0z3Vi/+dVzC/dwd/moiL1OpmLvQgePAA3yoqcr/aujE+Hlw9UT4qJojyZ8AePNKjfztM7H2i9n65tffrjQV5TJmJQyDkcYwg5EHhQUgD6cHEuRZDcH3iQfB35kFn8I1lYmORUFwE6QnlWUAQbA4jCAG8bnWvq/FOBE5G5uNgbUk2rqdGSTbqSU9IHQycwuDcG7ydGlOycTfpGamDsWGoG46Ep6kxJxvB2PjtG3dG4MzlzZkedwiDpUWKazsHvdKeiHJ+cNArBZfl3tTBQa8UHFb6A8Bg1fPYIQoOa+o2XEHO6HZE4tlnKYInCr5Q8JWAIr54F1F32iIkfCR9lPgo9VHmo9xHBbVvSb02UXn/EeFOSzJNhTsWqbgS7vgj4k3oG8kkNlTAiS2dkmJHRaqo6fwVYAvp0/05jJoBYXMOLg+DIwSBW/9tdZSjRE9YRxwIkwhLfhbwQxHJ64VbwBaFjG6I4I6SR9nl8tQjua2zR/bWk2EVfCKSqLxeWAXDyGkZgVVwTjJtg1+IBAsl5dvkAqtgpXR6CRyr4Kps2jnBKhgsn3bOsQpea6oTnRUyRUHy9x+gyNKTbAsAAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          )),
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
        styles_css_ts_vanilla_css_source_Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9_node_modules_vanilla_extract_webpack_plugin_extracted =
          __webpack_require__(
            './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/select/select_multi/styles.css.ts.vanilla.css","source":"Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(
        styles_css_ts_vanilla_css_source_Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9_node_modules_vanilla_extract_webpack_plugin_extracted.Z,
        options
      );
      styles_css_ts_vanilla_css_source_Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9_node_modules_vanilla_extract_webpack_plugin_extracted.Z &&
        styles_css_ts_vanilla_css_source_Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9_node_modules_vanilla_extract_webpack_plugin_extracted
          .Z.locals &&
        styles_css_ts_vanilla_css_source_Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9_node_modules_vanilla_extract_webpack_plugin_extracted
          .Z.locals;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js"
      );
      const SelectMulti = (0, react.forwardRef)(
        (
          {
            disabled,
            errorMessage,
            id,
            initialHighlightedItem,
            initialSelectedItems = [],
            inputProps,
            invalid,
            isClearable,
            isFilterable,
            items,
            label,
            labelTooltip,
            name,
            onChange,
            placeholder,
            selectedItems: controlledSelectedItems,
            selectedItemsToString,
            size,
            slotLeft,
            slotRight = DEFAULT_SLOT_RIGHT.m,
            wrapperProps,
            ...rest
          },
          ref
        ) => {
          const [inputValue, setInputValue] = (0, react.useState)(""),
            [selectedItems, setSelectedItems] = (0, react.useState)(
              controlledSelectedItems || [
                  ...initialSelectedItems,
                  ...items.filter((item) => item.isSelected),
                ] ||
                []
            );
          (0, react.useEffect)(() => {
            controlledSelectedItems &&
              setSelectedItems(controlledSelectedItems);
          }, [controlledSelectedItems, setSelectedItems]);
          const onSelectedItemsChange = (0, react.useCallback)(
              (newItems) => {
                onChange && onChange(newItems);
              },
              [onChange]
            ),
            inputPlaceholder = (0, react.useMemo)(
              () =>
                !Array.isArray(selectedItems) || selectedItems.length < 1
                  ? placeholder
                  : selectedItemsToString
                  ? selectedItemsToString(selectedItems)
                  : (0, select_utils.UZ)({
                      length: selectedItems?.length,
                      originalValue: placeholder,
                    }),
              [placeholder, selectedItems, selectedItemsToString]
            ),
            removeSelectedItem = (0, react.useCallback)(
              (item) =>
                setSelectedItems((prevSelectedItems) =>
                  prevSelectedItems.filter(
                    (selectedItem) => selectedItem.value !== item.value
                  )
                ),
              []
            ),
            { getDropdownProps, getSelectedItemProps } = (0, downshift_esm.M$)({
              selectedItems,
            }),
            filteredItems = (0, react.useMemo)(
              () =>
                items && isFilterable
                  ? (0, select_utils.DW)({ inputValue, items })
                  : items,
              [items, isFilterable, inputValue]
            ),
            getIsItemSelected = (0, react.useCallback)(
              (item) =>
                (0, select_utils.x7)({ isMulti: !0, item, selectedItems }),
              [selectedItems]
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
            } = (0, downshift_esm.Kb)({
              defaultHighlightedIndex: (0, select_utils.Nj)({
                initialHighlightedItem,
                items,
                selectedItem: selectedItems?.[0],
              }),
              items: filteredItems,
              onStateChange({
                inputValue: newInputValue,
                selectedItem: newSelectedItem,
                type,
              }) {
                switch (type) {
                  case downshift_esm.Kb.stateChangeTypes.InputKeyDownEnter:
                  case downshift_esm.Kb.stateChangeTypes.ItemClick:
                  case downshift_esm.Kb.stateChangeTypes.InputBlur:
                    if (!newSelectedItem) break;
                    if (
                      (newSelectedItem.onClick && newSelectedItem.onClick(),
                      getIsItemSelected(newSelectedItem))
                    ) {
                      removeSelectedItem(newSelectedItem),
                        onSelectedItemsChange(
                          selectedItems.filter(
                            (prevSelectedItem) =>
                              prevSelectedItem.value !== newSelectedItem.value
                          )
                        );
                      break;
                    }
                    if (newSelectedItem) {
                      setSelectedItems([...selectedItems, newSelectedItem]),
                        onSelectedItemsChange([
                          ...selectedItems,
                          newSelectedItem,
                        ]);
                      break;
                    }
                    break;
                  case downshift_esm.Kb.stateChangeTypes.InputChange:
                    if (void 0 !== newInputValue) {
                      setInputValue(newInputValue);
                      break;
                    }
                }
              },
              selectedItem: null,
              stateReducer: (state, actionAndChanges) =>
                (0, select_utils.j3)(state, actionAndChanges, { isMulti: !0 }),
            }),
            SlotRight = (0, react.useMemo)(
              () =>
                (isFilterable && inputValue.length > 0) ||
                (isClearable && selectedItems.length > 0)
                  ? (0, jsx_runtime.jsx)(input_clear_button_comp.k, {
                      onClick: () => (
                        onSelectedItemsChange([]),
                        setInputValue(""),
                        setSelectedItems([]),
                        reset()
                      ),
                    })
                  : slotRight,
              [
                inputValue.length,
                isClearable,
                isFilterable,
                onSelectedItemsChange,
                reset,
                selectedItems.length,
                slotRight,
              ]
            );
          return (0, jsx_runtime.jsx)(box_comp.x, {
            ...wrapperProps,
            children: (0, jsx_runtime.jsx)(dropdown_menu_comp.h, {
              getIsItemSelected,
              getItemProps,
              getMenuProps,
              getSelectedItemProps,
              highlightedIndex,
              isMulti: !0,
              isOpen,
              items: filteredItems,
              removeSelectedItem,
              size,
              triggerNode: (0, jsx_runtime.jsx)(input_comp.I, {
                ...inputProps,
                className: (0, clsx_m.Z)(select_input_styles_css.C, {
                  _15ssmw60: selectedItems?.length > 0,
                }),
                errorMessage,
                invalid,
                label,
                labelProps: getLabelProps({ htmlFor: id }),
                labelTooltip,
                readOnly: !isFilterable,
                size,
                slotLeft,
                slotRight: SlotRight,
                ...getInputProps?.({
                  ...getDropdownProps({ preventKeyAction: isOpen, ref }),
                  ...rest,
                  disabled,
                  id,
                  name,
                  onClick: toggleMenu,
                  placeholder: inputPlaceholder,
                  value: inputValue,
                }),
              }),
              width: "100%",
            }),
          });
        }
      );
      try {
        (SelectMulti.displayName = "SelectMulti"),
          (SelectMulti.__docgenInfo = {
            description: "",
            displayName: "SelectMulti",
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
                type: { name: "DropdownItemShape" },
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
                type: { name: "DropdownItemShape[]" },
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
                  name: "(changes: UseComboboxStateChange<DropdownItemShape>) => void",
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
              initialSelectedItems: {
                defaultValue: { value: "[]" },
                description: "",
                name: "initialSelectedItems",
                required: !1,
                type: { name: "DropdownItemShape[]" },
              },
              labelTooltip: {
                defaultValue: null,
                description: "",
                name: "labelTooltip",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "(changes: DropdownItemShape[]) => void" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
              selectedItems: {
                defaultValue: null,
                description: "",
                name: "selectedItems",
                required: !1,
                type: { name: "DropdownItemShape[]" },
              },
              selectedItemsToString: {
                defaultValue: null,
                description: "",
                name: "selectedItemsToString",
                required: !1,
                type: {
                  name: "(selectedItems: DropdownItemShape[]) => string",
                },
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
              "src/components/select/select_multi/select_multi.comp.tsx#SelectMulti"
            ] = {
              docgenInfo: SelectMulti.__docgenInfo,
              name: "SelectMulti",
              path: "src/components/select/select_multi/select_multi.comp.tsx#SelectMulti",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/select/select_multi/styles.css.ts.vanilla.css","source":"Ll8xNXNzbXc2MDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1fMTNyNXg3ZmEpOwp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':
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
          "._15ssmw60::placeholder {\n  color: var(--_13r5x7fa);\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./node_modules/@vanilla-extract/webpack-plugin/extracted.js",
            ],
            names: [],
            mappings: "AAAA;EACE,uBAAuB;AACzB",
            sourcesContent: [
              "._15ssmw60::placeholder {\n  color: var(--_13r5x7fa);\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
    "?4f7e": () => {},
  },
]);
