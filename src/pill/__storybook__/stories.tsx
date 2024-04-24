import type { Meta, StoryObj } from "@storybook/react";

import { faCircleSmall } from "@fortawesome/pro-solid-svg-icons/faCircleSmall";

import { Pill } from "..";
import { Icon } from "../../icon";

const meta = {
    component: Pill,
    title: "Components/Pill",
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Pill {...args}>
            <Icon icon={faCircleSmall} />I am a pill
        </Pill>
    ),
};

export const ColorOverlayRed: Story = {
    args: { className: "red" },
    render: (args) => (
        <Pill {...args}>
            <Icon icon={faCircleSmall} />I am a pill
        </Pill>
    ),
};

export const ColorOverlayBlue: Story = {
    args: { className: "blue" },
    render: (args) => (
        <Pill {...args}>
            <Icon icon={faCircleSmall} />I am a pill
        </Pill>
    ),
};

export const ColorOverlayGreen: Story = {
    args: { className: "green" },
    render: (args) => (
        <Pill {...args}>
            <Icon icon={faCircleSmall} />I am a pill
        </Pill>
    ),
};

export const ColorOverlayAmber: Story = {
    args: { className: "amber" },
    render: (args) => (
        <Pill {...args}>
            <Icon icon={faCircleSmall} />I am a pill
        </Pill>
    ),
};
