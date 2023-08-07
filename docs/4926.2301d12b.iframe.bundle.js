"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
  self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
  [4926],
  {
    "./src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Controlled: () => Controlled,
          Default: () => Default,
          WithButton: () => WithButton,
          WithButtonAndAlertAndConfirmTextDestructive: () =>
            WithButtonAndAlertAndConfirmTextDestructive,
          WithButtonAndConfirmText: () => WithButtonAndConfirmText,
          WithButtonAndConfirmTextDestructive: () =>
            WithButtonAndConfirmTextDestructive,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => dialog_modal_stories,
        });
      var pro_light_svg_icons = __webpack_require__(
          "./node_modules/@fortawesome/pro-light-svg-icons/index.mjs"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        index_module = __webpack_require__(
          "./node_modules/@radix-ui/react-slot/dist/index.module.js"
        ),
        use_click_outside = __webpack_require__(
          "./src/hooks/use_click_outside.ts"
        ),
        use_forward_ref = __webpack_require__("./src/hooks/use_forward_ref.ts"),
        color_palette_css = __webpack_require__(
          "./src/styles/color_palette.css.ts"
        ),
        box_comp = __webpack_require__("./src/components/box/box.comp.tsx"),
        button_comp = __webpack_require__(
          "./src/components/button/button.comp.tsx"
        ),
        icon_comp = __webpack_require__("./src/components/icon/icon.comp.tsx"),
        input_comp = __webpack_require__(
          "./src/components/input/input.comp.tsx"
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
            'src/styles/common/animations.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/common/animations.css.ts.vanilla.css","source":"QGtleWZyYW1lcyBhcGd5MTAgewogIDAlIHsKICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogIH0KICAxMDAlIHsKICAgIGJhY2tncm91bmQ6IHZhcigtLV8xM3I1eDdmMCk7CiAgfQp9CkBrZXlmcmFtZXMgYXBneTExIHsKICAwJSB7CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgfQp9CkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkgewogIC5hcGd5MTIgewogICAgYW5pbWF0aW9uOiBhcGd5MTEgdmFyKC0tXzFrOWxxOTYybCkgZWFzZSBmb3J3YXJkczsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
          __webpack_require__(
            'src/styles/utils/get_sprinkles.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/utils/get_sprinkles.css.ts.vanilla.css","source":"#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"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
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
        mPgDOtcP3F0EAAA_node_modules_vanilla_extract_webpack_plugin_extracted =
          __webpack_require__(
            './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/dialog_modal/dialog_modal.styles.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA8VTy27bMBC8+ysIFAUsoAxop/KDvvQ/iqJYiyuLMMVVSerhFPn3UlIS2TKSoqfyIBCzs8OZFfZB01O5KQX7vWDsCNn55Ki2SrJPYjg7cYgFbT0GyYZ7RV4HTVayXHeoeuiJa6uwk2zfn8PiefEwyq4HWYN5bE7F555LDTqfOTKGH7GARpOTLCMbQNt35ANVb+3BgfU5uVKOVwMBlzwWv7D+m3xsR8o+onJU3eVtwC05/7l6dGm3zUVy05ZTVvuhhepgtEXJLFm85nynCu2PgaO0rwxcYgKD3RVnNyrEAeSGWh4JUAe6IsBAqD067tFgFqZnvpWoNDCy5sLi+BAtA6vYsoSOt1qFQrLtZlt1ySBxM/6Yk5xC9yrWIwXqUxHlV0KophixXuo9/OWJCDftiM6R549MajuZ3P3F5OuPOO/Nr/0mTQ5XVe5A6drPSfBG6rgvQFE7ZxyT+4zbdIo4GVzvHJb/EGgl1l//a6LJymN6b31ZOczjxnGHqs5Q8ZLG7bLExxLaDG/tz7aExcy6hLENqtNlJWZe1ueEIXhkcTFbcMq/mPgDOtcP3F0EAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'
          ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(
        mPgDOtcP3F0EAAA_node_modules_vanilla_extract_webpack_plugin_extracted.Z,
        options
      );
      mPgDOtcP3F0EAAA_node_modules_vanilla_extract_webpack_plugin_extracted.Z &&
        mPgDOtcP3F0EAAA_node_modules_vanilla_extract_webpack_plugin_extracted.Z
          .locals &&
        mPgDOtcP3F0EAAA_node_modules_vanilla_extract_webpack_plugin_extracted.Z
          .locals;
      var jsx_runtime = __webpack_require__(
        "./node_modules/react/jsx-runtime.js"
      );
      function DialogInfoBullet({ slotLeft, text, title }) {
        return (0, jsx_runtime.jsxs)(box_comp.x, {
          alignItems: "center",
          display: "flex",
          gap: "spacing_2",
          marginBottom: "spacing_2",
          children: [
            (0, jsx_runtime.jsx)(box_comp.x, {
              flexShrink: "0",
              width: "spacing_2",
              children: slotLeft,
            }),
            (0, jsx_runtime.jsxs)(box_comp.x, {
              children: [
                (0, jsx_runtime.jsx)(box_comp.x, {
                  fontWeight: "semibold",
                  children: title,
                }),
                (0, jsx_runtime.jsx)(box_comp.x, { children: text }),
              ],
            }),
          ],
        });
      }
      function DialogButton({
        dialogButtonOnClick,
        dialogButtonProps,
        dialogButtonText,
        dialogConfirmPromptPrefix,
        dialogConfirmPromptSuffix,
        dialogConfirmText,
        dialogRef,
      }) {
        const [userConfirmText, setUserConfirmText] = (0, react.useState)("");
        return dialogConfirmText
          ? (0, jsx_runtime.jsxs)(box_comp.x, {
              borderTop: "border_default",
              padding: "spacing_2",
              children: [
                (0, jsx_runtime.jsxs)(box_comp.x, {
                  className: "iozm6ma eiij7b8x eiij7b46",
                  children: [
                    (0, jsx_runtime.jsx)(box_comp.x, {
                      as: "span",
                      children: dialogConfirmPromptPrefix,
                    }),
                    " ",
                    (0, jsx_runtime.jsx)(box_comp.x, {
                      as: "span",
                      fontWeight: "bold",
                      children: dialogConfirmText,
                    }),
                    " ",
                    (0, jsx_runtime.jsx)(box_comp.x, {
                      as: "span",
                      children: dialogConfirmPromptSuffix,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(input_comp.I, {
                  marginBottom: "spacing_2",
                  name: "dialog_confirm_text",
                  onChange: (e) => setUserConfirmText(e.target.value),
                  placeholder: "",
                  value: userConfirmText,
                }),
                (0, jsx_runtime.jsx)(button_comp.z, {
                  appearance: "primary",
                  disabled: userConfirmText !== dialogConfirmText,
                  name: "primary_action",
                  onClick: () => {
                    dialogButtonOnClick?.(), dialogRef.current?.close();
                  },
                  width: "100%",
                  ...dialogButtonProps,
                  children: dialogButtonText,
                }),
              ],
            })
          : (0, jsx_runtime.jsx)(box_comp.x, {
              borderTop: "border_default",
              padding: "spacing_2",
              children: (0, jsx_runtime.jsx)(button_comp.z, {
                appearance: "primary",
                name: "primary_action",
                onClick: () => {
                  dialogButtonOnClick?.(), dialogRef.current?.close();
                },
                width: "100%",
                ...dialogButtonProps,
                children: dialogButtonText,
              }),
            });
      }
      function DialogModalAlert({
        alertColor = "amber",
        alertDescription,
        alertSlotLeft,
        alertTitle,
      }) {
        return (0, jsx_runtime.jsxs)(box_comp.x, {
          alignItems: "center",
          background: "tint_default",
          borderBottom: "border_default",
          className: color_palette_css.gx[alertColor],
          display: "flex",
          gap: "spacing_2",
          padding: "spacing_2",
          children: [
            (0, jsx_runtime.jsx)(box_comp.x, {
              flexShrink: "0",
              width: "spacing_2",
              children: alertSlotLeft,
            }),
            (0, jsx_runtime.jsxs)(box_comp.x, {
              color: "text_low_contrast",
              children: [
                alertTitle &&
                  (0, jsx_runtime.jsx)(box_comp.x, {
                    fontWeight: "semibold",
                    children: alertTitle,
                  }),
                alertDescription,
              ],
            }),
          ],
        });
      }
      function DialogCloseButton({ closeDialog }) {
        return (0, jsx_runtime.jsx)(button_comp.z, {
          appearance: "ghost",
          "aria-label": "Close",
          marginLeft: "auto",
          name: "close",
          onClick: closeDialog,
          size: "square_md",
          slotLeft: (0, jsx_runtime.jsx)(icon_comp.J, {
            icon: pro_light_svg_icons.NBC,
          }),
          type: "button",
        });
      }
      (DialogInfoBullet.displayName = "DialogInfoBullet"),
        (DialogButton.displayName = "DialogButton"),
        (DialogModalAlert.displayName = "DialogModalAlert"),
        (DialogCloseButton.displayName = "DialogCloseButton");
      const DialogModal = (0, react.forwardRef)(
        (
          {
            alertColor,
            alertDescription,
            alertSlotLeft,
            alertTitle,
            children,
            dialogButtonOnClick,
            dialogButtonProps,
            dialogButtonText,
            dialogConfirmPromptPrefix = "Please type",
            dialogConfirmPromptSuffix = "to continue",
            dialogConfirmText,
            dialogProps,
            isOpen,
            onIsOpenChange,
            title,
            triggerNode,
            wrapperProps,
          },
          ref
        ) => {
          const dialogRef = (0, use_forward_ref.Z)(ref),
            triggerRef = (0, react.createRef)(),
            openDialog = (0, react.useCallback)(
              () => (onIsOpenChange?.(!0), dialogRef.current?.showModal()),
              [dialogRef, onIsOpenChange]
            ),
            closeDialog = (0, react.useCallback)(
              () => (onIsOpenChange?.(!1), dialogRef.current?.close()),
              [dialogRef, onIsOpenChange]
            ),
            toggleIsOpen = (0, react.useCallback)(
              () =>
                dialogRef.current
                  ? dialogRef.current?.open
                    ? closeDialog()
                    : openDialog()
                  : null,
              [closeDialog, dialogRef, openDialog]
            );
          return (
            (0, use_click_outside.O)({
              callback: () => (
                onIsOpenChange && onIsOpenChange?.(!1),
                dialogRef.current?.close()
              ),
              contentRef: dialogRef,
              triggerRef,
            }),
            (0, jsx_runtime.jsxs)(box_comp.x, {
              position: "relative",
              ...wrapperProps,
              children: [
                (0, jsx_runtime.jsx)(index_module.g7, {
                  onClick: toggleIsOpen,
                  ref: triggerRef,
                  children: triggerNode,
                }),
                (0, jsx_runtime.jsxs)(box_comp.x, {
                  as: "dialog",
                  className:
                    "iozm6m2 apgy12 eiij7ba eiij7b9f eiij7b84 eiij7bbr eiij7b8b",
                  open: isOpen,
                  ref: dialogRef,
                  ...dialogProps,
                  children: [
                    (0, jsx_runtime.jsxs)(box_comp.x, {
                      className: "eiij7b2 eiij7bt eiij7b8o eiij7b3c eiij7bc6",
                      children: [
                        (0, jsx_runtime.jsx)(box_comp.x, {
                          as: "h3",
                          className:
                            "eiij7b21 eiij7b3f eiij7b50 eiij7b43 eiij7b2i",
                          children: title,
                        }),
                        (0, jsx_runtime.jsx)(DialogCloseButton, {
                          closeDialog,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(box_comp.x, {
                      className: "iozm6m8 eiij7b1v",
                      children: [
                        alertTitle &&
                          (0, jsx_runtime.jsx)(DialogModalAlert, {
                            alertColor,
                            alertDescription,
                            alertSlotLeft,
                            alertTitle,
                          }),
                        (0, jsx_runtime.jsx)(box_comp.x, {
                          padding: "spacing_2",
                          children,
                        }),
                      ],
                    }),
                    dialogButtonText &&
                      (0, jsx_runtime.jsx)(DialogButton, {
                        dialogButtonOnClick,
                        dialogButtonProps,
                        dialogButtonText,
                        dialogConfirmPromptPrefix,
                        dialogConfirmPromptSuffix,
                        dialogConfirmText,
                        dialogRef,
                      }),
                  ],
                }),
              ],
            })
          );
        }
      );
      try {
        (DialogInfoBullet.displayName = "DialogInfoBullet"),
          (DialogInfoBullet.__docgenInfo = {
            description: "",
            displayName: "DialogInfoBullet",
            props: {
              slotLeft: {
                defaultValue: null,
                description: "",
                name: "slotLeft",
                required: !0,
                type: { name: "ReactNode" },
              },
              text: {
                defaultValue: null,
                description: "",
                name: "text",
                required: !1,
                type: { name: "string" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/dialog_modal.comp.tsx#DialogInfoBullet"
            ] = {
              docgenInfo: DialogInfoBullet.__docgenInfo,
              name: "DialogInfoBullet",
              path: "src/components/dialog_modal/dialog_modal.comp.tsx#DialogInfoBullet",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DialogCloseButton.displayName = "DialogCloseButton"),
          (DialogCloseButton.__docgenInfo = {
            description: "",
            displayName: "DialogCloseButton",
            props: {
              closeDialog: {
                defaultValue: null,
                description: "",
                name: "closeDialog",
                required: !0,
                type: { name: "() => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/dialog_modal.comp.tsx#DialogCloseButton"
            ] = {
              docgenInfo: DialogCloseButton.__docgenInfo,
              name: "DialogCloseButton",
              path: "src/components/dialog_modal/dialog_modal.comp.tsx#DialogCloseButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DialogModal.displayName = "DialogModal"),
          (DialogModal.__docgenInfo = {
            description: "",
            displayName: "DialogModal",
            props: {
              alertColor: {
                defaultValue: null,
                description: "",
                name: "alertColor",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"blue"' },
                    { value: '"green"' },
                    { value: '"grey"' },
                    { value: '"red"' },
                    { value: '"amber"' },
                  ],
                },
              },
              alertDescription: {
                defaultValue: null,
                description: "",
                name: "alertDescription",
                required: !1,
                type: { name: "string" },
              },
              alertSlotLeft: {
                defaultValue: null,
                description: "",
                name: "alertSlotLeft",
                required: !1,
                type: { name: "ReactNode" },
              },
              alertTitle: {
                defaultValue: null,
                description: "",
                name: "alertTitle",
                required: !1,
                type: { name: "string" },
              },
              dialogButtonOnClick: {
                defaultValue: null,
                description: "",
                name: "dialogButtonOnClick",
                required: !1,
                type: { name: "() => void" },
              },
              dialogButtonProps: {
                defaultValue: null,
                description: "",
                name: "dialogButtonProps",
                required: !1,
                type: {
                  name: 'Omit<ChildSprinkleProps<{ alignItems: { values: Values<("stretch" | "center" | "end" | "start" | "baseline")[], { defaultClass: string; }>; }; aspectRatio: { values: Values<MapLeafNodes<{ extraWide: string; square: string; tall: string; wide: string; }, CSSVarFunction>, { ...; }>; }; ... 39 more ...; zIndex: { ...; ...',
                },
              },
              dialogButtonText: {
                defaultValue: null,
                description: "",
                name: "dialogButtonText",
                required: !1,
                type: { name: "string" },
              },
              dialogConfirmPromptPrefix: {
                defaultValue: { value: "Please type" },
                description: "",
                name: "dialogConfirmPromptPrefix",
                required: !1,
                type: { name: "string" },
              },
              dialogConfirmPromptSuffix: {
                defaultValue: { value: "to continue" },
                description: "",
                name: "dialogConfirmPromptSuffix",
                required: !1,
                type: { name: "string" },
              },
              dialogConfirmText: {
                defaultValue: null,
                description: "",
                name: "dialogConfirmText",
                required: !1,
                type: { name: "string" },
              },
              dialogProps: {
                defaultValue: null,
                description: "",
                name: "dialogProps",
                required: !1,
                type: { name: "BoxProps" },
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
                type: { name: "(isOpen: boolean) => void" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              triggerNode: {
                defaultValue: null,
                description: "",
                name: "triggerNode",
                required: !0,
                type: { name: "ReactNode" },
              },
              wrapperProps: {
                defaultValue: null,
                description: "",
                name: "wrapperProps",
                required: !1,
                type: { name: "BoxProps" },
              },
              ref: {
                defaultValue: null,
                description:
                  "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",
                name: "ref",
                required: !1,
                type: { name: "Ref<HTMLDialogElement>" },
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
              "src/components/dialog_modal/dialog_modal.comp.tsx#DialogModal"
            ] = {
              docgenInfo: DialogModal.__docgenInfo,
              name: "DialogModal",
              path: "src/components/dialog_modal/dialog_modal.comp.tsx#DialogModal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LOREM_mock = __webpack_require__("./mocks/LOREM.mock.ts");
      const dialog_modal_stories = {
          component: DialogModal,
          title: "React components/DialogModal",
          parameters: {
            docs: {
              description: {
                component:
                  "-----------------------------------------------------------------------------",
              },
            },
          },
        },
        Template = ({ ...rest }) =>
          (0, jsx_runtime.jsx)(DialogModal, { ...rest });
      Template.displayName = "Template";
      const DialogContent = () =>
        (0, jsx_runtime.jsx)(box_comp.x, {
          children: Array.from({ length: 8 }).map((_, index) =>
            (0, jsx_runtime.jsx)(
              DialogInfoBullet,
              {
                slotLeft: (0, jsx_runtime.jsx)(icon_comp.J, {
                  icon: pro_light_svg_icons.Kak,
                }),
                text: LOREM_mock.m.text_lg,
              },
              `key-${index}`
            )
          ),
        });
      DialogContent.displayName = "DialogContent";
      const Default = {
          args: {
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: Template,
        },
        ControlledTemplate = ({ ...rest }) => {
          const [isOpen, setIsOpen] = (0, react.useState)(!1);
          return (0, jsx_runtime.jsxs)(box_comp.x, {
            children: [
              (0, jsx_runtime.jsx)("button", {
                onClick: () => setIsOpen((current) => !current),
                type: "button",
                children: "toggle isOpen",
              }),
              (0, jsx_runtime.jsxs)(box_comp.x, {
                marginBottom: "spacing_2",
                children: ["Is open: ", isOpen.toString()],
              }),
              (0, jsx_runtime.jsx)(DialogModal, {
                ...rest,
                isOpen,
                onIsOpenChange: setIsOpen,
              }),
            ],
          });
        };
      ControlledTemplate.displayName = "ControlledTemplate";
      const Controlled = {
          args: {
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: ControlledTemplate,
        },
        WithButton = {
          args: {
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            dialogButtonOnClick: () => {
              alert("click");
            },
            dialogButtonText: "Freeze account",
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: Template,
        },
        WithButtonAndConfirmText = {
          args: {
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            dialogButtonOnClick: () => {
              alert("click");
            },
            dialogButtonText: "Freeze account",
            dialogConfirmPromptPrefix: "Please type",
            dialogConfirmPromptSuffix: "to continue",
            dialogConfirmText: "boondoggle.design",
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: Template,
        },
        WithButtonAndConfirmTextDestructive = {
          args: {
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            dialogButtonOnClick: () => {
              alert("click");
            },
            dialogButtonProps: {
              className: color_palette_css.gx.red,
              slotLeft: (0, jsx_runtime.jsx)(icon_comp.J, {
                icon: pro_light_svg_icons.jOV,
              }),
            },
            dialogButtonText: "Freeze account",
            dialogConfirmPromptPrefix: "Please type",
            dialogConfirmPromptSuffix: "to continue",
            dialogConfirmText: "freeze account",
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: Template,
        },
        WithButtonAndAlertAndConfirmTextDestructive = {
          args: {
            alertColor: "red",
            alertDescription: LOREM_mock.m.text_md,
            alertSlotLeft: (0, jsx_runtime.jsx)(icon_comp.J, {
              color: "text_low_contrast",
              icon: pro_light_svg_icons.RLE,
            }),
            alertTitle: "This account will be frozen",
            children: (0, jsx_runtime.jsx)(DialogContent, {}),
            dialogButtonOnClick: () => {
              alert("click");
            },
            dialogButtonProps: {
              className: color_palette_css.gx.red,
              slotLeft: (0, jsx_runtime.jsx)(icon_comp.J, {
                icon: pro_light_svg_icons.jOV,
              }),
            },
            dialogButtonText: "Freeze account",
            dialogConfirmPromptPrefix: "Please type",
            dialogConfirmPromptSuffix: "to continue",
            dialogConfirmText: "freeze account",
            title: LOREM_mock.m.text_xxs,
            triggerNode: (0, jsx_runtime.jsx)(button_comp.z, {
              name: "DialogModal button",
              children: "Open dialog",
            }),
          },
          render: Template,
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: <DialogContent />,\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: Template\n}',
            ...Default.parameters?.docs?.source,
          },
          description: {
            story:
              "-----------------------------------------------------------------------------",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (Controlled.parameters = {
          ...Controlled.parameters,
          docs: {
            ...Controlled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: <DialogContent />,\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: ControlledTemplate\n}',
              ...Controlled.parameters?.docs?.source,
            },
          },
        }),
        (WithButton.parameters = {
          ...WithButton.parameters,
          docs: {
            ...WithButton.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: <DialogContent />,\n    dialogButtonOnClick: () => {\n      alert("click");\n    },\n    dialogButtonText: "Freeze account",\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: Template\n}',
              ...WithButton.parameters?.docs?.source,
            },
            description: {
              story:
                "-----------------------------------------------------------------------------",
              ...WithButton.parameters?.docs?.description,
            },
          },
        }),
        (WithButtonAndConfirmText.parameters = {
          ...WithButtonAndConfirmText.parameters,
          docs: {
            ...WithButtonAndConfirmText.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: <DialogContent />,\n    dialogButtonOnClick: () => {\n      alert("click");\n    },\n    dialogButtonText: "Freeze account",\n    dialogConfirmPromptPrefix: "Please type",\n    dialogConfirmPromptSuffix: "to continue",\n    dialogConfirmText: "boondoggle.design",\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: Template\n}',
              ...WithButtonAndConfirmText.parameters?.docs?.source,
            },
            description: {
              story:
                "-----------------------------------------------------------------------------",
              ...WithButtonAndConfirmText.parameters?.docs?.description,
            },
          },
        }),
        (WithButtonAndConfirmTextDestructive.parameters = {
          ...WithButtonAndConfirmTextDestructive.parameters,
          docs: {
            ...WithButtonAndConfirmTextDestructive.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: <DialogContent />,\n    dialogButtonOnClick: () => {\n      alert("click");\n    },\n    dialogButtonProps: {\n      className: variantColorOverlay.red,\n      slotLeft: <Icon icon={faSnowflake} />\n    },\n    dialogButtonText: "Freeze account",\n    dialogConfirmPromptPrefix: "Please type",\n    dialogConfirmPromptSuffix: "to continue",\n    dialogConfirmText: "freeze account",\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: Template\n}',
              ...WithButtonAndConfirmTextDestructive.parameters?.docs?.source,
            },
            description: {
              story:
                "-----------------------------------------------------------------------------",
              ...WithButtonAndConfirmTextDestructive.parameters?.docs
                ?.description,
            },
          },
        }),
        (WithButtonAndAlertAndConfirmTextDestructive.parameters = {
          ...WithButtonAndAlertAndConfirmTextDestructive.parameters,
          docs: {
            ...WithButtonAndAlertAndConfirmTextDestructive.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    alertColor: "red",\n    alertDescription: LOREM.text_md,\n    alertSlotLeft: <Icon color="text_low_contrast" icon={faExclamationCircle} />,\n    alertTitle: "This account will be frozen",\n    children: <DialogContent />,\n    dialogButtonOnClick: () => {\n      alert("click");\n    },\n    dialogButtonProps: {\n      className: variantColorOverlay.red,\n      slotLeft: <Icon icon={faSnowflake} />\n    },\n    dialogButtonText: "Freeze account",\n    dialogConfirmPromptPrefix: "Please type",\n    dialogConfirmPromptSuffix: "to continue",\n    dialogConfirmText: "freeze account",\n    title: LOREM.text_xxs,\n    triggerNode: <Button name="DialogModal button">Open dialog</Button>\n  },\n  render: Template\n}',
              ...WithButtonAndAlertAndConfirmTextDestructive.parameters?.docs
                ?.source,
            },
            description: {
              story:
                "-----------------------------------------------------------------------------",
              ...WithButtonAndAlertAndConfirmTextDestructive.parameters?.docs
                ?.description,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "Controlled",
        "WithButton",
        "WithButtonAndConfirmText",
        "WithButtonAndConfirmTextDestructive",
        "WithButtonAndAlertAndConfirmTextDestructive",
      ];
      try {
        (dialogmodalstories.displayName = "dialogmodalstories"),
          (dialogmodalstories.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "dialogmodalstories",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#dialogmodalstories"
            ] = {
              docgenInfo: dialogmodalstories.__docgenInfo,
              name: "dialogmodalstories",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#dialogmodalstories",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Default.displayName = "Default"),
          (Default.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "Default",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#Default"
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: "Default",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#Default",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (WithButton.displayName = "WithButton"),
          (WithButton.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "WithButton",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButton"
            ] = {
              docgenInfo: WithButton.__docgenInfo,
              name: "WithButton",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (WithButtonAndConfirmText.displayName = "WithButtonAndConfirmText"),
          (WithButtonAndConfirmText.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "WithButtonAndConfirmText",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndConfirmText"
            ] = {
              docgenInfo: WithButtonAndConfirmText.__docgenInfo,
              name: "WithButtonAndConfirmText",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndConfirmText",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (WithButtonAndConfirmTextDestructive.displayName =
          "WithButtonAndConfirmTextDestructive"),
          (WithButtonAndConfirmTextDestructive.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "WithButtonAndConfirmTextDestructive",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndConfirmTextDestructive"
            ] = {
              docgenInfo: WithButtonAndConfirmTextDestructive.__docgenInfo,
              name: "WithButtonAndConfirmTextDestructive",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndConfirmTextDestructive",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (WithButtonAndAlertAndConfirmTextDestructive.displayName =
          "WithButtonAndAlertAndConfirmTextDestructive"),
          (WithButtonAndAlertAndConfirmTextDestructive.__docgenInfo = {
            description:
              "-----------------------------------------------------------------------------",
            displayName: "WithButtonAndAlertAndConfirmTextDestructive",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndAlertAndConfirmTextDestructive"
            ] = {
              docgenInfo:
                WithButtonAndAlertAndConfirmTextDestructive.__docgenInfo,
              name: "WithButtonAndAlertAndConfirmTextDestructive",
              path: "src/components/dialog_modal/__storybook__/dialog_modal.stories.tsx#WithButtonAndAlertAndConfirmTextDestructive",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
