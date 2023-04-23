import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";

import { Box } from "../box";
import { Card } from "../card";
import { Icon } from "../icon";
import * as styles from "./tooltip.styles.css";

import type { IconProps } from "../icon";

export type TooltipProps = {
  popoverText: string;
  icon?: IconProps["icon"];
};
export function Tooltip({ popoverText, icon = faInfoCircle }: TooltipProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className={styles.popoverTrigger}>
        <Icon icon={icon} />
      </RadixPopover.Trigger>

      <RadixPopover.Content sideOffset={1} side="bottom">
        <Card maxWidth="gridSpan5" padding="spacing1">
          <Box>{popoverText}</Box>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}
