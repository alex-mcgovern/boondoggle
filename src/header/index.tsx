import clsx from "clsx";
import type { HTMLProps } from "react";
import { actionsCSS, headerCSS } from "./styles.css";

/**
 * Header HTML element.
 */
export function Header({
	children,
	className,
	actions,
	tabs,
	...rest
}: HTMLProps<HTMLElement> & {
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
			<header className={clsx(className, headerCSS)} {...rest}>
				{children}
				{actions && <div className={actionsCSS}>{actions}</div>}
			</header>
			{tabs && tabs}
		</>
	);
}
