import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../../icon";

import type { DropdownItemShape } from "../select.types";

type MockSelectItemsArgs = {
  withIcon?: boolean;
};

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
      label: "Italy",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "it",
    },
    {
      label: "Portugal",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
      value: "pt",
    },
  ];
};
