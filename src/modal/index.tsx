"use client";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import * as React from "react";
import { Box } from "../box";
import { Button } from "../v2-button";
import { Icon } from "../v2-icon";
import { WithColorOverlay } from "../types";
import {
	backdropCSS,
	modalCSS,
	modalContentCSS,
	modalFooterCSS,
	modalHeaderCSS,
	modalTitleCSS,
} from "./styles.css";
import { sprinkles } from "../sprinkles/index.css";

export function Modal({
	children,
	footer,
	onDismiss,
	title,
	width = "sm",
	enableFadeIn = true,
	colorOverlay,
}: WithColorOverlay & {
	children: React.ReactNode;
	onDismiss: () => void;
	title: string;
	width?: "sm" | "lg";
	footer?: React.ReactNode;
	enableFadeIn?: boolean;
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

	React.useEffect(() => {
		const onKeyDown = (
			e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent,
		) => {
			if (e.key === "Escape") onDismiss();
		};

		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onDismiss]);

	return (
		<div
			ref={overlay}
			onKeyDown={(
				e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent,
			) => {
				if (e.key === "Escape") onDismiss();
			}}
			className={backdropCSS({ enableFadeIn, colorOverlay })}
			onClick={onClick}
		>
			<div ref={wrapper} className={modalCSS({ width, colorOverlay })}>
				<header className={modalHeaderCSS}>
					<Box as="h3" className={modalTitleCSS}>
						{title}
					</Box>

					<Button
						appearance="ghost"
						aria-label="Close"
						className={sprinkles({
							marginLeft: "auto",
						})}
						name="close"
						onPress={onDismiss}
						size="square_sm"
						type="button"
					>
						<Icon icon={faTimes} />
					</Button>
				</header>

				<div className={modalContentCSS}>{children}</div>

				{footer && <footer className={modalFooterCSS}>{footer}</footer>}
			</div>
		</div>
	);
}
