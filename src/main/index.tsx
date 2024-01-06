import type { HTMLProps, ReactNode } from "react";

import clsx from "clsx";

import type { WithSize } from "../types";

import { mainCSS } from "./styles.css";

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
		children: ReactNode;
	}) {
	return (
		<main className={clsx(className, mainCSS({ size }))} {...rest}>
			{children}
		</main>
	);
}
