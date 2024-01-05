import { assignVars, style } from "@vanilla-extract/css";
import { vars } from "../index.css";
import { makeTheme } from "../css-utils";
import { red, redA } from "@radix-ui/colors";

export const textFieldCSS = style([
	{
		selectors: {
			/**
			 * Whether the search field is empty.
			 */

			"&[data-empty]": {},

			/**
			 * Whether the search field is disabled.
			 */
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			/**
			 * Whether the search field is invalid.
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
