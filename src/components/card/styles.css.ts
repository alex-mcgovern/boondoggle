import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";
import { utilCss } from "../../styles/utils/util_css.css";

export const header = style([
	utilCss({
		border: "border_default",
		padding: "space_5",
		display: "flex",
		gap: "space_4",
		alignItems: "center",
		marginTop: "space_4",
	}),
	{
		borderTopLeftRadius: vars.borderRadius.lg,
		borderTopRightRadius: vars.borderRadius.lg,
	},
]);

export const card = recipe({
	base: [
		utilCss({
			marginBottom: "space_5",
		}),
	],
	variants: {
		hasPadding: {
			true: utilCss({
				padding: "space_5",
			}),
			false: [],
		},
		hasHeader: {
			true: [
				{
					borderBottomLeftRadius: vars.borderRadius.lg,
					borderBottomRightRadius: vars.borderRadius.lg,
					borderRight: `1px solid ${vars.color.border_default}`,
					borderBottom: `1px solid ${vars.color.border_default}`,
					borderLeft: `1px solid ${vars.color.border_default}`,
				},
			],
			false: utilCss({
				border: "border_default",
				marginTop: "space_5",
				borderRadius: "lg",
			}),
		},
	},
});
