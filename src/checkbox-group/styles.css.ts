import type { CheckboxGroupRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { RACRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const checkboxGroupCSS = recipe<RACRecipe<CheckboxGroupRenderProps>>({
    base: {},
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isReadOnly: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
    },
});
