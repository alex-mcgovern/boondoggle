import { jest } from "@storybook/jest";

import { Form as StoryComp } from ".";
import { mockForm } from "./__mocks__/mock_form.mock";

import type { Meta, StoryObj } from "@storybook/react";

const handleSubmit = jest.fn();

const handleErrors = jest.fn();

handleSubmit.mockImplementation(async (fieldValues: unknown) =>
    alert(`Form submitted successfully \n ${JSON.stringify(fieldValues, null, 2)}`)
);

handleErrors.mockImplementation(async (errors) =>
    alert(`Form validation error \n ${JSON.stringify(errors, null, 2)}`)
);

const meta = {
    component: StoryComp,
    title: "Components/Form",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: mockForm({
        handleErrors,
        handleSubmit,
    }),
};

export const WithDefaultValues: Story = {
    args: mockForm({
        handleErrors,
        handleSubmit,
        withDefaultValues: true,
        withOptionalFields: true,
    }),
};

export const WithOptionalFields: Story = {
    args: mockForm({
        handleErrors,
        handleSubmit,
        withOptionalFields: true,
    }),
};
