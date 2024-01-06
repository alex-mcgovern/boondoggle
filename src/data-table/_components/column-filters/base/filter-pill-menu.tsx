import type { Dispatch, ForwardedRef, ReactNode, SetStateAction } from "react";

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
import { forwardRef, useEffect, useState } from "react";

import { FloatingPanel } from "../../../../_DEPRECATED_floating-panel";
import { useForwardRef } from "../../../../_hooks/use-forward-ref";
import { Box } from "../../../../box";
import { FilterPillCloseButton } from "./filter-pill-close-button";
import { FilterPillGroup } from "./filter-pill-group";
import { filterMenuCSS } from "./filter-pill-menu.css";
import { FilterPillOpenButton } from "./filter-pill-open-button";

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
		children: ReactNode;
		clearFilters: () => void;
		disabled?: boolean;
		isFiltered: boolean;
		isOpen?: boolean;
		onIsOpenChange?: Dispatch<SetStateAction<boolean>>;
		pillText?: ReactNode;
	},
	initialRef: ForwardedRef<HTMLDivElement>,
) {
	const ref = useForwardRef(initialRef);
	const [isOpen, setIsOpen] = useState(controlledIsOpen);
	const [wasFiltered, setWasFiltered] = useState(isFiltered);

	/**
	 * One-time effect to set `wasFiltered` to `true` if `isFiltered` is `true`.
	 * This allows to enable the animation on the open button when filters are applied,
	 * without triggering the animation on initial render.
	 */
	useEffect(() => {
		if (isFiltered === true) setWasFiltered(true);
	}, [isFiltered, setWasFiltered]);

	const toggleIsOpen = () => {
		setIsOpen((c) => !c);
		onIsOpenChange?.((c) => !c);
	};

	useEffect(() => {
		if (controlledIsOpen !== undefined && isOpen !== controlledIsOpen) {
			setIsOpen(controlledIsOpen);
		}
	}, [controlledIsOpen, setIsOpen, isOpen]);

	const { context, floatingStyles, refs } = useFloating({
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
		onOpenChange: (o) => {
			setIsOpen(o);
			onIsOpenChange?.(o);
		},
		open: isOpen,
		placement: "bottom-start",
		whileElementsMounted: autoUpdate,
	});

	const dismiss = useDismiss(context);
	const focus = useFocus(context);

	const { getFloatingProps, getReferenceProps } = useInteractions([
		dismiss,
		focus,
	]);

	return (
		<Box flexShrink="0" position="relative">
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
					wasFiltered={wasFiltered}
				/>
			</FilterPillGroup>

			{isOpen && (
				<FloatingFocusManager context={context}>
					<FloatingPanel
						className={filterMenuCSS}
						isOpen={isOpen}
						ref={isOpen ? refs.setFloating : undefined}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						{children}
					</FloatingPanel>
				</FloatingFocusManager>
			)}
		</Box>
	);
}

export const FilterPillMenu = forwardRef(PrivateFilterPillMenu);
