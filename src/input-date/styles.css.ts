import { style } from "@vanilla-extract/css";
import { a11yFocus, utilCss } from "../index.css";

export const datePickerDialogStyle = style([
	a11yFocus,
	utilCss({
		background: "background",
		border: "border_default",
		borderRadius: "md",
		boxShadow: "md",
		marginTop: "space_2",
		width: "auto",
	}),
	{
		pointerEvents: "all",
	},
]);

export const inputDateStyle = style({
	selectors: {
		"&:hover": {
			cursor: "pointer",
		},
	},
	textAlign: "left",
});
