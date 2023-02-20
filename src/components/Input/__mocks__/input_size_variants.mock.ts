import type { InputProps } from "..";

export const INPUT_SIZE_VARIANTS_MOCK: InputProps[] = [
  {
    iconTrailing: "arrow-right",
    placeholder: "Type in me",
    id: "input-large",
    label: "Large input",
    variant: {
      size: "lg",
    },
  },
  {
    iconTrailing: "arrow-right",
    placeholder: "Type in me",
    id: "input-sm",
    label: "Small input",
    variant: {
      size: "sm",
    },
  },
  {
    iconTrailing: "arrow-right",
    placeholder: "Type in me",
    id: "input-xs",
    label: "Extra-small input",
    variant: {
      size: "md",
    },
  },
];
