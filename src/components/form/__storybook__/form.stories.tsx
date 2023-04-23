import { Form as StoryComp } from "..";
import { mockForm } from "../__mocks__/mock_form.mock";

import type { FormProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";
import type { FieldErrors, FieldValues } from "react-hook-form";

export default {
  title: "React components/Form",
  component: StoryComp,
};
const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

const handleFormSubmissionMock = async (fieldValues: FieldValues) => {
  return alert(JSON.stringify(fieldValues));
};

const handleErrorMock = async (errors: FieldErrors) => {
  return alert(JSON.stringify(errors));
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: mockForm({
    handleFormSubmission: handleFormSubmissionMock,
    handleErrors: handleErrorMock,
  }),
  decorators: [],
};
