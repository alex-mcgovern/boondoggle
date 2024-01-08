import {
	HTMLProps,
	ReactNode,
	cloneElement,
	createContext,
	forwardRef,
	isValidElement,
	useContext,
	useRef,
	useState,
} from "react";
import { Placement, mergeProps, useHover } from "react-aria";
import { OverlayArrow } from "react-aria-components";
import { OverlayContainer, useOverlayPosition } from "@react-aria/overlays";

const ARROW_WIDTH = 16;

const ARROW_HEIGHT = 8;

type TooltipOptions = {
	// triggerRef: RefObject<Element>;
	// isEntering: boolean;
	// isExiting: boolean;
	// containerPadding: number;
	// offset: number;
	// crossOffset: number;
	// shouldFlip: boolean;
	// children: ReactNode | ((values: TooltipRenderProps) => ReactNode);
	// className: string | ((values: TooltipRenderProps) => string);
	// style: CSSProperties | ((values: TooltipRenderProps) => CSSProperties);
	isDisabled: boolean;
	defaultOpen: boolean;
	onOpenChange?: (open: boolean) => void;
	isOpen: boolean;
	placement: Placement;
};

type TooltipTriggerProps = {
	children: ReactNode;
	delay: number;
	closeDelay: number;
	//trigger defaults to both 'focus' and 'hover'.
	trigger: "focus" | "hover";
	defaultOpen: boolean;
};

function useTooltip({
	isDisabled = false,
	defaultOpen = false,
	onOpenChange: setControlledOpen,
	isOpen: controlledOpen,
	placement = "top",
}: TooltipOptions) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;
	const arrowRef = useRef(null);

	const data = useOverlayPosition({
		overlayRef: useRef(null),
		targetRef: arrowRef,
		placement,
		offset: 5,
		containerPadding: 5,
	});

	const { arrowProps } = data;

	const hover = useHover({ isDisabled: !isDisabled && controlledOpen });
}

/****************************************************************/

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = createContext<ContextType>(null);

const useTooltipContext = () => {
	const context = useContext(TooltipContext);

	if (context == null) {
		throw new Error("Tooltip components must be wrapped in <Tooltip />");
	}

	return context;
};
/****************************************************************/

export type TooltipProps = {
	/**
	 * Trigger & content to be rendered within the tooltip provider.
	 */
	children: ReactNode;
} & TooltipOptions;

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

/****************************************************************/

export const TooltipTrigger = forwardRef<
	HTMLElement,
	HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ asChild = false, children, ...props }, propRef) => {
	const context = useTooltipContext();
	// biome-ignore lint/suspicious/noExplicitAny: required to be this way
	const childrenRef = (children as any).ref;

	const ref = mergeProps([context, propRef, childrenRef]);

	// `asChild` allows the user to pass any element as the anchor
	if (asChild && isValidElement(children)) {
		return cloneElement(children);
	}

	return (
		<button ref={ref} type="button">
			{children}
		</button>
	);
});

/****************************************************************/

export const TooltipContent = forwardRef<
	HTMLDivElement,
	HTMLProps<HTMLDivElement>
>(({ style, ...props }, propRef) => {
	const context = useTooltipContext();

	const ref = mergeProps([context.refs.setFloating, propRef]);

	if (!context.open) {
		return null;
	}

	return (
		<OverlayContainer>
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

					<OverlayArrow
						// fill={vars.color.black}
						context={context.context}
						height={ARROW_HEIGHT}
						ref={context.arrowRef}
						width={ARROW_WIDTH}
					/>
				</div>
			</div>
		</OverlayContainer>
	);
});
