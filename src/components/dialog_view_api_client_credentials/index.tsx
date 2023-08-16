import { forwardRef } from "react";

import { Box } from "../box";
import { Button } from "../button";
import { DialogModal } from "../dialog_modal";
import { Input } from "../input";

export type DialogViewApiClientCredentialsProps = {
  client_id?: string | null;
  client_secret?: string | null;
};

export const DialogViewApiClientCredentials = forwardRef<
  HTMLDialogElement,
  DialogViewApiClientCredentialsProps
>(({ client_id, client_secret }, ref) => {
  if (!client_id) {
    throw new Error("Unable to get Client ID");
  }
  if (!client_secret) {
    throw new Error("Unable to get Client Secret");
  }

  return (
    <DialogModal
      actions={<Button name="done">Done</Button>}
      ref={ref}
      title="Title"
      width="lg"
    >
      <Box as="p" color="text_low_contrast">
        Copy your Client ID and Client Secret and store it in a safe place.
      </Box>
      <Box as="p">
        For security reasons we will only show you your Client Secret now.
        Should you lose it, you&apos;ll have to reset it to get a new one.
      </Box>
      <Box marginY="spacing_3">
        <Input
          errorMessage=""
          hideLastpass
          id="client_id"
          isCopyable
          label="Client ID"
          labelTooltip="A unique string identifying you as a client. This is not editable."
          name="client_id"
          readonly
          value={client_id}
          wrapperProps={{
            marginBottom: "spacing_3",
          }}
        />
        <Input
          errorMessage=""
          hideLastpass
          id="client_secret"
          isCopyable
          isVisibilityToggleable
          label="Client secret"
          labelTooltip="A secret key used to authenticate you as a client."
          name="client_secret"
          readonly
          value={client_secret}
          wrapperProps={{
            marginBottom: "spacing_3",
          }}
        />
      </Box>
    </DialogModal>
  );
});
