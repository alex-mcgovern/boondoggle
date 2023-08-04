import { Box } from "../core.box";

import type { ReactNode } from "react";

export type DialogInfoBulletProps = {
  slotLeft: ReactNode;
  text?: string;
  title?: string;
};

export function DialogInfoBullet({
  slotLeft,
  text,
  title,
}: DialogInfoBulletProps) {
  return (
    <Box
      alignItems="center"
      display="flex"
      gap="spacing_2"
      marginBottom="spacing_2"
    >
      <Box flexShrink="0" width="spacing_2">
        {slotLeft}
      </Box>
      <Box>
        <Box fontWeight="semibold">{title}</Box>
        <Box>{text}</Box>
      </Box>
    </Box>
  );
}
