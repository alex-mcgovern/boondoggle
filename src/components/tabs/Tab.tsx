import clsx from "clsx";
import { Button, ButtonProps } from "../button";
import * as styles from "./Tab.css";
import { Pill } from "../pill";

export function Tab({ className, active, children, count, ...rest }: ButtonProps & { count?: number }) {
	return (
		<div className={clsx(styles.tab({ active }), className)}>
			<Button {...rest}
				slotRight={count ? <Pill
					colorOverlay="blue"
					size="sm">{count}</Pill> : undefined}
				appearance="ghost">
				{children}
			</Button>
		</div>
	);
}
