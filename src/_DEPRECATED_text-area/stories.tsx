import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons/faTriangleCircleSquare";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Icon } from "../icon";
import { Loader } from "../loader";

const meta = {
	args: {
		label: {
			text: "Text area",
			tooltip: "This is a tooltip",
		},
		name: LOREM.name(),
		placeholder: LOREM.placeholder(),
	},
	component: StoryComp,
	title: "Data entry/💀  TextArea",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomisationMargin: Story = {
	args: { wrapperProps: { margin: "space_10" } },
};

export const SizeSm: Story = {
	args: { size: "sm" },
};

export const SizeMd: Story = {
	args: { size: "md" },
};

export const SizeLg: Story = {
	args: { size: "lg" },
};

export const SlotLeftIcon: Story = {
	args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};

export const SlotRightIcon: Story = {
	args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
};

export const SlotRightLoader: Story = {
	args: { slotRight: <Loader /> },
};

export const StateHover: Story = {
	parameters: { pseudo: { hover: true } },
};

export const StateFocusVisible: Story = {
	parameters: { pseudo: { focusVisible: true } },
};

export const StateDisabled: Story = {
	args: { disabled: true },
};
