import clsx from "clsx"; import { Button } from "../button"; import * as styles from "./Tab.css"; import { ButtonProps } from "../button";

export function Tab({ className, active, children, ...rest }: ButtonProps) {
	return (
		<div className={clsx(styles.tab({ active }), className)}>
			<Button {...rest} variant="ghost">
				{children}
			</Button>
		</div>
	);
}
