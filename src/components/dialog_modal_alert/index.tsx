import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";

import { Box } from "../box";
import { Icon } from "../icon";
import {
  dialogModalAlertSlotStyle,
  getDialogModalAlertWrapperStyles,
} from "./styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { WithSlots } from "../../types";

export type DialogModalAlertProps = WithSlots & {
  colorOverlay?: ColorOverlay;
  description: string;
  title: string;
};

export function DialogModalAlert({
  colorOverlay = "amber",
  description,
  slotLeft = <Icon icon={faInfoCircle} />,
  slotRight,
  title,
}: DialogModalAlertProps) {
  return (
    <Box className={getDialogModalAlertWrapperStyles({ colorOverlay })}>
      {slotLeft && <Box className={dialogModalAlertSlotStyle}>{slotLeft}</Box>}

      <Box color="text_low_contrast">
        {title && <Box fontWeight="semibold">{title}</Box>}
        {description}
      </Box>

      {slotRight && (
        <Box className={dialogModalAlertSlotStyle}>{slotRight}</Box>
      )}
    </Box>
  );
}
