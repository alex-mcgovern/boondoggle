import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ConditionalLabelProps } from "../../types";
import type { BoxProps } from "../box";
import type { InputProps } from "../input/input.comp";
import type { ReactNode } from "react";

export type DropdownItemShape = BoxProps & {
  label: string;
  value: string;
  slotLeft?: ReactNode;
};

export type SelectCommonProps = ConditionalLabelProps & {
  disabled?: boolean;
  errorMessage?: string;
  initialHighlightedItem?: DropdownItemShape;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  items: Array<DropdownItemShape>;
  name: string;
  size?: ElementSizeEnum;
  slotLeft?: ReactNode;
  slotRight?: ReactNode;
};
