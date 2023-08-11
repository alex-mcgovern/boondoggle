import { faSpinnerThird } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../icon_comp";

import type { IconProps } from "../icon_comp";

export type LoaderProps = Omit<IconProps, "icon"> & {
  icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
  return <Icon icon={icon} spin {...rest} />;
}
