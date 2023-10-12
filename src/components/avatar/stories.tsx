import { Avatar as StoryComp } from ".";
import { MOCK_AVATAR } from "../../../mocks/mock_avatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/Avatar",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSrc: Story = {
	args: {
		src: MOCK_AVATAR,
	},
};

export const WithoutSrc: Story = {
	args: {
		firstName: "John",
		lastName: "Doe",
	},
};
