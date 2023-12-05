import type { Meta, StoryObj } from "@storybook/react";
import { Avatar as StoryComp } from ".";
import { MOCK_AVATAR } from "../../mocks/mock_avatar";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/V1/Avatar",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSrc: Story = {
	args: {
		imageSrc: MOCK_AVATAR,
	},
};

export const WithoutSrc: Story = {
	args: {
		firstName: "John",
		lastName: "Doe",
	},
};
