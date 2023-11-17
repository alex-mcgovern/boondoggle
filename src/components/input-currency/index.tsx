"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";

import { Input } from "../input";
import { SelectSingle } from "../select/select-single";
import { currencySelectInputStyle } from "./styles.css";
import { useFormattedCurrency } from "./use_formatted_currency";

import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
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
} from "../../common-types";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

import { WithOptionalInputAddons } from "../input/InputAddonWrapper";
import type { SelectItemShape } from "../select/types";

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
	Pick<
		ComponentPropsWithoutRef<"input">,
		| "onChange"
		| "onClick"
		| "onFocus"
		| "onMouseOver"
		| "onMouseLeave"
		| "className"
		| "autoComplete"
		| "type"
		| "onBlur"
		| "disabled"
	>
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
		marginBottom?: UtilCssArgs["marginBottom"];
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
		 * The locale to use in formatting.
		 */
		locale: string;
		/**
		 * The value of the input.
		 */
		value?: number;
	};

/**
 * A component to render a currency input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
function PureInputCurrency<TCurrency extends string = string>(
	{
		currencySelectItems,
		currencySelectLabel,
		defaultValue,
		initialCurrency,
		marginBottom,
		isCurrencyEditable,
		locale,
		onChange: initOnChange,
		onCurrencyChange,
		value: controlledValue,
		...rest
	}: InputCurrencyProps<TCurrency>,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const [currency, setCurrency] = useState<TCurrency>(initialCurrency);

	useEffect(() => {
		if (initialCurrency && currency !== initialCurrency) {
			setCurrency(initialCurrency);
		}
	}, [currency, initialCurrency]);

	const { onChange, value } = useFormattedCurrency({
		defaultValue,
		locale,
		onChange: initOnChange,
		value: controlledValue,
	});

	const addonRight = useMemo(() => {
		if (isCurrencyEditable) {
			return (
				<SelectSingle<TCurrency>
					initialSelectedItem={currencySelectItems.find((item) => {
						return item.value === currency;
					})}
					inputProps={{
						className: currencySelectInputStyle,
					}}
					isLabelVisible={false}
					items={currencySelectItems}
					label={currencySelectLabel}
					name="currency"
					onChange={(item) => {
						setCurrency(item?.value || initialCurrency);
						onCurrencyChange?.(item?.value);
					}}
					placeholder={currency}
					marginBottom="none"
				/>
			);
		}
		return currency;
	}, [
		currency,
		currencySelectItems,
		currencySelectLabel,
		initialCurrency,
		isCurrencyEditable,
		onCurrencyChange,
	]);

	return (
		<Input
			addonRight={addonRight}
			autoComplete="off"
			data-value={value.raw}
			inputMode="decimal"
			onChange={onChange}
			ref={ref}
			selectionRange={value.selection}
			value={value.formatted}
			marginBottom={marginBottom}
			{...rest}
		/>
	);
}

export const InputCurrency = forwardRef(PureInputCurrency);
