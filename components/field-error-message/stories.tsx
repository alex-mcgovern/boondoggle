import { FieldErrorMessage as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		message: LOREM.errorMessage(),
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/FieldErrorMessage",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
