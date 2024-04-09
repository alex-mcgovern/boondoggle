import type { ComponentPropsWithoutRef } from "react";

import { createBox } from "@dessert-box/react";

import type { Css } from "../css/index.css";

import { css } from "../css/index.css";

/**
 * A box is a layout primitive that can be used to create spacing, alignment, and more.
 * @deprecated Use the `css` function instead.
 */
export const Box = createBox({
    atoms: css,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & Css;
