import { style } from "@vanilla-extract/css";
import { a11yFocus } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const datePickerDialogStyle = style([
	a11yFocus,
	sprinkles({
		background: "background",
		border: "border_1",
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
