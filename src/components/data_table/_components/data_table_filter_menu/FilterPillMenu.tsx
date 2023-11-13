"use client";

import {
	FloatingFocusManager,
	autoUpdate,
	flip,
	offset,
	useDismiss,
	useFloating,
	useFocus,
	useInteractions,
} from "@floating-ui/react";
import * as React from "react";
import { useForwardRef } from "../../../../hooks/use_forward_ref";
import { Box } from "../../../box";
import { FloatingPanel } from "../../../floating_panel";
import { FilterPillCloseButton } from "./FilterPillCloseButton";
import { FilterPillGroup } from "./FilterPillGroup";
import * as styles from "./FilterPillMenu.css";
import { FilterPillOpenButton } from "./FilterPillOpenButton";

/**
 * @private This is a base component that should be wrapped with `ForwardRef`.
 */
function PrivateFilterPillMenu(
	{
		children,
		pillText,
		isFiltered,
		disabled,
		clearFilters,
		isOpen: controlledIsOpen = false,
		onIsOpenChange,
	}: {
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

		/**
		 * Callback when the menu is opened or closed.
		 */
		onIsOpenChange?: (isOpen: boolean) => void;

		/**
		 * Whether the menu is open or closed.
		 */
		isOpen?: boolean;
	},
	initialRef: React.ForwardedRef<HTMLDivElement>,
) {
	const ref = useForwardRef(initialRef);
	const [isOpen, setIsOpen] = React.useState(controlledIsOpen);
	const [wasOpen, setWasOpen] = React.useState(false);

	/**
	 * Callback to toggle the menu open or closed.
	 */
	const toggleIsOpen = () => {
		setWasOpen(true);
		setIsOpen((current) => !current);
	};

	// /**
	//  * Synchronize the controlled `isOpen` state with the local state.
	//  */
	// React.useEffect(() => {
	// 	if (controlledIsOpen !== undefined) {
	// 		setIsOpen(controlledIsOpen);
	// 	}
	// }, [controlledIsOpen, setIsOpen]);

	// /**
	//  * Synchronize the local `isOpen` state with the controlled state.
	//  */
	// React.useEffect(() => {
	// 	if (onIsOpenChange !== undefined && isOpen !== controlledIsOpen) {
	// 		onIsOpenChange(isOpen);
	// 	}
	// }, [controlledIsOpen, onIsOpenChange, isOpen]);

	/**
	 * Use @floating-ui/react to manage the styles and interactions of the floating menu.
	 */
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
	const focus = useFocus(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		dismiss,
		focus,
	]);

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
				<FloatingFocusManager context={context}>
					<FloatingPanel
						className={styles.filterMenu}
						isOpen={isOpen}
						style={floatingStyles}
						ref={isOpen ? refs.setFloating : undefined}
						{...getFloatingProps()}
					>
						{children}
					</FloatingPanel>
				</FloatingFocusManager>
			)}
		</Box>
	);
}

export const FilterPillMenu = React.forwardRef(PrivateFilterPillMenu);
