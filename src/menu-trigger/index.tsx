import type { MenuTriggerProps as RACMenuTriggerProps } from "react-aria-components";

import { MenuTrigger as RACMenuTrigger } from "react-aria-components";

export type MenuTriggerProps = RACMenuTriggerProps;

/**
 * A `MenuTrigger` component, for use with a `Menu` component. [Built with React Aria MenuTrigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
export function MenuTrigger(props: MenuTriggerProps) {
    return <RACMenuTrigger {...props} />;
}
