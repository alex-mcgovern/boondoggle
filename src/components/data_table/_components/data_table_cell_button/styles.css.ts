import { style } from "@vanilla-extract/css";

import { SELECTOR_LINK_BUTTON_INPUT_HOVER } from "../../../../styles/common/selectors.css";
import { vars } from "../../../../styles/theme.css";
import { utilCss } from "../../../../styles/utils/util_css";

export const dataTableCellButtonStyle = style([
	utilCss({
		color: "text_high_contrast",
		fontStyle: "bodyMd",
		fontWeight: "medium",
	}),
	{
		display: "block",
		selectors: {
			[SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
				color: vars.color.button_active,
			},
		},
	},
]);

export const dataTableCellButtonInnerStyle = style([
	{
		// maxWidth: calc.subtract("100%", vars.spacing.space_6),
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
]);
