/* eslint-disable no-console */
import { faGlobe } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../../icon";

import type { SelectItemShape } from "../types";

type MockSelectItemsArgs = {
  withIcon?: boolean;
};

/** ----------------------------------------------------------------------------- */

export const mockSelectItems = ({
  withIcon,
}: MockSelectItemsArgs): Array<SelectItemShape> => {
  return [
    {
      label: "United Kingdom",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "uk",
    },
    {
      label: "France",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "fr",
    },
    {
      label: "Germany",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "de",
    },
    {
      label: "Spain",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "es",
    },
    {
      label: "The United Kingdom of Great Britain and Northern Ireland",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "gb",
    },
    {
      label: "Italy",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "it",
    },
    {
      label: "Portugal",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "pt",
    },
    {
      label: "United States",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "us",
    },
    {
      label: "Canada",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "ca",
    },
    {
      label: "Australia",
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "au",
    },
  ];
};

/** ----------------------------------------------------------------------------- */

export const mockSelectItemsAsButtons = ({
  withIcon,
}: MockSelectItemsArgs): Array<SelectItemShape> => {
  return [
    {
      as: "button",
      label: "United Kingdom",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "uk",
    },
    {
      as: "button",
      label: "France",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "fr",
    },
    {
      as: "button",
      label: "Germany",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "de",
    },
    {
      as: "button",
      label: "Spain",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "es",
    },
    {
      as: "button",
      label: "The United Kingdom of Great Britain and Northern Ireland",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "gb",
    },
    {
      as: "button",
      label: "Italy",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "it",
    },
    {
      as: "button",
      label: "Portugal",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "pt",
    },
    {
      as: "button",
      label: "United States",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "us",
    },
    {
      as: "button",
      label: "Canada",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "ca",
    },
    {
      as: "button",
      label: "Australia",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
      value: "au",
    },
  ];
};

/** ----------------------------------------------------------------------------- */

export const mockSelectItemsActions = (): Array<SelectItemShape> => {
  return [
    {
      as: "button",
      label: "View details",
      onClick: () => {
        return console.log("test");
      },
      value: "view_details",
    },
    {
      as: "button",
      label: "Edit",
      onClick: () => {
        return console.log("test");
      },
      value: "edit",
    },
    {
      as: "button",
      colorOverlay: "red",
      label: "Delete",
      onClick: () => {
        return console.log("test");
      },
      value: "delete",
    },
  ];
};
