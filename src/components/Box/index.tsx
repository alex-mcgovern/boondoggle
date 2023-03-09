import type { ComponentPropsWithoutRef } from "react";
import { createBox } from "@dessert-box/react";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/**
 * Polymorphic `Box` component that allows customisation with
 * Vanilla Extract Sprinkles API.
 *
 * - https://github.com/TheMightyPenguin/dessert-box
 * - https://vanilla-extract.style/documentation/packages/sprinkles/
 */
export const Box = createBox({
  atoms: getSprinkles,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & SprinklesArgs;
