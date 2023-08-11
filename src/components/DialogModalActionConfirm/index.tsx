import { useState } from "react";

import { Box } from "../Box";
import { Button } from "../Button";
import { Input } from "../InputComp";
import { confirmTextStyle } from "./styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { ButtonProps } from "../Button";

export type DialogModalActionConfirmProps = {
  buttonProps?: Omit<ButtonProps, "onClick">;
  buttonText: string;
  colorOverlay?: ColorOverlay;
  confirmText: string;
  onClick?: ButtonProps["onClick"];
  promptPrefix: string;
  promptSuffix: string;
};

export function DialogModalActionConfirm({
  buttonProps,
  buttonText,
  colorOverlay,
  confirmText,
  onClick,
  promptPrefix,
  promptSuffix,
}: DialogModalActionConfirmProps) {
  const [userConfirmText, setUserConfirmText] = useState("");

  return (
    <>
      <Box className={confirmTextStyle}>
        <Box as="span">{promptPrefix}</Box>{" "}
        <Box as="span" fontWeight="bold">
          {confirmText}
        </Box>{" "}
        <Box as="span">{promptSuffix}</Box>
      </Box>

      <Input
        colorOverlay={colorOverlay}
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
        colorOverlay={colorOverlay}
        disabled={userConfirmText !== confirmText}
        name="primary_action"
        onClick={onClick}
        width="100%"
        {...buttonProps}
      >
        {buttonText}
      </Button>
    </>
  );
}
