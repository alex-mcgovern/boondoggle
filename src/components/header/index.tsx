import clsx from "clsx";
import type { HTMLProps } from "react";
import type { WithSize } from "../../common-types";
import * as styles from "./styles.css";

/**
 * Header HTML element.
 */
export function Header({
	children,
	className,
	actions,
	size = "lg",
	tabs,
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

		/**
		 * Tabs to be displayed underneath the header.
		 */
		tabs?: React.ReactNode;
	}) {
	return (
		<>
			<header
				className={clsx(className, styles.header({ size }))}
				{...rest}
			>
				<div className={styles.inner({ hasTabs: !!tabs })}>
					{children}
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
			</header>
			{tabs && tabs}
		</>
	);
}
