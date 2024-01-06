import clsx from "clsx";
import * as React from "react";
import {
	TextArea as RACTextArea,
	type TextAreaProps as RACTextAreaProps,
} from "react-aria-components";

import { textareaCSS } from "./styles.css";

export const TextArea = React.forwardRef<HTMLTextAreaElement, RACTextAreaProps>(
	(props, ref) => {
		return (
			<RACTextArea
				{...props}
				className={clsx(props.className, textareaCSS)}
				ref={ref}
			/>
		);
	},
);
