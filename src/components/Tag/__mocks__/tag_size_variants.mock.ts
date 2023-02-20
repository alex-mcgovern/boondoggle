import type { TagProps } from "..";

export const BUTTON_SIZE_VARIANTS_MOCK: TagProps[] = [
  // Large tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",

    variant: {
      size: "lg",
    },
    id: "tag-lg-primary",
  },

  // Medium tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "sm",
    },
    id: "tag-sm-primary",
  },

  // Small tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "md",
    },
    id: "tag-xs-primary",
  },
];
