import clsx from "clsx";
import type { HTMLProps } from "react";
import { WithSize } from "../types";
import { containerCSS } from "./styles.css";

/**
 * Container
 */
export function Container({
	children,
	className,
	size = "lg",
	...rest
}: Omit<HTMLProps<HTMLDivElement>, "size"> &
	WithSize & {
		/**
		 * container content.
		 */
		children: React.ReactNode;
	}) {
	return (
		<div className={clsx(className, containerCSS({ size }))} {...rest}>
			{children}
		</div>
	);
}
