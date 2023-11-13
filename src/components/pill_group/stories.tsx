import { PillGroup as StoryComp } from ".";
import { Pill } from "../pill";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		children: (
			<>
				<Pill as="button" name="one">
					One
				</Pill>
				<Pill as="button" name="two">
					Two
				</Pill>
				<Pill as="button" name="three">
					Three
				</Pill>
			</>
		),
	},
	component: StoryComp,
	title: "Components/PillGroup",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
