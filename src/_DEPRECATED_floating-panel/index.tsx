import type { ForwardedRef, HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import { forwardRef } from "react";

import { floatingPanel } from "./styles.css";

/**
 * Renders a container for a  dropdown menu.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
const BaseFloatingPanel = (
	{
		children,
		className,
		isOpen,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		children: ReactNode;
		className?: string;
		isOpen: boolean | undefined;
	},
		ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<div
			className={clsx(className, floatingPanel({ isOpen }))}
			ref={ref}
			{...rest}
		>
			{children}
		</div>
	);
};

export const FloatingPanel = forwardRef(BaseFloatingPanel);
