import { style } from "@vanilla-extract/css";

export const labelCSS = style({
	display: "flex",
	alignItems: "center",
	gap: "space_1",

	color: "text_low_contrast",
	fontSize: "bodyMd",
	fontWeight: "normal",

	marginBottom: "space_1",
});
