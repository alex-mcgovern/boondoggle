import type { ReactNode } from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";

import { Switch as AriaSwitch } from "react-aria-components";

import "./styles.css";

/**
 * Labels a switch component.
 *
 * This is a separate component to allow for
 * the fact that a switch is not a semantic html form  element, and so can't be labelled in the same way.
 */
function SwitchLabel(props: { children: ReactNode }) {
	return <span className="switch-label">{props.children}</span>;
}

/**
 * The indicator for a switch component. This is the actual visual toggle switch UI element.
 */
function SwitchIndicator() {
	return <div className="switch-indicator" />;
}

/**
 * A switch allows a user to turn a setting on or off. [Built with React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)
 */
function SwitchRoot({ ...props }: AriaSwitchProps) {
	return (
		<AriaSwitch
			className="switch"
			{...props}
		/>
	);
}

/**
 * A switch allows a user to turn a setting on or off. [Built with React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)
 */
export const Switch = {
	Indicator: SwitchIndicator,
	Label: SwitchLabel,
	Root: SwitchRoot,
};
