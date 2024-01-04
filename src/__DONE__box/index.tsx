import { createBox } from "@dessert-box/react";
import { sprinkles, type Sprinkles } from "../__DONE__sprinkles/index.css";

export const Box = createBox({
	atoms: sprinkles,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & Sprinkles;
