import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { utilCss, variantColorOverlay } from "../../index.css";

const size = styleVariants({
	lg: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	md: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
	sm: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
});

export const getProgressBarStyles = recipe({
	base: [
		variantColorOverlay.blue,
		utilCss({
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
		size: "md",
	},
	variants: {
		size,
	},
});

export const progressBarInnerStyles = style([
	utilCss({
		background: "tint_active",
	}),
	{
		inset: "0",
		position: "absolute",
	},
]);
