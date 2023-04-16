import type { InputProps } from "../input.comp";

export const INPUT_SIZE_VARIANTS_MOCK: InputProps[] = [
  {
    slotRight: "arrow-right",
    id: "input-large",
    label: "Large input",
    name: "Large input",
    placeholder: "Type in me",
    size: "lg",
  },
  {
    slotRight: "arrow-right",
    id: "input-sm",
    label: "Small input",
    name: "Small input",
    placeholder: "Type in me",
    size: "sm",
  },
  {
    slotRight: "arrow-right",
    id: "input-xs",
    label: "Extra-small input",
    name: "Extra-small input",
    placeholder: "Type in me",
    size: "md",
  },
];
