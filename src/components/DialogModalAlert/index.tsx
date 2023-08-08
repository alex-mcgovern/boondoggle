import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";

import { Box } from "../Box";
import { Icon } from "../Icon";
import {
  dialogModalAlertSlotLeftStyle,
  getDialogModalAlertWrapperStyles,
} from "./styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { ReactNode } from "react";

export type DialogModalAlertProps = {
  colorOverlay?: ColorOverlay;
  description: string;
  slotLeft?: ReactNode;
  title: string;
};

export function DialogModalAlert({
  colorOverlay = "amber",
  description,
  slotLeft = <Icon icon={faInfoCircle} />,
  title,
}: DialogModalAlertProps) {
  return (
    <Box className={getDialogModalAlertWrapperStyles({ colorOverlay })}>
      <Box className={dialogModalAlertSlotLeftStyle}>{slotLeft}</Box>
      <Box color="text_low_contrast">
        {title && <Box fontWeight="semibold">{title}</Box>}
        {description}
      </Box>
    </Box>
  );
}
