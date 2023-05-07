import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as RadixTooltip from "@radix-ui/react-tooltip";

import { Icon } from "../icon";
import * as styles from "./tooltip.styles.css";

import type { ReactNode } from "react";

export type TooltipProps = {
  tooltipText: string;
  children?: ReactNode;
  side?: RadixTooltip.TooltipContentProps["side"];
} & RadixTooltip.TooltipProps;

export function Tooltip({
  tooltipText,
  children = (
    <button type="button" className={styles.tooltipTrigger}>
      <Icon icon={faInfoCircle} />
    </button>
  ),
  side = "bottom",
  delayDuration = 0,
  ...rest
}: TooltipProps) {
  return (
    <RadixTooltip.TooltipProvider>
      <RadixTooltip.Root {...rest} delayDuration={delayDuration}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Content
          sideOffset={2}
          side={side}
          className={styles.tooltipText}
        >
          {tooltipText}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
}
