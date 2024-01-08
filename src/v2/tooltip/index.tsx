import {
	OverlayArrow as RACOverlayArrow,
	Tooltip as RACTooltip,
	TooltipProps as RACTooltipProps,
	TooltipTrigger as RACTooltipTrigger,
	TooltipTriggerComponentProps as RACTooltipTriggerComponentProps,
} from "react-aria-components";
import { tooltipArrowCSS, tooltipCSS } from "./styles.css";
import { vars } from "../../index.css";
import { Box } from "../../v1/box";
import { Icon } from "../icon";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltCircleLeft } from "@fortawesome/pro-solid-svg-icons";
import { useOverlayPosition, useOverlayTrigger } from "react-aria";

export type TooltipProps = RACTooltipTriggerComponentProps & {
	tooltipContent: React.ReactNode;
	placement?: RACTooltipProps["placement"];
};

export const Tooltip = (props: TooltipProps) => {
	return (
		<RACTooltipTrigger {...props}>
			{props.children}
			<RACTooltip
				className={tooltipCSS}
				placement={props.placement}
				offset={10}
			>
				<RACOverlayArrow className={tooltipArrowCSS} />

				{/** * Fix SVG later */}
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					// className={tooltipArrowCSS}
					// fill={vars.color.black}
					width={18}
					height={18}
					viewBox="0 0 8 8"
				>
					<path d="M0 0 L4 4 L8 0" />
				</svg>

				{props.tooltipContent}
			</RACTooltip>
		</RACTooltipTrigger>
	);
};
