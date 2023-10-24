import { style } from "@vanilla-extract/css";
import { css } from "../../src/styles/utils/util_css.css";
import { focus } from "../../style.css";

export const datePickerDialogStyle = style([
	focus,
	css({
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
