import { Box } from "../box";
import { getDialogModalOuterStyle } from "./styles.css";

import type { DialogModalOuterHeight } from "./styles.css";
import type { ForwardedRef, ReactNode } from "react";

type DialogModalOuterProps = {
  children: ReactNode;
  dialogRef: ForwardedRef<HTMLDialogElement>;
  height?: DialogModalOuterHeight;
  isOpen?: boolean;
};

export function DialogModalOuter({
  children,
  dialogRef,
  height,
  isOpen,
}: DialogModalOuterProps) {
  return (
    <Box
      as="dialog"
      className={getDialogModalOuterStyle({ height })}
      open={isOpen}
      ref={dialogRef}
    >
      {children}
    </Box>
  );
}
