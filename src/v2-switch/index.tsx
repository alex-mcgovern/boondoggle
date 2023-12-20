import {
	Switch as ReactAriaSwitch,
	SwitchProps as ReactAriaSwitchProps,
} from "react-aria-components";
import { switchCSS, switchIndicatorCSS, switchLabelCSS } from "./styles.css";

export const Switch = ({
	label,
	...props
}: Omit<ReactAriaSwitchProps, "children"> & { label: string }) => {
	return (
		<ReactAriaSwitch className={switchCSS} {...props}>
			<span className={switchLabelCSS}>{label}</span>
			<div className={switchIndicatorCSS} />
		</ReactAriaSwitch>
	);
};
