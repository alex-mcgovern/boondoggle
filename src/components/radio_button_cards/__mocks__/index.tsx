import {
  faArrowRightArrowLeft,
  faBank,
  faShapes,
} from "@fortawesome/pro-light-svg-icons";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";

export const RADIO_BUTTON_CARDS_MOCK = [
  {
    adornment: <Icon icon={faBank} size="xl" />,
    body: LOREM.text_md,
    title: "Item 1",
    value: "item_1",
  },
  {
    adornment: <Icon icon={faArrowRightArrowLeft} size="xl" />,
    body: LOREM.text_md,
    title: "Item 2",
    value: "item_2",
  },
  {
    adornment: <Icon icon={faShapes} size="xl" />,
    body: LOREM.text_md,
    title: "Item 3",
    value: "item_3",
  },
];
