import { Box } from "../Box";
import { dialogContentInnerStyle, dialogContentOuterStyle } from "./styles.css";

import type { ReactNode } from "react";

type DialogModalContentProps = {
  alert?: ReactNode;
  children: ReactNode;
};

export function DialogModalContent({
  alert,
  children,
}: DialogModalContentProps) {
  return (
    <Box className={dialogContentOuterStyle}>
      {alert && alert}
      <Box className={dialogContentInnerStyle}>{children}</Box>
    </Box>
  );
}
