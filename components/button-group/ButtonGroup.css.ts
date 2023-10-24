import { globalStyle, style } from "@vanilla-extract/css";

import { css } from "../../src/styles/utils/util_css.css";
import { btn } from "../button/Button.css";

export const buttonGroupStyles = style([
	css({ alignItems: "stretch", display: "flex" }),
	{
		borderCollapse: "collapse",
	},
]);

// Subtract 1px from the border radius to prevent double borders

globalStyle(`${buttonGroupStyles} > ${btn}:not(:last-child)`, {
	marginRight: "-1px",
});

globalStyle(
	`${buttonGroupStyles} > ${btn}:hover,\
    ${buttonGroupStyles} > ${btn}:is(:active, [data-active='true'])\
    ${buttonGroupStyles} > ${btn}:focus\
    ${buttonGroupStyles} > ${btn}:focus-visible`,
	{
		zIndex: 1,
	},
);

globalStyle(`${buttonGroupStyles} > ${btn}:not(:last-child)`, {
	borderBottomRightRadius: "0 !important",
	borderTopRightRadius: "0 !important",
});
globalStyle(`${buttonGroupStyles} > ${btn}:not(:first-child)`, {
	borderBottomLeftRadius: "0 !important",
	borderTopLeftRadius: "0 !important",
});
