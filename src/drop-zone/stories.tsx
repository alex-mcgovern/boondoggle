import type { Meta, StoryObj } from "@storybook/react";
import type { FileDropItem } from "react-aria-components";

import { DropZone } from ".";
import { FileTrigger } from "../file-trigger";
import { Default as FileTriggerStory } from "../file-trigger/stories";

const meta = {
    args: {
        children: <FileTrigger {...FileTriggerStory.args} />,
        onDrop: (e) => {
            const files = e.items.filter(
                (file) => file.kind === "file",
            ) as FileDropItem[];
            const filenames = files.map((file) => file.name);
            alert(filenames.join(", "));
        },
    },
    component: DropZone,
    parameters: {
        layout: "padded",
    },
    title: "Components/DropZone",
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
