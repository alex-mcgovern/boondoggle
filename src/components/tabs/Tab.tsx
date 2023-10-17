import clsx from "clsx";
import { Button, ButtonProps } from "../button";
import * as styles from "./Tab.css";

export function Tab({ className, active, children, ...rest }: ButtonProps) {
	return (
		<div className={clsx(styles.tab({ active }), className)}>
			<Button {...rest} appearance="ghost">
				{children}
			</Button>
		</div>
	);
}
