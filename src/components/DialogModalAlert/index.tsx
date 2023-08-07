import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../Box";

import type { DialogModalProps } from "../DialogModal";

type DialogModalAlertProps = Pick<
  DialogModalProps,
  "alertColor" | "alertDescription" | "alertSlotLeft" | "alertTitle"
>;

export function DialogModalAlert({
  alertColor = "amber",
  alertDescription,
  alertSlotLeft,
  alertTitle,
}: DialogModalAlertProps) {
  return (
    <Box
      alignItems="center"
      background="tint_default"
      borderBottom="border_default"
      className={variantColorOverlay[alertColor]}
      display="flex"
      gap="spacing_2"
      padding="spacing_2"
    >
      <Box flexShrink="0" width="spacing_2">
        {alertSlotLeft}
      </Box>
      <Box color="text_low_contrast">
        {alertTitle && <Box fontWeight="semibold">{alertTitle}</Box>}
        {alertDescription}
      </Box>
    </Box>
  );
}
