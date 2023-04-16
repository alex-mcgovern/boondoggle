import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../icon";

import type { IconProps } from "../icon";

export interface LoaderProps extends Omit<IconProps, "icon"> {
    icon?: IconProps["icon"];
}

export function Loader({ icon = faSpinner, ...rest }: LoaderProps) {
    return <Icon icon={icon} spin {...rest} />;
}
