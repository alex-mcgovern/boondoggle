"use client";

import {
	autoUpdate,
	flip,
	offset,
	useDismiss,
	useFloating,
	useInteractions,
} from "@floating-ui/react";
import { forwardRef } from "react";
import React from "react";
import { useForwardRef } from "../../../../hooks/use_forward_ref";
import { Box } from "../../../box";
import { FloatingPanel } from "../../../floating_panel";
import { FilterPillCloseButton } from "./FilterPillCloseButton";
import { FilterPillGroup } from "./FilterPillGroup";
import * as styles from "./FilterPillMenu.css";
import { FilterPillOpenButton } from "./FilterPillOpenButton";

export type FilterPillProps = {
	/**
	 * The filter controls to render in the dialog.
	 */
	children: React.ReactNode;

	/**
	 * The text to display in the button.
	 */
	pillText?: React.ReactNode;

	/**
	 * Whether the column is currently filtered.
	 */
	isFiltered: boolean;

	/**
	 * Whether the column can be filtered.
	 */
	disabled?: boolean;

	/**
	 * Callback to clear the column's filters
	 */
	clearFilters: () => void;
};

/**
 * @private This is a base component that should be wrapped with `ForwardRef`.
 */
function PrivateFilterPillMenu(
	{ children, pillText, isFiltered, disabled, clearFilters }: FilterPillProps,
	initialRef: React.ForwardedRef<HTMLDivElement>,
) {
	const ref = useForwardRef(initialRef);

	const [isOpen, setIsOpen] = React.useState(false);
	const [wasOpen, setWasOpen] = React.useState(false);

	const toggleIsOpen = () => {
		setWasOpen(true);
		setIsOpen((current) => !current);
	};

	const { floatingStyles, refs, context } = useFloating({
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
		onOpenChange: setIsOpen,
		placement: "bottom-start",
		whileElementsMounted: autoUpdate,
	});

	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

	return (
		<Box position="relative">
			<FilterPillGroup
				isFiltered={isFiltered}
				ref={ref}
				{...getReferenceProps()}
			>
				{isFiltered ? (
					<FilterPillCloseButton
						clearFilters={clearFilters}
						setIsOpen={setIsOpen}
					/>
				) : null}
				<FilterPillOpenButton
					disabled={disabled}
					isFiltered={isFiltered}
					pillText={pillText}
					toggleIsOpen={toggleIsOpen}
					wasOpen={wasOpen}
				/>
			</FilterPillGroup>

			{isOpen && (
				<FloatingPanel
					className={styles.filterMenu}
					isOpen={isOpen}
					style={floatingStyles}
					ref={isOpen ? refs.setFloating : undefined}
					{...getFloatingProps()}
				>
					{children}
				</FloatingPanel>
			)}
		</Box>
	);
}

export const FilterPillMenu = forwardRef(PrivateFilterPillMenu);
