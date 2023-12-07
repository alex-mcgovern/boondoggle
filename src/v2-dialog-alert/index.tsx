import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { Children } from "react";
import { Box } from "../box";
import type { WithColorOverlay, WithSlots } from "../types";
import { Icon } from "../v2-icon";
import { dialogAlertSlotCSS, dialogAlertWrapperCSS } from "./styles.css";

/**
 * Renders an inline alert for use ina  Dialog component.
 */
export function V2DialogAlert({
	colorOverlay = "amber",
	description,
	slotLeft = [<Icon icon={faInfoCircle} />],
	slotRight,
	title,
}: WithSlots &
	WithColorOverlay & {
		/**
		 * The description text of the alert.
		 */
		description: string;
		/**
		 * The title text of the alert.
		 */
		title: string;
	}) {
	return (
		<Box className={dialogAlertWrapperCSS({ colorOverlay })}>
			{slotLeft && (
				<Box className={dialogAlertSlotCSS}>
					{Children.map(slotLeft, (child) => {
						return child;
					})}
				</Box>
			)}

			<Box color="text_low_contrast" fontStyle="bodyMd">
				{title && <Box fontWeight="semibold">{title}</Box>}
				{description}
			</Box>

			{slotLeft && (
				<Box className={dialogAlertSlotCSS}>
					{Children.map(slotRight, (child) => {
						return child;
					})}
				</Box>
			)}
		</Box>
	);
}
