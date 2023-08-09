import type {
  WithDisabledState,
  WithOptionalLabel,
  WithSize,
  WithSlots,
  WithStateInvalid,
} from "../../types";
import type { BoxProps } from "../Box";
import type { InputProps } from "../Input";
import type { UseComboboxStateChange } from "downshift";

export type SelectItemShape = BoxProps &
  WithSlots & {
    isSelected?: boolean;
    label: string;
    value: string;
  };

export type SelectCommonProps = WithOptionalLabel &
  WithStateInvalid &
  WithSlots &
  WithSize &
  WithDisabledState & {
    initialHighlightedItem?: SelectItemShape;
    inputProps?: Partial<InputProps>;
    isClearable?: boolean;
    isFilterable?: boolean;
    isOpen?: boolean;
    items: Array<SelectItemShape>;
    name: string;
    onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
  };
