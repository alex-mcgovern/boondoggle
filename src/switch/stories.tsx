import type { Meta, StoryObj } from "@storybook/react";

import { Switch, SwitchIndicator, SwitchLabel } from ".";

const meta = {
    component: Switch,
    subcomponents: { SwitchIndicator, SwitchLabel },
    title: "Components/Switch",
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (props) => (
        <Switch {...props}>
            <SwitchLabel>Low power mode</SwitchLabel>
            <SwitchIndicator />
        </Switch>
    ),
};

export const Reversed: Story = {
    render: (props) => (
        <Switch {...props}>
            <SwitchIndicator />
            <SwitchLabel>Low power mode</SwitchLabel>
        </Switch>
    ),
};
