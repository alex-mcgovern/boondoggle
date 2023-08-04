import { faSpinnerThird } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../decorative.icon";

import type { IconProps } from "../decorative.icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
  icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
  return <Icon icon={icon} spin {...rest} />;
}
