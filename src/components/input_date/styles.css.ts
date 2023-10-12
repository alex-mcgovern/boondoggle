import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const datePickerDialogStyle = style([
	a11yFocus,
	getSprinkles({
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
