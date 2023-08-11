import { Box } from "../Box";

import type { WithSlots } from "../../types";

export type DialogInfoBulletProps = WithSlots & {
  text?: string;
  title?: string;
};

export function DialogInfoBullet({
  slotLeft,
  slotRight,
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
      {slotLeft && (
        <Box flexShrink="0" width="spacing_2">
          {slotLeft}
        </Box>
      )}
      <Box>
        <Box fontWeight="semibold">{title}</Box>
        <Box>{text}</Box>
      </Box>
      {slotRight && (
        <Box flexShrink="0" width="spacing_2">
          {slotRight}
        </Box>
      )}
    </Box>
  );
}
