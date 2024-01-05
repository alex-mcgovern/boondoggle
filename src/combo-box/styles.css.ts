import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { makeTheme } from "../css-utils";
import { vars } from "../index.css";

export const comboBoxCSS = style([
	{
		selectors: {
			/**
			 * Whether the text field is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the value is invalid.
			 */
			"&[data-invalid]": {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: red,
						secondary: red,
						alpha: redA,
						isOverlay: true,
					}),
				),
			},
		},
	},
]);
