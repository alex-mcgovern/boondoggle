import { faInfoCircle } from "@fortawesome/sharp-regular-svg-icons";
import { Children } from "react";

import { Box } from "../box";
import { Icon } from "../icon";
import {
  dialogModalAlertSlotStyle,
  getDialogModalAlertWrapperStyles,
} from "./styles.css";

import type { WithSlots } from "../../common-types";
import type { ColorOverlay } from "../../styles/color_palette.css";

export type DialogModalAlertProps = WithSlots & {
  colorOverlay?: ColorOverlay;
  description: string;
  title: string;
};

export function DialogModalAlert({
  colorOverlay = "amber",
  description,
  slotLeft = [<Icon icon={faInfoCircle} />],
  slotRight,
  title,
}: DialogModalAlertProps) {
  return (
    <Box className={getDialogModalAlertWrapperStyles({ colorOverlay })}>
      {slotLeft && (
        <Box className={dialogModalAlertSlotStyle}>
          {Children.map(slotLeft, (child) => {
            return child;
          })}
        </Box>
      )}

      <Box color="text_low_contrast">
        {title && <Box fontWeight="semibold">{title}</Box>}
        {description}
      </Box>

      {slotLeft && (
        <Box className={dialogModalAlertSlotStyle}>
          {Children.map(slotRight, (child) => {
            return child;
          })}
        </Box>
      )}
    </Box>
  );
}
