import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";

import { Dialog } from "../dialog";
import { Icon } from "../icon";
import { tooltipTextStyle, tooltipTriggerStyle } from "./tooltip.styles.css";

import type { DialogPlacementEnum } from "../dialog/dialog.styles.css";
import type { ReactNode } from "react";

export type TooltipProps = {
  children?: ReactNode;
  placement?: DialogPlacementEnum;
  tooltipText: string;
};

export function Tooltip({
  tooltipText,
  placement = "top-center",
  children = (
    <button className={tooltipTriggerStyle} type="button">
      <Icon icon={faInfoCircle} />
    </button>
  ),
}: TooltipProps) {
  return (
    <Dialog
      className={tooltipTextStyle}
      openOn="hover"
      placement={placement}
      triggerNode={children}
    >
      {tooltipText}
    </Dialog>
  );
}
