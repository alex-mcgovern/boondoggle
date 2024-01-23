import {
	OverlayArrow as RACOverlayArrow,
	Tooltip as RACTooltip,
	TooltipProps as RACTooltipProps,
	TooltipTrigger as RACTooltipTrigger,
	TooltipTriggerComponentProps as RACTooltipTriggerComponentProps,
} from "react-aria-components";
import clsx from "clsx";
import { overlayArrowCSS } from "../../popover/styles.css";
import { overlayArrowSvgCSS, popoverCSS } from "./styles.css";

export type TooltipProps = RACTooltipTriggerComponentProps & {
	tooltipContent: React.ReactNode;
	placement?: RACTooltipProps["placement"];
};

export const Tooltip = (props: TooltipProps) => {
	return (
		<RACTooltipTrigger {...props}>

			{props.children}

			<RACTooltip
			{...props}
				className={({ isEntering, isExiting, placement }) =>
                clsx(
                    popoverCSS({
                        isEntering,
                        isExiting,
                        placement,
                    }),
                )
            }
				placement={props.placement}
				offset={10}
			>
				<RACOverlayArrow 
				className={clsx(overlayArrowCSS)} 
				>

 {(renderProps) => {
                return (
				<svg
					className={overlayArrowSvgCSS({ ...renderProps })}
					width={12}
					height={12}
					viewBox="0 0 8 8"
				>
					<path d="M2 0 L4 5 L6 0" />
				</svg>
				);
				}}
				</RACOverlayArrow>

				{props.tooltipContent}
			</RACTooltip>
		</RACTooltipTrigger>
	);
};
