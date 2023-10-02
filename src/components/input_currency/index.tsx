/* eslint-disable react-perf/jsx-no-new-function-as-prop */

/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { forwardRef, useEffect, useMemo, useState } from "react";

import { useForwardRef } from "../../hooks/use_forward_ref";
import { Input } from "../input";
import { SelectSingle } from "../select/select_single";
import { currencySelectInputStyle } from "./styles.css";
import { useFormattedCurrency } from "./use_formatted_currency";

import type {
    WithColorOverlay,
    WithDescription,
    WithHideLastpass,
    WithId,
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
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { WithOptionalFieldAddons } from "../field_addon_wrapper";
import type { SelectItemShape } from "../select/types";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";

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
    SprinklesArgs &
    WithColorOverlay &
    WithHideLastpass &
    WithId &
    WithOptionalIsClearable &
    WithOptionalIsCopyable &
    WithOptionalIsVisibilityToggleable &
    WithOptionalLabel &
    WithOptionalPlaceholder &
    WithReadOnly &
    WithSize &
    WithSlots &
    WithWrapperProps &
    WithDescription &
    WithStateInvalid &
    WithName &
    WithIsOptionalCurrencyEditable<TCurrency> &
    WithOptionalFieldAddons & {
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
export function PureInputCurrency<TCurrency extends string = string>(
    {
        currencySelectItems,
        currencySelectLabel,
        defaultValue,
        initialCurrency,
        isCurrencyEditable,
        locale,
        onChange: initOnChange,
        onCurrencyChange,
        value: controlledValue,
        ...rest
    }: InputCurrencyProps<TCurrency>,
    ref: ForwardedRef<HTMLInputElement>
) {
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const [currency, setCurrency] = useState<TCurrency>(initialCurrency);

    useEffect(() => {
        if (initialCurrency) {
            setCurrency(initialCurrency);
        }
    }, [initialCurrency]);

    const { onChange, value } = useFormattedCurrency({
        defaultValue,
        locale,
        onChange: initOnChange,
        value: controlledValue,
    });

    useEffect(() => {
        if (value.selection !== undefined) {
            inputRef?.current?.setSelectionRange(
                value.selection.start,
                value.selection.end
            );
        }
    }, [inputRef, value.selection]);

    const addonRight = useMemo(() => {
        if (isCurrencyEditable) {
            return (
                <SelectSingle<TCurrency>
                    id="currency"
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
                        setCurrency(item?.value);
                        onCurrencyChange?.(item?.value);
                    }}
                    placeholder={currency}
                />
            );
        }
        return currency;
    }, [
        currency,
        currencySelectItems,
        currencySelectLabel,
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
            ref={inputRef}
            value={value.formatted}
            {...rest}
        />
    );
}

export const InputCurrency = forwardRef(PureInputCurrency);
