import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../index.css";

export const selectMultiInputSelectedItemsStyle = style({});

globalStyle(`${selectMultiInputSelectedItemsStyle}::placeholder`, {
	color: vars.color.text_high_contrast,
});
