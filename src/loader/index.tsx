import type { ComponentProps } from "react";

import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons/faSpinnerThird";

import { Icon } from "../icon";

/**
 * A loader icon to indicate that content is loading.
 */
export function Loader({ ...rest }: Omit<ComponentProps<typeof Icon>, "icon">) {
	return (
		<Icon
			data-testid="loader"
			icon={faSpinnerThird}
			spin
			{...rest}
		/>
	);
}
