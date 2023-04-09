import React from "react";

import {
  FormInput,
  FormSingleSelect,
  FormSlider,
  FormTextArea,
  Form as StoryComponent,
} from ".";

import type { FormProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default { title: "Components/Form", component: StoryComponent };
const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} />;
};

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  args: {
    submitButtonText: "Submit",
    children: [
      <FormInput
        errorMessage="Enter a valid email address"
        id="email"
        label="Email address"
        name="Email address"
        placeholder="Enter your email address"
      />,
      <FormTextArea
        errorMessage="Enter a valid description"
        id="description"
        label="Description"
        name="Description"
        placeholder="Enter your description"
      />,
      <FormSingleSelect
        items={[
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        errorMessage="Select an option"
        id="description"
        label="Dropdown value"
        name="Dropdown value"
        placeholder="Select an option from the dropdown"
      />,
      <FormSlider
        errorMessage="Pick a value from the range"
        id="amount"
        label="Amount"
        name="Amount"
        placeholder="Enter an amount"
      />,
    ],
  },
};
