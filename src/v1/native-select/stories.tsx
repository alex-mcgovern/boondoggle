import { NativeSelect as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/V1/NativeSelect",
	component: StoryComp,
	args: {},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "foo",
		children: (
			<>
				<option value="foo">Foo</option>
				<option value="bar">Bar</option>
				<option value="baz">Baz</option>
			</>
		),
	},
};
