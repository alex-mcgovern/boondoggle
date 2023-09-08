/* eslint-disable no-console */
import { faGlobe } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../../icon";

import type { BoxProps } from "../../box";
import type { SelectItemShape } from "../types";

type MockSelectItemsArgs = {
    /**
     * The element type to render the select items as
     */
    as?: BoxProps["as"];

    /**
     * Whether the items are disabled
     */
    disabled?: boolean;

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
    as,
    disabled,
    onClick,
    withIcon,
}: MockSelectItemsArgs): Array<SelectItemShape> => {return [
    {
        as,
        disabled,
        label: "United Kingdom",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "uk",
    },
    {
        as,
        disabled,
        label: "France",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "fr",
    },
    {
        as,
        disabled,
        label: "Germany",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "de",
    },
    {
        as,
        disabled,
        label: "Spain",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "es",
    },
    {
        as,
        disabled,
        label: "The United Kingdom of Great Britain and Northern Ireland",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "gb",
    },
    {
        as,
        disabled,
        label: "Italy",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "it",
    },
    {
        as,
        disabled,
        label: "Portugal",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "pt",
    },
    {
        as,
        disabled,
        label: "United States",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "us",
    },
    {
        as,
        disabled,
        label: "Canada",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "ca",
    },
    {
        as,
        disabled,
        label: "Australia",
        onClick,
        slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
        value: "au",
    },
]};

export const mockSelectItemsActions = (): Array<SelectItemShape> => {return [
    {
        as: "button",
        label: "View details",
        onClick: () => {return alert("clicked")},
        value: "view_details",
    },
    {
        as: "button",
        label: "Edit",
        onClick: () => {return alert("clicked")},
        value: "edit",
    },
    {
        as: "button",
        colorOverlay: "red",
        label: "Delete",
        onClick: () => {return alert("clicked")},
        value: "delete",
    },
]};
