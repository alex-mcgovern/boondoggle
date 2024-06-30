import type { MenuTriggerProps as AriaMenuTriggerProps } from "react-aria-components";

import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";

/**
 * A `MenuTrigger` component, for use with a `Menu` component. [Built with React Aria MenuTrigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
export function MenuTrigger(props: AriaMenuTriggerProps) {
    return <AriaMenuTrigger {...props} />;
}
