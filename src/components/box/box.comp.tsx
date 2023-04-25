import { createBox } from "@dessert-box/react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Polymorphic `Box` component that allows customisation with
 * Vanilla Extract Sprinkles API.
 *
 * - https://github.com/TheMightyPenguin/dessert-box
 * - https://vanilla-extract.style/documentation/packages/sprinkles/
 */
export const Box = createBox({
  atoms: getSprinkles,
  // defaultClassName: box,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & SprinklesArgs;
