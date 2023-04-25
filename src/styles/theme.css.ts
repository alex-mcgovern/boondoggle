import { color, getTheme, variantIntent } from "./color_palette.css";
import { rootVars } from "./vars.css";

import type { Intent } from "./color_palette.css";

const vars = {
  ...rootVars,
  color,
};

export { vars, getTheme, variantIntent };
export type { Intent };
