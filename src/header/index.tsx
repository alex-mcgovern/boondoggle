import type { HTMLProps } from "react";

import clsx from "clsx";

import { actionsCSS, headerCSS } from "./styles.css";

/**
 * Header HTML element.
 */
export function Header({
	actions,
	children,
	className,
	tabs,
	...rest
}: HTMLProps<HTMLElement> & {
	/**
	 * Actions to be displayed on the right side of the header.
	 */
	actions?: React.ReactNode;

	/**
	 * Main content.
	 */
	children: React.ReactNode;

	/**
	 * Tabs to be displayed underneath the header.
	 */
	tabs?: React.ReactNode;
}) {
	return (
		<>
			<header className={clsx(className, headerCSS)} {...rest}>
				{children}
				{actions && <div className={actionsCSS}>{actions}</div>}
			</header>
			{tabs && tabs}
		</>
	);
}
