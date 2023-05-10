import { Form as StoryComp } from "..";
import { mockForm } from "../__mocks__/mock_form.mock";

import type { Meta, StoryObj } from "@storybook/react";
import type { FieldErrors, FieldValues } from "react-hook-form";

const handleFormSubmissionMock = async (fieldValues: FieldValues) => {
  return alert(JSON.stringify(fieldValues));
};

const handleErrorMock = async (errors: FieldErrors) => {
  return alert(JSON.stringify(errors));
};

const meta = {
  title: "React components/Form",
  component: StoryComp,
  args: mockForm({
    handleFormSubmission: handleFormSubmissionMock,
    handleErrors: handleErrorMock,
  }),
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const WithDefaultValues: Story = {
  args: mockForm({
    handleFormSubmission: handleFormSubmissionMock,
    // handleErrors: handleErrorMock,
    withDefaultValues: true,
  }),
};
