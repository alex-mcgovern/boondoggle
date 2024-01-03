import { Meta, StoryObj } from "@storybook/react";
import { Label as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

const meta = {
	title: "Components/V2/Label",
	component: StoryComp,
	args: {
		label: LOREM.text_xxs,
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "I am a label",
		name: "input_name",
	},
};
