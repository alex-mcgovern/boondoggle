import { globalStyle, style } from "@vanilla-extract/css";

import { utilCss } from "../../styles/utils/util_css.css";
import { pillBaseStyle } from "../pill/styles.css";

export const pillGroupStyles = style([
	utilCss({ alignItems: "stretch", display: "flex" }),
	{
		borderCollapse: "collapse",
	},
]);

// Subtract 1px from the border radius to prevent double borders

globalStyle(`${pillGroupStyles} > ${pillBaseStyle}:not(:last-child)`, {
	marginRight: "-1px",
});

globalStyle(
	`${pillGroupStyles} > ${pillBaseStyle}:hover,\
    ${pillGroupStyles} > ${pillBaseStyle}:is(:active, [data-active='true'])\
    ${pillGroupStyles} > ${pillBaseStyle}:focus\
    ${pillGroupStyles} > ${pillBaseStyle}:focus-visible`,
	{
		zIndex: 1,
	},
);

globalStyle(`${pillGroupStyles} > ${pillBaseStyle}:not(:last-child)`, {
	borderBottomRightRadius: "0 !important",
	borderTopRightRadius: "0 !important",
});
globalStyle(`${pillGroupStyles} > ${pillBaseStyle}:not(:first-child)`, {
	borderBottomLeftRadius: "0 !important",
	borderTopLeftRadius: "0 !important",
});
