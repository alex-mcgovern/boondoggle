import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import clsx from "clsx";

import { Icon } from "../icon";
import "./styles.css";

/**
 * An alert is a message that is displayed to the user.
 */
export function Alert({
    button_node,
    color = "blue",
    icon = faExclamationCircle,
    message,
    title,
    ...rest
}: {
    button_node?: React.ReactNode;
    color?: "amber" | "blue" | "green" | "red";
    icon?: IconDefinition;
    message?: string;
    title: string;
}) {
    return (
        <div
            className={clsx("alert", color)}
            {...rest}
        >
            <div className="flex align-center gap-2">
                <Icon icon={icon} />
                <div>
                    {title && <div className="alert-title">{title}</div>}
                    {message && <div className="alert-message">{message}</div>}
                </div>
            </div>

            {button_node && <div className="ml-auto">{button_node}</div>}
        </div>
    );
}
