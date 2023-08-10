import type {
  WithName,
  WithOptionalLabel,
  WithSize,
  WithSlots,
  WithStateDisabled,
  WithStateInvalid,
} from "../../types";
import type { BoxProps } from "../Box";
import type { InputProps } from "../InputComp";
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
