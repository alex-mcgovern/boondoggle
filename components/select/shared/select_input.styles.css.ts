import { globalStyle, style } from "@vanilla-extract/css";
import { v } from "../../../style.css";
import { inputSlotWrapperDoNotRemoveOrYouWillBeFired } from "../../input/styles.css";

export const selectInputCursorStyles = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only`,
	{
		background: v.color.background,
		cursor: "pointer",
	},
);

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only:hover`,
	{
		background: v.color.tint_default,
	},
);

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:is(:focus,:focus-visible)`,
	{
		borderColor: v.color.border_default,
	},
);
