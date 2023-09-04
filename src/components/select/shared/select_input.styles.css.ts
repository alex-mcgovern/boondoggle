import { style } from "@vanilla-extract/css";

export const selectInputCursorStyles = style({
    selectors: {
        "&:read-only": {
            cursor: "pointer",
        },
    },
});
