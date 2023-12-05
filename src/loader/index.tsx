import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons/faSpinnerThird";
import { Icon } from "../v2-icon";
import type { IconProps } from "../v2-icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
	icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
	return <Icon data-testid="loader" icon={icon} spin {...rest} />;
}
