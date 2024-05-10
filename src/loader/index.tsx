import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons/faSpinnerThird";

import type { IconProps } from "../icon";

import { Icon } from "../icon";

/**
 * A loader icon to indicate that content is loading.
 */
export function Loader({ ...rest }: Omit<IconProps, "icon">) {
    return (
        <Icon
            data-testid="loader"
            icon={faSpinnerThird}
            spin
            {...rest}
        />
    );
}
