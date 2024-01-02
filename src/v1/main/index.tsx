import clsx from "clsx";
import type { HTMLProps } from "react";
import { WithSize } from "../../types";
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
		children: React.ReactNode;
	}) {
	return (
		<main className={clsx(className, mainCSS({ size }))} {...rest}>
			{children}
		</main>
	);
}
