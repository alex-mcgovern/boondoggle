/* eslint-disable no-console */
import { faGlobe } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../../icon";

import type { SelectItemShape } from "../types";

type MockSelectItemsArgs = {
    /**
     * Whether to render the select items as buttons
     */
    onClick?: () => void;

    /**
     * Whether to include an icon in the select items
     */
    withIcon?: boolean;
};

export const mockSelectItems = ({
    onClick,
    withIcon,
}: MockSelectItemsArgs): Array<SelectItemShape> => {
    return [
        {
            as: onClick ? "button" : undefined,
            label: "United Kingdom",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "uk",
        },
        {
            as: onClick ? "button" : undefined,
            label: "France",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "fr",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Germany",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "de",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Spain",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "es",
        },
        {
            as: onClick ? "button" : undefined,
            label: "The United Kingdom of Great Britain and Northern Ireland",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "gb",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Italy",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "it",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Portugal",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "pt",
        },
        {
            as: onClick ? "button" : undefined,
            label: "United States",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "us",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Canada",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "ca",
        },
        {
            as: onClick ? "button" : undefined,
            label: "Australia",
            onClick,
            slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
            value: "au",
        },
    ];
};

export const mockSelectItemsActions = (): Array<SelectItemShape> => {
    return [
        {
            as: "button",
            label: "View details",
            onClick: () => {
                return alert("clicked");
            },
            value: "view_details",
        },
        {
            as: "button",
            label: "Edit",
            onClick: () => {
                return alert("clicked");
            },
            value: "edit",
        },
        {
            as: "button",
            colorOverlay: "red",
            label: "Delete",
            onClick: () => {
                return alert("clicked");
            },
            value: "delete",
        },
    ];
};
