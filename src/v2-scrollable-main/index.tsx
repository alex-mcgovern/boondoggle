import clsx from "clsx";
import type { HTMLProps } from "react";
import { WithSize } from "../types";
import { scrollableMainCSS } from "./styles.css";

import { nonScrollableWrapperCSS } from "./styles.css";

export const NonScrollableWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <div className={nonScrollableWrapperCSS}>{children}</div>;
};

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
