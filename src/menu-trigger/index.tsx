import type { MenuTriggerProps as RACMenuTriggerProps } from "react-aria-components";

import { MenuTrigger as RACMenuTrigger } from "react-aria-components";

export type MenuTriggerProps = RACMenuTriggerProps;

export function MenuTrigger(props: MenuTriggerProps) {
    return <RACMenuTrigger {...props} />;
}
