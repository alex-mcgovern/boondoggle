import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons";
import { Children } from "react";

import { Box } from "../../../box/_components/Box";
import { Icon } from "../../../icon";
import {
	dialogModalAlertSlotStyle,
	getDialogModalAlertWrapperStyles,
} from "./styles.css";

import type { WithColorOverlay, WithSlots } from "../../../../common-types";

export type DialogModalAlertProps = WithSlots &
	WithColorOverlay & {
		/**
		 * The description text of the alert.
		 */
		description: string;

		/**
		 * The title text of the alert.
		 */
		title: string;
	};

/**
 * Renders an inline alert for use ina  Dialog component.
 */
export function DialogModalAlert({
	colorOverlay = "amber",
	description,
	slotLeft = [<Icon icon={faInfoCircle} />],
	slotRight,
	title,
}: DialogModalAlertProps) {
	return (
		<Box className={getDialogModalAlertWrapperStyles({ colorOverlay })}>
			{slotLeft && (
				<Box className={dialogModalAlertSlotStyle}>
					{Children.map(slotLeft, (child) => {
						return child;
					})}
				</Box>
			)}

			<Box color="text_low_contrast">
				{title && <Box fontWeight="semibold">{title}</Box>}
				{description}
			</Box>

			{slotLeft && (
				<Box className={dialogModalAlertSlotStyle}>
					{Children.map(slotRight, (child) => {
						return child;
					})}
				</Box>
			)}
		</Box>
	);
}
