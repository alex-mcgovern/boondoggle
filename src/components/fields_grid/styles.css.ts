import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const infoFieldWrapperStyle = style([
    getSprinkles({
        display: "grid",
        gap: "space_4",
        gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
        },
    }),
    {
        selectors: {
            "&:not(:last-child)": {
                marginBottom: vars.spacing.space_4,
            },
        },
    },
]);
