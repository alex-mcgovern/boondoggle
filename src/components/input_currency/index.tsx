/* eslint-disable react-perf/jsx-no-new-function-as-prop */

/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { forwardRef, useEffect, useMemo, useState } from "react";

import { useForwardRef } from "../../hooks/use_forward_ref";
import { Input } from "../input";
import { SelectSingle } from "../select/select_single";
import { currencySelectInputStyle } from "./styles.css";

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

type GetCurrencySymbolArgs = {
    currency: string;
    locale: string;
};

const getCurrencySymbol = ({ currency, locale }: GetCurrencySymbolArgs): string => {
    const formatter = new Intl.NumberFormat(locale, {
        currency,
        style: "currency",
    });

    let symbol = "";
    formatter.formatToParts(0).forEach(({ type, value }) => {
        if (type === "currency") {
            symbol = value;
        }
    });

    return symbol;
};

export const formatter = (value: string, currencySymbol: string) => {
    const numOnly = value.match(/(\d|\.)/g)?.join("");
    const [preDecimal, postDecimal] = numOnly?.split(".") || [];
    const formattedPreDecimal = preDecimal?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${currencySymbol} ${formattedPreDecimal || ""}${postDecimal ? `.${postDecimal}` : ""}`;
};

export const parser = (value: string, currencySymbol: string) => {
    return value.replace(new RegExp(`\\${currencySymbol}\\s?|(,*)`, "g"), "");
};

type IsCurrencyEditable<TCurrency extends string> = {
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

type WithIsOptionalCurrencyEditable<TCurrency extends string> =
    | IsCurrencyEditable<TCurrency>
    | IsNotCurrencyEditable;

export type InputCurrencyProps<TCurrency extends string> = Partial<
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
        region: string;
        /**
         * The value of the input.
         */
        value?: number;
    };

/**
 * A component to render a currency input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
export function InputCurrencyBase<TCurrency extends string>(
    {
        currencySelectItems,
        currencySelectLabel,
        defaultValue,
        initialCurrency,
        isCurrencyEditable,
        onChange,
        onCurrencyChange,
        region,
        value,
        ...rest
    }: InputCurrencyProps<TCurrency>,
    ref: ForwardedRef<HTMLInputElement>
) {
    const [currency, setCurrency] = useState<TCurrency>(initialCurrency);

    useEffect(() => {
        if (initialCurrency) {
            setCurrency(initialCurrency);
        }
    }, [initialCurrency]);

    const currencySymbol = useMemo(() => {
        return getCurrencySymbol({ currency, locale: region });
    }, [currency, region]);

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = formatter(
                parser(inputRef.current.value, currencySymbol),
                currencySymbol
            );
        }
    }, [inputRef, currencySymbol]);

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
    }, [currency, currencySelectItems, currencySelectLabel, isCurrencyEditable, onCurrencyChange]);

    return (
        <Input
            addonRight={addonRight}
            autoComplete="off"
            defaultValue={
                defaultValue ? formatter(defaultValue?.toString(), currencySymbol) : undefined
            }
            onChange={(e) => {
                onChange?.({
                    ...e,
                    target: { ...e.target, value: parser(e.target.value, currencySymbol) },
                });
                e.target.value = formatter(parser(e.target.value, currencySymbol), currencySymbol);
            }}
            ref={inputRef}
            value={value ? formatter(value?.toString(), currencySymbol) : undefined}
            {...rest}
        />
    );
}

export const InputCurrency = forwardRef(InputCurrencyBase);
