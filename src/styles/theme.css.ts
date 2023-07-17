import { color, getTheme, variantColorOverlay } from "./color_palette.css";
import { rootVars } from "./vars.css";

import type { ColorOverlay } from "./color_palette.css";

const vars = {
  ...rootVars,
  color,
};

export { vars, getTheme, variantColorOverlay };
export type { ColorOverlay };
