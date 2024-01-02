import {
	InputProps as ReactAriaInputProps,
	TextFieldProps as ReactAriaTextFieldProps,
} from "react-aria-components";
import { TextFieldSlotProps } from ".";
import { LabelConfig, WithOptionalIsCopyable } from "../../types";

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
 * PUBLIC TYPE SIGNATURE FOR TEXT FIELD
 * ------------------------------------------------------------------------------- */

export type TextFieldProps = WithOptionalIsCopyable &
	WithOptionalIsClearable &
	WithOptionalIsVisibilityToggleable &
	ReactAriaTextFieldProps & {
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

		// ===== LABEL PROPS =====

		/**
		 * Additional props to control the label behavior.
		 */
		labelConfig?: LabelConfig;

		// ===== ADDITIONAL PROPS =====

		/**
		 * Props forwarded to the input element.
		 */
		inputProps: Omit<
			ReactAriaInputProps,
			"isInvalid" | "name" | "defaultValue" | "value"
		>;
		/**
		 * Additional props for the text-field component
		 */
		textFieldProps: Omit<
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
