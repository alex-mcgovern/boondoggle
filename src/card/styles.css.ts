import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		border: "border_rule",
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

export const cardCSS = recipe({
	base: [
		sprinkles({
			marginBottom: "space_5",
		}),
	],
	variants: {
		hasPadding: {
			true: sprinkles({
				padding: "space_5",
			}),
			false: [],
		},
		hasHeader: {
			true: [
				{
					borderBottomLeftRadius: vars.borderRadius.lg,
					borderBottomRightRadius: vars.borderRadius.lg,
					borderRight: `1px solid ${vars.color.border_rule}`,
					borderBottom: `1px solid ${vars.color.border_rule}`,
					borderLeft: `1px solid ${vars.color.border_rule}`,
				},
			],
			false: sprinkles({
				border: "border_rule",
				marginTop: "space_5",
				borderRadius: "lg",
			}),
		},
	},
});
