import clsx from "clsx";
import type { HTMLProps } from "react";
import type { WithSize } from "../types";
import { actionsCSS, headerCSS, innerCSS } from "./styles.css";

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
			<header className={clsx(className, headerCSS({ size }))} {...rest}>
				{/* <div className={innerCSS}> */}
					{children}
					{actions && <div className={actionsCSS}>{actions}</div>}
				{/* </div> */}
			</header>
			{tabs && tabs}
		</>
	);
}
