import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Collapsible as StoryComponent } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Icon } from "../../icon";

import type { CollapsibleProps as StoryComponentProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Collapsible",
  component: StoryComponent,
};

const TriggerNode = (
  <button
    type="button"
    className={getSprinkles({
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: "text_high_contrast",
    })}
  >
    Open collapsible
    <Icon marginLeft="auto" icon={faAngleDown} />
  </button>
);

const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} triggerNode={TriggerNode} />;
};

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  args: {
    children: LOREM.titleXl,
  },
};
