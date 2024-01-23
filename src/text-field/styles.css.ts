import type { TextFieldRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const textFieldCSS = recipe<ReactAriaRecipe<TextFieldRenderProps>>({
    base: css({ position: "relative" }),
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
    },
});
