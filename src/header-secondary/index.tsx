import clsx from "clsx";
import type { HTMLProps } from "react";
import type { WithSize } from "../types";
import { headerSecondaryCSS } from "./styles.css";

/**
 * Header HTML element.
 */
export function HeaderSecondary({
	children,
	className,
	...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
	WithSize & {
		/**
		 * Main content.
		 */
		children: React.ReactNode;
	}) {
	return (
		<>
			<section className={clsx(className, headerSecondaryCSS)} {...rest}>
				{children}
			</section>
		</>
	);
}
