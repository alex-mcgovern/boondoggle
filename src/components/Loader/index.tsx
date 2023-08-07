import { faSpinnerThird } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../Icon";

import type { IconProps } from "../Icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
  icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
  return <Icon icon={icon} spin {...rest} />;
}
