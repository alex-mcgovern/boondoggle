import type { FileTriggerProps as AriaFileTriggerProps } from "react-aria-components";

import { forwardRef } from "react";
import { FileTrigger as AriaFileTrigger } from "react-aria-components";

/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger = forwardRef<HTMLInputElement, AriaFileTriggerProps>(
	(props, ref) => {
		return (
			<AriaFileTrigger
				{...props}
				ref={ref}
			>
				{props.children}
			</AriaFileTrigger>
		);
	},
);
