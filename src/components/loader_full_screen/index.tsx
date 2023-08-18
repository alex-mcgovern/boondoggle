import { Box, type BoxProps } from "../box";
import { Loader } from "../loader";
import { loaderWrapperStyle } from "./styles.css";

export type LoaderFullScreenProps = {
  /** Text shown underneath loader. */
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
        <Box color={color} fontStyle="body_sm">
          {loadingText}
        </Box>
      )}
    </Box>
  );
}
