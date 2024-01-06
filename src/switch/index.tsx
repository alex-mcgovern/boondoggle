import type {
	SwitchProps as ReactAriaSwitchProps} from "react-aria-components";

import * as React from "react";
import {
	Switch as ReactAriaSwitch
} from "react-aria-components";

import { switchCSS, switchIndicatorCSS, switchLabelCSS } from "./styles.css";

export type SwitchProps = Omit<ReactAriaSwitchProps, "children" | "name"> & {
	label?: string;
	name: string;
};

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
	({ defaultSelected = false, label, ...props }, ref) => {
		return (
			<ReactAriaSwitch
				className={switchCSS}
				defaultSelected={defaultSelected}
				ref={ref}
				{...props}
			>
				<span className={switchLabelCSS}>{label}</span>
				<div className={switchIndicatorCSS} />
			</ReactAriaSwitch>
		);
	},
);
