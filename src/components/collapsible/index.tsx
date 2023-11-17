"use client";

import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { collapsibleContentAnimation } from "./styles.css";

export type CollapsibleProps = {
	/**
	 * Dialog content
	 */
	children: ReactNode | Array<ReactNode>;

	/**
	 * Allow collapsible to act as a controlled component
	 */
	isOpen?: boolean;

	/**
	 * Function called with new state when state changes.
	 */
	onOpenChange?: (openState: boolean) => void;

	/**
	 * Element to use as Dialog trigger. Note: Must accept a ref.
	 */
	triggerNode: ReactNode;
};

/**
 * An unstyled, primitive component for creating a collapsible UI element.
 */
export function Collapsible({
	children,
	isOpen,
	onOpenChange,
	triggerNode,
}: CollapsibleProps) {
	const [localOpenState, setLocalOpenState] = useState(isOpen);

	const handleOpenChange = useCallback(
		(openState: boolean) => {
			setLocalOpenState(openState);

			if (onOpenChange) {
				onOpenChange(openState);
			}
		},
		[onOpenChange],
	);

	return (
		<RadixCollapsible.Root
			onOpenChange={handleOpenChange}
			open={localOpenState}
		>
			{/**
			 * Allow custom trigger node. Must accept a ref.
			 * ToDo: Figure out a tidy way to require triggerNode to accept ref,
			 * or to wrap triggerNode so it is always able to accept a ref.
			 */}
			<RadixCollapsible.Trigger asChild>
				{triggerNode}
			</RadixCollapsible.Trigger>

			<RadixCollapsible.Content className={collapsibleContentAnimation}>
				{children}
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
}
