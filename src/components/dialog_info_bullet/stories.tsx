import { faShapes } from "@fortawesome/pro-solid-svg-icons";

import { DialogInfoBullet as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Icon } from "../icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {
        slotLeft: [<Icon icon={faShapes} />],
        text: LOREM.text_md,
        title: LOREM.text_xxs,
    },
    component: StoryComp,
    title: "Components/DialogInfoBullet",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
