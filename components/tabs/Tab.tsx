import clsx from "clsx";
import { Button } from "../button/Button";
import * as styles from "./Tab.css";
import { ButtonProps } from "../button/types";

export function Tab({ className, active, children, ...rest }: ButtonProps) {
	return (
		<div className={clsx(styles.tab({ active }), className)}>
			<Button {...rest} variant="ghost">
				{children}
			</Button>
		</div>
	);
}
