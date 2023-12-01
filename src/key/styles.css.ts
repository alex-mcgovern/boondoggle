import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";
import { vars } from "../index.css";
import { blackA, slateA } from "@radix-ui/colors";

export const keyCSS = style([
	sprinkles({
		display: "inline-flex",
		placeItems: "center",
		flexShrink: "0",
		fontWeight: "medium",
		whiteSpace: "nowrap",
		fontStyle: "bodySm",
		paddingY: "space_0.5",
		paddingX: "space_1",
		border: "border_2",
		borderRadius: "sm",
		color: "text_high_contrast",
		background: "tint_3",
	}),
	{
		fontSize: "10px",
		lineHeight: "1",
		verticalAlign: "text-top",
		userSelect: "none",
		cursor: "default",
		position: "relative",
		top: "-0.03em",

		// minWidth: "1.75rem",
		wordSpacing: "-0.1em",

		boxShadow: `inset 0px 1px 2px ${vars.color.tint_1}`,
	},
]);
