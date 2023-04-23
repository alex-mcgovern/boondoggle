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
      value: "uk",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
    {
      label: "France",
      value: "fr",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
    {
      label: "Germany",
      value: "de",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
    {
      label: "Spain",
      value: "es",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
    {
      label: "Italy",
      value: "it",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
    {
      label: "Portugal",
      value: "pt",
      slotLeft: withIcon ? <Icon icon={faGlobe} /> : undefined,
    },
  ];
};
