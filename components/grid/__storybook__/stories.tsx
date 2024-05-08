import type { Meta, StoryObj } from "@storybook/react";

import { Grid, TextField } from "../..";
import {
    Email as TextFieldEmailStory,
    Default as TextFieldStory,
} from "../../text-field/__storybook__/stories";

const meta = {
    args: {},
    component: Grid,
    title: "Components/Grid",
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TextField
                    {...TextFieldStory.args}
                    name="full_name"
                />
                <TextField
                    {...TextFieldEmailStory.args}
                    name="email_address"
                />
            </>
        ),
    },
};
