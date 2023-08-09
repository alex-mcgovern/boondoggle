import { faShapes } from "@fortawesome/pro-light-svg-icons";
import { createRef, useCallback } from "react";

import { DialogModal as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../Box";
import { Button } from "../Button";
import { DialogInfoBullet } from "../DialogInfoBullet";
import { DialogModalActionConfirm } from "../DialogModalActionConfirm";
import { DialogModalAlert } from "../DialogModalAlert";
import { Icon } from "../Icon";

import type { DialogModalProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

/** ----------------------------------------------------------------------------- */

export default {
  component: StoryComp,
  title: "Components/DialogModal",
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

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * Controlled element
 * ------------------------------------------------------------------------------- */

const ControlledTemplate: StoryFn<StoryCompProps> = ({
  ...rest
}: StoryCompProps) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, [dialogRef]);

  return (
    <>
      <Box
        alignItems="center"
        background="tint_default"
        borderRadius="sm"
        display="flex"
        gap="spacing_1"
        marginBottom="spacing_2"
        padding="spacing_2"
      >
        <Box fontStyle="body_sm">Simulate programmatic control</Box>
        <Button
          appearance="secondary"
          name="open_dialog"
          onClick={openDialog}
          size="sm"
          type="button"
        >
          Open dialog
        </Button>
        <Button
          appearance="secondary"
          name="close_dialog"
          onClick={closeDialog}
          size="sm"
          type="button"
        >
          Close dialog
        </Button>
      </Box>
      <StoryComp ref={dialogRef} {...rest} />
    </>
  );
};

export const ControlledElement: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    title: LOREM.text_md,
  },
  render: ControlledTemplate,
};

/** -----------------------------------------------------------------------------
 * Width: sm
 * ------------------------------------------------------------------------------- */

export const WidthSm: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "sm",
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * Width: lg
 * ------------------------------------------------------------------------------- */

export const WidthLg: StoryObj<StoryCompProps> = {
  args: {
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With alert
 * ------------------------------------------------------------------------------- */

export const WithAlert: StoryObj<StoryCompProps> = {
  args: {
    alert: (
      <DialogModalAlert
        description="This is a description for the alert"
        title="This is an alert"
      />
    ),
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With alert
 * ------------------------------------------------------------------------------- */

export const WithAlertWithColorOverlay: StoryObj<StoryCompProps> = {
  args: {
    alert: (
      <DialogModalAlert
        colorOverlay="red"
        description="This is a description for the alert"
        title="This is an alert"
      />
    ),
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With 1 action
 * ------------------------------------------------------------------------------- */

export const With1Action: StoryObj<StoryCompProps> = {
  args: {
    actions: (
      <Button
        name="dialog_button"
        onClick={() => {
          alert("Confirmed");
        }}
      >
        Confirm
      </Button>
    ),
    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With 2 actions
 * ------------------------------------------------------------------------------- */

export const With2Actions: StoryObj<StoryCompProps> = {
  args: {
    actions: [
      <Button
        appearance="secondary"
        colorOverlay="red"
        name="cancel"
        onClick={() => {
          alert("Cancelled");
        }}
      >
        Cancel
      </Button>,
      <Button
        name="confirm"
        onClick={() => {
          alert("Confirmed");
        }}
      >
        Confirm
      </Button>,
    ],

    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With confirmation action
 * ------------------------------------------------------------------------------- */

export const WithConfirmationAction: StoryObj<StoryCompProps> = {
  args: {
    actions: (
      <DialogModalActionConfirm
        buttonText="Freeze account"
        confirmText="freeze account"
        onClick={() => {
          alert("Confirmed");
        }}
        promptPrefix="Please type"
        promptSuffix="to continue"
      />
    ),

    children: <DialogContent />,
    title: LOREM.text_md,
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With confirmation action with color overlay
 * ------------------------------------------------------------------------------- */

export const WithConfirmationActionWithColorOverlay: StoryObj<StoryCompProps> =
  {
    args: {
      actions: (
        <DialogModalActionConfirm
          buttonText="Freeze account"
          colorOverlay="red"
          confirmText="freeze account"
          onClick={() => {
            alert("Confirmed");
          }}
          promptPrefix="Please type"
          promptSuffix="to continue"
        />
      ),

      children: <DialogContent />,
      title: LOREM.text_md,
      triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    },
    render: Template,
  };
