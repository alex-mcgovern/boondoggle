import type {
	DateInputProps as RACDateInputProps} from "react-aria-components";

import clsx from "clsx";
import {
	DateInput as RACDateInput,
	DateSegment as RACDateSegment,
} from "react-aria-components";

import { dateInputCSS, dateSegmentCSS } from "./styles.css";

export const DateInput = (props: Omit<RACDateInputProps, "children">) => {
	return (
		<RACDateInput
			{...props}
			className={clsx(props.className, dateInputCSS)}
			data-can-group
		>
			{(segment) => (
				<RACDateSegment className={dateSegmentCSS} segment={segment} />
			)}
		</RACDateInput>
	);
};
