import type { Meta, StoryObj } from "@storybook/react";

import { faSquare0 } from "@fortawesome/pro-duotone-svg-icons/faSquare0";
import { faSquare1 } from "@fortawesome/pro-duotone-svg-icons/faSquare1";
import { faSquare2 } from "@fortawesome/pro-duotone-svg-icons/faSquare2";
import { faSquare3 } from "@fortawesome/pro-duotone-svg-icons/faSquare3";

import { ComboBox } from "..";
import { Group } from "../../group";
import { Icon } from "../../icon";
import { Label } from "../../label";

const meta = {
    component: ComboBox.Root,
    title: "ComboBox",
} satisfies Meta<typeof ComboBox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Pick a fruit</Label>
                <Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <ComboBox.Button />
                </Group>
            </>
        ),
        defaultItems: [
            {
                id: "apple",
                name: "Apple",
                slotLeft: <Icon icon={faSquare0} />,
            },
            {
                id: "banana",
                name: "Banana",
                slotLeft: <Icon icon={faSquare1} />,
            },
            {
                id: "cherry",
                name: "Cherry",
                slotLeft: <Icon icon={faSquare2} />,
            },
            {
                id: "date",
                name: "Date",
                slotLeft: <Icon icon={faSquare3} />,
            },
        ],
    },
};

export const WithDefaultSelectedKey: Story = {
    args: {
        children: (
            <>
                <Label>Pick a fruit</Label>
                <Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <ComboBox.Button />
                </Group>
            </>
        ),
        defaultItems: [
            {
                id: "apple",
                name: "Apple",
                slotLeft: <Icon icon={faSquare0} />,
            },
            {
                id: "banana",
                name: "Banana",
                slotLeft: <Icon icon={faSquare1} />,
            },
            {
                id: "cherry",
                name: "Cherry",
                slotLeft: <Icon icon={faSquare2} />,
            },
            {
                id: "date",
                name: "Date",
                slotLeft: <Icon icon={faSquare3} />,
            },
        ],
        defaultSelectedKey: "apple",
    },
};
