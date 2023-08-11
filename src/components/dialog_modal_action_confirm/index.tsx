import { forwardRef, useState } from "react";

import { Box } from "../box";
import { Button } from "../button";
import { Input } from "../input";
import { confirmTextStyle } from "./styles.css";

import type { ColorOverlay } from "../../styles/color_palette.css";
import type { ButtonProps } from "../button";

export type DialogModalActionConfirmProps = {
  buttonProps?: Omit<ButtonProps, "onClick">;
  buttonText: string;
  colorOverlay?: ColorOverlay;
  confirmText: string;
  onClick?: ButtonProps["onClick"];
  promptPrefix: string;
  promptSuffix: string;
};

export const DialogModalActionConfirm = forwardRef<
  HTMLDivElement,
  DialogModalActionConfirmProps
>(
  (
    {
      buttonProps,
      buttonText,
      colorOverlay,
      confirmText,
      onClick,
      promptPrefix,
      promptSuffix,
    }: DialogModalActionConfirmProps,
    ref
  ) => {
    const [userConfirmText, setUserConfirmText] = useState("");

    return (
      <Box ref={ref}>
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
      </Box>
    );
  }
);
