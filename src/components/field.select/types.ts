import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ConditionalLabelProps } from "../../types";
import type { BoxProps } from "../core.box";
import type { InputProps } from "../input";
import type { UseComboboxStateChange } from "downshift";
import type { ReactNode } from "react";

export type SelectItemShape = BoxProps & {
  isSelected?: boolean;
  label: string;
  slotLeft?: ReactNode;
  value: string;
};

export type SelectCommonProps = ConditionalLabelProps & {
  disabled?: boolean;
  errorMessage?: string;
  initialHighlightedItem?: SelectItemShape;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isClearable?: boolean;
  isFilterable?: boolean;
  isOpen?: boolean;
  items: Array<SelectItemShape>;
  name: string;
  onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
  size?: ElementSizeEnum;
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
};
