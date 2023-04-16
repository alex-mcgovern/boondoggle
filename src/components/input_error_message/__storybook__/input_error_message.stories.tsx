import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";

import { InputErrorMessage as StoryComponent } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { Input } from "../../input";

import type { InputProps } from "../../input";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/InputErrorMessage",
  component: StoryComponent,
};

const InputWithError: StoryFn<InputProps> = ({ ...rest }) => {
  return <Input invalid errorMessage={LOREM.textMd} {...rest} />;
};

export const Default: StoryObj<InputProps> = {
  name: "default",
  render: InputWithError,
  args: {
    placeholder: "Example input with error",
    id: "default-error",
  },
};
export const SlotLeft: StoryObj<InputProps> = {
  name: "default",
  render: InputWithError,
  args: {
    slotLeft: <Icon icon={faTriangleCircleSquare} />,
    placeholder: "Example input with slot left & error",
    id: "slot-left-error",
  },
};
export const SlotRight: StoryObj<InputProps> = {
  name: "default",
  render: InputWithError,
  args: {
    slotRight: <Icon icon={faTriangleCircleSquare} />,
    placeholder: "Example input with slot right & error",
    id: "slot-right-error",
  },
};
