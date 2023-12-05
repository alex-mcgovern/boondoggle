import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import clsx from "clsx";
import { Label } from "react-aria-components";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { Icon } from "../v2-icon";
import { variantColorOverlay } from "../index.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

/**
 * HTML label element for use with a form field or other labelled element.
 */
export function V2Label({
	htmlFor,
	isLabelVisible = true,
	label,
	labelTooltip,
	isInvalid,
	className,
	...rest
}: BoxProps & {
	/**
	 * The `id` of the element being labelled.
	 */
	htmlFor: string;

	/**
	 * Whether the label should be visible.
	 */
	isLabelVisible?: boolean;

	/**
	 * Whether the field has validation errors or not.
	 */
	isInvalid?: boolean;

	/**
	 * The string to use as the label.
	 */
	label: string;

	/**
	 * The string to render when the user hovers on the tooltip trigger for this element.
	 */
	labelTooltip?: string;
}) {
	return (
		<Box
			alignItems="center"
			as={Label}
			className={clsx(className, {
				[variantColorOverlay.red]: !!isInvalid,
			})}
			color="text_low_contrast"
			display={isLabelVisible === true ? "flex" : "none"}
			fontSize="bodyMd"
			fontWeight="normal"
			gap="space_1"
			htmlFor={htmlFor}
			marginBottom="space_1"
			{...rest}
		>
			{label}

			{labelTooltip && (
				<Tooltip placement="right">
					<TooltipTrigger asChild>
						<button type="button">
							<Icon
								color="text_low_contrast"
								icon={faInfoCircle}
							/>
						</button>
					</TooltipTrigger>
					<TooltipContent>{labelTooltip}</TooltipContent>
				</Tooltip>
			)}
		</Box>
	);
}
