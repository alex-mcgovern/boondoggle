import { Box } from "../box";
import {
  dialogContentOuterStyle,
  getDialogContentInnerStyle,
} from "./styles.css";

import type { ReactNode } from "react";

type DialogModalContentProps = {
  alert?: ReactNode;
  children: ReactNode;
  hasPadding?: boolean;
};

export function DialogModalContent({
  alert,
  children,
  hasPadding = true,
}: DialogModalContentProps) {
  return (
    <Box className={dialogContentOuterStyle}>
      {alert && alert}
      <Box className={getDialogContentInnerStyle({ hasPadding })}>
        {children}
      </Box>
    </Box>
  );
}
