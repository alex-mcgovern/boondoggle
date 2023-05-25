/* eslint-disable no-console */
import { faGlobe } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../../icon";

import type { DropdownItemShape } from "../select.types";

type MockSelectItemsArgs = {
  withIcon?: boolean;
};

/** -----------------------------------------------------------------------------
 * Standard select items
 * ------------------------------------------------------------------------------- */

export const mockSelectItems = ({
  withIcon,
}: MockSelectItemsArgs): Array<DropdownItemShape> => {
  return [
    {
      label: "United Kingdom",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "uk",
    },
    {
      label: "France",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "fr",
    },
    {
      label: "Germany",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "de",
    },
    {
      label: "Spain",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "es",
    },
    {
      label: "The United Kingdom of Great Britain and Northern Ireland",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "gb",
    },
    {
      label: "Italy",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "it",
    },
    {
      label: "Portugal",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "pt",
    },
    {
      label: "United States",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "us",
    },
    {
      label: "Canada",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "ca",
    },
    {
      label: "Australia",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "au",
    },
  ];
};

/** -----------------------------------------------------------------------------
 * Select items as buttons
 * ------------------------------------------------------------------------------- */

export const mockSelectItemsAsButtons = ({
  withIcon,
}: MockSelectItemsArgs): Array<DropdownItemShape> => {
  return [
    {
      as: "button",
      label: "United Kingdom",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "uk",
    },
    {
      as: "button",
      label: "France",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "fr",
    },
    {
      as: "button",
      label: "Germany",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "de",
    },
    {
      as: "button",
      label: "Spain",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "es",
    },
    {
      as: "button",
      label: "The United Kingdom of Great Britain and Northern Ireland",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "gb",
    },
    {
      as: "button",
      label: "Italy",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "it",
    },
    {
      as: "button",
      label: "Portugal",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "pt",
    },
    {
      as: "button",
      label: "United States",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "us",
    },
    {
      as: "button",
      label: "Canada",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "ca",
    },
    {
      as: "button",
      label: "Australia",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "au",
    },
  ];
};
