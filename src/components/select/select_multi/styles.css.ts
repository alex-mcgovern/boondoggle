import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "../../../styles/theme.css";

export const selectMultiInputSelectedItemsStyle = style({});

globalStyle(`${selectMultiInputSelectedItemsStyle}::placeholder`, {
    color: vars.color.text_high_contrast,
});
