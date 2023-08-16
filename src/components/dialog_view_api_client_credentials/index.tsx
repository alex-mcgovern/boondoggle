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
          id="client_id"
          // is_copyable
          label="Client ID"
          name="client_id"
          placeholder=""
          value={client_id}
          wrapperProps={{
            marginBottom: "spacing_3",
          }}
        />
        <Input
          errorMessage=""
          id="client_secret"
          // is_copyable
          label="Client secret"
          name="client_secret"
          placeholder=""
          value={client_secret}
          wrapperProps={{
            marginBottom: "spacing_3",
          }}
        />
      </Box>
    </DialogModal>
  );
});
