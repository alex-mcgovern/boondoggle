"use client";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import * as React from "react";
import { WithColorOverlay } from "../../types";
import { Button } from "../../v2/button";
import { Icon } from "../../v2/icon";
import { Box } from "../box";
import { sprinkles } from "../sprinkles/index.css";
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

	const onClick: React.MouseEventHandler = (e) => {
		if (e.target === overlay.current || e.target === wrapper.current) {
			if (onDismiss) onDismiss();
		}
	};

	const onKeyDown = (
		e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent,
	) => {
		if (e.key === "Escape") {
			onDismiss();
		}
	};

	React.useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

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
