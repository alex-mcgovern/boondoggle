import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtonCardGroup as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { RADIO_BUTTON_CARDS_MOCK } from "./__mocks__/radio_button_cards.mock";

const meta = {
	args: {
		errorMessage: LOREM.errorMessage(),
		id: LOREM.id(),
		items: RADIO_BUTTON_CARDS_MOCK,
		label: LOREM.label(),
		name: LOREM.name(),
	},
	component: StoryComp,
	title: "Components/V1/RadioButtonCard",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
	args: {
		invalid: true,
		items: RADIO_BUTTON_CARDS_MOCK,
	},
};

export const DefaultValue: Story = {
	args: {
		defaultValue: RADIO_BUTTON_CARDS_MOCK[0].value,
		items: RADIO_BUTTON_CARDS_MOCK,
	},
};

export const IsLabelVisibleFalse: Story = {
	args: {
		isLabelVisible: false,
		items: RADIO_BUTTON_CARDS_MOCK,
	},
};
