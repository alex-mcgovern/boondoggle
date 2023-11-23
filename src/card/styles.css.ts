import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		border: "border_1",
		padding: "space_4",
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
			background: "background",
			marginBottom: "space_4",
			boxShadow: "sm",
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
					borderRight: `1px solid ${vars.color.border_1}`,
					borderBottom: `1px solid ${vars.color.border_1}`,
					borderLeft: `1px solid ${vars.color.border_1}`,
				},
			],
			false: sprinkles({
				border: "border_1",
				marginTop: "space_4",
				borderRadius: "lg",
			}),
		},
	},
});
