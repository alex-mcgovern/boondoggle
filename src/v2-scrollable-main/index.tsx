import clsx from "clsx";
import type { HTMLProps } from "react";
import { WithSize } from "../types";
import { useCollapsibleSideNav } from "../v2-collapsible-side-nav";
import { scrollableMainCSS, scrollableMainInnerCSS } from "./styles.css";
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
	headers,
	...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
	WithSize & {
		/**
		 * Main content.
		 */
		children: React.ReactNode;
		/**
		 * Number of headers in the page. Used to calculate the total height.
		 */
		headers: "0" | "1" | "2";
	}) {
	const [isSidebarOpen] = useCollapsibleSideNav();

	return (
		<main
			className={clsx(className, scrollableMainCSS({ headers }))}
			{...rest}
		>
			<div className={scrollableMainInnerCSS({ size, isSidebarOpen })}>
				{children}
			</div>
		</main>
	);
}
