import type { Meta, StoryObj } from "@storybook/react";

import { faSquare0 } from "@fortawesome/pro-duotone-svg-icons/faSquare0";
import { faSquare1 } from "@fortawesome/pro-duotone-svg-icons/faSquare1";
import { faSquare2 } from "@fortawesome/pro-duotone-svg-icons/faSquare2";
import { faSquare3 } from "@fortawesome/pro-duotone-svg-icons/faSquare3";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { ComboBox } from "..";
import { Icon } from "../../icon";
import { Label } from "../../label";
import { Loader } from "../../loader";

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
                <ComboBox.Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <ComboBox.Button />
                </ComboBox.Group>
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
                <ComboBox.Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <ComboBox.Button />
                </ComboBox.Group>
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

export const WithJunkInGroup: Story = {
    args: {
        children: (
            <>
                <Label>Pick a fruit</Label>
                <ComboBox.Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <Icon
                        className="ml-1 mr-1"
                        color="grey"
                        icon={faShapes}
                    />
                    <Loader
                        className="ml-1 mr-1"
                        color="grey"
                    />
                    <ComboBox.Button />
                </ComboBox.Group>
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

export const WithLongList: Story = {
    args: {
        children: (
            <>
                <Label>Pick a fruit</Label>
                <ComboBox.Group>
                    <ComboBox.Input
                        placeholder="Select a fruit..."
                        unstyled
                    />
                    <Icon
                        className="ml-1 mr-1"
                        color="grey"
                        icon={faShapes}
                    />
                    <Loader
                        className="ml-1 mr-1"
                        color="grey"
                    />
                    <ComboBox.Button />
                </ComboBox.Group>
            </>
        ),
        defaultItems: Array.from({ length: 100 }).map((_, i) => ({
            id: `item-${i}`,
            name: `This is item #${i + 1}`,
        })),
        defaultSelectedKey: "apple",
        menuTrigger: "manual",
    },
};
