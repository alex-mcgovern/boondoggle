import { createBox } from "@dessert-box/react";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";

export const Box = createBox({
	atoms: utilCss,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & UtilCssArgs;
