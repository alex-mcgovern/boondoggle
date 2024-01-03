import {
	Group as RACGroup,
	type GroupProps as RACGroupProps,
} from "react-aria-components";
import { groupCSS } from "./styles.css";

export const Group = ({ children, isDisabled, isInvalid }: RACGroupProps) => {
	return (
		<RACGroup
			isDisabled={isDisabled}
			isInvalid={isInvalid}
			className={groupCSS({ isInvalid })}
		>
			{children}
		</RACGroup>
	);
};
