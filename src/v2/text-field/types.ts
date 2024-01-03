import { TextFieldProps as ReactAriaTextFieldProps } from "react-aria-components";
import { FieldLabelProps } from "../../v1/field-label";
import { InputProps } from "../input/types";

export type TextFieldProps = Omit<
	ReactAriaTextFieldProps,
	"children" | "ref" | "aria-label" | "aria-labelledby"
> & {
	// ===== INPUT PROPS =====

	/**
	 * Unique name for the element.
	 * @important Should be a *snake_case* string.
	 * @important This will be used as the HTML element ID.
	 */
	name: string;

	/**
	 * Additional text to display below the input.
	 */
	description?: string | null;

	// ===== VALIDATION PROPS =====

	/**
	 * Error message to display when the input is invalid.
	 */
	errorMessage?: string | null;

	/**
	 * Placeholder for the text field.
	 */
	placeholder?: string;

	// ===== LABEL PROPS =====

	/**
	 * Label text for the text field.
	 * @note This is mandatory, if you do not want to display a label, use `isLabelVisible={false}`.
	 */
	label: string;

	/**
	 * Whether the label is visible or not.
	 */
	isLabelVisible: boolean;

	/**
	 * Additional props for the label component.
	 */
	labelProps?: Omit<FieldLabelProps, "label"> | undefined;

	/**
	 * A tooltip to display on the label.
	 */
	labelTooltip?: string;

	// ===== SLOT PROPS =====

	slotRightProps?: InputProps["slotRightProps"];
	slotLeftProps?: InputProps["slotLeftProps"];

	// ===== ACTION PROPS =====

	clearButtonProps?: InputProps["clearButtonProps"];
	copyButtonProps?: InputProps["copyButtonProps"];
	visibilityToggleProps?: InputProps["visibilityToggleProps"];
};
