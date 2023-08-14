import { faSpinnerThird } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../icon";

import type { IconProps } from "../icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
  icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
  return <Icon icon={icon} spin {...rest} />;
}
