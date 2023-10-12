"use client";

/* eslint-disable react/no-multi-comp */
import {
	FloatingArrow,
	FloatingPortal,
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole,
} from "@floating-ui/react";
import {
	cloneElement,
	createContext,
	forwardRef,
	isValidElement,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";

import { tooltipTextStyle } from "./styles.css";

import type { Placement } from "@floating-ui/react";
import type { HTMLProps, ReactNode } from "react";

const ARROW_WIDTH = 16;

const ARROW_HEIGHT = 8;

type TooltipOptions = {
	/**
	 * Whether the tooltip should be enabled.
	 */
	enabled?: boolean;

	/**
	 * Whether the tooltip should be open by default.
	 */
	initialOpen?: boolean;

	/**
	 * Callback for when the tooltip open state changes. Use with `open`.
	 */
	onOpenChange?: (open: boolean) => void;

	/**
	 * Control the open state of the tooltip from outside the component. Use with `onOpenChange`.
	 */
	open?: boolean;

	/**
	 * The placement of the tooltip relative to the trigger.
	 */
	placement?: Placement;
};

/**
 * Hook for managing the state of a tooltip.
 */
function useTooltip({
	enabled = true,
	initialOpen = false,
	onOpenChange: setControlledOpen,
	open: controlledOpen,
	placement = "top",
}: TooltipOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

	const open = controlledOpen ?? uncontrolledOpen;

	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const arrowRef = useRef(null);

	const data = useFloating({
		middleware: [
			offset(5),
			flip({
				crossAxis: placement.includes("-"),
				fallbackAxisSideDirection: "start",
				padding: 5,
			}),
			shift({ padding: 5 }),
			offset(ARROW_HEIGHT),

			arrow({ element: arrowRef }),
		],
		onOpenChange: setOpen,
		open,
		placement,
		whileElementsMounted: autoUpdate,
	});

	const { context } = data;

	const hover = useHover(context, {
		enabled: enabled && controlledOpen == null,
		move: false,
	});

	const focus = useFocus(context, {
		enabled: enabled && controlledOpen == null,
	});

	const dismiss = useDismiss(context);

	const role = useRole(context, { role: "tooltip" });

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return useMemo(() => {
		return {
			arrowRef,
			open,
			setOpen,
			...interactions,
			...data,
		};
	}, [open, setOpen, interactions, data]);
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = createContext<ContextType>(null);

const useTooltipContext = () => {
	const context = useContext(TooltipContext);

	if (context == null) {
		throw new Error("Tooltip components must be wrapped in <Tooltip />");
	}

	return context;
};

export type TooltipProps = {
	/**
	 * Trigger & content to be rendered within the tooltip provider.
	 */
	children: ReactNode;
} & TooltipOptions;

/**
 * Provider for a tooltip.
 */
export function Tooltip({
	children,
	...options
}: { children: ReactNode } & TooltipOptions) {
	// This can accept any props as options, e.g. `placement`,
	// or other positioning options.
	const tooltip = useTooltip(options);

	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	);
}

/**
 * Trigger for a tooltip.
 */
export const TooltipTrigger = forwardRef<
	HTMLElement,
	HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ asChild = false, children, ...props }, propRef) => {
	const context = useTooltipContext();

	const childrenRef = (children as any).ref;

	const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

	// `asChild` allows the user to pass any element as the anchor
	if (asChild && isValidElement(children)) {
		return cloneElement(
			children,
			context.getReferenceProps({
				ref,
				...props,
				...children.props,
				"data-state": context.open ? "open" : "closed",
			}),
		);
	}

	return (
		<button
			data-state={context.open ? "open" : "closed"}
			ref={ref}
			type="button"
			{...context.getReferenceProps(props)}
		>
			{children}
		</button>
	);
});

/**
 * Content for a tooltip.
 */
export const TooltipContent = forwardRef<
	HTMLDivElement,
	HTMLProps<HTMLDivElement>
>(({ style, ...props }, propRef) => {
	const context = useTooltipContext();

	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!context.open) {
		return null;
	}

	return (
		<FloatingPortal>
			<div
				ref={ref}
				style={{
					...context.floatingStyles,
					...style,
					zIndex: 1000, // <- This is dumb
				}}
				{...context.getFloatingProps(props)}
			>
				<div className={tooltipTextStyle}>
					{props.children}

					<FloatingArrow
						context={context.context}
						height={ARROW_HEIGHT}
						ref={context.arrowRef}
						width={ARROW_WIDTH}
					/>
				</div>
			</div>
		</FloatingPortal>
	);
});
