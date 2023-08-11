import { Box } from "../box";
import { dialogModalOuterStyle } from "./styles.css";

import type { ForwardedRef, ReactNode } from "react";

type DialogModalOuterProps = {
  children: ReactNode;
  dialogRef: ForwardedRef<HTMLDialogElement>;
  isOpen?: boolean;
};

export function DialogModalOuter({
  children,
  dialogRef,
  isOpen,
}: DialogModalOuterProps) {
  return (
    <Box
      as="dialog"
      className={dialogModalOuterStyle}
      open={isOpen}
      ref={dialogRef}
    >
      {children}
    </Box>
  );
}
