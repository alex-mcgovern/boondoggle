import { globalStyle, style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { buttonBaseClsDoNotRemoveOrYouWillBeFired } from "../button/styles.css";

export const buttonGroupStyles = style([
    getSprinkles({ alignItems: "stretch", display: "flex" }),
    {
        borderCollapse: "collapse",
    },
]);

// Subtract 1px from the border radius to prevent double borders

globalStyle(
    `${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:not(:last-child)`,
    {
        marginRight: "-1px",
    }
);

globalStyle(
    `${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:hover,\
    ${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:[data-active='true']\
    ${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:focus\
    ${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:focus-visible`,
    {
        zIndex: 1,
    }
);

globalStyle(
    `${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:not(:last-child)`,
    {
        borderBottomRightRadius: "0 !important",
        borderTopRightRadius: "0 !important",
    }
);
globalStyle(
    `${buttonGroupStyles} > ${buttonBaseClsDoNotRemoveOrYouWillBeFired}:not(:first-child)`,
    {
        borderBottomLeftRadius: "0 !important",
        borderTopLeftRadius: "0 !important",
    }
);
