/* eslint-disable no-console */
import { faGlobe } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../../icon";

import type { DropdownItemShape } from "../select.types";

type MockSelectItemsArgs = {
  withIcon?: boolean;
};

/** ----------------------------------------------------------------------------- */

export const mockSelectItems = ({
  withIcon,
}: MockSelectItemsArgs): Array<DropdownItemShape> => {
  return [
    {
      label: "United Kingdom",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "uk",
    },
    {
      label: "France",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "fr",
    },
    {
      label: "Germany",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "de",
    },
    {
      label: "Spain",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "es",
    },
    {
      label: "The United Kingdom of Great Britain and Northern Ireland",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "gb",
    },
    {
      label: "Italy",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "it",
    },
    {
      label: "Portugal",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "pt",
    },
    {
      label: "United States",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "us",
    },
    {
      label: "Canada",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "ca",
    },
    {
      label: "Australia",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "au",
    },
  ];
};

/** ----------------------------------------------------------------------------- */

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
      type: "clickable",
      value: "uk",
    },
    {
      as: "button",
      label: "France",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "fr",
    },
    {
      as: "button",
      label: "Germany",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "de",
    },
    {
      as: "button",
      label: "Spain",

      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "es",
    },
    {
      as: "button",
      label: "The United Kingdom of Great Britain and Northern Ireland",

      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "gb",
    },
    {
      as: "button",
      label: "Italy",

      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "it",
    },
    {
      as: "button",
      label: "Portugal",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "pt",
    },
    {
      as: "button",
      label: "United States",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "us",
    },
    {
      as: "button",
      label: "Canada",

      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "ca",
    },
    {
      as: "button",
      label: "Australia",
      onClick: () => {
        return console.log("test");
      },
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      type: "clickable",
      value: "au",
    },
  ];
};
