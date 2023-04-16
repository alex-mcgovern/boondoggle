import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { InputProps } from "../input/input.comp";
import type { ReactNode } from "react";

export interface DropdownItemShape {
  label: string;
  value: string;
}

export interface SelectCommonProps {
  disabled?: boolean;
  errorMessage?: string;
  id: string;
  initialHighlightedItem?: DropdownItemShape;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  items: Array<DropdownItemShape>;
  label?: string;
  name: string;
  size?: ElementSizeEnum;
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
}
