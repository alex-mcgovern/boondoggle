import { faArrowRightArrowLeft } from "@fortawesome/pro-solid-svg-icons/faArrowRightArrowLeft";
import { faBank } from "@fortawesome/pro-solid-svg-icons/faBank";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../../v2/icon";

export const RADIO_BUTTON_CARDS_MOCK = [
	{
		adornment: <Icon icon={faBank} size="xl" />,
		body: LOREM.text_md,
		title: "Radio item 1",
		value: "radio_item_1",
	},
	{
		adornment: <Icon icon={faArrowRightArrowLeft} size="xl" />,
		body: LOREM.text_md,
		title: "Radio item 2",
		value: "radio_item_2",
	},
	{
		adornment: <Icon icon={faShapes} size="xl" />,
		body: LOREM.text_md,
		title: "Radio item 3",
		value: "radio_item_3",
	},
];
