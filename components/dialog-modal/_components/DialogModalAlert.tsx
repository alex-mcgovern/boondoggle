import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons"; import { Children } from "react";
import { Box } from "../../box/Box"; import { Icon } from "../../icon"; import {
	dialogModalAlertSlotStyle,
	getDialogModalAlertWrapperStyles,
} from "./DialogModalAlert.css";
import type { WithTheme, WithSlots } from "../../../src/common-types";

export type DialogModalAlertProps = WithSlots &
	WithTheme & {
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
	theme = "amber",
	description,
	slotLeft = [<Icon icon={faInfoCircle} />],
	slotRight,
	title,
}: DialogModalAlertProps) {
	return (
		<Box className={getDialogModalAlertWrapperStyles({ theme })}>
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
