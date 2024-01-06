import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons/faSpinnerThird";

import type { IconProps } from "../icon";

import { Icon } from "../icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
	icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
	return <Icon data-testid="loader" icon={icon} spin {...rest} />;
}
