import * as React from "react";

import {
	HtmlHTMLAttributes,
	forwardRef,
	useEffect,
	useMemo,
	useState,
} from "react";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { Input } from "../input";
import { SelectSingle } from "../select/select-single";
import type {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithName,
	WithOptionalIsClearable,
	WithOptionalIsCopyable,
	WithOptionalIsVisibilityToggleable,
	WithOptionalLabel,
	WithOptionalPlaceholder,
	WithReadOnly,
	WithSize,
	WithSlots,
	WithStateInvalid,
} from "../types";
import { currencySelectInputStyle } from "./styles.css";
import { useFormattedCurrency } from "./use_formatted_currency";
import { useNumberFieldState } from "react-stately";
import { type AriaNumberFieldProps, useNumberField } from "react-aria";
import { WithOptionalInputAddons } from "../input/InputAddonWrapper";
import type { SelectItemShape } from "../select/types";
import { Sprinkles } from "../sprinkles/index.css";
import { useForwardRef } from "../_hooks/use-forward-ref";

type IsCurrencyEditable<TCurrency extends string = string> = {
	/**
	 * Available currencies to switch between.
	 */
	currencySelectItems: Array<SelectItemShape<TCurrency>>;
	/**
	 * Label for the currency select.
	 */
	currencySelectLabel: string;
	/**
	 * Whether the currency is editable or not.
	 */
	isCurrencyEditable: true;
	/**
	 * Callback when a new currency is selected.
	 */
	onCurrencyChange:
		| ((currency: TCurrency | undefined) => unknown)
		| ((currency: TCurrency | undefined) => Promise<unknown>);
};

type IsNotCurrencyEditable = {
	/**
	 * Available currencies to switch between.
	 */
	currencySelectItems?: never;
	/**
	 * Label for the currency select.
	 */
	currencySelectLabel?: never;
	/**
	 * Whether the currency is editable or not.
	 */
	isCurrencyEditable?: never;
	/**
	 * Callback when a new currency is selected.
	 */
	onCurrencyChange?: never;
};

type WithIsOptionalCurrencyEditable<TCurrency extends string = string> =
	| IsCurrencyEditable<TCurrency>
	| IsNotCurrencyEditable;

export type InputCurrencyProps<TCurrency extends string = string> = Partial<
	HtmlHTMLAttributes<HTMLInputElement>
> &
	WithColorOverlay &
	WithDescription &
	WithHideLastpass &
	WithIsOptionalCurrencyEditable<TCurrency> &
	WithName &
	WithOptionalInputAddons &
	WithOptionalIsClearable &
	WithOptionalIsCopyable &
	WithOptionalIsVisibilityToggleable &
	WithOptionalLabel &
	WithOptionalPlaceholder &
	WithReadOnly &
	WithSize &
	WithSlots &
	WithStateInvalid & {
		/**
		 * The bottom margin applied to the input element.
		 * @default "space_6" (1.5rem / 24px)
		 */
		marginBottom?: Sprinkles["marginBottom"];
		/**
		 * Initial value on first render.
		 */
		defaultValue?: number;
		/**
		 * Whether to render the input with a border.
		 */
		hasBorder?: boolean;
		/**
		 * The initial currency to use in formatting on first render.
		 */
		initialCurrency: TCurrency;
		/**
		 * The locale that should be used for parsing.
		 * @default 'en-US'
		 */
		locale: string;
		/**
		 * Formatting options for the value displayed in the number field.
		 * This also affects what characters are allowed to be typed by the user.
		 */
		formatOptions?: Intl.NumberFormatOptions;
		/**
		 * The value of the input.
		 */
		value?: number;
	};

interface IInputCurrency<TCurrency extends string>
	extends AriaNumberFieldProps {
	/**
	 * The locale that should be used for parsing.
	 * @default 'en-US'
	 */
	locale: string;
	/**
	 * The initial currency to use in formatting on first render.
	 */
	initialCurrency: TCurrency;
}

/**
 * A component to render a currency input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
export function InputCurrency<TCurrency extends string>(
	{ locale, initialCurrency, onChange, ...rest }: IInputCurrency<TCurrency>,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const inputRef = useForwardRef(ref);

	const state = useNumberFieldState({
		...rest,
		locale,
	});

	const { labelProps, inputProps } = useNumberField(rest, state, inputRef);

	return (
		<Input
			{...inputProps}
			// addonRight={addonRight}
			autoComplete="off"
			// data-value={value.raw}
			inputMode="decimal"
			labelProps={labelProps}
			// onChange={onChange}
			ref={inputRef}
			// selectionRange={value.selection}
			// value={value.formatted}
			// marginBottom={marginBottom}
			{...rest}
		/>
	);
}

// export const InputCurrency = forwardRef(PureInputCurrency);
