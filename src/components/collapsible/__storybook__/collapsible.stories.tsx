import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Collapsible as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Icon } from "../../icon";

import type { CollapsibleProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Collapsible",
  component: StoryComp,
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

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} triggerNode={TriggerNode} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: LOREM.titleXl,
  },
};
