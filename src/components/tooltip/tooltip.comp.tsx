import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";
import * as RadixTooltip from "@radix-ui/react-tooltip/dist/index";

import { Icon } from "../icon";
import * as styles from "./tooltip.styles.css";

import type { ReactNode } from "react";

export type TooltipProps = {
  children?: ReactNode;
  side?: RadixTooltip.TooltipContentProps["side"];
  tooltipText: string;
} & RadixTooltip.TooltipProps;

export function Tooltip({
  tooltipText,
  children = (
    <button className={styles.tooltipTrigger} type="button">
      <Icon icon={faInfoCircle} size="sm" />
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
          className={styles.tooltipText}
          side={side}
          sideOffset={2}
        >
          {tooltipText}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
}
