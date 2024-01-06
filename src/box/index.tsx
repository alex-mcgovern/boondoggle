import { createBox } from "@dessert-box/react";

import { type Sprinkles, sprinkles } from "../sprinkles/index.css";

export const Box = createBox({
	atoms: sprinkles,
});

export type BoxProps = React.ComponentPropsWithoutRef<typeof Box> & Sprinkles;
