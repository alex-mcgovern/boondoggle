import { faInfoCircle } from "@fortawesome/sharp-regular-svg-icons";
import { forwardRef } from "react";

import { Dialog } from "../dialog";
import { Icon } from "../icon";
import { tooltipTextStyle, tooltipTriggerStyle } from "./styles.css";

import type { DialogPlacementEnum } from "../dialog/styles.css";
import type { ReactNode } from "react";

export type TooltipProps = {
  children?: ReactNode;
  placement?: DialogPlacementEnum;
  tooltipText: string;
};

export const Tooltip = forwardRef<HTMLDialogElement, TooltipProps>(
  (
    {
      children = (
        <button className={tooltipTriggerStyle} type="button">
          <Icon icon={faInfoCircle} />
        </button>
      ),
      placement = "top-center",
      tooltipText,
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
