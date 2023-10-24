import { createBox } from "@dessert-box/react";

import { css } from "../../src/styles/utils/util_css.css";

import type { ComponentPropsWithoutRef } from "react";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";

/**
 * Polymorphic `Box` component that allows customisation with
 * Vanilla Extract Sprinkles API.
 *
 * - https://github.com/TheMightyPenguin/dessert-box
 * - https://vanilla-extract.style/documentation/packages/sprinkles/
 *
 * @deprecated Use a regular HTML element instead.
 */
export const Box = createBox({
	atoms: css,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & UtilCssArgs;
