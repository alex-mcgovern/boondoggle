import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../select/select_single";

import type { WithFormFieldProps } from "../../common-types";
import type { SelectSingleProps } from "../select/select_single";
import type { SelectItemShape } from "../select/types";

type GetDefaultValueItemArgs<TValue = string> = {
    items: Array<SelectItemShape<TValue>>;

    value?: string | number;
};

function getDefaultValueItem<TValue = string>({
    items,
    value,
}: GetDefaultValueItemArgs<TValue>) {
    return items.find((item) => {
        return item.value.toString() === value?.toString();
    });
}

export type FormSelectSingleProps<TValue = string> = SelectSingleProps<TValue> &
    WithFormFieldProps & {
        defaultValue?: string | number;
    };

export function FormSelectSingle<TValue = string>({
    defaultValue,
    items,
    name,
    onChange: onChangeParent,
    ...rest
}: FormSelectSingleProps<TValue>) {
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
        (selection: SelectItemShape<TValue> | undefined) => {
            onChange(selection?.value);
            onChangeParent?.(selection);
        },
        [onChange, onChangeParent]
    );

    const defaultItem = getDefaultValueItem({ items, value: defaultValue });

    return (
        <SelectSingle<TValue>
            errorMessage={error?.message}
            initialSelectedItem={defaultItem}
            invalid={!!error}
            items={items}
            name={name}
            onChange={handleChange}
            ref={ref}
            {...rest}
        />
    );
}
