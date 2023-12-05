import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

const size = styleVariants({
	lg: [
		sprinkles({
			fontStyle: "bodyMd",
		}),
	],
	md: [
		sprinkles({
			fontStyle: "bodySm",
		}),
	],
	sm: [
		sprinkles({
			fontStyle: "bodySm",
		}),
	],
});

export const progressBarCss = recipe({
	base: [
		variantColorOverlay.blue,
		sprinkles({
			alignItems: "center",
			border: "border_hover",
			borderRadius: "sm",
			color: "text_low_contrast",
			display: "flex",
			fontWeight: "medium",
			justifyContent: "center",
			minWidth: "space_12",
			overflow: "hidden",
			paddingX: "space_2",
			paddingY: "space_1",
			position: "relative",
			whiteSpace: "nowrap",
		}),
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		size,
	},
});

export const progressBarInnerCSS = style([
	sprinkles({
		background: "tint_active",
	}),
	{
		inset: "0",
		position: "absolute",
	},
]);
