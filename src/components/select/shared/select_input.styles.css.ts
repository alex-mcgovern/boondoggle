import { globalStyle, style } from "@vanilla-extract/css";
import { inputSlotWrapperDoNotRemoveOrYouWillBeFired } from "../../input/styles.css";
import { vars } from "../../../index.css";

export const selectInputCursorStyles = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only`,
	{
		background: vars.color.background,
		cursor: "pointer",
	},
);

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only:hover`,
	{
		background: vars.color.tint_default,
	},
);

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:is(:focus,:focus-visible)`,
	{
		borderColor: vars.color.border_default,
	},
);
