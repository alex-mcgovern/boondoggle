import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

const MARGIN_TOP = vars.spacing.space_3;

export const headerCSS = style([
	sprinkles({
		border: "border_rule",
		padding: "space_4",
		display: "flex",
		gap: "space_4",
		alignItems: "center",
	}),
	{
		marginTop: MARGIN_TOP,
		borderTopLeftRadius: vars.borderRadius.lg,
		borderTopRightRadius: vars.borderRadius.lg,
	},
]);

export const cardCSS = recipe({
	base: [
		sprinkles({
			marginBottom: "space_6",
		}),
	],
	variants: {
		hasPadding: {
			true: sprinkles({
				padding: "space_4",
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
			false: [
				sprinkles({
					border: "border_rule",
					borderRadius: "lg",
				}),
				{ marginTop: MARGIN_TOP },
			],
		},
	},
});
