import { style } from "@vanilla-extract/css";

import { baseOverridesLayer } from "../../styles/layers.css";
import { vars } from "../../styles/theme.css";

export const box = style({
  "@layer": {
    [baseOverridesLayer]: {
      color: vars.color.text_high_contrast,
    },
  },
});
