import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";
import { Box } from "../box";
import { variantColorOverlay } from "../index.css";
import { Button } from "../v2-button";
import { V2DialogFooter } from "../v2-dialog";
import { Icon } from "../v2-icon";

export const V2DialogErrorMessage = ({
	error,
	onPressCancel,
	strCancel,
	onPressTryAgain,
	strTryAgain,
}: {
	error: { message: string };
	onPressCancel: (() => unknown) | (() => Promise<unknown>);
	strCancel: string;
	onPressTryAgain: (() => unknown) | (() => Promise<unknown>);
	strTryAgain: string;
}) => {
	return (
		<>
			<Box
				paddingY="space_12"
				width="100%"
				display="flex"
				placeItems="center"
				flexDirection="column"
				gap="space_4"
				className={variantColorOverlay.red}
			>
				<Icon
					color="text_low_contrast"
					icon={faCircleExclamation}
					size="3x"
				/>

				<Box
					fontStyle="bodyLg"
					color="text_low_contrast"
					fontWeight="semibold"
				>
					{error.message}
				</Box>
			</Box>

			<V2DialogFooter>
				<Box display="grid" gridTemplateColumns="2x" gap="space_2">
					<Button
						appearance="secondary"
						colorOverlay="red"
						onPress={onPressCancel}
					>
						{strCancel}
					</Button>
					<Button colorOverlay="red" onPress={onPressTryAgain}>
						{strTryAgain}
					</Button>
				</Box>
			</V2DialogFooter>
		</>
	);
};
