import type { DropdownItemShape } from "../select.types";

export const mockSelectItems = (): Array<DropdownItemShape> => {
  return [
    { label: "United Kingdom", value: "uk" },
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" },
    { label: "Spain", value: "es" },
    { label: "Italy", value: "it" },
    { label: "Portugal", value: "pt" },
  ];
};
