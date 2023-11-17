import clsx from "clsx";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { WithSize } from "../types";
import * as styles from "./styles.css";

export type ProgressBarProps = WithSize & {
	/**
	 * Whether the value will be render with the component
	 */
	isVisible?: boolean;

	/**
	 * A number within the range 0-100
	 */
	value: number;
} & BoxProps;

export function ProgressBar({
	className: userClassName,
	isVisible,
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
			className={clsx(
				userClassName,
				styles.getProgressBarStyles({ size }),
			)}
			{...rest}
		>
			{isVisible && <Box zIndex="1">{value} %</Box>}
			<Box
				background="tint_active"
				className={styles.progressBarInnerStyles}
				style={{ width: `${clampedValue}%` }}
			/>
		</Box>
	);
}
