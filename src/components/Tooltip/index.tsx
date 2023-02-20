import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import { Box } from "../Box";
import { Card } from "../Card";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";
import * as styles from "./tooltip.css";

export interface TooltipProps {
  popoverText: string;
  icon?: IconProps["icon"];
}

export function Tooltip({ popoverText, icon = faInfoCircle }: TooltipProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className={styles.popoverTrigger}>
        <Icon icon={icon} />
      </RadixPopover.Trigger>

      <RadixPopover.Content sideOffset={1} side="top">
        <Card maxWidth="gridSpan5" padding="spacing3">
          <Box>{popoverText}</Box>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}
