import { faSpinner } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../icon";

import type { IconProps } from "../icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
  icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinner, ...rest }: LoaderProps) {
  return <Icon icon={icon} spin {...rest} />;
}
