import { InputDate as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		label: LOREM.label(),
		name: LOREM.name(),
		onChange: (newDate) => {
			console.info("newDate", newDate);
		},
		placeholder: LOREM.placeholder(),
	},
	component: StoryComp,
	title: "Components/InputDate",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
	args: {
		errorMessage: LOREM.errorMessage(),
		invalid: true,
	},
};
export const WithDefaultValue: Story = {
	args: {
		defaultValue: "2021-01-01",
	},
};
