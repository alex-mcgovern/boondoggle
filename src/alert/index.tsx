import type { ReactNode } from "react";

import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import clsx from "clsx";

import type { Color } from "../types";

import { Icon } from "../icon";
import "./styles.css";

/**
 * An alert is a message that is displayed to the user.
 */
export function Alert({
    button_node,
    color,
    icon = <Icon icon={faInfoCircle} />,
    message,
    title,
    ...rest
}: {
    button_node?: ReactNode;
    color?: Color;
    icon?: ReactNode;
    message?: string;
    title: string;
}) {
    return (
        <div
            className={clsx("alert", color)}
            {...rest}
        >
            <div className="flex align-center gap-2">
                {icon ? <div className="alert-icon">{icon}</div> : null}
                <div>
                    {title && <div className="alert-title">{title}</div>}
                    {message && <div className="alert-message">{message}</div>}
                </div>
            </div>

            {button_node && <div className="ml-auto">{button_node}</div>}
        </div>
    );
}
