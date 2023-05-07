import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";

export type ProgressBarProps = {
  /** A number within the range 0-100 */
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  if (typeof value !== "number" || typeof value !== "string") {
    console.error("[ProgressBar] invalid value");
  }

  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  const clampedValue = Math.min(100, Math.max(0, parsedValue));

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      border="border_active"
      className={variantColorOverlay.blue}
      height="spacing2"
      display="flex"
      alignItems="stretch"
    >
      <Box background="tint_active" style={{ width: `${clampedValue}%` }} />
    </Box>
  );
}
