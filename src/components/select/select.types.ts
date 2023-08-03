import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ConditionalLabelProps } from "../../types";
import type { BoxProps } from "../box";
import type { InputProps } from "../input/input.comp";
import type { UseComboboxStateChange } from "downshift";
import type { ReactNode } from "react";

export type DropdownItemShape = BoxProps & {
  isSelected?: boolean;
  label: string;
  slotLeft?: ReactNode;
  value: string;
};

export type SelectCommonProps = ConditionalLabelProps & {
  disabled?: boolean;
  errorMessage?: string;
  initialHighlightedItem?: DropdownItemShape;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  isOpen?: boolean;
  items: Array<DropdownItemShape>;
  name: string;
  onIsOpenChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
  size?: ElementSizeEnum;
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
};
