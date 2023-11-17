import clsx from "clsx";

import { getMainStyles } from "./styles.css";

import type { HTMLProps } from "react";
import type { WithSize } from "../../types";

/**
 * Main HTML element.
 */
export function Main({
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
		<main className={clsx(className, getMainStyles({ size }))} {...rest}>
			{children}
		</main>
	);
}
