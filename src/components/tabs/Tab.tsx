import clsx from "clsx";
import { Button, ButtonProps } from "../button";
import { Pill } from "../pill";
import * as styles from "./Tab.css";

export function Tab({
	className,
	active,
	isTabFullWidth,
	children,
	count,
	...rest
}: ButtonProps & { count?: number; isTabFullWidth?: boolean }) {
	return (
		<div
			className={clsx(styles.tab({ active, isTabFullWidth }), className)}
		>
			<Button
				{...rest}
				slotRight={
					typeof count === "number" ? (
						<Pill colorOverlay="blue" size="sm">
							{count}
						</Pill>
					) : undefined
				}
				appearance="ghost"
			>
				{children}
			</Button>
		</div>
	);
}
