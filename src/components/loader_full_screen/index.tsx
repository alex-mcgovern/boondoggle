import { Box } from "../box/Box";
import { Loader } from "../loader";
import { loaderWrapperStyle } from "./styles.css";

import type { BoxProps } from "../box/Box";

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
