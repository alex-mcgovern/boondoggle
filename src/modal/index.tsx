"use client";
import * as React from "react";
import { modalCSS } from "./styles.css";

export default function Modal({
	children,
	onDismiss,
}: { children: React.ReactNode; onDismiss: () => void }) {
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
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		},
		[onDismiss],
	);

	React.useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			ref={overlay}
			// className={sprinkles({ position: "fixed" })}
			onClick={onClick}
		>
			<div ref={wrapper} className={modalCSS}>
				{children}
			</div>
		</div>
	);
}
