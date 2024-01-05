import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const avatarCSS = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			background: "button_tint",
			color: "button_default",
			display: "flex",
			flexShrink: "0",
			fontWeight: "medium",
			justifyContent: "center",
			overflow: "hidden",
		}),
		{
			fontSize: `max(${vars.fontSize.bodySm}, 100%)`,
		},
	],
	variants: {
		appearance: {
			circle: [sprinkles({ borderRadius: "50%" })],
			square: [sprinkles({ borderRadius: "md" })],
		},
	},
});
