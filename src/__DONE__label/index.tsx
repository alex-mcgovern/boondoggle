import {
	Label as RACLabel,
	type LabelProps as RACLabelProps,
} from "react-aria-components";
import { labelCSS } from "./styles.css";
import clsx from "clsx";

export function Label(props: RACLabelProps) {
	return <RACLabel {...props} className={clsx(props.className, labelCSS)} />;
}
