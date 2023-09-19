import { style } from "@vanilla-extract/css";

import { MEDIA_QUERY_MOBILE } from "../../styles/common/media_queries.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const dialogHeaderStyle = style([
    getSprinkles({
        alignItems: "center",
        borderBottom: "border_default",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%",
        padding: "space_4",
    }),
]);

export const dialogTitleStyle = style([
    getSprinkles({
        fontWeight: "semibold",
        marginY: "none",
    }),
    {
        "@media": {
            [MEDIA_QUERY_MOBILE]: {
                fontSize: vars.fontSize.bodyLg,
            },
        },
    },
]);
