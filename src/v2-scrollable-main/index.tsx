import clsx from "clsx";
import type { HTMLProps } from "react";
import { WithSize } from "../types";
import { scrollableMainCSS } from "./styles.css";

export function ScrollableMain({
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
		<main
			className={clsx(className, scrollableMainCSS({ size }))}
			{...rest}
		>
			{children}
		</main>
	);
}
