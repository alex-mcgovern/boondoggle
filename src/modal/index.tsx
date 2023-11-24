"use client";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import * as React from "react";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import {
	backdropCSS,
	modalCSS,
	modalHeaderCSS,
	modalTitleCSS,
} from "./styles.css";

export function Modal({
	children,
	onDismiss,
	title,
	width = "sm",
}: {
	children: React.ReactNode;
	onDismiss: () => void;
	title: string;
	width?: "sm" | "lg";
}) {
	const overlay = React.useRef(null);
	const wrapper = React.useRef(null);

	const onClick: React.MouseEventHandler = React.useCallback(
		(e) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss, overlay, wrapper],
	);

	const onKeyDown = React.useCallback(
		(e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		},
		[onDismiss],
	);

	React.useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		<div
			ref={overlay}
			onKeyDown={onKeyDown}
			className={backdropCSS}
			onClick={onClick}
		>
			<div ref={wrapper} className={modalCSS({ width })}>
				<Box className={modalHeaderCSS}>
					<Box as="h3" className={modalTitleCSS} fontStyle="h5">
						{title}
					</Box>

					<Button
						appearance="ghost"
						aria-label="Close"
						marginLeft="auto"
						name="close"
						onClick={onDismiss}
						size="square_sm"
						slotLeft={<Icon icon={faTimes} />}
						type="button"
					/>
				</Box>
				{children}
			</div>
		</div>
	);
}
