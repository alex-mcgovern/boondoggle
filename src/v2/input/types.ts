import { InputProps as RACInputProps } from "react-aria-components";
import { SlotProps } from ".";

type VisibilityToggleProps = {
	/**
	 * Whether the input field value is visible or not.
	 */
	isVisible: boolean;

	/**
	 * The tooltip text to display when the button is hovered when value is hidden.
	 */
	strHide: string;

	/**
	 * The tooltip text to display when the button is hovered when value is visible.
	 */
	strShow: string;
};

type CopyButtonProps = {
	/**
	 * Text shown in a tooltip when the "copy to clipboard" button is hovered.
	 */
	strCopy: string;
	/**
	 * Text shown in a toast notification when the "copy to clipboard" button is clicked.
	 */
	strCopied: string;
};

type ClearButtonProps = {
	/**
	 * The tooltip text to display when the button is hovered.
	 */
	strClear: string;
};

export type InputProps = Omit<
	RACInputProps,
	| "children"

	// We are overriding the `value` & `defaultValue` prop to require them to be passed, even if undefined
	| "value"
	| "defaultValue"

	// We are overriding the `disabled` prop to require it to be passed, even if undefined
	| "disabled"

	// To simplify the interface, we re-use the `name` prop as the HTML element ID.
	| "id"
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

	// ===== VALUE PROPS =====

	value: RACInputProps["value"] | undefined;

	defaultValue: RACInputProps["defaultValue"] | undefined;

	// ===== STATE PROPS =====

	disabled: RACInputProps["disabled"] | undefined;

	invalid: boolean | undefined;

	// ===== LABEL PROPS =====

	/**
	 * Label text for the text field.
	 * @note This is mandatory, if you do not want to display a label, use `isLabelVisible={false}`.
	 */
	label: string;

	// ===== SLOT PROPS =====

	/**
	 * Decorative react node shown on the right hand side of the text field.
	 */
	slotRightProps?: Omit<SlotProps, "side"> & {
		isClickable: boolean;
	};
	/**
	 * Decorative react node shown on the left hand side of the text field.
	 */
	slotLeftProps?: Omit<SlotProps, "side"> & {
		isClickable: boolean;
	};

	// ===== ACTION PROPS =====

	/**
	 * Props to enable "clear value" functionality.
	 */
	clearButtonProps?: ClearButtonProps;

	/**
	 * Props to enable "copy to clipboard" functionality.
	 */
	copyButtonProps?: CopyButtonProps;

	/**
	 * Config to enable "show/hide" functionality.
	 */
	visibilityToggleProps?: VisibilityToggleProps;
};
