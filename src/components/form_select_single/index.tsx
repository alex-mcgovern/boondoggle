import { useCallback } from "react";
import { useController } from "react-hook-form";

import { useFormContext } from "../form";
import { SelectSingle } from "../select/select_single";

import type { WithFormFieldProps } from "../../common-types";
import type { SelectSingleProps } from "../select/select_single";
import type { SelectItemShape } from "../select/types";

type GetDefaultValueItemArgs = {
    items: Array<SelectItemShape>;

    value?: string | number;
};

const getDefaultValueItem = ({ items, value }: GetDefaultValueItemArgs) => {
    return items.find((item) => {
        return item.value.toString() === value?.toString();
    });
};

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
        (selection: SelectItemShape | null | undefined) => {
            onChange(selection?.value);
            onChangeParent?.(selection);
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
