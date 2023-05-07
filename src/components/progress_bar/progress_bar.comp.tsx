import { Box } from "../box";
import * as styles from "./progress_bar.styles.css";

import type { BoxProps } from "../box";

export type ProgressBarProps = {
  /** A number within the range 0-100 */
  value: number;
  /** Whether the value will be render with the component */
  isValueVisible?: boolean;
  /** Size of the progress bar. Consistent with the `Tag` component */
  size: styles.ProgressBarSizeEnum;
} & BoxProps;

export function ProgressBar({
  value,
  isValueVisible,
  size,
  ...rest
}: ProgressBarProps) {
  if (typeof value !== "number" || typeof value !== "string") {
    console.error("[ProgressBar] invalid value");
  }

  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  const clampedValue = Math.min(100, Math.max(0, parsedValue));

  return (
    <Box className={styles.getProgressBarStyles({ size })} {...rest}>
      {isValueVisible && <Box zIndex="1">{value} %</Box>}
      <Box
        className={styles.progressBarInnerStyles}
        background="tint_active"
        style={{ width: `${clampedValue}%` }}
      />
    </Box>
  );
}
