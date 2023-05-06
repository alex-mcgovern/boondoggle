import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";

import { Box } from "../box";
import { Card } from "../card";
import { Icon } from "../icon";
import * as styles from "./tooltip.styles.css";

import type { ReactNode } from "react";

export type TooltipProps = {
  popoverText: string;
  children?: ReactNode;
  side: RadixPopover.PopoverContentProps["side"];
};
export function Tooltip({
  popoverText,
  children = <Icon className={styles.popoverTrigger} icon={faInfoCircle} />,
  side = "bottom",
}: TooltipProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>

      <RadixPopover.Content sideOffset={1} side={side}>
        <Card maxWidth="gridSpan5" padding="spacing0" fontSize="body_xs">
          <Box>{popoverText}</Box>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}
