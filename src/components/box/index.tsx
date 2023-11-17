import { createBox } from "@dessert-box/react";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

export const Box = createBox({
	atoms: utilCss,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & UtilCssArgs;
