import type { Meta, StoryObj } from "@storybook/react";

import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";

import { MenuButton } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { FlagAe } from "../../icon-flag/ae";
import { FlagDe } from "../../icon-flag/de";
import { FlagEs } from "../../icon-flag/es";
import { FlagFr } from "../../icon-flag/fr";
import { FlagOm } from "../../icon-flag/om";
import { FlagSa } from "../../icon-flag/sa";

const meta = {
    args: {
        items: [
            {
                children: [
                    {
                        id: "france",
                        name: "France",
                        slotLeft: <FlagFr />,
                    },
                    {
                        id: "germany",
                        name: "Germany",
                        slotLeft: <FlagDe />,
                    },
                    {
                        id: "spain",
                        name: "Spain",
                        slotLeft: <FlagEs />,
                    },
                ],
                id: "europe",
                name: "Europe",
            },
            {
                children: [
                    {
                        id: "uae",
                        name: "United Arab Emirates",
                        slotLeft: <FlagAe />,
                    },
                    {
                        id: "saudi_arabia",
                        name: "Saudi Arabia",
                        slotLeft: <FlagSa />,
                    },
                    {
                        id: "oman",
                        name: "Oman",
                        slotLeft: <FlagOm />,
                    },
                ],
                id: "mena",
                name: "MENA",
            },
        ],
    },
    component: MenuButton,
    render: (args) => {
        return (
            <MenuButton {...args}>
                <Button
                    appearance="secondary"
                    size="square_md"
                >
                    <Icon icon={faBars} />
                </Button>
            </MenuButton>
        );
    },
    title: "Components/MenuButton",
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectionModeSingle: Story = {
    args: {
        selectionMode: "single",
    },
};

export const SelectionModeMultiple: Story = {
    args: {
        selectionMode: "multiple",
    },
};

export const PlacementRight: Story = {
    args: {
        placement: "right",
    },
};
