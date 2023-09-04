import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../select/t_select_single";

import type { WithFormFieldProps } from "../../common-types";
import type { SelectSingleProps } from "../select/t_select_single";
import type { SelectItemShape } from "../select/types";
import type { UseComboboxStateChange } from "downshift";

type GetDefaultValueItemArgs = {
    items: Array<SelectItemShape>;

    value?: string | number;
};

const getDefaultValueItem = ({ items, value }: GetDefaultValueItemArgs) =>
    items.find((item) => item.value.toString() === value?.toString());

export type FormSelectSingleProps = SelectSingleProps &
    WithFormFieldProps & {
        defaultValue?: string | number;
    };

export function FormSelectSingle({
    defaultValue,
    items,
    name,
    onChange: onChangeParent,
    ...rest
}: FormSelectSingleProps) {
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
        (changes: UseComboboxStateChange<SelectItemShape>) => {
            onChange(changes.selectedItem?.value);

            onChangeParent?.(changes);
        },
        [onChange, onChangeParent]
    );

    const defaultItem = getDefaultValueItem({ items, value: defaultValue });

    return (
        <SelectSingle
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
