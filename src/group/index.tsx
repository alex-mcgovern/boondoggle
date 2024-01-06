import {
    Group as RACGroup,
    type GroupProps as RACGroupProps,
} from "react-aria-components";

import { groupCSS } from "./styles.css";

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Group.html)
 */
export const Group = ({ children, isDisabled, isInvalid }: RACGroupProps) => {
    return (
        <RACGroup
            className={groupCSS}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
        >
            {children}
        </RACGroup>
    );
};
