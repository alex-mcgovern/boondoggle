import { createBox } from "@dessert-box/react";
import { sprinkles, type Sprinkles } from "../sprinkles/index.css";

export const Box = createBox({
	atoms: sprinkles,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & Sprinkles;
