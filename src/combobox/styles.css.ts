import { assignVars, style } from "@vanilla-extract/css";
import { vars } from "../index.css";
import { makeTheme } from "../css-utils";
import { red, redA } from "@radix-ui/colors";

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
