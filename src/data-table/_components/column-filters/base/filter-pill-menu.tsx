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
import { useForwardRef } from "../../../../_hooks/use-forward-ref";
import { Box } from "../../../../box";
import { FloatingPanel } from "../../../../floating-panel";
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
	const [wasFiltered, setWasFiltered] = React.useState(isFiltered);

	/**
	 * One-time effect to set `wasFiltered` to `true` if `isFiltered` is `true`.
	 * This allows to enable the animation on the open button when filters are applied,
	 * without triggering the animation on initial render.
	 */
	React.useEffect(() => {
		if (isFiltered === true) setWasFiltered(true);
	}, [isFiltered, setWasFiltered]);

	const toggleIsOpen = () => {
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
		<Box position="relative" flexShrink="0">
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
					wasFiltered={wasFiltered}
					disabled={disabled}
					isFiltered={isFiltered}
					pillText={pillText}
					toggleIsOpen={toggleIsOpen}
				/>
			</FilterPillGroup>

			{isOpen && (
				<FloatingFocusManager context={context}>
					<FloatingPanel
						className={filterMenuCSS}
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
