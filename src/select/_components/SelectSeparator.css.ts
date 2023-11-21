import { styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { elementPaddingRaw, vars } from "../../index.css";
import { sprinkles } from "../../sprinkles/index.css";

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
		sprinkles({
			marginX: "space_3",
			marginY: "space_2",
			borderBottom: "border_1",
			// width: "100%",
		}),
	],
	variants: { size: separatorSize },
});
