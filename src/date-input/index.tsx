import clsx from "clsx";
import {
	DateInput as RACDateInput,
	DateInputProps as RACDateInputProps,
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
				<RACDateSegment segment={segment} className={dateSegmentCSS} />
			)}
		</RACDateInput>
	);
};
