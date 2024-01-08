import type { SearchFieldRenderProps } from "react-aria-components";

import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const searchFieldCSS = recipe<ReactAriaRecipe<SearchFieldRenderProps>>({
    base: [],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isEmpty: {
            false: {},
            true: {},
        },
        isInvalid: {
            false: {},
            true: [
                variantColorOverlay.red,
                css({
                    border: "focus",
                    outline: "focus",
                }),
            ],
        },
    },
});
