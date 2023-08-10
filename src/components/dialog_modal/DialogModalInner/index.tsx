import { Box } from "../Box";
import { getDialogModalInnerStyle } from "./styles.css";

import type { BoxProps } from "../Box";
import type { DialogModalInnerWidth } from "./styles.css";
import type { ReactNode } from "react";

type DialogModalInnerProps = {
  children: ReactNode;
  width?: DialogModalInnerWidth;
} & Omit<BoxProps, "width">;

export function DialogModalInner({
  children,
  width,
  ...rest
}: DialogModalInnerProps) {
  return (
    <Box className={getDialogModalInnerStyle({ width })} {...rest}>
      {children}
    </Box>
  );
}
