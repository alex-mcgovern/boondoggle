import clsx from "clsx";

import { Box } from "../box";
import * as styles from "./progress_bar.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../box";

export type ProgressBarProps = {
  /** Whether the value will be render with the component */
  isValueVisible?: boolean;
  /** Size of the progress bar. Consistent with the `Tag` component */
  size?: ElementSizeEnum;
  /** A number within the range 0-100 */
  value: number;
} & BoxProps;

export function ProgressBar({
  className: userClassName,
  isValueVisible,
  size,
  value,
  ...rest
}: ProgressBarProps) {
  if (typeof value !== "number" && typeof value !== "string") {
    console.error("[ProgressBar] invalid value");
  }

  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  const clampedValue = Math.min(100, Math.max(0, parsedValue));

  return (
    <Box
      className={clsx(userClassName, styles.getProgressBarStyles({ size }))}
      {...rest}
    >
      {isValueVisible && <Box zIndex="1">{value} %</Box>}
      <Box
        background="tint_active"
        className={styles.progressBarInnerStyles}
        style={{ width: `${clampedValue}%` }}
      />
    </Box>
  );
}
