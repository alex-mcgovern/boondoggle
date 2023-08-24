import { Box } from "../box";
import { getDialogModalInnerStyle } from "./styles.css";

import type { BoxProps } from "../box";
import type {
  DialogModalInnerHeight,
  DialogModalInnerWidth,
} from "./styles.css";
import type { ReactNode } from "react";

type DialogModalInnerProps = {
  children: ReactNode;
  height: DialogModalInnerHeight;
  width: DialogModalInnerWidth;
} & Omit<BoxProps, "width" | "height">;

export function DialogModalInner({
  children,
  height,
  width,
  ...rest
}: DialogModalInnerProps) {
  return (
    <Box className={getDialogModalInnerStyle({ height, width })} {...rest}>
      {children}
    </Box>
  );
}
