import type { ComponentPropsWithoutRef } from "react";

import { createBox } from "@dessert-box/react";

import type { Css } from "../css/index.css";

import { css } from "../css/index.css";

export const Box = createBox({
    atoms: css,
});

export type BoxProps = ComponentPropsWithoutRef<typeof Box> & Css;
