import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons"; import { Box } from "../box/Box"; import { Icon } from "../icon"; import type { BoxProps } from "../box/Box"; import { Tooltip, TooltipTrigger, TooltipContent } from "../tooltip";

export type FieldLabelProps = BoxProps & {
	/**
	 * The `id` of the element being labelled.
	 */
	htmlFor: string;

	/**
	 * Whether the label should be visible.
	 */
	isLabelVisible?: boolean;

	/**
	 * The string to use as the label.
	 */
	label: string;

	/**
	 * The string to render when the user hovers on the tooltip trigger for this element.
	 */
	labelTooltip?: string;
};

/**
 * HTML label element for use with a form field or other labelled element.
 */

export function FieldLabel({
	htmlFor,
	isLabelVisible = true,
	label,
	labelTooltip,
	...rest
}: FieldLabelProps) {
	return (
		<Box
			alignItems="center"
			as="label"
			color="text_low_contrast"
			display={isLabelVisible === true ? "flex" : "none"}
			fontSize="bodyMd"
			fontWeight="regular"
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
