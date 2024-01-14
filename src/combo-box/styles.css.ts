import type { ComboBoxRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const comboBoxCSS = recipe<ReactAriaRecipe<ComboBoxRenderProps>>({
    base: [],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isOpen: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
    },
});
