import type { ComponentPropsWithoutRef } from "react";

import { createBox } from "@dessert-box/react";

import { type Sprinkles, sprinkles } from "../sprinkles/index.css";

export const Box = createBox({
    atoms: sprinkles,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & Sprinkles;
