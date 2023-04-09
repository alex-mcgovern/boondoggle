import {
  faAt,
  faCircleInfo,
  faGlobe,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import {
  FormInput,
  FormSingleSelect,
  FormSlider,
  FormTextArea,
  Form as StoryComponent,
} from ".";
import { Icon } from "../icon";

import type { FormProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

const CLOSE_BUTTON_ICON = <Icon icon={faTimes} />;

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

export const WithSlotLeft: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "withSlotLeft",
  args: {
    submitButtonText: "Submit",
    children: [
      <FormInput
        errorMessage="Enter a valid email address"
        id="email"
        label="Email address"
        name="Email address"
        placeholder="Enter your email address"
        slotLeft={<Icon icon={faAt} />}
      />,
      <FormTextArea
        errorMessage="Enter a valid description"
        id="description"
        label="Description"
        name="Description"
        placeholder="Enter your description"
        slotLeft={<Icon icon={faCircleInfo} />}
      />,
      <FormSingleSelect
        items={[
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        errorMessage="Select an option"
        id="description"
        label="Country"
        name="Dropdown value"
        placeholder="Select an option from the dropdown"
        slotLeft={<Icon icon={faGlobe} />}
      />,
      <FormSlider
        errorMessage="Pick a value from the range"
        id="amount"
        label="Amount"
        name="Amount"
        placeholder="Enter an amount"
        slotLeft={CLOSE_BUTTON_ICON}
      />,
    ],
  },
};

export const WithSlotRight: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "withSlotRight",
  args: {
    submitButtonText: "Submit",
    children: [
      <FormInput
        errorMessage="Enter a valid email address"
        id="email"
        label="Email address"
        name="Email address"
        placeholder="Enter your email address"
        slotRight={<Icon icon={faAt} />}
      />,
      <FormTextArea
        errorMessage="Enter a valid description"
        id="description"
        label="Description"
        name="Description"
        placeholder="Enter your description"
        slotRight={<Icon icon={faCircleInfo} />}
      />,
      <FormSingleSelect
        items={[
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        errorMessage="Select an option"
        id="description"
        label="Country"
        name="Dropdown value"
        placeholder="Select an option from the dropdown"
        slotRight={<Icon icon={faGlobe} />}
      />,
      <FormSlider
        errorMessage="Pick a value from the range"
        id="amount"
        label="Amount"
        name="Amount"
        placeholder="Enter an amount"
        slotRight={CLOSE_BUTTON_ICON}
      />,
    ],
  },
};
