import { globalStyle, style } from "@vanilla-extract/css";
import { inputSlotWrapperDoNotRemoveOrYouWillBeFired } from "../../input/styles.css";

export const selectInputCursorStyles = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}${selectInputCursorStyles}:read-only`,
	{
		cursor: "pointer",
	},
);
