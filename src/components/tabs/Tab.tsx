import clsx from "clsx";
import { Button, ButtonProps } from "../button";
import { Pill } from "../pill";
import * as styles from "./Tab.css";

export function Tab({
	className,
	active,
	children,
	count,
	...rest
}: ButtonProps & { count?: number }) {
	return (
		<div className={clsx(styles.tab({ active }), className)}>
			<Button
				{...rest}
				slotRight={
					count ? (
						<Pill colorOverlay="blue" size="sm">
							{count}
						</Pill>
					) : undefined
				}
				appearance="link"
			>
				{children}
			</Button>
		</div>
	);
}
