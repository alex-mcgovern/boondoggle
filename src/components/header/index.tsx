import clsx from "clsx";

import { getHeaderStyles } from "./styles.css";

import type { HTMLProps } from "react";
import type { WithSize } from "../../common-types";

/**
 * Header HTML element.
 */
export function Header({
	children,
	className,
	size = "lg",
	...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
	WithSize & {
		/**
		 * Main content.
		 */
		children: React.ReactNode;
	}) {
	return (
		<header
			className={clsx(className, getHeaderStyles({ size }))}
			{...rest}
		>
			{children}
		</header>
	);
}
