import {
	InputProps as ReactAriaInputProps,
	TextFieldProps as ReactAriaTextFieldProps,
} from "react-aria-components";
import { TextFieldSlotProps } from ".";
import { FieldLabelProps } from "../../v1/field-label";

/** -----------------------------------------------------------------------------
 * VISIBILITY PROPS
 * ------------------------------------------------------------------------------- */

type BaseIsVisibilityToggleable = {
	/**
	 * Whether the input field value visibility can be toggled or not.
	 */
	isVisibilityToggleable?: boolean;

	/**
	 * Whether the input field value is visible or not.
	 */
	isVisible?: boolean;

	/**
	 * The tooltip text to display when the button is hovered when value is hidden.
	 */
	strHide?: string;

	/**
	 * The tooltip text to display when the button is hovered when value is visible.
	 */
	strShow?: string;
};

type WithIsVisibilityToggleable = BaseIsVisibilityToggleable & {
	isVisibilityToggleable: true;
	isVisible?: boolean;
	strHide: string;
	strShow: string;
};

type WithoutIsVisibilityToggleable = BaseIsVisibilityToggleable & {
	isVisibilityToggleable?: never;
	isVisible?: never;
	strHide?: never;
	strShow?: never;
};

type WithOptionalIsVisibilityToggleable =
	| WithIsVisibilityToggleable
	| WithoutIsVisibilityToggleable;

/** -----------------------------------------------------------------------------
 * CLEARABLE PROPS
 * ------------------------------------------------------------------------------- */

type BaseIsClearable = {
	/**
	 * Whether the input is clearable or not.
	 */
	isClearable?: boolean;

	/**
	 * Whether the input is read-only or not.
	 */
	isReadOnly?: boolean;

	/**
	 * The tooltip text to display when the button is hovered.
	 */
	strClear?: string;
};

type IsClearable = BaseIsClearable & {
	isClearable: true;
	isReadOnly?: never;
	strClear: string;
};

type IsNotClearable = BaseIsClearable & {
	isClearable?: never;
	isReadOnly?: boolean;
	strClear?: never;
};

type WithOptionalIsClearable = IsClearable | IsNotClearable;

/** -----------------------------------------------------------------------------
 * COPYABLE PROPS
 * ------------------------------------------------------------------------------- */

type BaseIsCopyable = {
	/**
	 * Whether the input is copyable or not.
	 */
	isCopyable?: boolean;

	/**
	 * Whether the input is read-only or not.
	 */
	isReadOnly?: boolean;

	/**
	 * The tooltip text to display when the button is hovered after copying.
	 */
	strCopied?: string;

	/**
	 * The tooltip text to display when the button is hovered before copying.
	 */
	strCopy?: string;
};

type IsCopyable = BaseIsCopyable & {
	isCopyable: true;
	isReadOnly: true;
	strCopied: string;
	strCopy: string;
};

type IsNotCopyable = BaseIsCopyable & {
	isCopyable?: never;
	isReadOnly?: boolean;
	strCopied?: never;
	strCopy?: never;
};

type WithOptionalIsCopyable = IsCopyable | IsNotCopyable;

/** -----------------------------------------------------------------------------
 * PUBLIC TYPE SIGNATURE FOR TEXT FIELD
 * ------------------------------------------------------------------------------- */

export type TextFieldProps = WithOptionalIsCopyable &
	WithOptionalIsClearable &
	WithOptionalIsVisibilityToggleable &
	Omit<
		ReactAriaTextFieldProps,
		"children" | "ref" | "aria-label" | "aria-labelledby" | "isReadOnly"
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

		// ===== ADDITIONAL PROPS =====

		/**
		 * Props forwarded to the input element.
		 */
		inputProps?: Omit<
			ReactAriaInputProps,
			"isInvalid" | "name" | "defaultValue" | "value"
		>;
		/**
		 * Additional props for the text-field component
		 */
		textFieldProps?: Omit<
			ReactAriaTextFieldProps,
			| "isInvalid"
			| "className"
			| "isDisabled"
			| "name"
			| "defaultValue"
			| "value"
		>;

		// ===== SLOT PROPS =====

		/**
		 * Decorative react node shown on the right hand side of the text field.
		 */
		slotRightProps?: Omit<TextFieldSlotProps, "side"> & {
			isClickable: boolean;
		};
		/**
		 * Decorative react node shown on the left hand side of the text field.
		 */
		slotLeftProps?: Omit<TextFieldSlotProps, "side"> & {
			isClickable: boolean;
		};
	};
