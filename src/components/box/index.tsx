import { createBox } from "@dessert-box/react";

import { utilCss } from "../../styles/utils/util_css";

import type { ComponentPropsWithoutRef } from "react";
import type { UtilCssArgs } from "../../styles/utils/util_css";

/**
 * Polymorphic `Box` component that allows customisation with
 * Vanilla Extract Sprinkles API.
 *
 * - https://github.com/TheMightyPenguin/dessert-box
 * - https://vanilla-extract.style/documentation/packages/sprinkles/
 */
export const Box = createBox({
	atoms: utilCss,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & UtilCssArgs;
