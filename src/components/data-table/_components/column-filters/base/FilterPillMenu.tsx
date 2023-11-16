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
import { useForwardRef } from "../../../../../hooks/use_forward_ref";
import { Box } from "../../../../box/_components/Box";
import { FloatingPanel } from "../../../../floating_panel";
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
		clearFilters,
		disabled,
		isFiltered,
		isOpen: controlledIsOpen = false,
		onIsOpenChange,
		pillText,
	}: {
		children: React.ReactNode;
		clearFilters: () => void;
		disabled?: boolean;
		isFiltered: boolean;
		isOpen?: boolean;
		onIsOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
		pillText?: React.ReactNode;
	},
	initialRef: React.ForwardedRef<HTMLDivElement>,
) {
	const ref = useForwardRef(initialRef);
	const [isOpen, setIsOpen] = React.useState(controlledIsOpen);
	const [wasOpen, setWasOpen] = React.useState(false);

	const toggleIsOpen = () => {
		setWasOpen(true);
		setIsOpen((c) => !c);
		onIsOpenChange?.((c) => !c);
	};

	React.useEffect(() => {
		if (controlledIsOpen !== undefined && isOpen !== controlledIsOpen) {
			setIsOpen(controlledIsOpen);
		}
	}, [controlledIsOpen, setIsOpen, isOpen]);

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
		onOpenChange: (o) => {
			setIsOpen(o);
			onIsOpenChange?.(o);
		},
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
						setIsOpen={(o) => {
							setIsOpen(o);
							onIsOpenChange?.(o);
						}}
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
