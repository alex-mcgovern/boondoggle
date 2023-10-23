"use client";

import { forwardRef, useState } from "react";
import { Box } from "../../box/Box";
import { Button } from "../../button/Button";
import { confirmTextStyle } from "./DialogModalActionConfirm.css";
import { WithColorOverlay } from "../../../src/common-types";
import { Input } from "../../input";

export const DialogModalActionConfirm = forwardRef<
	HTMLDivElement,
	WithColorOverlay & {
		/**
		 * Additional props to customise the confirm button.
		 */
		buttonProps?: Omit<React.ComponentProps<typeof Button>, "onClick">;

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
		onClick?: React.ComponentProps<typeof Button>["onClick"];

		/**
		 * The text prefixed to the confirmation prompt.
		 */
		promptPrefix: string;

		/**
		 * The text suffixed to the confirmation prompt.
		 */
		promptSuffix: string;
	}
>(
	(
		{
			buttonProps,
			buttonText,
			color,
			confirmText,
			onClick,
			promptPrefix,
			promptSuffix,
		},
		ref,
	) => {
		const [userConfirmText, setUserConfirmText] = useState("");

		return (
			<Box ref={ref}>
				<Box className={confirmTextStyle}>
					<span>{promptPrefix}</span>{" "}
					<Box as="span" fontWeight="bold">
						{confirmText}
					</Box>{" "}
					<span>{promptSuffix}</span>
				</Box>

				<Input
					color={color}
					marginBottom="space_4"
					autoComplete="off"
					name="dialog_confirm_text"
					onChange={(e) => {
						return setUserConfirmText(e.target.value);
					}}
					placeholder=""
					value={userConfirmText}
				/>

				<Button
					variant="primary"
					color={color}
					disabled={userConfirmText !== confirmText}
					name="primary_action"
					onClick={onClick}
					{...buttonProps}
				>
					{buttonText}
				</Button>
			</Box>
		);
	},
);
