import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons/faSpinnerThird";
import { Icon } from "../__DONE__icon";
import type { IconProps } from "../__DONE__icon";

export type LoaderProps = Omit<IconProps, "icon"> & {
	icon?: IconProps["icon"];
};

export function Loader({ icon = faSpinnerThird, ...rest }: LoaderProps) {
	return <Icon data-testid="loader" icon={icon} spin {...rest} />;
}
