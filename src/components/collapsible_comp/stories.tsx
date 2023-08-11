import { faAngleDown } from "@fortawesome/pro-light-svg-icons";

import { Collapsible as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Icon } from "../icon_comp";

import type { CollapsibleProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Collapsible",
};

const TriggerNode = (
  <button
    className={getSprinkles({
      alignItems: "center",
      color: "text_high_contrast",
      display: "flex",
      width: "100%",
    })}
    type="button"
  >
    Open collapsible
    <Icon icon={faAngleDown} marginLeft="auto" />
  </button>
);

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} triggerNode={TriggerNode} />;
};

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: LOREM.title_xl,
  },
  render: Template,
};
