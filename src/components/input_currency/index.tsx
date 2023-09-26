import NumberParser from "intl-number-parser";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { formatNumber } from "../../lib/format_number";
import { FieldInput } from "../input/FieldInput";
import { SelectSingle } from "../select/select_single";
import { currencySelectInputStyle } from "./styles.css";

import type { SelectItemShape } from "../../../dist";
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
import type { ChangeEvent, ComponentPropsWithoutRef, ForwardedRef } from "react";

type IsCurrencyEditable<TCurrency extends string> = {
    currencySelectItems: Array<SelectItemShape<TCurrency>>;
    isCurrencyEditable: true;
    onCurrencyChange:
        | ((currency: TCurrency | undefined) => unknown)
        | ((currency: TCurrency | undefined) => Promise<unknown>);
};

type IsNotCurrencyEditable = {
    currencySelectItems?: never;
    isCurrencyEditable?: never;
    onCurrencyChange?: never;
};

type WithIsOptionalCurrencyEditable<TCurrency extends string> =
    | IsCurrencyEditable<TCurrency>
    | IsNotCurrencyEditable;

export type InputCurrencyProps<TCurrency extends string> = Partial<
    Pick<
        ComponentPropsWithoutRef<"input">,
        | "defaultValue"
        | "value"
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
        region?: string;
    };

/**
 * A component to render a currency input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
export function InputCurrencyBase<TCurrency extends string>(
    {
        currencySelectItems,
        defaultValue,
        initialCurrency,
        isCurrencyEditable,
        onChange,
        onCurrencyChange,
        region,
        ...rest
    }: InputCurrencyProps<TCurrency>,
    ref: ForwardedRef<HTMLInputElement>
) {
    const parser = NumberParser(region, {
        currency: initialCurrency,
    });

    const [inputValue, setInputValue] = useState(
        formatNumber(parser(Number(defaultValue).toString()), {
            region,
        })
    );

    const [currency, setCurrency] = useState<TCurrency | undefined>(initialCurrency);

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(
                formatNumber(parser(e.target.value), {
                    region,
                })
            );
            onChange?.({
                ...e,
                target: {
                    ...e.target,
                    value: parser(e.target.value).toString(),
                },
            });
        },
        [onChange, parser, region]
    );

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
                    items={currencySelectItems}
                    name="change_currency"
                    onChange={(item) => {
                        setCurrency(item?.value);
                        onCurrencyChange?.(item?.value);
                    }}
                    placeholder={currency}
                />
            );
        }
        return currency;
    }, [currency, currencySelectItems, isCurrencyEditable, onCurrencyChange]);

    return (
        <FieldInput
            addonRight={addonRight}
            onChange={onChangeHandler}
            ref={ref}
            role="spinbutton"
            // slotLeft={[
            //     <Box
            //         color="text_low_contrast"
            //         fontWeight="medium"
            //     >
            //         {initialCurrency}
            //     </Box>,
            // ]}
            value={inputValue}
            {...rest}
        />
    );
}

export const InputCurrency = forwardRef(InputCurrencyBase);
