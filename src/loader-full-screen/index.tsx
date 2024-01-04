import { Box } from "../__DONE__box";
import { Loader } from "../__DONE__loader";
import { loaderWrapperStyle } from "./styles.css";

import type { BoxProps } from "../__DONE__box";

export type LoaderFullScreenProps = {
	/**
	 * Text shown underneath loader.
	 */
	loadingText?: string;
} & BoxProps;

/**
 * Full-screen version of the loader component.
 */
export function LoaderFullScreen({
	color = "text_low_contrast",
	loadingText,
	...rest
}: LoaderFullScreenProps) {
	return (
		<Box className={loaderWrapperStyle} {...rest}>
			<Loader color={color} size="3x" />
			{loadingText && (
				<Box color={color} fontStyle="bodySm">
					{loadingText}
				</Box>
			)}
		</Box>
	);
}
