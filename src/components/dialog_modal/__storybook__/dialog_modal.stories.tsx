import {
  faExclamationCircle,
  faShapes,
  faSnowflake,
} from "@fortawesome/pro-light-svg-icons";

import { DialogModal as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { variantColorOverlay } from "../../../styles/color_palette.css";
import { Box } from "../../box";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { DialogInfoBullet } from "../dialog_modal.comp";

import type { DialogModalProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

/** ----------------------------------------------------------------------------- */

export default {
  component: StoryComp,
  title: "React components/DialogModal",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

/** ----------------------------------------------------------------------------- */

const DialogContent = () => {
  return (
    <Box>
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <DialogInfoBullet
            // eslint-disable-next-line react/no-array-index-key
            key={`key-${index}`}
            slotLeft={<Icon icon={faShapes} />}
            text={LOREM.text_lg}
          />
        );
      })}
    </Box>
  );
};

/** ----------------------------------------------------------------------------- */

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    title: LOREM.text_xxs,
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
  },
  name: "default",
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const WithButton: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    dialogButtonOnClick: () => {
      alert("click");
    },
    dialogButtonText: "Freeze account",
    title: LOREM.text_xxs,
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
  },
  name: "with_button",
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const WithButtonAndConfirmText: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    dialogButtonOnClick: () => {
      alert("click");
    },
    dialogButtonText: "Freeze account",
    dialogConfirmPromptPrefix: "Please type",
    dialogConfirmPromptSuffix: "to continue",
    dialogConfirmText: "boondoggle.design",

    title: LOREM.text_xxs,
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
  },
  name: "with_button_and_confirm_text",
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const WithButtonAndConfirmTextDestructive: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    dialogButtonOnClick: () => {
      alert("click");
    },
    dialogButtonProps: {
      className: variantColorOverlay.red,
      slotLeft: <Icon icon={faSnowflake} />,
    },
    dialogButtonText: "Freeze account",
    dialogConfirmPromptPrefix: "Please type",
    dialogConfirmPromptSuffix: "to continue",
    dialogConfirmText: "freeze account",

    title: LOREM.text_xxs,
    triggerNode: <Button name="DialogModal button">Open dialog</Button>,
  },
  name: "with_button_and_confirm_text_destructive",
  render: Template,
};

/** ----------------------------------------------------------------------------- */

export const WithButtonAndAlertAndConfirmTextDestructive: StoryObj<StoryCompProps> =
  {
    args: {
      alertColor: "red",
      alertDescription: LOREM.text_md,
      alertSlotLeft: (
        <Icon color="text_low_contrast" icon={faExclamationCircle} />
      ),
      alertTitle: "This account will be frozen",
      children: <DialogContent />,
      dialogButtonOnClick: () => {
        alert("click");
      },
      dialogButtonProps: {
        className: variantColorOverlay.red,
        slotLeft: <Icon icon={faSnowflake} />,
      },
      dialogButtonText: "Freeze account",
      dialogConfirmPromptPrefix: "Please type",
      dialogConfirmPromptSuffix: "to continue",
      dialogConfirmText: "freeze account",

      title: LOREM.text_xxs,
      triggerNode: <Button name="DialogModal button">Open dialog</Button>,
    },
    name: "with_button_and_alert_and_confirm_text_destructive",
    render: Template,
  };
