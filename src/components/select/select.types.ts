import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ConditionalLabelProps } from "../../types";
import type { BoxProps } from "../box";
import type { InputProps } from "../input/input.comp";
import type { ReactNode } from "react";

type DropdownItemClickable = BoxProps & {
  isSelected?: boolean;
  label: string;
  onClick?: () => void;
  slotLeft?: ReactNode;
  type: "clickable";
  value: string;
};

type DropdownItemSeparator = {
  isSelected?: never;
  label?: never;
  onClick?: never;
  slotLeft?: never;
  type: "separator";
  value?: never;
};

export type DropdownItemShape = DropdownItemClickable | DropdownItemSeparator;

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
