import { styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { elementPaddingRaw } from "../../index.css";
import { vars } from "../../index.css";
import { utilCss } from "../../index.css";

const separatorSize = styleVariants({
	lg: [
		{
			margin: `${vars.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.lg.x,
				vars.spacing.space_1,
			)}`,
		},
	],
	md: [
		{
			margin: `${vars.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.md.x,
				vars.spacing.space_1,
			)}`,
		},
	],
	sm: [
		{
			margin: `${vars.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.sm.x,
				vars.spacing.space_1,
			)}`,
		},
	],
});

export const getSeparatorStyle = recipe({
	base: [
		utilCss({
			marginX: "space_3",
			marginY: "space_2",
			borderBottom: "border_default",
			// width: "100%",
		}),
	],
	variants: { size: separatorSize },
});
