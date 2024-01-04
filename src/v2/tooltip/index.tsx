import { CSSProperties } from "@vanilla-extract/css";
import { ReactNode, RefObject } from "react";
import { Placement } from "react-aria";
import { TooltipRenderProps } from "react-aria-components";

type TooltipOptions = {
	triggerRef: RefObject<Element>;
	isEntering: boolean;
	isExiting: boolean;
	placement: Placement;
	containerPadding: number;
	offset: number;
	crossOffset: number;
	shouldFlip: boolean;
	isOpen: boolean;
	defaultOpen: boolean;
	children: ReactNode | ((values: TooltipRenderProps) => ReactNode);
	className: string | ((values: TooltipRenderProps) => string);
	style: CSSProperties | ((values: TooltipRenderProps) => CSSProperties);
};

type TooltipTriggerProps = {
	children: ReactNode;
	isDisabled: boolean;
	delay: number;
	closeDelay: number;
	//trigger defaults to both 'focus' and 'hover'.
	trigger: "focus" | "hover";
	isOpen: boolean;
	defaultOpen: boolean;
};
