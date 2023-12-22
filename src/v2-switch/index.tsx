import * as React from "react";
import {
	Switch as ReactAriaSwitch,
	SwitchProps as ReactAriaSwitchProps,
} from "react-aria-components";
import { switchCSS, switchIndicatorCSS, switchLabelCSS } from "./styles.css";

export type SwitchProps = Omit<ReactAriaSwitchProps, "children" | "name"> & {
	label: string;
	name: string;
};

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
	({ label, defaultSelected = false, ...props }, ref) => {
		return (
			<ReactAriaSwitch
				defaultSelected={defaultSelected}
				ref={ref}
				className={switchCSS}
				{...props}
			>
				<span className={switchLabelCSS}>{label}</span>
				<div className={switchIndicatorCSS} />
			</ReactAriaSwitch>
		);
	},
);
