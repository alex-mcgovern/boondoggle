"use client";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import * as React from "react";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { WithColorOverlay } from "../types";
import {
	backdropCSS,
	modalCSS,
	modalContentCSS,
	modalFooterCSS,
	modalHeaderCSS,
	modalTitleCSS,
} from "./styles.css";

export function Modal({
	children,
	footer,
	onDismiss,
	title,
	width = "sm",
	enableFadeIn = true,
	headerActions,
	colorOverlay,
}: WithColorOverlay & {
	children: React.ReactNode;
	onDismiss: () => void;
	title: string;
	width?: "sm" | "md" | "lg";
	footer?: React.ReactNode;
	headerActions?: React.ReactNode;
	enableFadeIn?: boolean;
}) {
	const overlay = React.useRef(null);
	const wrapper = React.useRef(null);

	/**
	 * Handle clicking outside the modal
	 */
	// const onClickOutside: React.MouseEventHandler = React.useCallback(
	// 	(e) => {
	// 		if (e.target === overlay.current || e.target === wrapper.current) {
	// 			if (onDismiss) onDismiss();
	// 		}
	// 	},
	// 	[onDismiss, overlay, wrapper],
	// );

	React.useEffect(() => {
		const esc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				return onDismiss();
			}
		};

		document.addEventListener("keydown", esc);
		return () => document.removeEventListener("keydown", esc);
	}, [onDismiss]);

	return (
		<div
			ref={overlay}
			className={backdropCSS({ enableFadeIn, colorOverlay })}
			// onClick={onClickOutside}
		>
			<div ref={wrapper} className={modalCSS({ width, colorOverlay })}>
				<header className={modalHeaderCSS}>
					<Box as="h3" className={modalTitleCSS}>
						{title}
					</Box>
					<Box display="flex" gap="space_2">
						{headerActions}
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
				</header>
				<div className={modalContentCSS}>{children}</div>
				{footer && <footer className={modalFooterCSS}>{footer}</footer>}
			</div>
		</div>
	);
}
