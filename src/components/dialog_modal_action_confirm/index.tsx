"use client";

import { forwardRef, useState } from "react";

import { Box } from "../box/Box";
import { Button } from "../button/Button";
import { Input } from "../input";
import { confirmTextStyle } from "./styles.css";

import type { WithColorOverlay } from "../../common-types";
import type { ButtonProps } from "../button/Button";

export type DialogModalActionConfirmProps = WithColorOverlay & {
	/**
	 * Additional props to customise the confirm button.
	 */
	buttonProps?: Omit<ButtonProps, "onClick">;

	/**
	 * The text for the confirm button.
	 */
	buttonText: string;

	/**
	 * The text that the suer has to type to confirm the action.
	 */
	confirmText: string;

	/**
	 * The callback when the suer confirms the action.
	 */
	onClick?: ButtonProps["onClick"];

	/**
	 * The text prefixed to the confirmation prompt.
	 */
	promptPrefix: string;

	/**
	 * The text suffixed to the confirmation prompt.
	 */
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
		ref,
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
					marginBottom="space_4"
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
	},
);
