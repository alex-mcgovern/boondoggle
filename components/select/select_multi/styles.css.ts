import { globalStyle, style } from "@vanilla-extract/css";
import { v } from "../../../style.css";

export const selectMultiInputSelectedItemsStyle = style({});

globalStyle(`${selectMultiInputSelectedItemsStyle}::placeholder`, {
	color: v.color.text_high_contrast,
});
