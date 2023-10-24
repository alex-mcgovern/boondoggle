import { styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { elementPaddingRaw } from "../../src/styles/common/element_size.css";
import { v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

const separatorSize = styleVariants({
	lg: [
		{
			margin: `${v.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.lg.x,
				v.spacing.space_1,
			)}`,
		},
	],
	md: [
		{
			margin: `${v.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.md.x,
				v.spacing.space_1,
			)}`,
		},
	],
	sm: [
		{
			margin: `${v.spacing.space_2} ${calc.subtract(
				elementPaddingRaw.sm.x,
				v.spacing.space_1,
			)}`,
		},
	],
});

export const getSeparatorStyle = recipe({
	base: [
		css({
			marginX: "space_3",
			marginY: "space_2",
			borderBottom: "border_default",
			// width: "100%",
		}),
	],
	variants: { size: separatorSize },
});
