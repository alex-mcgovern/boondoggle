import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";

import { makeTheme } from "../_css-utils";
import { vars } from "../index.css";

export const textFieldCSS = style([
    {
        selectors: {
            /**
             * Whether the search field is empty.
             */

            /**
             * Whether the search field is disabled.
             */
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },

            "&[data-empty]": {},

            /**
             * Whether the search field is invalid.
             */
            "&[data-invalid]": {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: redA,
                        isOverlay: true,
                        primary: red,
                        secondary: red,
                    }),
                ),
            },
        },
    },
]);
