import clsx from "clsx";

import * as styles from "./styles.css";

import type { HTMLProps } from "react";
import type { WithSize } from "../../common-types";

/**
 * Header HTML element.
 */
export function Header({
	children,
	className,
	actions,
	size = "lg",
	...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
	WithSize & {
		/**
		 * Main content.
		 */
		children: React.ReactNode;

		/**
		 * Actions to be displayed on the right side of the header.
		 */
		actions?: React.ReactNode;
	}) {
	return (
		<header
			className={clsx(className, styles.header({ size }))}
			{...rest}
		>
			{children}
			{actions && <div className={styles.actions}>{actions}</div>}
		</header>
	);
}
