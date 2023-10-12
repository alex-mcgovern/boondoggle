import clsx from "clsx";

import { getMainStyles } from "./styles.css";

import type { WithSize } from "../../common-types";
import type { HTMLProps } from "react";

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
