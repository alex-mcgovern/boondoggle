import { createBox } from "@dessert-box/react";
import { type UtilCssArgs, utilCss } from "../index.css";

export const Box = createBox({
	atoms: utilCss,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & UtilCssArgs;
