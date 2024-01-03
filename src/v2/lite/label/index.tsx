import {
	Label as RACLabel,
	LabelProps as RACLabelProps,
} from "react-aria-components";
import { labelCSS } from "./styles.css";

export function Label(props: RACLabelProps) {
	return <RACLabel className={labelCSS} {...props} />;
}
