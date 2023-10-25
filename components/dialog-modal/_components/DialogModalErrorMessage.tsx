import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons"; import { Box } from "../../box/Box"; import { Icon } from "../../icon"; import { theme } from "../../../style.css";

export type DialogModalErrorMessageProps = {
	/**
	 * Text that will be rendered inside the dialog modal.
	 */
	description: string | undefined;

	/**
	 * Text that will be rendered inside the dialog modal.
	 */
	title: string;
};

/**
 * Renders an error message inside a dialog modal.
 */

export function DialogModalErrorMessage({
	description,

	title,
}: DialogModalErrorMessageProps) {
	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			padding="space_5"
			textAlign="center"
		>
			<Icon
				className={theme.red}
				color="text_low_contrast"
				icon={faExclamationCircle}
				// marginBottom="space_4"
				size="3x"
			/>

			{title && (
				<Box as="h3" fontStyle="h5">
					{title}
				</Box>
			)}
			{description && (
				<Box as="p" color="text_low_contrast">
					{description}
				</Box>
			)}
		</Box>
	);
}
