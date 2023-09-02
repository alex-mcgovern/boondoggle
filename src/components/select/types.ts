import type {
    WithName,
    WithOptionalLabel,
    WithSize,
    WithStateDisabled,
    WithStateInvalid,
} from "../../common-types";
import type { ColorOverlay } from "../../styles/color_palette.css";
import type { BoxProps } from "../box";
import type { InputProps } from "../input";
import type { UseComboboxStateChange } from "downshift";

export type SelectItemShape = BoxProps & {
    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: [ReactNode?, ReactNode?, ReactNode?];
    /**
     * React node(s) rendered on the right-hand side.
     */
    slotRight?: [ReactNode?, ReactNode?, ReactNode?];
} & {
    colorOverlay?: ColorOverlay;
    isSelected?: boolean;
    label: string;
    value: string;
};

export type SelectCommonProps = Partial<WithOptionalLabel> &
    WithStateInvalid &
    WithSlots &
    WithSize &
    WithStateDisabled &
    WithName & {
        initialHighlightedItem?: SelectItemShape;
        inputProps?: Partial<InputProps>;
        isClearable?: boolean;
        isFilterable?: boolean;
        isOpen?: boolean;
        items: Array<SelectItemShape>;
        onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
    };
