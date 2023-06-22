import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";
import { type ReactNode, forwardRef } from "react";

import { Dialog } from "../dialog";
import { Icon } from "../icon";
import { tooltipTextStyle, tooltipTriggerStyle } from "./tooltip.styles.css";

import type { DialogPlacementEnum } from "../dialog/dialog.styles.css";

export type TooltipProps = {
  children?: ReactNode;
  placement?: DialogPlacementEnum;
  tooltipText: string;
};

export const Tooltip = forwardRef<HTMLDialogElement, TooltipProps>(
  (
    {
      tooltipText,
      placement = "top-center",
      children = (
        <button className={tooltipTriggerStyle} type="button">
          <Icon icon={faInfoCircle} />
        </button>
      ),
    },
    ref
  ) => {
    return (
      <Dialog
        className={tooltipTextStyle}
        openOn="hover"
        placement={placement}
        ref={ref}
        triggerNode={children}
      >
        {tooltipText}
      </Dialog>
    );
  }
);
