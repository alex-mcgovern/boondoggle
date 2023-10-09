import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../select/select_single";

import type { WithFormFieldProps } from "../../common-types";
import type { SelectSingleProps } from "../select/select_single";
import type { SelectItemShape } from "../select/types";

type GetDefaultValueItemArgs<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
> = {
    items: Array<SelectItemShape<TValue, TItemData>>;

    value?: string | number;
};

function getDefaultValueItem<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({ items, value }: GetDefaultValueItemArgs<TValue, TItemData>) {
    return items.find((item) => {
        return item.value.toString() === value?.toString();
    });
}

export type FormSelectSingleProps<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
> = SelectSingleProps<TValue, TItemData> &
    WithFormFieldProps & {
        defaultValue?: string | number;
    };

export function FormSelectSingle<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({
    defaultValue,
    items,
    name,
    onChange: onChangeParent,
    wrapperProps = { marginBottom: "space_6" },

    ...rest
}: FormSelectSingleProps<TValue, TItemData>) {
    const { control } = useFormContext();

    const {
        field: { onChange, ref },
        fieldState: { error },
    } = useController({
        control,
        defaultValue,
        name,
    });

    const handleChange = useCallback(
        (selection: SelectItemShape<TValue, TItemData> | undefined) => {
            onChange(selection?.value);
            onChangeParent?.(selection);
        },
        [onChange, onChangeParent]
    );

    const defaultItem = getDefaultValueItem({ items, value: defaultValue });

    return (
        <SelectSingle<TValue, TItemData>
            errorMessage={error?.message}
            initialSelectedItem={defaultItem}
            invalid={!!error}
            items={items}
            name={name}
            onChange={handleChange}
            ref={ref}
            wrapperProps={wrapperProps}
            {...rest}
        />
    );
}
