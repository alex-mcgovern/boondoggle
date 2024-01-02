import type { Meta, StoryObj } from "@storybook/react";
import { V2FieldError as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

const meta = {
	args: {
		children: LOREM.errorMessage(),
	},
	component: StoryComp,
	title: "Components/V2/FieldError",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
