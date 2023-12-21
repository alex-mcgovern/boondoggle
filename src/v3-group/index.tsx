import {
	Group as ReactAriaGroup,
	type GroupProps,
} from "react-aria-components";
import { groupCSS } from "./styles.css";

export const V3Group = ({ children, isDisabled, isInvalid }: GroupProps) => {
	return (
		<ReactAriaGroup className={groupCSS({ isDisabled, isInvalid })}>
			{children}
		</ReactAriaGroup>
	);
};
