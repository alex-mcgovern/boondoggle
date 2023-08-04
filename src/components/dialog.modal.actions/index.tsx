import { useState } from "react";

import { Box } from "../core.box";
import { buttonConfirmTextStyle } from "../dialog.modal/styles.css";
import { Input } from "../field.input";
import { Button } from "../interactive.button";

import type { DialogModalProps } from "../dialog.modal";
import type { RefObject } from "react";

type DialogButtonProps = Pick<
  DialogModalProps,
  | "dialogButtonOnClick"
  | "dialogConfirmText"
  | "dialogButtonProps"
  | "dialogConfirmText"
  | "dialogButtonText"
  | "dialogConfirmPromptPrefix"
  | "dialogConfirmPromptSuffix"
> & {
  dialogRef: RefObject<HTMLDialogElement>;
};

export function DialogModalActionConfirm({
  dialogButtonOnClick,
  dialogButtonProps,
  dialogButtonText,
  dialogConfirmPromptPrefix,
  dialogConfirmPromptSuffix,
  dialogConfirmText,
  dialogRef,
}: DialogButtonProps) {
  const [userConfirmText, setUserConfirmText] = useState("");

  if (dialogConfirmText) {
    return (
      <Box borderTop="border_default" padding="spacing_2">
        <Box className={buttonConfirmTextStyle}>
          <Box as="span">{dialogConfirmPromptPrefix}</Box>{" "}
          <Box as="span" fontWeight="bold">
            {dialogConfirmText}
          </Box>{" "}
          <Box as="span">{dialogConfirmPromptSuffix}</Box>
        </Box>

        <Input
          marginBottom="spacing_2"
          name="dialog_confirm_text"
          onChange={(e) => {
            return setUserConfirmText(e.target.value);
          }}
          placeholder=""
          value={userConfirmText}
        />

        <Button
          appearance="primary"
          disabled={userConfirmText !== dialogConfirmText}
          name="primary_action"
          onClick={() => {
            dialogButtonOnClick?.();
            dialogRef.current?.close();
          }}
          width="100%"
          {...dialogButtonProps}
        >
          {dialogButtonText}
        </Button>
      </Box>
    );
  }

  return (
    <Box borderTop="border_default" padding="spacing_2">
      <Button
        appearance="primary"
        name="primary_action"
        onClick={() => {
          dialogButtonOnClick?.();
          dialogRef.current?.close();
        }}
        width="100%"
        {...dialogButtonProps}
      >
        {dialogButtonText}
      </Button>
    </Box>
  );
}
