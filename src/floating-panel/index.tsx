import clsx from "clsx";
import { forwardRef } from "react";
import { floatingPanel } from "./styles.css";

/**
 * Renders a container for a  dropdown menu.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
const BaseFloatingPanel = (
	{
		isOpen,
		children,
		className,
		...rest
	}: React.HTMLAttributes<HTMLDivElement> & {
		isOpen: boolean | undefined;
		children: React.ReactNode;
		className?: string;
	},
	ref: React.ForwardedRef<HTMLDivElement>,
) => {
	return (
		<div
			ref={ref}
			className={clsx(className, floatingPanel({ isOpen }))}
			{...rest}
		>
			{children}
		</div>
	);
};

export const FloatingPanel = forwardRef(BaseFloatingPanel);
