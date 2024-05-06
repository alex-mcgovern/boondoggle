import { FieldsGrid, TextField } from "../..";

import { Meta, StoryObj } from "@storybook/react";
import {
    Email as TextFieldEmailStory,
    Default as TextFieldStory,
} from "../../text-field/__storybook__/stories";

const meta = {
    title: "Components/FieldsGrid",
    component: FieldsGrid,
    args: {},
} satisfies Meta<typeof FieldsGrid>;

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
