import clsx from "clsx";
import {
	Label as RACLabel,
	type LabelProps as RACLabelProps,
} from "react-aria-components";

import { labelCSS } from "./styles.css";

export function Label(props: RACLabelProps) {
	return <RACLabel {...props} className={clsx(props.className, labelCSS)} />;
}
