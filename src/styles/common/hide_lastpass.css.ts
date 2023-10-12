import { globalStyle, style } from "@vanilla-extract/css";

export const hideLastpassStyle = style({});

globalStyle(`${hideLastpassStyle} div[data-lastpass-icon-root]`, {
	display: "none !important",
	visibility: "hidden",
});
