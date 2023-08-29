import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getSelectItemListStyles = recipe({
  base: [
    a11yFocus,
    getSprinkles({
      background: "background",
      border: "border_default",
      borderRadius: "md",
      boxShadow: "md",
      minWidth: "100%",
      width: "max-content",
      zIndex: "1",
    }),
  ],
  variants: {
    isOpen: {
      false: { display: "none" },
      true: {},
    },
  },
});

export const selectItemListInner = style([
  getSprinkles({
    overflowY: "auto",
    padding: "space_1",
  }),
  {
    borderCollapse: "collapse",
    listStyle: "none",
    maxHeight: "15rem",
    minWidth: "10rem",
    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
]);
