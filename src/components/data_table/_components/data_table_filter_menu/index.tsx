"use client";

import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons";
import { forwardRef } from "react";
import React from "react";
import { useForwardRef } from "../../../../hooks/use_forward_ref";
import { Box } from "../../../box";
import { FloatingPanel } from "../../../floating_panel";
import { Icon } from "../../../icon";
import { Pill } from "../../../pill";
import { filterMenu } from "./styles.css";

export type DataTableFilterMenuProps = {
	/**
	 * The filter controls to render in the dialog.
	 */
	children: React.ReactNode;

	/**
	 * The text to display in the button.
	 */
	pillText?: string;
};

/**
 * Renders a button that opens a dropdown menu when clicked.
 * @note This is a base component that should be wrapped with `ForwardRef`.
 */
function DataTableFilterMenuBase(
	{ children, pillText }: DataTableFilterMenuProps,
	initialRef: React.ForwardedRef<HTMLButtonElement>,
) {
	const ref = useForwardRef(initialRef);

	const [isOpen, setIsOpen] = React.useState(false);

	const toggleIsOpen = () => {
		setIsOpen((current) => !current);
	};

	const { floatingStyles, refs } = useFloating({
		elements: {
			reference: ref.current,
		},
		middleware: [
			offset(4),
			flip({
				crossAxis: true,
				fallbackAxisSideDirection: "start",
			}),
		],
		open: isOpen,
		placement: "bottom-start",
		whileElementsMounted: autoUpdate,
	});

	return (
		<Box position="relative">
			{/* Replace the button with the pill */}

			<Pill
				appearance="dotted"
				slotLeft={<Icon icon={faCirclePlus} />}
				as="button"
				onClick={toggleIsOpen}
				ref={ref}
			>
				{pillText}
			</Pill>

			{/* Come up with a way to render children in the menu */}

			{isOpen && (
				<FloatingPanel
					className={filterMenu}
					isOpen={isOpen}
					style={floatingStyles}
					ref={isOpen ? refs.setFloating : undefined}
				>
					{children}
				</FloatingPanel>
			)}
		</Box>
	);
}

export const DataTableFilterMenu = forwardRef(DataTableFilterMenuBase);
