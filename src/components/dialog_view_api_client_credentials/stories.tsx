import { createRef, useCallback } from "react";

import { DialogViewApiClientCredentials as StoryComp } from ".";
import { Box } from "../box";
import { Button } from "../button";

import type { DialogViewApiClientCredentialsProps as StoryCompProps } from ".";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  args: {
    client_id: "my-app-123",
    client_secret: "my-secret-123",
  },
  component: StoryComp,
  title: "domain.settings.app/components/DialogViewApiClientCredentials",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
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

/** ----------------------------------------------------------------------------- */

export const Default: Story = {
  render: Template,
};
