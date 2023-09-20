import type {
    WithColorOverlay,
    WithName,
    WithOptionalLabel,
    WithSize,
    WithSlots,
    WithStateDisabled,
    WithStateInvalid,
} from "../../common-types";
import type { BoxProps } from "../box";
import type { InputProps } from "../input";
import type { UseComboboxStateChange } from "downshift";

export type SelectItemShape<TValue extends string = string> = BoxProps &
    WithSlots &
    WithColorOverlay & {
        /**
         * Whether the item is currently selected.
         */
        isSelected?: boolean;

        /**
         * The human-readable label for the item.
         */
        label: string;

        /**
         * The "code" value for the item.
         */
        value: TValue;
    };

export type SelectCommonProps<TValue extends string = string> = Partial<WithOptionalLabel> &
    WithStateInvalid &
    WithSlots &
    WithSize &
    WithStateDisabled &
    WithName & {
        initialHighlightedItem?: SelectItemShape<TValue>;

        inputProps?: Partial<InputProps>;

        isClearable?: boolean;

        isFilterable?: boolean;

        isOpen?: boolean;

        items: Array<SelectItemShape<TValue>>;

        onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape<TValue>>) => void;
    };
