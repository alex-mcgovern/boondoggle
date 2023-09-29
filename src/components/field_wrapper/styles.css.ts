import { styleVariants } from "@vanilla-extract/css";

export const isLabelVisibleStyles = styleVariants({
    false: {
        display: "none",
    },
    true: {},
});
