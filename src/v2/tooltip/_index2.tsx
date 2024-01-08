import { useRef, ForwardedRef, useContext, RefObject } from "react";
import {
	Provider,
	TooltipContext,
	TooltipProps,
	TooltipTriggerComponentProps,
	TooltipTriggerStateContext,
	useContextProps,
} from "react-aria-components";
import { useTooltipTriggerState } from "react-stately";
import { AriaLabelingProps, FocusableElement } from "@react-types/shared";
import {
	OverlayContainer,
	mergeProps,
	useOverlayPosition,
	useTooltip,
	useTooltipTrigger,
} from "react-aria";
import { FocusableProvider } from "@react-aria/focus";

export function TooltipTrigger(props: TooltipTriggerComponentProps) {
	let state = useTooltipTriggerState();
	let ref = useRef<FocusableElement>(null);
	let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

	return (
		<Provider
			values={[
				[TooltipTriggerStateContext, state],
				[TooltipContext, { ...tooltipProps, triggerRef: ref }],
			]}
		>
			<FocusableProvider {...triggerProps} ref={ref}>
				{props.children}
			</FocusableProvider>
		</Provider>
	);
}

/****************************************************************/

export function Tooltip(
	{ UNSTABLE_portalContainer, ...props }: TooltipProps,
	ref: ForwardedRef<HTMLDivElement>,
) {
	[props, ref] = useContextProps(props, ref, TooltipContext);
	let contextState = useContext(TooltipTriggerStateContext);
	let localState = useTooltipTriggerState(props);
	let state =
		props.isOpen != null || props.defaultOpen != null || !contextState
			? localState
			: contextState;
	// let isExiting =
	// 	useExitAnimation(ref, state.isOpen) || props.isExiting || false;
	// if (!state.isOpen && !isExiting) {
	// 	return null;
	// }

	return (
		<OverlayContainer portalContainer={UNSTABLE_portalContainer}>
			<TooltipInner {...props} tooltipRef={ref} />
		</OverlayContainer>
	);
}

/****************************************************************/

function TooltipInner(
	props: TooltipProps & {
		isExiting: boolean;
		tooltipRef: RefObject<HTMLDivElement>;
	},
) {
	let state = useContext(TooltipTriggerStateContext)!;

	let { overlayProps, arrowProps, placement } = useOverlayPosition({
		placement: props.placement || "top",
		targetRef: props.triggerRef!,
		overlayRef: props.tooltipRef,
		offset: props.offset,
		crossOffset: props.crossOffset,
		isOpen: state.isOpen,
	});

	// let isEntering =
	// 	useEnterAnimation(props.tooltipRef, !!placement) ||
	// 	props.isEntering ||
	// 	false;
	let renderProps = useRenderProps({
		...props,
		defaultClassName: "react-aria-Tooltip",
		values: {
			placement,
			// isEntering,
			isExiting: props.isExiting,
			state,
		},
	});

	props = mergeProps(props, overlayProps);
	let { tooltipProps } = useTooltip(props, state);

	return (
		<div
			{...tooltipProps}
			ref={props.tooltipRef}
			{...renderProps}
			style={{ ...overlayProps.style, ...renderProps.style }}
			data-placement={placement}
			// data-entering={isEntering || undefined}
			data-exiting={props.isExiting || undefined}
		>
			<OverlayArrowContext.Provider value={{ ...arrowProps, placement }}>
				{renderProps.children}
			</OverlayArrowContext.Provider>
		</div>
	);
}
