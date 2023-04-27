import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./tag.styles.css";

import type { ColorOverlay } from "../../styles/theme.css";
import type { BoxProps } from "../box";
import type { ReactNode } from "react";

export type TagProps = BoxProps & {
  /** The React node shown on the left side of the button. */
  slotLeft?: ReactNode;
  /** The React node shown on the right side of the button. */
  slotRight?: ReactNode;
  /** Used as the html ID. */
  id?: string;
  /** USed to communicate semantic meaning */
  colorOverlay?: ColorOverlay;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
  /** The react node rendered in the tag. */
  children?: ReactNode;
  /** The string URI to link to. Supports relative and absolute URIs. */
  to?: string;
};

export function Tag({
  as,
  id,
  colorOverlay,
  slotLeft,
  slotRight,
  children,
  ...rest
}: TagProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  const tagStyle = clsx([
    styles.getTagStyle({ colorOverlay }),
    getSprinkles(atomProps),
    a11yFocus,
  ]);

  return (
    <Box as={as} className={tagStyle} id={id} {...otherProps}>
      <SlotWrapper
        gap="none"
        color="inherit"
        slotLeft={slotLeft}
        slotRight={slotRight}
      >
        {children}
      </SlotWrapper>
    </Box>
  );
}
