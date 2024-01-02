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
	WithOptionalIsVisibilityToggleable & {
		// ===== INPUT PROPS =====

		/**
		 * Unique name for the element.
		 * @important Should be a *snake_case* string.
		 * @important This will be used as the HTML element ID.
		 */
		name: string;

		/**
		 * The value of the input element, when controlled.
		 */
		value?: ReactAriaTextFieldProps["value"];

		/**
		 * The default value of the input element, when uncontrolled.
		 */
		defaultValue?: ReactAriaTextFieldProps["value"];

		/**
		 * Type of the input element.
		 */
		type: ReactAriaTextFieldProps["type"];

		/**
		 * CSS class name to apply to the root element.
		 */
		className?: string;

		/**
		 * Callback function to be invoked when the input value changes.
		 */
		onChange?: ReactAriaTextFieldProps["onChange"];

		/**
		 * Whether the input is disabled or not.
		 */
		isDisabled?: ReactAriaTextFieldProps["isDisabled"];

		/**
		 * Whether the input is invalid or not.
		 */
		isInvalid?: ReactAriaTextFieldProps["isInvalid"];

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
